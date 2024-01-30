import type { MDXComponents } from "mdx/types";
// import Image, { ImageProps } from "next/image";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="mb-5 mt-20 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {children}
      </h1>
    ),

    p: ({ children }) => (
      <p className="mb-5 text-base font-medium leading-relaxed text-body-color">
        {children}
      </p>
    ),

    ul: ({ children }) => (
      <ul
        className="mb-5 ml-10 block list-disc pl-10 text-base font-medium leading-relaxed text-body-color"
        style={{
          display: "block",
          listStyle: "disc outside none",
          margin: "1em 0",
          padding: "0 0 0 40px",
        }}
      >
        {children}
      </ul>
    ),

    li: ({ children }) => (
      <li className="list-outside list-disc pr-[10px] text-base font-medium leading-relaxed text-body-color">
        {children}
      </li>
    ),
    // img: (props) => (
    //   <Image
    //     sizes="100vw"
    //     style={{ width: "100%", height: "auto" }}
    //     alt="MDX Image"
    //     {...(props as ImageProps)}
    //   />
    // ),
    ...components,
  };
}
