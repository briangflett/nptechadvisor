import SectionTitle from "../components/section-title";

const AppDevelopment = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Application Development"
          paragraph="We have experience developing interactive websites and mobile applications using the latest technologies such as Typescript, React, and Next.js. We are also starting to experiment with large language model API’s such as ChatGPT. Our preferred approach is to help you set up an open source development project for your next application, and then moderate and contribute to that project. By taking this approach you can leverage coding skills from a wide variety of developers, and avoid getting locked into a single provider. Click the get started button below to find out more."
          center
        />
      </div>
    </section>
  );
};

export default AppDevelopment;
