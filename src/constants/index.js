import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import icon_size from "../assets/icon_size.png";
import icon_price from "../assets/icon_price.png";
import icon_furniture from "../assets/icon_furniture.png";

export const navLinks = [
  {
    id: "about",
    title: "Về Tôi",
  },
  {
    id: "videos",
    title: "Dự Án",
  },
  {
    id: "contact",
    title: "Liên Hệ",
  },
];

const services = [
  {
    title: "WordPress Development",
    icon: html,
  },
  {
    title: "WooCommerce Integration",
    icon: css,
  },
  {
    title: "Theme Customization",
    icon: javascript,
  },
  {
    title: "SEO Optimization",
    icon: reactjs,
  },
];

const technologies = [
  {
    name: "WordPress",
    icon: html,
  },
  {
    name: "WooCommerce",
    icon: css,
  },
  {
    name: "Elementor",
    icon: javascript,
  },
  {
    name: "Flatsome",
    icon: typescript,
  },
  {
    name: "PHP",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: redux,
  },
];

const experiences = [
  {
    title: "EverestCoffees.com",
    company_name: "WordPress, Flatsome",
    icon: html,
    iconBg: "#E6DEDD",
    date: "2025",
    videoUrl: "https://everestcoffees.com",
    points: [
      "E-commerce website for selling coffee products",
      "Integrated WooCommerce for online sales",
      "Optimized performance and user experience",
      "Custom theme customization with Flatsome",
    ],
  },
  {
    title: "HDSPiano.com",
    company_name: "WordPress, Flatsome",
    icon: css,
    iconBg: "#383E56",
    date: "2024",
    videoUrl: "https://hdspiano.com",
    points: [
      "E-commerce & online course website",
      "Selling musical instruments and piano lessons",
      "Custom content management system",
      "Integrated payment and course delivery",
    ],
  },
  {
    title: "Hoanglongtscl.com",
    company_name: "WordPress, Elementor",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "2024",
    videoUrl: "https://hoanglongtscl.com",
    points: [
      "Corporate website for air supply machines",
      "Developed with responsive UI design",
      "Optimized performance and loading speed",
      "Professional business presentation",
    ],
  },
  {
    title: "The.edu.vn",
    company_name: "WordPress",
    icon: reactjs,
    iconBg: "#383E56",
    date: "2023",
    videoUrl: "https://the.edu.vn",
    points: [
      "Education website for kindergarten",
      "Content-driven landing pages",
      "Lead registration optimization",
      "Educational content management",
    ],
  },
  {
    title: "Finnolla.vn",
    company_name: "WordPress, Elementor",
    icon: typescript,
    iconBg: "#E6DEDD",
    date: "2025",
    videoUrl: "https://finnolla.vn",
    points: [
      "Education website for vocational study abroad",
      "Focused on lead generation",
      "Optimized conversion rates",
      "Professional educational content",
    ],
  },
  {
    title: "Agarclassic.com",
    company_name: "WordPress, Flatsome",
    icon: tailwind,
    iconBg: "#383E56",
    date: "2023",
    videoUrl: "https://agarclassic.com",
    points: [
      "Landing page for agarwood products",
      "Built with customized theme",
      "SEO optimization and fast-loading design",
      "Professional product presentation",
    ],
  },
];

const testimonials = {
  videos: [
    {
      name: "EverestCoffees.com",
      description: "E-commerce website for coffee products with WooCommerce integration",
      videoUrl: "https://everestcoffees.com",
    },
    {
      name: "HDSPiano.com",
      description: "E-commerce & online course website for musical instruments and lessons",
      videoUrl: "https://hdspiano.com",
    },
    {
      name: "Hoanglongtscl.com",
      description: "Corporate website for air supply machines with responsive design",
      videoUrl: "https://hoanglongtscl.com",
    },
    {
      name: "The.edu.vn",
      description: "Education website for kindergarten with lead generation focus",
      videoUrl: "https://the.edu.vn",
    },
    {
      name: "Finnolla.vn",
      description: "Education website for vocational study abroad in Finland",
      videoUrl: "https://finnolla.vn",
    },
    {
      name: "Agarclassic.com",
      description: "Landing page for agarwood products with SEO optimization",
      videoUrl: "https://agarclassic.com",
    },
  ],
  images: [
    {
      name: "Hình ảnh dự án 1",
      description: "Mô tả dự án hình ảnh 1",
      image: carrent,
    },
    {
      name: "Hình ảnh dự án 2",
      description: "Mô tả dự án hình ảnh 2",
      image: jobit,
    },
    {
      name: "Hình ảnh dự án 3",
      description: "Mô tả dự án hình ảnh 3",
      image: tripguide,
    },
  ],
};

const projects = [
  {
    name: "EverestCoffees.com",
    description:
      "E-commerce website for selling coffee products, integrated WooCommerce and optimized for performance. Built with WordPress and Flatsome theme for a professional online shopping experience.",
    tags: [
      {
        icon: icon_size,
        text: "WordPress",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "WooCommerce",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Flatsome",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://everestcoffees.com",
  },
  {
    name: "HDSPiano.com",
    description:
      "E-commerce & online course website selling musical instruments and piano lessons, with custom content management. Integrated payment systems and course delivery platform.",
    tags: [
      {
        icon: icon_size,
        text: "WordPress",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "E-commerce",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Online Courses",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://hdspiano.com",
  },
  {
    name: "Hoanglongtscl.com",
    description:
      "Corporate website for air supply machines, developed with responsive UI and optimized performance. Professional business presentation with Elementor page builder.",
    tags: [
      {
        icon: icon_size,
        text: "WordPress",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "Elementor",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Corporate",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://hoanglongtscl.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
