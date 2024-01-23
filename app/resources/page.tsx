import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources Page | Free Next.js Template for Startup and SaaS",
  description: "This is Resources Page for Startup Nextjs Template",
  // other metadata
};

const ResourcesPage = () => {
  return (
    <main>
      <section className="pb-[100px] pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Resources
              </h1>
              <p className="mx-auto mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                We are currently working on a set of blog posts to share how the
                latest technology is being used across all industries, and how
                these same technologies can be applied to help your non-profit.
                We plan to provide tools to help you self assess and improve
                your own practices to complement the service offerings provided
                by our volunteers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
