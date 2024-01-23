"use server";

import { db } from "../firebase/firebaseClient";
import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
//   ssl: "allow",
// });

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export const createContact = async (
  prevState: {
    message: string;
  },
  formData: FormData,
): Promise<{ message: string }> => {
  console.log("in createContact with formData: ", formData);

  // const InterestSchema = z
  //   .object({
  //     newsletter: z.boolean(),
  //     services: z.boolean(),
  //     volunteer: z.boolean(),
  //     other: z.boolean(),
  //   })
  //   .refine((data) => Object.values(data).some((value) => value === true), {
  //     message: "At least one interest must be true",
  //   });
  // const Schema = z.object({
  //   firstName: z.string().nonempty({ message: "First Name is required" }),
  //   email: z.string().email({ message: "Invalid email address" }),
  //   interest: InterestSchema,
  //   message: z.string().optional(),
  // });
  // const parse = Schema.safeParse({ formData });

  // if (!parse.success) {
  //   return { message: "Failed to create todo" };
  // }

  // const data = parse.data;
  const data = {
    firstName: formData.get("firstName"),
    email: formData.get("email"),
    interest: {
      newsletter: formData.get("newsletter"),
      services: formData.get("services"),
      volunteer: formData.get("volunteer"),
      other: formData.get("other"),
    },
    message: formData.get("message"),
  };

  console.log("data: ", data);

  try {
    const contactsRef = collection(db, "Contacts");
    const q = query(contactsRef, where("email", "==", data.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Document found, update it
      const docRef = doc(db, "Contacts", querySnapshot.docs[0].id);
      await updateDoc(docRef, data);
      console.log(`Document updated with ID: ${docRef.id}`);
    } else {
      // No document found, add a new document
      const newDocRef = await addDoc(contactsRef, data);
      console.log(`New document added with ID: ${newDocRef.id}`);
    }
  } catch (error) {
    console.error("Error fetching document:", error);
  }

  revalidatePath("/contact");
  return Promise.resolve({
    message: "Connection made.  We will get back to you.",
  });

  // try {
  //   await sql`
  //     INSERT INTO todos (text)
  //     VALUES (${data.todo})
  //   `;

  //   revalidatePath("/");
  //   return { message: `Added todo ${data.todo}` };
  // } catch (e) {
  //   return { message: "Failed to create todo" };
  // }
};
