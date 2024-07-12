import icons from "../assets/icons";

const SUPPORTS_CUSTOMMER = [
  { name: "Giới thiệu", link: "/about-us" },
  { name: "Liên hệ", link: "/contact" },
  { name: "Hệ thống cửa hàng", link: "/system-stores" },
  {
    name: "Hướng dẫn trả góp",
    link: "/installment-payment-instructions",
  },
  { name: "Hướng dẫn mua hàng online", link: "/shopping-guide-online" },
  { name: "Thu mua máy cũ", link: "/buying-old-machines" },
  { name: "Kiểm tra đơn hàng", link: "/check-your-order" },
  { name: "Câu hỏi thường gặp", link: "/asked-questions" },
];

const POLICIESLIST = [
  { name: "Chính sách bảo mật", link: "/privacy-policy" },
  { name: "Chính sách đổi trả", link: "/return-policy" },
  { name: "Chính sách bảo hành", link: "/warranty-policy" },
  { name: "Chính sách đặt cọc giữ hàng", link: "/warranty-deposit-policy" },
];

const INSTRUCTIONS = [
  {
    name: "Hướng dẫn bán máy cũ",
    link: "/buying-old-machines",
    icon: icons.policy_header_image_1,
  },
  {
    name: "Hướng dẫn trả góp",
    link: "/installment-payment-instructions",
    icon: icons.policy_header_image_2,
  },
  {
    name: "Hướng dẫn mua hàng online",
    link: "/shopping-guide-online",
    icon: icons.policy_header_image_3,
  },
];

export default { SUPPORTS_CUSTOMMER, POLICIESLIST, INSTRUCTIONS };
