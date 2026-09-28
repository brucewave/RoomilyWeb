export const navLinks = [
  { id: "skills", title: "Kỹ năng" },
  { id: "projects", title: "Dự án" },
  { id: "process", title: "Cách làm việc" },
  { id: "contact", title: "Liên hệ" },
];

export const contact = {
  phone: "0349402518",
  phoneDisplay: "0349 402 518",
  email: "longthanh.dev@gmail.com",
  zalo: "https://zalo.me/0349402518",
};

// Tên kỹ năng ở đây phải khớp với giá trị trong `stack` của từng dự án
// để phần Kỹ năng đếm được số dự án và lọc được danh sách dự án.
export const skillGroups = [
  {
    title: "WordPress & WooCommerce",
    skills: ["WordPress", "WooCommerce", "PHP", "MySQL", "Plugin development"],
  },
  {
    title: "Theme & Page builder",
    skills: ["Custom code", "Elementor", "Flatsome", "Breakdance Builder"],
  },
  {
    title: "Front-end",
    skills: ["HTML / CSS", "JavaScript", "Tailwind CSS", "Responsive"],
  },
  {
    title: "Tối ưu",
    skills: ["SEO", "Tốc độ tải trang", "Chuyển đổi (lead form)"],
  },
];

export const projects = [
  {
    name: "MTHouse.vn",
    url: "https://www.mthouse.vn",
    year: 2026,
    category: "Kiến trúc & nội thất",
    stack: ["WordPress", "Custom code", "Elementor"],
    summary:
      "Website công ty thiết kế và thi công trọn gói biệt thự, căn hộ, homestay, khách sạn, nhà hàng, văn phòng. Theme tùy biến kết hợp Elementor Pro, tập trung trình bày công trình và thu lead tư vấn.",
  },
  {
    name: "MtT Nội Thất",
    url: "https://mtt.mthouse.vn",
    year: 2026,
    category: "Thương mại điện tử",
    stack: ["WordPress", "WooCommerce", "Custom code", "Tailwind CSS"],
    summary:
      "Cửa hàng nội thất (sofa, ghế, đèn, tủ kệ, bếp) trên theme WordPress tự code. Tìm kiếm sản phẩm tức thì, gõ không dấu vẫn ra kết quả, kèm đặt lịch tư vấn.",
  },
  {
    name: "SidStudio",
    url: "https://studio.sidcorp.co",
    year: 2026,
    category: "Agency",
    stack: ["Custom code", "Tailwind CSS"],
    summary:
      "Website agency thiết kế web: giới thiệu gói landing page, website giới thiệu, website bán hàng và hệ thống riêng với bảng giá minh bạch. Front-end nhẹ, tải nhanh.",
  },
  {
    name: "Hoanglongtscl.com",
    url: "https://hoanglongtscl.com",
    year: 2026,
    category: "Doanh nghiệp",
    stack: ["WordPress", "Elementor"],
    summary:
      "Website doanh nghiệp cung cấp máy cấp khí, giao diện responsive và tối ưu tốc độ tải trang cho khách hàng B2B.",
  },
  {
    name: "Finnolla.vn",
    url: "https://finnolla.vn",
    year: 2025,
    category: "Giáo dục",
    stack: ["WordPress", "Elementor"],
    summary:
      "Website du học nghề và định cư Phần Lan: tư vấn lộ trình, nội dung sự kiện và tối ưu chuyển đổi đăng ký tư vấn.",
  },
  {
    name: "EverestCoffees.com",
    url: "https://everestcoffees.com",
    year: 2024,
    category: "Thương mại điện tử",
    stack: ["WordPress", "WooCommerce", "Flatsome"],
    summary:
      "Website bán cà phê trực tuyến tích hợp WooCommerce, tùy biến theme Flatsome và tối ưu hiệu năng mua hàng.",
  },
  {
    name: "HDSPiano.com",
    url: "https://hdspiano.com",
    category: "Thương mại điện tử & khóa học",
    stack: ["WordPress", "WooCommerce"],
    summary:
      "Bán nhạc cụ kèm khóa học piano online, tích hợp thanh toán và nền tảng phân phối khóa học.",
  },
  {
    name: "The.edu.vn",
    url: "https://the.edu.vn",
    year: 2023,
    category: "Giáo dục",
    stack: ["WordPress"],
    summary:
      "Website trường mầm non: giới thiệu chương trình học, hoạt động trải nghiệm và thông tin tuyển sinh cho phụ huynh.",
  },
  {
    name: "Agarclassic.com",
    url: "https://agarclassic.com",
    year: 2023,
    category: "Landing page",
    stack: ["WordPress", "Flatsome", "SEO"],
    summary:
      "Landing page sản phẩm trầm hương trên theme tùy biến, chuẩn SEO và tải nhanh.",
  },
];

export const process = [
  {
    title: "Phân tích yêu cầu",
    text: "Làm rõ mục tiêu website, đối tượng khách hàng và nội dung cần có trước khi dựng.",
  },
  {
    title: "Chia việc & ước lượng",
    text: "Tách nhiệm vụ theo từng hạng mục, ước lượng thời gian và cam kết tiến độ minh bạch với team.",
  },
  {
    title: "Dựng & tối ưu",
    text: "Chọn builder hoặc tự code theme theo dự án, tối ưu responsive, tốc độ và SEO.",
  },
  {
    title: "Bàn giao & hỗ trợ",
    text: "Bàn giao website dễ quản trị nội dung, theo dõi và xử lý phát sinh sau khi chạy thật.",
  },
];
