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
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
