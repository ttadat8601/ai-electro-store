export const products = [
  {
    id: "tekpc-gaming-g4",
    name: "TEKPC GAMING G4 (Core i5 13400F | 32GB RAM | RTX 4060 8GB | SSD 1TB)",
    category: "gaming-pc",
    brand: "TEKPC",
    price: 21990000,
    originalPrice: 24500000,
    rating: 4.9,
    reviewsCount: 142,
    image: "./products/pc-g4.jpg",
    badge: "Bán chạy nhất",
    inStock: true,
    warranty: "Bảo hành 36 tháng chính hãng",
    specs: {
      cpu: "Intel Core i5 13400F (10 nhân 16 luồng, Turbo 4.6GHz)",
      mainboard: "B760M Gaming Plus WiFi D4",
      ram: "32GB (2x16GB) DDR4 3200MHz Kingston Fury Beast RGB",
      vga: "NVIDIA GeForce RTX 4060 8GB GDDR6 (Dual Fan OC)",
      storage: "SSD 1TB M.2 PCIe Gen4 NVMe (Tốc độ đọc 5000MB/s)",
      psu: "Nguồn 650W chuẩn 80 Plus Bronze công suất thực",
      cooling: "Tản nhiệt khí DeepCool AG400 ARGB LED",
      case: "Case Gaming Kính Cường Lực kèm 4 Fan LED ARGB Sync Hub"
    },
    shortDesc: "Máy bộ Gaming hiệu năng cao cân mượt mọi tựa game AAA ở độ phân giải 2K và xử lý đồ họa Adobe/Blender chuyên nghiệp.",
    bestFor: "Game thủ eSports/AAA, làm đồ họa 3D, dựng video 4K & lập trình",
    gameBenchmarks: [
      { game: "Cyberpunk 2077 (High/DLSS)", fps: "85 FPS" },
      { game: "GTA V (Very High 2K)", fps: "140 FPS" },
      { game: "Valorant (Competitive)", fps: "360 FPS" },
      { game: "Black Myth: Wukong (High)", fps: "75 FPS" }
    ],
    priceHistory: [
      { date: "01/10", price: 24500000 },
      { date: "10/10", price: 23500000 },
      { date: "20/10", price: 22800000 },
      { date: "Hiện tại", price: 21990000 },
      { date: "Dự báo 11/11", price: 21200000, predicted: true }
    ],
    aiAdvice: "Mức giá hiện tại đã giảm sâu 10% so với giá mở bán. Tặng kèm gói quà lót chuột size lớn + cài sẵn Windows 11 bản quyền.",
    sentiment: {
      score: 98,
      summary: "98% khách hàng khen ngợi máy chạy cực kỳ mát mẻ, đèn LED RGB đồng bộ đẹp mắt, chơi game ổn định không drop FPS.",
      pros: ["Cấu hình cân bằng tối ưu, không nghẽn cổ chai", "Quạt chạy êm ái, nhiệt độ CPU dưới 68 độ", "Bảo hành 3 năm tận nơi"],
      cons: ["Thùng máy kính khá nặng (khoảng 8kg)"]
    }
  },
  {
    id: "tekpc-snow-white-mod3",
    name: "Custom Water Cooling PC Snow White MOD3 (Core i7 12700K | RTX 3080 10GB)",
    category: "water-cooling",
    brand: "TEKPC Modding",
    price: 45900000,
    originalPrice: 52000000,
    rating: 5.0,
    reviewsCount: 68,
    image: "./products/pc-water-cooling.jpg",
    badge: "Độc bản cao cấp",
    inStock: true,
    warranty: "Bảo hành 36 tháng (bảo trì nước miễn phí 1 năm)",
    specs: {
      cpu: "Intel Core i7 12700K (12 nhân 20 luồng, Turbo 5.0GHz)",
      mainboard: "Z690 Steel Legend WiFi D4 White Edition",
      ram: "32GB (2x16GB) Corsair Dominator Platinum RGB White",
      vga: "NVIDIA GeForce RTX 3080 10GB GDDR6X White Tri-Fan",
      storage: "SSD 1TB Samsung 980 Pro Gen4 NVMe (7000MB/s)",
      psu: "Corsair RM850 850W White 80 Plus Gold Full Modular",
      cooling: "Hệ thống tản nhiệt nước Custom Water Cooling ống cứng Hard-Tube trong suốt",
      case: "Case Bàn máy mở MOD3 Mech White Siêu Cấp"
    },
    shortDesc: "Siêu phẩm tản nhiệt nước Custom độc quyền, hiệu suất làm mát đỉnh cao và thẩm mỹ góc làm việc sang trọng.",
    bestFor: "Dân đam mê Show PC, Streamer chuyên nghiệp, Render 3D kiến trúc",
    gameBenchmarks: [
      { game: "Cyberpunk 2077 (Ultra RayTracing)", fps: "95 FPS" },
      { game: "Forza Horizon 5 (Extreme 4K)", fps: "110 FPS" },
      { game: "CS2 (Competitive 2K)", fps: "400 FPS" }
    ],
    priceHistory: [
      { date: "01/10", price: 52000000 },
      { date: "15/10", price: 48500000 },
      { date: "Hiện tại", price: 45900000 },
      { date: "Dự báo 11/11", price: 44500000, predicted: true }
    ],
    aiAdvice: "Dòng máy custom thủ công đòi hỏi tay nghề kỹ thuật cao. Tặng kèm gói lắp đặt tận nhà và bảo dưỡng tản nước 12 tháng.",
    sentiment: {
      score: 100,
      summary: "Đạt điểm tuyệt đối về độ hoàn thiện thẩm mỹ và khả năng giải nhiệt khi chạy render liên tục nhiều giờ.",
      pros: ["Nhiệt độ cực thấp kể cả khi ép xung", "Độ hoàn thiện tinh xảo từng khúc uốn ống nước", "Nguồn Gold chuẩn 850W cao cấp"],
      cons: ["Cần định kỳ bảo dưỡng sau mỗi 12 tháng"]
    }
  },
  {
    id: "tekpc-gaming-g3",
    name: "TEKPC GAMING G3 (Core i5 12400F | 16GB RAM | RTX 3060 12GB | SSD 512GB)",
    category: "gaming-pc",
    brand: "TEKPC",
    price: 15890000,
    originalPrice: 17900000,
    rating: 4.8,
    reviewsCount: 215,
    image: "./products/pc-g3.jpg",
    badge: "Quốc dân 2026",
    inStock: true,
    warranty: "Bảo hành 36 tháng chính hãng",
    specs: {
      cpu: "Intel Core i5 12400F (6 nhân 12 luồng, Turbo 4.4GHz)",
      mainboard: "H610M Gaming DDR4",
      ram: "16GB (2x8GB) DDR4 3200MHz T-Force Vulcan Z",
      vga: "NVIDIA GeForce RTX 3060 12GB GDDR6 (Bản 12GB VRAM)",
      storage: "SSD 512GB M.2 NVMe PCIe 3.0",
      psu: "Nguồn 600W 80 Plus chuẩn công suất thực",
      cooling: "Tản nhiệt khí tháp LED RGB",
      case: "Case Gaming Xigmatek 3 Fan LED trước"
    },
    shortDesc: "Cấu hình quốc dân bán chạy số 1 phân khúc tầm trung, card đồ họa 12GB VRAM thoải mái làm đồ họa và chiến mượt game Online/Offline.",
    bestFor: "Sinh viên, game thủ phổ thông, làm video ngắn TikTok/YouTube",
    gameBenchmarks: [
      { game: "GTA V (High Settings)", fps: "135 FPS" },
      { game: "PUBG PC (Ultra Settings)", fps: "115 FPS" },
      { game: "League of Legends", fps: "240 FPS" }
    ],
    priceHistory: [
      { date: "01/10", price: 17900000 },
      { date: "15/10", price: 16500000 },
      { date: "Hiện tại", price: 15890000 },
      { date: "Dự báo 11/11", price: 15490000, predicted: true }
    ],
    aiAdvice: "Đây là mẫu máy có tỷ lệ Hiệu năng / Giá tiền (P/P) tốt nhất năm 2026. Rất khuyến nghị mua ngay.",
    sentiment: {
      score: 96,
      summary: "96% khách hàng đánh giá máy hoạt động êm ái, VRAM 12GB giúp render CapCut và Premiere không bị tràn bộ nhớ.",
      pros: ["VGA 12GB VRAM dung lượng lớn", "Giá thành cực kỳ hợp lý", "Linh kiện dễ nâng cấp về sau"],
      cons: ["Bo mạch chủ H610 chỉ có 2 khe cắm RAM"]
    }
  },
  {
    id: "tekpc-gaming-g1",
    name: "TEKPC GAMING G1 (Core i3 12100F | 16GB RAM | GTX 1650 4GB | SSD 256GB)",
    category: "gaming-pc",
    brand: "TEKPC",
    price: 8990000,
    originalPrice: 10500000,
    rating: 4.7,
    reviewsCount: 180,
    image: "./products/pc-g1.jpg",
    badge: "Giá rẻ tiết kiệm",
    inStock: true,
    warranty: "Bảo hành 36 tháng chính hãng",
    specs: {
      cpu: "Intel Core i3 12100F (4 nhân 8 luồng thế hệ 12 khỏe khoắn)",
      mainboard: "H610M-K DDR4",
      ram: "16GB (2x8GB) DDR4 3200MHz",
      vga: "NVIDIA GeForce GTX 1650 4GB GDDR6",
      storage: "SSD 256GB M.2 NVMe",
      psu: "Nguồn 500W công suất thực",
      cooling: "Tản khí nhôm giải nhiệt êm",
      case: "Case Mini Tower thoáng khí"
    },
    shortDesc: "Bộ máy tính chơi game giá rẻ phù hợp cho học sinh, sinh viên chơi mượt Liên Minh, FO4, Valorant và làm bài tập văn phòng.",
    bestFor: "Học tập, văn phòng, chơi game eSports nhẹ nhàng",
    gameBenchmarks: [
      { game: "League of Legends", fps: "180 FPS" },
      { game: "FIFA Online 4", fps: "120 FPS" },
      { game: "CS2 (Low/Med)", fps: "110 FPS" }
    ],
    priceHistory: [
      { date: "01/10", price: 10500000 },
      { date: "15/10", price: 9500000 },
      { date: "Hiện tại", price: 8990000 },
      { date: "Dự báo 11/11", price: 8790000, predicted: true }
    ],
    aiAdvice: "Mức giá dưới 9 triệu đồng nguyên bộ kèm bảo hành 3 năm. Lựa chọn khởi đầu hoàn hảo.",
    sentiment: {
      score: 94,
      summary: "Khách hàng hài lòng vì giá thành rẻ nhưng hiệu năng i3 Gen 12 rất khỏe, mở cùng lúc 30 tab Chrome không lag.",
      pros: ["Giá rất dễ tiếp cận", "Tiêu thụ ít điện năng", "Khởi động Windows 5 giây"],
      cons: ["SSD 256GB cần gắn thêm HDD nếu lưu nhiều game"]
    }
  },
  {
    id: "tekpc-office-pro",
    name: "TEKPC Văn Phòng PRO (Core i5 12400 | 16GB RAM | Intel UHD 730 | SSD 512GB)",
    category: "office-pc",
    brand: "TEKPC Office",
    price: 9490000,
    originalPrice: 11000000,
    rating: 4.8,
    reviewsCount: 95,
    image: "./products/pc-office.jpg",
    badge: "Văn phòng cao cấp",
    inStock: true,
    warranty: "Bảo hành 36 tháng tận nơi doanh nghiệp",
    specs: {
      cpu: "Intel Core i5 12400 tích hợp đồ họa Intel UHD 730",
      mainboard: "B660M Pro Series",
      ram: "16GB DDR4 3200MHz",
      vga: "Đồ họa tích hợp Intel UHD Graphics 730",
      storage: "SSD 512GB M.2 PCIe tốc độ cao",
      psu: "Nguồn văn phòng 450W chuẩn 80 Plus",
      cooling: "Tản khí tĩnh âm không gây ồn",
      case: "Case văn phòng tối giản màu đen sang trọng"
    },
    shortDesc: "Máy tính bàn chuyên dụng văn phòng, kế toán, xử lý dữ liệu lớn Excel hàng triệu dòng mượt mà không treo máy.",
    bestFor: "Doanh nghiệp, kế toán, văn phòng công ty, học online",
    gameBenchmarks: [
      { game: "Excel 1.000.000 dòng", fps: "Mở tức thì" },
      { game: "Photoshop 2D", fps: "Mượt mà" },
      { game: "Họp Zoom / Meet đa luồng", fps: "Ổn định 100%" }
    ],
    priceHistory: [
      { date: "01/10", price: 11000000 },
      { date: "15/10", price: 9990000 },
      { date: "Hiện tại", price: 9490000 },
      { date: "Dự báo 11/11", price: 9190000, predicted: true }
    ],
    aiAdvice: "Đang có chính sách chiết khấu 5% khi mua từ 3 bộ trở lên cho công ty, xuất đầy đủ hóa đơn VAT.",
    sentiment: {
      score: 97,
      summary: "Các phòng kế toán và văn phòng đánh giá cao vì máy chạy cực kỳ êm ru, bền bỉ và khởi động tức thì.",
      pros: ["Hoạt động êm ái không tiếng động", "Độ bền linh kiện cao", "Hỗ trợ xuất 2 màn hình cùng lúc"],
      cons: ["Không có card đồ họa rời để chơi game nặng"]
    }
  },
  {
    id: "lcd-gaming-27-2k",
    name: "Màn Hình Gaming TEKPC Fast-IPS 27 Inch 2K 165Hz (1ms | sRGB 100% | HDR)",
    category: "monitor",
    brand: "TEKPC Display",
    price: 5290000,
    originalPrice: 6200000,
    rating: 4.9,
    reviewsCount: 130,
    image: "./products/lcd-27.jpg",
    badge: "Chuẩn đồ họa & Game",
    inStock: true,
    warranty: "Bảo hành 24 tháng 1 đổi 1",
    specs: {
      cpu: "Tấm nền Fast-IPS cao cấp",
      mainboard: "Độ phân giải 2K QHD (2560 x 1440)",
      ram: "Tần số quét 165Hz mượt mà",
      vga: "Thời gian phản hồi 1ms MPRT",
      storage: "Độ phủ màu 100% sRGB / 95% DCI-P3",
      psu: "Cổng kết nối 2x HDMI 2.0, 1x DisplayPort 1.4, Audio Out",
      cooling: "Hỗ trợ AMD FreeSync & NVIDIA G-Sync Compatible",
      case: "Chân đế công thái học nâng hạ xoay dọc 90 độ"
    },
    shortDesc: "Màn hình 27 inch sắc nét chuẩn 2K vừa đáp ứng tiêu chuẩn làm việc đồ họa màu sắc trung thực, vừa chơi game mượt mà 165Hz.",
    bestFor: "Dân đồ họa màu sắc, game thủ FPS, streamer",
    gameBenchmarks: [
      { game: "Tần số quét", fps: "165Hz Real" },
      { game: "Độ trễ", fps: "1ms Siêu nhanh" },
      { game: "Chuẩn màu", fps: "100% sRGB" }
    ],
    priceHistory: [
      { date: "01/10", price: 6200000 },
      { date: "15/10", price: 5690000 },
      { date: "Hiện tại", price: 5290000 },
      { date: "Dự báo 11/11", price: 4990000, predicted: true }
    ],
    aiAdvice: "Màn hình 2K 165Hz dưới 5.5 triệu là mức giá hời, tặng kèm dây cáp DisplayPort xịn chống nhiễu.",
    sentiment: {
      score: 98,
      summary: "Màu sắc rất trong và sâu, không hở sáng góc, chân đế nâng hạ xoay ngang dọc tiện lợi.",
      pros: ["Tấm nền Fast-IPS góc nhìn rộng", "Độ phân giải 2K cực nét", "Chân đế xoay 90 độ linh hoạt"],
      cons: ["Loa tích hợp âm lượng ở mức trung bình"]
    }
  },
  {
    id: "cyberkey-master-75",
    name: "Bàn Phím Cơ Không Dây CyberKey 75% Smart OLED (Gasket Mount | 3 Mode)",
    category: "accessories",
    brand: "CyberTech",
    price: 2890000,
    originalPrice: 3400000,
    rating: 4.9,
    reviewsCount: 164,
    image: "./products/keyboard-75.jpg",
    badge: "Màn hình OLED",
    inStock: true,
    warranty: "Bảo hành 12 tháng chính hãng",
    specs: {
      cpu: "Màn hình màu OLED thông minh hiển thị nhiệt độ PC",
      mainboard: "Kết nối 3 chế độ: Type-C, Bluetooth 5.2, Wireless 2.4Ghz",
      ram: "Switch từ tính Magnetic Hall Effect gõ cực êm",
      vga: "Cấu trúc Gasket Mount đệm tiêu âm PORON 5 lớp",
      storage: "Keycap PBT Double-shot chống mờ",
      psu: "Pin Lithium 4000mAh dùng 200 giờ liên tục",
      cooling: "Hỗ trợ Hot-swap 5-pin thay switch dễ dàng",
      case: "Khung nhôm CNC Anodized chống xước"
    },
    shortDesc: "Bàn phím cơ gõ êm ái tiếng trầm ấm (thock) không ồn, màn hình OLED tùy biến ảnh GIF và hiển thị thông số CPU/GPU thời gian thực.",
    bestFor: "Dân lập trình, văn phòng gõ máy cả ngày, góc setup hiện đại",
    gameBenchmarks: [
      { game: "Độ trễ không dây", fps: "1ms Ultra-low" },
      { game: "Hành trình nhận phím", fps: "0.1mm - 4.0mm" }
    ],
    priceHistory: [
      { date: "01/10", price: 3400000 },
      { date: "15/10", price: 3100000 },
      { date: "Hiện tại", price: 2890000 },
      { date: "Dự báo 11/11", price: 2690000, predicted: true }
    ],
    aiAdvice: "Mẫu bàn phím hot-trend 2026, đang có voucher giảm thêm 100k khi mua kèm máy bộ TEKPC.",
    sentiment: {
      score: 97,
      summary: "Âm gõ trầm đục siêu phê, màn hình OLED đồng bộ nhiệt độ máy tính rất độc đáo.",
      pros: ["Cảm giác gõ mượt mà nhẹ tay", "Màn hình OLED sắc nét", "Pin trâu cả tháng mới sạc"],
      cons: ["Khung nhôm nên hơi nặng nếu hay mang đi làm"]
    }
  },
  {
    id: "vga-rtx-4060-ti",
    name: "Card Màn Hình NVIDIA GeForce RTX 4060 Ti 16GB GDDR6 (Dual Fan OC)",
    category: "components",
    brand: "NVIDIA",
    price: 12490000,
    originalPrice: 13900000,
    rating: 4.9,
    reviewsCount: 88,
    image: "./products/gpu-rtx.jpg",
    badge: "Linh kiện HOT",
    inStock: true,
    warranty: "Bảo hành 36 tháng chính hãng",
    specs: {
      cpu: "Kiến trúc Ada Lovelace tiến trình 4N TSMC",
      mainboard: "PCIe 4.0 x8",
      ram: "16GB GDDR6 128-bit (Băng thông 288 GB/s)",
      vga: "4352 Nhân CUDA • Nhân RT Gen 3 • Tensor Gen 4",
      storage: "Hỗ trợ DLSS 3.5 & Frame Generation AI",
      psu: "Công suất nguồn khuyến nghị: 550W (TDP 165W)",
      cooling: "Hệ thống quạt kép tản nhiệt cánh đón gió thông minh",
      case: "Kích thước 2 Slot nhỏ gọn tương thích mọi vỏ case"
    },
    shortDesc: "Card đồ họa 16GB VRAM dung lượng lớn chuyên trị đồ họa 3D nặng, dựng phim 4K DaVinci/Premiere và chơi mượt mọi game Ray Tracing.",
    bestFor: "Game thủ AAA 2K, Render đồ họa AI Stable Diffusion, Dựng phim 4K",
    gameBenchmarks: [
      { game: "Cyberpunk 2077 (DLSS 3.5)", fps: "105 FPS" },
      { game: "Black Myth Wukong (Full RT)", fps: "82 FPS" },
      { game: "Forza Horizon 5 (Extreme)", fps: "125 FPS" }
    ],
    priceHistory: [
      { date: "01/10", price: 13900000 },
      { date: "15/10", price: 13200000 },
      { date: "Hiện tại", price: 12490000 },
      { date: "Dự báo 11/11", price: 12190000, predicted: true }
    ],
    aiAdvice: "Bản 16GB VRAM chống tràn bộ nhớ tuyệt vời cho các tác vụ AI và đồ họa nặng so với bản 8GB tiêu chuẩn.",
    sentiment: {
      score: 98,
      summary: "Khách hàng đồ họa cực kỳ ưng ý vì 16GB VRAM chạy mượt Blender và render AI không hề bị nghẽn.",
      pros: ["VRAM 16GB dồi dào", "Tiêu thụ điện rất mát chỉ 165W", "Hỗ trợ DLSS 3.5 mượt mà"],
      cons: ["Giá cao hơn bản 8GB khoảng 2.5 triệu"]
    }
  },
  {
    id: "laptop-aurabook-ai",
    name: "Laptop AI Ultrabook AuraBook Pro 16 (Core Ultra 7 155H | 32GB RAM | OLED 3.2K)",
    category: "laptop",
    brand: "AuraTech",
    price: 29990000,
    originalPrice: 33500000,
    rating: 4.9,
    reviewsCount: 52,
    image: "./products/laptop-ai.jpg",
    badge: "AI Laptop 2026",
    inStock: true,
    warranty: "Bảo hành 24 tháng chính hãng",
    specs: {
      cpu: "Intel Core Ultra 7 155H (16 nhân 22 luồng, tích hợp NPU AI)",
      mainboard: "Intel Evo Platform Certified",
      ram: "32GB LPDDR5X 7467MHz Onboard siêu tốc",
      vga: "Đồ họa Intel Arc Graphics 8-Cores",
      storage: "SSD 1TB M.2 PCIe Gen4 NVMe (Đọc 7000MB/s)",
      psu: "Pin 75Wh dùng liên tục 14 tiếng • Sạc nhanh Type-C 100W",
      cooling: "Hệ thống làm mát buồng hơi Vapor Chamber mỏng 0.1mm",
      case: "Khung hợp kim Nhôm Magie siêu nhẹ 1.39kg"
    },
    shortDesc: "Laptop thế hệ AI tích hợp chip xử lý thần kinh NPU riêng biệt, màn hình OLED 3.2K 120Hz 100% DCI-P3 chuẩn màu điện ảnh Hollywood.",
    bestFor: "Doanh nhân, lập trình viên AI, sáng tạo nội dung cao cấp",
    gameBenchmarks: [
      { game: "Xử lý AI NPU", fps: "Tăng tốc 300%" },
      { game: "Màn hình OLED 3.2K", fps: "120Hz Siêu mượt" },
      { game: "Thời lượng pin", fps: "14h liên tục" }
    ],
    priceHistory: [
      { date: "01/10", price: 33500000 },
      { date: "15/10", price: 31500000 },
      { date: "Hiện tại", price: 29990000 },
      { date: "Dự báo 11/11", price: 28990000, predicted: true }
    ],
    aiAdvice: "Mẫu laptop mỏng nhẹ chạy vi xử lý Intel Core Ultra có NPU xử lý tác vụ trí tuệ nhân tạo mượt mà không hao pin.",
    sentiment: {
      score: 99,
      summary: "Màn hình OLED quá đẹp, máy nhẹ mỏng pin trâu cả ngày làm việc không cần mang củ sạc.",
      pros: ["Màn hình OLED 3.2K màu cực sâu", "Trọng lượng siêu nhẹ 1.39kg", "Tích hợp NPU AI thông minh"],
      cons: ["RAM Onboard không nâng cấp được thêm"]
    }
  }
];

export const pcBuilderTemplates = [
  {
    budget: "10-15m",
    name: "Cấu hình Esport Tiết Kiệm (i5 12400F + GTX 1650 / RX 6600)",
    totalPrice: 12890000,
    fpsInfo: "Chiến mượt LOL 240 FPS, Valorant 280 FPS, FO4 140 FPS",
    components: [
      { type: "CPU", name: "Intel Core i5 12400F (6 nhân 12 luồng)", price: 2850000 },
      { type: "Mainboard", name: "ASRock H610M-HVS/M.2 R2.0", price: 1690000 },
      { type: "RAM", name: "16GB (2x8GB) DDR4 3200MHz Lexar Thor", price: 890000 },
      { type: "VGA", name: "ASUS Dual GeForce GTX 1650 4GB GDDR6", price: 3950000 },
      { type: "SSD", name: "SSD 512GB Kingston NV2 M.2 NVMe", price: 950000 },
      { type: "Nguồn", name: "Antec Atom V550 550W", price: 790000 },
      { type: "Vỏ Case", name: "Xigmatek Gaming X 3FX (Kèm 3 Fan RGB)", price: 890000 },
      { type: "Tản nhiệt", name: "Tản nhiệt khí DeepCool AG400", price: 450000 }
    ]
  },
  {
    budget: "15-25m",
    name: "Cấu hình Quốc Dân Đa Nhiệm (i5 13400F + RTX 4060 8GB)",
    totalPrice: 21990000,
    fpsInfo: "Chiến mượt mọi game AAA 2K trên 90 FPS, Render Premiere / CapCut mượt mà",
    components: [
      { type: "CPU", name: "Intel Core i5 13400F (10 nhân 16 luồng)", price: 4690000 },
      { type: "Mainboard", name: "MSI B760M Gaming Plus WiFi D4", price: 3290000 },
      { type: "RAM", name: "32GB (2x16GB) Corsair Vengeance Pro RGB 3200MHz", price: 2190000 },
      { type: "VGA", name: "Gigabyte GeForce RTX 4060 Eagle OC 8GB", price: 8490000 },
      { type: "SSD", name: "SSD 1TB Samsung 980 M.2 NVMe", price: 1890000 },
      { type: "Nguồn", name: "Corsair CV650 650W 80 Plus Bronze", price: 1390000 },
      { type: "Vỏ Case", name: "Montech Air 100 ARGB Black (4 Fan RGB)", price: 1190000 },
      { type: "Tản nhiệt", name: "Thermalright Assassin X 120 Refined SE ARGB", price: 550000 }
    ]
  },
  {
    budget: "over-30m",
    name: "Cấu hình Cao Cấp Đồ Họa & Game 4K (i7 14700K + RTX 4070 Ti Super)",
    totalPrice: 42500000,
    fpsInfo: "Chiến Black Myth Wukong 4K Max Settings, Render 3D Blender / Lumion / AI Model",
    components: [
      { type: "CPU", name: "Intel Core i7 14700K (20 nhân 28 luồng)", price: 10490000 },
      { type: "Mainboard", name: "ASUS ROG STRIX B760-F GAMING WIFI", price: 5990000 },
      { type: "RAM", name: "32GB (2x16GB) DDR5 6000MHz Kingston Fury Beast", price: 3290000 },
      { type: "VGA", name: "MSI GeForce RTX 4070 Ti SUPER 16GB Gaming X Slim", price: 23900000 },
      { type: "SSD", name: "SSD 1TB Samsung 990 Pro PCIe 4.0 (7450MB/s)", price: 2890000 },
      { type: "Nguồn", name: "Super Flower Leadex III Gold 850W", price: 2690000 },
      { type: "Vỏ Case", name: "Lian Li O11 Dynamic EVO Black", price: 3890000 },
      { type: "Tản nhiệt", name: "Tản nước AIO DeepCool LT720 360mm", price: 2990000 }
    ]
  }
];

export const storeShowrooms = [
  { name: "Showroom Tân Bình", address: "125 Cộng Hòa, Phường 12, Quận Tân Bình, TP. Hồ Chí Minh", phone: "028.2249.8777" },
  { name: "Showroom Quận 10", address: "384 Lý Thường Kiệt, Phường 14, Quận 10, TP. Hồ Chí Minh", phone: "028.2249.9777" },
  { name: "Showroom Cầu Giấy", address: "86 Xuân Thủy, Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội", phone: "0967.105.171" }
];
