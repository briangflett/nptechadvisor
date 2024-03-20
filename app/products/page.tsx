import Products from "../components/products";
import Image from "next/image";
import productImage from "../../public/canva/Products.jpg";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Page | NPTechAdvisor",
  description: "This is the Products Page for NPTechAdvisor",
  // other metadata
};

const ProductsPage = () => {
  return (
    <main>
      <section className="pb-[100px] pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <h1 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Products
              </h1>
              <div>
                <Image
                  src={productImage}
                  alt="product-image"
                  style={{ maxWidth: "100%", height: "auto" }}
                  className="mb-6"
                />
              </div>
              <p className="mx-auto mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                This page is currently under construction.
              </p>
              <p className="mx-auto mb-4 text-base !leading-relaxed text-body-color md:text-lg">
                There are a number of AI based software products that are
                currently in the exploratory stage, including
              </p>
              <div className="ml-12">
                <ol className="mx-auto mb-4 list-disc text-base !leading-relaxed text-body-color md:text-lg">
                  <li>xxx</li>
                  <li>xxx</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Products />
    </main>
  );
};

export default ProductsPage;
