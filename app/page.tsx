import ScrollUp from "./components/scroll-up";
import Features from "./home/features";
import Hero from "./home/hero";
// import AppDevelopment from "./home/app-development";
import Products from "./components/products";
import StartProject from "./components/start-project";
import Volunteer from "./components/volunteer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NPTechAdvisor",
  description: "Home Page for NPTechAdvisor",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <StartProject />
      <Products />
      <Volunteer />
    </main>
  );
}
