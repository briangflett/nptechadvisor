import { Blog } from "../types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Technology - Why Bother?",
    paragraph:
      "Non-profits are often reluctant to invest in technology. It can be expensive, and it can be hard to know where to start. But technology can help you work more efficiently, raise more money, and communicate more effectively. It can help you make a bigger impact.",
    image: "/canva/Technology - Why Bother.jpg",
    author: {
      name: "Brian Flett",
      image: "/canva/Brian Flett.png",
      designation: "Volunteer Consultant",
    },
    tags: ["technology"],
    publishDate: "2024",
    slug: "technology-why-bother",
  },
  {
    id: 2,
    title: "Technology Assessment",
    paragraph:
      "What technology do you need? What technology do you already have? What technology do you need to get rid of? We can help you answer these questions and more. We'll work with you to create a technology plan that will help you achieve your goals.",
    image: "/canva/Technology Assessment.jpg",
    author: {
      name: "Brian Flett",
      image: "/canva/Brian Flett.png",
      designation: "Volunteer Consultant",
    },
    tags: ["technology"],
    publishDate: "2024",
    slug: "technology-assessment",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    paragraph:
      "Artificial intelligence is a technology that can help you work more efficiently, raise more money, and communicate more effectively. It can help you make a bigger impact. We can help you use artificial intelligence to achieve your goals.",
    image: "/canva/Artificial Intelligence.jpg",
    author: {
      name: "Brian Flett",
      image: "/canva/Brian Flett.png",
      designation: "Volunteer Consultant",
    },
    tags: ["AI"],
    publishDate: "2024",
    slug: "artificial-intelligence",
  },
];
export default blogData;
