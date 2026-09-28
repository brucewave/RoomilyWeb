export const navLinks = [
  { id: "featured", title: "Dự án" },
  { id: "strengths", title: "Cam kết" },
  { id: "pricing", title: "Bảng giá" },
  { id: "contact", title: "Liên hệ" },
];

export const contact = {
  phone: "0349402518",
  phoneDisplay: "0349 402 518",
  email: "longthanh.dev@gmail.com",
  zalo: "https://zalo.me/0349402518",
};

// Dự án nổi bật đặt riêng một khối lớn phía trên danh sách dự án.
// Các chi tiết kỹ thuật lấy từ mã nguồn D:\MTHouseClone (GSAP, Lenis, Next.js → theme WordPress).
export const featured = {
  name: "MTHouse.vn",
  url: "https://www.mthouse.vn",
  // Khung hình cắt từ lúc cuộn trang thật, theo đúng thứ tự hiệu ứng.
  frames: [
    { src: "/showcase/mthouse-1.jpg", caption: "Mở đầu" },
    { src: "/showcase/mthouse-2.jpg", caption: "Cuộn phóng vào cổng vòm" },
    { src: "/showcase/mthouse-3.jpg", caption: "Công trình trượt ngang" },
    { src: "/showcase/mthouse-4.jpg", caption: "Không gian hiện theo nhịp cuộn" },
  ],
  summary:
    "Website công ty kiến trúc & nội thất MT House. Toàn bộ trang kể chuyện bằng chuyển động theo cuộn: mở đầu phóng vào cổng vòm, công trình trượt ngang, chữ và nét vẽ hiện dần theo nhịp cuộn.",
  highlights: [
    { title: "Hero phóng to theo cuộn", text: "Cuộn tới đâu, khung hình tiến sâu vào công trình tới đó." },
    { title: "Công trình trượt ngang", text: "Section được ghim lại, cuộn dọc biến thành trượt ngang qua từng dự án." },
    { title: "Chữ & nét vẽ hiện theo nhịp", text: "Tiêu đề tách dòng, bản vẽ tự vẽ ra khi cuộn tới." },
    { title: "Cuộn mượt toàn trang", text: "Cuộn có quán tính, đồng bộ với mọi hiệu ứng." },
  ],
  stack: ["WordPress", "GSAP ScrollTrigger", "Lenis", "Next.js → theme WP", "Song ngữ Việt / Anh"],
};

export const projects = [
  {
    name: "MTHouse.vn",
    url: "https://www.mthouse.vn",
    media: "mthouse",
    year: 2026,
    category: "Kiến trúc & nội thất",
    stack: ["WordPress", "Custom code", "Elementor"],
    summary:
      "Website công ty thiết kế và thi công trọn gói biệt thự, căn hộ, homestay, khách sạn, nhà hàng, văn phòng. Theme tùy biến kết hợp Elementor Pro, tập trung trình bày công trình và thu lead tư vấn.",
  },
  {
    name: "MtT Nội Thất",
    url: "https://mtt.mthouse.vn",
    media: "mtt",
    year: 2026,
    category: "Thương mại điện tử",
    stack: ["WordPress", "WooCommerce", "Custom code", "Tailwind CSS"],
    summary:
      "Cửa hàng nội thất (sofa, ghế, đèn, tủ kệ, bếp) trên theme WordPress tự code. Tìm kiếm sản phẩm tức thì, gõ không dấu vẫn ra kết quả, kèm đặt lịch tư vấn.",
  },
  {
    name: "SidStudio",
    url: "https://studio.sidcorp.co",
    media: "sidstudio",
    year: 2026,
    category: "Agency",
    stack: ["Custom code", "Tailwind CSS"],
    summary:
      "Website agency thiết kế web: giới thiệu gói landing page, website giới thiệu, website bán hàng và hệ thống riêng với bảng giá minh bạch. Front-end nhẹ, tải nhanh.",
  },
  {
    name: "Hoanglongtscl.com",
    url: "https://hoanglongtscl.com",
    media: "hoanglong",
    year: 2026,
    category: "Doanh nghiệp",
    stack: ["WordPress", "Elementor"],
    summary:
      "Website doanh nghiệp cung cấp máy cấp khí, giao diện responsive và tối ưu tốc độ tải trang cho khách hàng B2B.",
  },
  {
    name: "Finnolla.vn",
    url: "https://finnolla.vn",
    media: "finnolla",
    year: 2025,
    category: "Giáo dục",
    stack: ["WordPress", "Elementor"],
    summary:
      "Website du học nghề và định cư Phần Lan: tư vấn lộ trình, nội dung sự kiện và tối ưu chuyển đổi đăng ký tư vấn.",
  },
  {
    name: "EverestCoffees.com",
    url: "https://everestcoffees.com",
    media: "everest",
    year: 2024,
    category: "Thương mại điện tử",
    stack: ["WordPress", "WooCommerce", "Flatsome"],
    summary:
      "Website bán cà phê trực tuyến tích hợp WooCommerce, tùy biến theme Flatsome và tối ưu hiệu năng mua hàng.",
  },
  {
    name: "HDSPiano.com",
    url: "https://hdspiano.com",
    media: "hdspiano",
    category: "Thương mại điện tử & khóa học",
    stack: ["WordPress", "WooCommerce"],
    summary:
      "Bán nhạc cụ kèm khóa học piano online, tích hợp thanh toán và nền tảng phân phối khóa học.",
  },
  {
    name: "The.edu.vn",
    url: "https://the.edu.vn",
    media: "the",
    year: 2023,
    category: "Giáo dục",
    stack: ["WordPress"],
    summary:
      "Website trường mầm non: giới thiệu chương trình học, hoạt động trải nghiệm và thông tin tuyển sinh cho phụ huynh.",
  },
  {
    name: "Agarclassic.com",
    url: "https://agarclassic.com",
    media: "agarclassic",
    year: 2023,
    category: "Landing page",
    stack: ["WordPress", "Flatsome", "SEO"],
    summary:
      "Landing page sản phẩm trầm hương trên theme tùy biến, chuẩn SEO và tải nhanh.",
  },
];

// Điểm mạnh khi làm freelance, hiện ở phần "Cam kết".
export const strengths = [
  {
    title: "Ngồi tại công ty bạn",
    tag: "Đến khi xong dự án",
    text: "Cần làm việc trực tiếp? Tôi có thể đến ngồi cùng team của bạn cho tới khi dự án hoàn thành.",
  },
  {
    title: "Hẹn gặp 1:1",
    tag: "Toàn quốc",
    text: "Gặp mặt trực tiếp để trao đổi yêu cầu, dù bạn ở tỉnh thành nào.",
  },
  {
    title: "Làm đến khi ưng ý",
    tag: "Không bỏ dở",
    text: "Chỉnh sửa cho tới khi bạn ưng ý nhất thì thôi.",
  },
  {
    title: "Bảo hành 1:1",
    tag: "Trực tiếp với tôi",
    text: "Sau bàn giao, bạn làm việc thẳng với người đã làm ra website khi cần sửa lỗi hay hỗ trợ.",
  },
];

// Các dòng mô tả trong từng gói là gợi ý, chủ website chỉnh lại cho đúng thực tế.
export const pricing = [
  {
    name: "Web giới thiệu cơ bản",
    price: "3 triệu",
    from: false,
    features: [
      "Giới thiệu doanh nghiệp, dịch vụ",
      "Hiển thị tốt trên điện thoại",
      "Nút gọi điện, Zalo, form liên hệ",
    ],
  },
  {
    name: "Web giới thiệu chuyên sâu",
    price: "10 triệu",
    from: true,
    note: "Chuẩn SEO",
    features: [
      "Nhiều trang dịch vụ, blog tin tức",
      "Chuẩn SEO on-page",
      "Tối ưu tốc độ tải trang",
    ],
  },
  {
    name: "Web bán hàng",
    price: "20 triệu",
    from: true,
    features: [
      "WooCommerce: sản phẩm, giỏ hàng, đơn hàng",
      "Tìm kiếm, lọc sản phẩm",
      "Chuẩn SEO, tối ưu tốc độ",
    ],
  },
];
