"use client";

import React from "react";
import { InfiniteMovingCards } from "./Infinite-card";
import { Typography } from "antd";

export function Testimonials() {
  const { Title } = Typography;
  return (
    <>
      <Title className="text-[#FFE8AC] text-center my-6">
        Cảm nhận của khách hàng về chúng tôi
      </Title>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

const testimonials = [
  {
    quote:
      "Trang web rất bắt mắt, các sản phâm cũng đa dạng nhiều loại thẻ bài khiến tôi nhớ về tuổi thơ, hi vọng trang web sẽ phát triển hơn và mang lại nhiều loại sản phẩm hiếm có",
    name: "Nguyen Van Charles",
    title: "Tuyệt vời !!",
  },
  {
    quote:
      "Các loại thẻ rất đẹp và chất lượng cao, giao diện bắt mắt thân thiện, tôi vừa thực hiện giao dịch rất nhanh chóng và đem về những thẻ bài độc đáo cho bộ sưu tập của mình.",
    name: "Nghia",
    title: "Amazing good job!",
  },
  {
    quote: "Đa dạng nhiều lại thẻ bài quý hiếm, tôi sẽ tiếp tục ủng hộ trong tương lai",
    name: "Tuấn Anh",
    title: "So good !",
  },
  {
    quote:
      "Tôi là 1 fan cứng của thẻ bài YugiOh, nhờ trang web này mà tôi có thể sưu tầm thêm những thẻ bài độc đáo vào bộ sưu tập của mình.",
    name: "John Nguyen",
    title: "Absolutely cinema !!",
  },
  {
    quote:
      "Tôi được bạn bè giới thiệu cho trang web này, giao diện đẹp mắt, mua sắm rất thích .",
    name: "Trọng",
    title: "Tuyệt vời !!!",
  },
];
