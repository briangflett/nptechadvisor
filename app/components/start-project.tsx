import SectionTitle from "./section-title";
import { GetStartedButton } from "./buttons";

const StartProject = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Would you like to start a project with us?"
          paragraph="Are you a NonProfit looking to maximize your impact? Whether you are a new startup or a well established charity, we can help you to assess your current use of technology and develop a strategy for taking it to the next level. Find out more about the experience we bring to the table and lets discuss how we can help."
          center
        />
      </div>
      <GetStartedButton />
    </section>
  );
};

export default StartProject;
