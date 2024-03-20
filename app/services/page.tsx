import servicesData from "./services-data";
import StartProject from "../components/start-project";
import { SingleFeature } from "../home/features";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Services Page for NPTechAdvisor",
  // other metadata
};

const ServicesPage = () => {
  return (
    <main>
      <section className="pb-[100px] pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Services
              </h1>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                We usually start with a technology assessment to understand your
                organization&apos;s mission and its current use of technology to
                support that mission. The assessment includes a series of
                recommendations in various areas, including specific actions to
                take to implement those recommendations.
              </p>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                These are some of the services we can offer. If you are looking
                for something that is not on this list, contact us and
                we&apos;ll determine if we can help.
              </p>
              <p className="mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                Connect with us to find out more.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((feature) => (
          <SingleFeature key={feature.id} feature={feature} />
        ))}
      </div>
      <StartProject />
    </main>
  );
};

export default ServicesPage;
