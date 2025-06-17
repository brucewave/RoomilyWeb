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

import iso_friend from "../assets/iso_friend.png";
import iso_market from "../assets/iso_market.png";
import iso_move from "../assets/iso_move.png";
import iso_room from "../assets/iso_room.png";
import icon_size from "../assets/icon_size.png";
import icon_price from "../assets/icon_price.png";
import icon_furniture from "../assets/icon_furniture.png";

export const navLinks = [
  {
    id: "about",
    title: "Về Tôi",
  },
  {
    id: "projects",
    title: "Kinh Ngiệm",
  },
  {
    id: "contact",
    title: "Liên Hệ",
  },
];

const services = [
  {
    title: "Visual Effects",
    icon: iso_room,
  },
  {
    title: "Video Editing",
    icon: iso_move,
  },
  {
    title: "Motion Graphics",
    icon: iso_friend,
  },
  {
    title: "Image Editing",
    icon: iso_market,
  },
];

const technologies = [
  {
    name: "After Effects",
    icon: html,
  },
  {
    name: "Premiere Pro",
    icon: css,
  },
  {
    name: "Photoshop",
    icon: javascript,
  },
  {
    name: "CapCut",
    icon: typescript,
  },
  {
    name: "DaVinci Resolve",
    icon: reactjs,
  },
  {
    name: "Audition",
    icon: redux,
  },
];

const experiences = [
  {
    title: "Kinh nghiệm hơn 1 năm tại công ty giáo dục mầm non THÉ",
    company_name: "Motion Graphics & Visual Effects",
    icon: iso_room,
    iconBg: "#E6DEDD",
    date: "2024",
    videoUrl: "https://www.youtube.com/embed/zhD3C898WPs?si=t3g9aPIl_OToDbst",
    points: [
      "Đạt được hơn 150 học viên mới trong 6 tháng thông qua quảng cáo Facebook",
      "Được vinh danh là NHÂN VIÊN TÀI NĂNG của công ty",
      "Thiết kế và sản xuất video quảng cáo chuyên nghiệp cho trường mầm non",
      "Phát triển nội dung đa dạng cho các kênh truyền thông xã hội",
    ],
  },
  {
    title: "Xây dựng kênh YouTube từ con số 0",
    company_name: "Content Creation & Channel Growth",
    icon: iso_move,
    iconBg: "#383E56",
    date: "2024",
    videoUrl: "https://www.youtube.com/embed/DeL-PcjYoaE?si=uSV9XaktNrEWOBZY",
    points: [
      "Phát triển kênh Nhà Đất Duy Bình Đắk Lắk đạt hơn 8000 người đăng ký",
      "Tối ưu hóa SEO và thumbnail để tăng lượt xem",
      "Xây dựng chiến lược nội dung dài hạn",
      "Phân tích và tối ưu hiệu suất video",
    ],
  },
  {
    title: "Video Sự Kiện",
    company_name: "Event Coverage & Editing",
    icon: iso_friend,
    iconBg: "#E6DEDD",
    date: "2024",
    videoUrl: "https://www.youtube.com/embed/QB1MHmIXqK0?si=ekZUxFkE6P3YAqNg",
    points: [
      "Quay và dựng video sự kiện chuyên nghiệp với góc máy đa dạng",
      "Color grading nâng cao với DaVinci Resolve",
      "Xử lý âm thanh chuyên nghiệp với Adobe Audition",
      "Tối ưu hóa cho các nền tảng khác nhau",
    ],
  },
  {
    title: "Music Video",
    company_name: "Visual Storytelling",
    icon: iso_market,
    iconBg: "#383E56",
    date: "2024",
    videoUrl: "https://www.youtube.com/embed/QB1MHmIXqK0?si=PnQBOmo9w9is9C8s",
    points: [
      "Sáng tạo concept và storyboard cho video âm nhạc",
      "Áp dụng kỹ thuật visual effects nâng cao",
      "Tối ưu hóa cho từng nền tảng streaming",
      "Thu và chỉnh âm thanh chuyên nghiệp với Pro Tools",
    ],
  },
];

const testimonials = {
  videos: [
    {
      name: "Quảng Bá Kênh Nhà Đất Duy Bình Đắk Lắk",
      description: "Video quảng cáo chuyên nghiệp với motion graphics và visual effects",
      videoUrl: "https://www.youtube.com/embed/DeL-PcjYoaE?si=cQc_Cve8gQ7TTHho",
    },
    {
      name: "Quảng Bá Trường mầm non THÉ School",
      description: "Video giới thiệu trường mầm non với hiệu ứng và transition độc đáo",
      videoUrl: "https://www.youtube.com/embed/zhD3C898WPs?si=4S9mhu4S30D64EJ-",
    },
    {
      name: "Quảng cáo lớp tiền tiểu học",
      description: "Video quảng cáo lớp học với motion graphics và animation",
      videoUrl: "https://www.youtube.com/embed/ayvUM5VqM5k?si=NAm3oW-nQKzwTi8E",
    },
    {
      name: "Đại Hội Thể Thao",
      description: "Video tổng hợp sự kiện thể thao với color grading chuyên nghiệp",
      videoUrl: "https://www.youtube.com/embed/qEDAAT3-mCM?si=qOJQGxGPqOIE99yE",
    },
    {
      name: "Tốt nghiệp mầm non",
      description: "Video sự kiện tốt nghiệp với âm thanh và hình ảnh chất lượng cao",
      videoUrl: "https://www.youtube.com/embed/SJwNlredp0o?si=WyxLKZiqEht0HOEl",
    },
    {
      name: "Sự kiện tết",
      description: "Video tổng hợp sự kiện tết với hiệu ứng và transition đẹp mắt",
      videoUrl: "https://www.youtube.com/embed/jathvtva7kU?si=mzbhp3p1mhbPxmPu",
    },
    {
      name: "Podcast Phản Hồi Giáo Viên",
      description: "Video podcast với âm thanh và hình ảnh chuyên nghiệp",
      videoUrl: "https://www.youtube.com/embed/-A2nd09b-Hs?si=AnYNYAWPy36PWJea",
    },
    {
      name: "Podcast chú Duy Mạnh",
      description: "Video podcast với hiệu ứng và transition độc đáo",
      videoUrl: "https://www.youtube.com/embed/UGjDT97emSk?si=AC_ORsMV6FqpoRTb",
    },
    {
      name: "Music Video",
      description: "Video âm nhạc với visual effects và color grading chuyên nghiệp",
      videoUrl: "https://www.youtube.com/embed/QB1MHmIXqK0?si=-sE6T6VBTNDZdDL_",
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
    name: "Nhà Đất Duy Bình",
    description:
      "Video quảng cáo chuyên nghiệp cho kênh nhà đất Duy Bình Đắk Lắk. Sử dụng motion graphics và visual effects để tạo ra một video quảng cáo ấn tượng và chuyên nghiệp.",
    tags: [
      {
        icon: icon_size,
        text: "Motion Graphics",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "After Effects",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Visual Effects",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.youtube.com/embed/DeL-PcjYoaE?si=cQc_Cve8gQ7TTHho",
  },
  {
    name: "Podcast Chú Duy Mạnh",
    description:
      "Video podcast với hiệu ứng và transition độc đáo. Tạo ra một không khí chuyên nghiệp và hấp dẫn cho người xem.",
    tags: [
      {
        icon: icon_size,
        text: "Video Editing",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "Premiere Pro",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Audio Mixing",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.youtube.com/embed/UGjDT97emSk?si=AC_ORsMV6FqpoRTb",
  },
  {
    name: "School Tour",
    description:
      "Video giới thiệu trường mầm non với hiệu ứng và transition độc đáo. Tạo ra một video tour trường học chuyên nghiệp và hấp dẫn.",
    tags: [
      {
        icon: icon_size,
        text: "Motion Graphics",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "After Effects",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "Color Grading",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.youtube.com/embed/zhD3C898WPs?si=4S9mhu4S30D64EJ-",
  },
];

export { services, technologies, experiences, testimonials, projects };
