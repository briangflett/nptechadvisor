import SectionTitle from "./section-title";
import { VolunteerButton } from "./buttons";

const Volunteer = () => {
  return (
    <section className="relative z-10 py-8 md:py-10 lg:py-14">
      <div className="container">
        <SectionTitle
          title="Would you like to volunteer with us?​"
          paragraph="Regardless of whether you are just starting out in your career or have years of experience, we have lots of opportunities for you to contribute and learn. Whether you are a coder, a marketing person, or just interested in giving back, lets connect and look for a fit. We are committed not only to helping nonprofits, but also to ensuring that our volunteers are getting just as much out of their volunteer experience as they are providing our clients. Let us know what kinds of skills you bring and what you would like to learn."
          center
        />
      </div>
      <VolunteerButton />
    </section>
  );
};

export default Volunteer;
