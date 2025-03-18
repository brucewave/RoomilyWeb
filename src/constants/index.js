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
    title: "Về Chúng Tôi",
  },
  {
    id: "work",
    title: "Tìm Phòng",
  },
  {
    id: "contact",
    title: "Liên Hệ",
  },
];

const services = [
  {
    title: "Tìm Trọ Thông Minh",
    icon: iso_room,
  },
  {
    title: "Dịch Vụ Chuyển Trọ",
    icon: iso_move,
  },
  {
    title: "Kết Nối Bạn Cùng Phòng",
    icon: iso_friend,
  },
  {
    title: "Tạp Hóa Online",
    icon: iso_market,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Tìm Kiếm & Đặt Phòng",
    company_name: "Roomily Search",
    icon: iso_room,
    iconBg: "#E6DEDD",
    date: "Thông Minh",
    points: [
      "Tìm kiếm phòng trọ theo vị trí, giá cả và tiện ích mong muốn",
      "Xem hình ảnh thực tế và thông tin chi tiết về phòng trọ",
      "So sánh giá và đánh giá từ người thuê trước",
      "Đặt lịch xem phòng trực tiếp hoặc qua video call",
    ],
  },
  {
    title: "Dịch Vụ Chuyển Trọ",
    company_name: "Roomily Move",
    icon: iso_move,
    iconBg: "#383E56",
    date: "Nhanh Chóng",
    points: [
      "Đội ngũ nhân viên chuyển đồ chuyên nghiệp, có bảo hiểm",
      "Xe tải các loại phù hợp với khối lượng đồ đạc",
      "Đóng gói cẩn thận, vận chuyển an toàn",
      "Giá cả minh bạch, không phụ phí phát sinh",
    ],
  },
  {
    title: "Kết Nối Bạn Cùng Phòng",
    company_name: "Roomily Connect",
    icon: iso_friend,
    iconBg: "#E6DEDD",
    date: "Thực Tế",
    points: [
      "Tìm kiếm bạn cùng phòng theo sở thích và thói quen sinh hoạt",
      "Hệ thống xác thực thông tin người dùng an toàn",
      "Trò chuyện trực tiếp để tìm hiểu trước khi quyết định",
      "Hỗ trợ tư vấn và giải quyết vấn đề 24/7",
    ],
  },
  {
    title: "Tiện Ích Tạp Hóa",
    company_name: "Roomily Store",
    icon: iso_market,
    iconBg: "#383E56",
    date: "Tiện Lợi",
    points: [
      "Đặt hàng tạp hóa trực tuyến với giá ưu đãi",
      "Giao hàng nhanh trong vòng 2 giờ",
      "Đa dạng sản phẩm từ thực phẩm đến đồ dùng sinh hoạt",
      "Tích điểm đổi quà và nhận nhiều ưu đãi hấp dẫn",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Roomily giúp tôi tìm được phòng trọ ưng ý chỉ trong vòng 2 ngày. Dịch vụ chuyển trọ cũng rất chuyên nghiệp và đáng tin cậy!",
    name: "Nguyễn Thanh Hà",
    designation: "Sinh viên",
    company: "Đại học Bách Khoa",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Tôi rất hài lòng với dịch vụ tìm bạn cùng phòng của Roomily. Nhờ đó tôi đã tìm được người bạn cùng phòng có cùng sở thích và thói quen sinh hoạt.",
    name: "Trần Minh Đức",
    designation: "Nhân viên văn phòng",
    company: "FPT Software",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Dịch vụ tạp hóa online của Roomily thực sự tiện lợi. Giao hàng nhanh, giá cả hợp lý và đặc biệt là chương trình tích điểm rất hấp dẫn!",
    name: "Phạm Thu Trang",
    designation: "Giáo viên",
    company: "Trường THPT Lê Quý Đôn",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Phòng Trọ Quận 1",
    description:
      "Phòng trọ cao cấp tại trung tâm Quận 1, gần các trường đại học và khu vực văn phòng. Đầy đủ nội thất, an ninh 24/7, có ban công rộng rãi và view thành phố.",
    tags: [
      {
        icon: icon_size,
        text: "25m²",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "4.5tr/tháng",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "full nội thất",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phòng Trọ Thủ Đức",
    description:
      "Phòng trọ sinh viên gần Đại học Bách Khoa, khu dân cư an ninh, yên tĩnh. Có gác lửng, máy lạnh, tủ lạnh và kệ bếp. Miễn phí wifi và nước sinh hoạt.",
    tags: [
      {
        icon: icon_size,
        text: "20m²",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "3tr/tháng",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "có gác",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Phòng Trọ Tân Bình",
    description:
      "Căn hộ mini full nội thất cao cấp gần sân bay, phù hợp với người đi làm. Có bảo vệ 24/7, thang máy, hầm xe và camera an ninh. Cho phép nuôi thú cưng.",
    tags: [
      {
        icon: icon_size,
        text: "30m²",
        color: "blue-text-gradient",
      },
      {
        icon: icon_price,
        text: "5tr/tháng",
        color: "green-text-gradient",
      },
      {
        icon: icon_furniture,
        text: "pet friendly",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
