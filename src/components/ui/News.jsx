import React from "react";
import { Typography } from "antd";
import { StickyScroll } from "./sticky-rolls";
import { Image } from "antd";

const News = () => {
  const content = [
    {
      title: "Our biggest community",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
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
      title: "New interesting things is waiting for you !!",
      description:
        "In the coming time, we will bring you a special series of articles, introducing in detail different types of card games. From familiar titles to unique games you may have never heard of, we will take you on a colorful adventure in the world of card games.",
      content: (
        <Image
          src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/461321549_122118042920503109_1467123646096273988_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hDe2p07DZKYQ7kNvgEytudn&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AMee7NUcFOCyFXctZT1tCN4&oh=00_AYBRxmOPWoTPLQIJ7Mbr4qtBZdum6D1tzD9dwoQehP1vYw&oe=66FEC5DB"
          width={350}
          height={350}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
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
  ];

  const { Title } = Typography;
  return (
    <>
      <Title className="text-[#FFE8AC] text-center my-6">News</Title>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
};

export default News;
