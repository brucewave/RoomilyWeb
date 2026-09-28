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
    title: "MTHouse.vn",
    company_name: "WordPress, Elementor Pro",
    icon: web,
    iconBg: "#383E56",
    date: "2026",
    videoUrl: "https://www.mthouse.vn",
    points: [
      "Corporate website for an architecture & interior design-build firm",
      "Showcases villas, apartments, homestays, hotels, restaurants and offices",
      "Custom WordPress theme combined with Elementor Pro layouts",
      "Lead capture for design & turnkey construction consultations",
    ],
  },
  {
    title: "MtT Nội Thất (mtt.mthouse.vn)",
    company_name: "WordPress, WooCommerce",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2026",
    videoUrl: "https://mtt.mthouse.vn",
    points: [
      "Furniture e-commerce store: sofas, chairs, lighting, cabinets, kitchen",
      "Custom-coded WordPress theme styled with Tailwind CSS",
      "Accent-insensitive instant product search (\"ban an\" → \"Bàn ăn\")",
      "WooCommerce catalog with categories and consultation booking",
    ],
  },
  {
    title: "SidStudio (studio.sidcorp.co)",
    company_name: "Custom Build, Tailwind CSS",
    icon: backend,
    iconBg: "#383E56",
    date: "2026",
    videoUrl: "https://studio.sidcorp.co",
    points: [
      "Agency website for a web design & development studio",
      "Presents landing page, corporate, e-commerce and custom system packages",
      "Hand-built, lightweight front-end served via Cloudflare",
      "Transparent pricing and conversion-focused contact flow",
    ],
  },
  {
    title: "EverestCoffees.com",
    company_name: "WordPress, Flatsome",
    icon: web,
    iconBg: "#E6DEDD",
    date: "2024",
    videoUrl: "https://everestcoffees.com",
    points: [
      "E-commerce website for selling coffee products",
      "Integrated WooCommerce for online sales",
      "Optimized performance and user experience",
      "Custom theme customization with Flatsome",
    ],
  },
  {
    title: "Hoanglongtscl.com",
    company_name: "WordPress, Elementor",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "2026",
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
    icon: mobile,
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
    icon: creator,
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
    icon: docker,
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
      name: "MTHouse.vn",
      description: "Architecture & interior design-build firm website built with WordPress and Elementor Pro",
      videoUrl: "https://www.mthouse.vn",
    },
    {
      name: "MtT Nội Thất",
      description: "Furniture e-commerce store with a custom WordPress theme and WooCommerce",
      videoUrl: "https://mtt.mthouse.vn",
    },
    {
      name: "SidStudio",
      description: "Web design agency website with service packages and transparent pricing",
      videoUrl: "https://studio.sidcorp.co",
    },
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
    name: "MTHouse.vn",
    description:
      "Website công ty kiến trúc & nội thất MT House, giới thiệu dịch vụ thiết kế và thi công trọn gói biệt thự, căn hộ, homestay, khách sạn, nhà hàng, văn phòng. Theme WordPress tùy biến kết hợp Elementor Pro.",
    tags: [
      {
        icon: icon_size,
        text: "WordPress",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "Elementor Pro",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Interior Design",
        color: "pink-text-gradient",
      },
    ],
    image: web,
    source_code_link: "https://www.mthouse.vn",
  },
  {
    name: "MtT Nội Thất",
    description:
      "Website bán hàng nội thất (sofa, ghế, đèn, tủ kệ, bếp...) với theme WordPress tự code dùng Tailwind CSS, tích hợp WooCommerce và tìm kiếm sản phẩm tức thì hỗ trợ gõ không dấu.",
    tags: [
      {
        icon: icon_size,
        text: "Custom Theme",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "WooCommerce",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: creator,
    source_code_link: "https://mtt.mthouse.vn",
  },
  {
    name: "SidStudio",
    description:
      "Website agency thiết kế web SidStudio: giới thiệu các gói landing page, website giới thiệu, website bán hàng và hệ thống riêng, trọn gói A–Z với bảng giá minh bạch. Front-end nhẹ, tối ưu tốc độ.",
    tags: [
      {
        icon: icon_size,
        text: "Custom Build",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Agency",
        color: "pink-text-gradient",
      },
    ],
    image: backend,
    source_code_link: "https://studio.sidcorp.co",
  },
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
    name: "Finnolla.vn",
    description:
      "Website du học và định cư Phần Lan, tập trung tư vấn lộ trình học tập, nội dung sự kiện và chuyển đổi đăng ký tư vấn cho khách hàng.",
    tags: [
      {
        icon: icon_size,
        text: "WordPress",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "Education",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Landing Page",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://finnolla.vn",
  },
  {
    name: "The.edu.vn",
    description:
      "Website giáo dục cho mầm non, tập trung giới thiệu chương trình học, hoạt động trải nghiệm và thông tin tư vấn tuyển sinh cho phụ huynh.",
    tags: [
      {
        icon: icon_size,
        text: "WordPress",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "Education",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Landing Page",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://the.edu.vn",
  },
];

export { services, technologies, experiences, testimonials, projects };
