import ContactForm from "./contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page for NPTechAdvisor",
  // other metadata
};

const ContactPage = () => {
  return (
    <main>
      <section className="pb-[100px] pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Contact
              </h1>
              <div></div>
              <p className="mx-auto mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                Whether you just want to get a periodic newsletter or you would
                like to find out more about our services or volunteering, please
                fill in the form below and let&apos;s connect!
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  );
};

export default ContactPage;
