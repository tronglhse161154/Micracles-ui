import React from "react";
import { Typography } from "antd";
import { StickyScroll } from "./Sticky-rolls";
import { Image } from "antd";

const News = () => {
  const content = [
    {
      title: "Chúng tôi đã có mặt trên các nền tảng mạng xã hội",
      description:
        "Trang web của chúng tôi là nền tảng hàng đầu dành cho các tín đồ của trò chơi thẻ bài giao dịch, nơi bạn có thể khám phá những tựa game hấp dẫn, cập nhật thông tin mới nhất và kết nối với cộng đồng đam mê thẻ bài. Tại đây, chúng tôi cung cấp các tin tức nóng hổi, giới thiệu các bộ sưu tập bài hiếm, và cung cấp hướng dẫn chi tiết về cách chơi, chiến lược và mẹo để làm chủ trò chơi. Bạn sẽ không chỉ được cập nhật những xu hướng mới nhất mà còn có thể tham gia vào những cuộc phiêu lưu đầy màu sắc và chiến lược.",
      content: (
        <Image
          src="https://images.unsplash.com/photo-1707087140532-aaa20f87911e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Nhiều điều thú vị đang chờ đợi bạn !!",
      description:
        "Với giao diện trực quan, mọi người có thể dễ dàng tương tác và cập nhật thông tin ngay trên nền tảng. Hãy cùng đồng hành với chúng tôi để khám phá thế giới đa dạng của các trò chơi thẻ bài từ khắp nơi trên thế giới!",
      content: (
        <Image
          src="https://images.unsplash.com/photo-1677545215971-3fef13ddc6b5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Khám phá đa dạng các loại sản phẩm",
      description:
        "Khám phá hàng loạt sản phẩm thẻ bài từ các bộ sưu tập đa dạng, bao gồm những tựa game nổi tiếng và cả những bộ bài hiếm. Bạn có thể tìm thấy những sản phẩm phù hợp với sở thích, từ thẻ bài phổ biến đến những phiên bản giới hạn độc đáo. Đừng bỏ lỡ cơ hội để nâng cao bộ sưu tập của bạn!",
      content: (
        <Image
          src="https://cdn.prod.website-files.com/646df590700064e1c084f708/667d5c6976b9a933fb689fd0_best-trading-card-games-2024.webp"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Luôn luôn cập nhật trải nghiệm người dùng",
      description:
        "Chúng tôi không ngừng cải thiện nền tảng để mang lại trải nghiệm tốt nhất cho người dùng. Từ việc cập nhật giao diện, tối ưu hóa tốc độ tải trang cho đến việc cung cấp những tính năng mới nhằm giúp bạn dễ dàng quản lý bộ sưu tập thẻ bài của mình. Mục tiêu của chúng tôi là đảm bảo bạn luôn cảm thấy thoải mái và hài lòng khi sử dụng nền tảng.",
      content: (
        <Image
          src="https://www.searchenginejournal.com/wp-content/uploads/2022/10/website-performance-and-health-monitoring-635945792a855-sej.png"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
  ];

  const { Title } = Typography;
  return (
    <>
      <Title className="text-[#FFE8AC] text-center my-6">
        Tin tức mới nhất
      </Title>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
};

export default News;
