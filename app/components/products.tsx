import SectionTitle from "./section-title";
import { ProductButton } from "./buttons";

const Products = () => {
  return (
    <section className="relative z-10 py-8 md:py-10 lg:py-14">
      <div className="container">
        <SectionTitle
          title="Learn about our products​"
          paragraph="We are developing a number of AI based software products to help non-profits.  Would you like to help us identify products to build or determine what those products should do?"
          center
        />
      </div>
      <ProductButton />
    </section>
  );
};

export default Products;
