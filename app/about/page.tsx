import Volunteer from "../components/volunteer";
import Image from "next/image";
import Link from "next/link";
import brian from "@/public/wordpress/Brian-in-Office-small-1024x534.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Page for NPTechAdvisor",
  // other metadata
};

const AboutPage = () => {
  return (
    <main>
      <section className="pb-[100px] pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                About
              </h1>
              <div>
                <Image
                  src={brian}
                  alt="about-brian"
                  style={{ maxWidth: "100%", height: "auto" }}
                  // width={768}
                  // height={400}
                  className="mb-6"
                />
              </div>
              <p className="mx-auto mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                Hi. My name is Brian, and I am the founder of NP Tech Advisor. I
                have spent my entire career helping for-profit businesses
                leverage technology to improve their internal productivity and
                establish closer relationships with customers, partners and
                staff. I did some volunteer work as my schedule allowed, but
                only recently have I been able to devote most of my time to
                volunteering. In my search for meaningful volunteer work I found
                many non-profits with missions that inspired me, but their use
                of technology seemed somewhat behind the for-profit sector. I
                also came across many colleagues in the tech sector at various
                stages of their careers who were looking to volunteer some time
                to improve the world in some way, but could not find volunteer
                positions that leveraged their existing skills and helped them
                develop new ones. To fill this gap I founded NP Tech Advisor.
              </p>
              <p className="mb-4 text-base font-medium leading-relaxed text-body-color">
                If you work with a non-profit, please check out our Services
                menu option above.{" "}
              </p>
              <p className="text-base font-medium leading-relaxed text-body-color">
                If you work in the tech sector, please check out the Volunteer
                link below.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Volunteer />
    </main>
  );
};

export default AboutPage;
