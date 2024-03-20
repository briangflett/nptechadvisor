"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createContact } from "./actions";
import { useSearchParams } from "next/navigation";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      Connect
    </button>
  );
}

export default function CaontactForm() {
  const [state, formAction] = useFormState(createContact, initialState);
  const SearchParams = useSearchParams();
  const interest = SearchParams.get("interest");

  return (
    // <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
    <div className="container">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
          <div
            className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s
              "
          >
            <form action={formAction}>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label
                      htmlFor="firstName"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="e.g. John"
                      className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. john@doe.com"
                      className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <>
                      <label
                        htmlFor="interest"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Area of Interest
                      </label>
                      <div>
                        <input
                          type="checkbox"
                          id="newsletter"
                          name="newsletter"
                          defaultChecked={interest === "Newsletter"}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label
                          htmlFor="newsletter"
                          className="ml-2 font-medium text-blue-400"
                        >
                          Newsletter
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="services"
                          name="services"
                          defaultChecked={interest === "Services"}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label
                          htmlFor="services"
                          className="ml-2 font-medium text-blue-400"
                        >
                          Services
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="volunteer"
                          name="volunteer"
                          defaultChecked={interest === "Volunteer"}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label
                          htmlFor="volunteer"
                          className="ml-2 font-medium text-blue-400"
                        >
                          Volunteer
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="products"
                          name="products"
                          defaultChecked={interest === "Products"}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label
                          htmlFor="products"
                          className="ml-2 font-medium text-blue-400"
                        >
                          Products
                        </label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="other"
                          name="other"
                          defaultChecked={interest === "Other"}
                          className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label
                          htmlFor="other"
                          className="ml-2 font-medium text-blue-400"
                        >
                          Other
                        </label>
                      </div>
                      <span className="text-sm text-gray-500">
                        If you are a non-profit, select Services and let&apos;s
                        discuss the services we can offer. If you are interested
                        in volunteering with us, select Volunteer and lets talk
                        about how you can contribute. Otherwise, select
                        Newsletter and we&apos;ll send you periodic email
                        updates about our latest projects, services, and
                        volunteer opportunities.
                      </span>
                    </>
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Message (optional)
                    </label>
                    <textarea
                      rows={6}
                      id="message"
                      name="message"
                      placeholder="Enter your message..."
                      className="mb-4 w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                    />
                  </div>
                </div>
                <SubmitButton />
                <div className="w-full px-4">
                  <div className="mb-6">
                    <p
                      aria-live="polite"
                      className="text-red-600"
                      role="status"
                    >
                      {state?.message}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </section>
  );
}
