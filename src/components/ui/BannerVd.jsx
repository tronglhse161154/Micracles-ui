import "./../../index.css";
import { LeftVidIcon, RightVidIcon } from "../common/icons";
import Logo from "../layout/navbar/Logo";
import Button from "./Button";
import { TextGenerateEffect } from "./TextGen";

const words = `Chào mừng tới Miracle Trading Card Game
`;

const BannerVd = () => {
  return (
    <>
     
      <div className="relative h-[600px] md:h-[786px] w-full z-5 clip-cover pb-4 md:pb-6">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
          <video
            className="object-cover w-full h-full"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://altered-cms-prod-eu.s3.eu-west-3.amazonaws.com/wp-content/uploads/sites/3/2024/07/19182703/altered_homepage_cover_trailer.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-50 bg-opacity-10 z-1"></div>

        <div className="absolute hidden md:block md:bottom-7 left-3 origin-center [transform:rotateZ(180deg)_rotateY(180deg)] z-[2]">
          <LeftVidIcon />
        </div>
        <div className="absolute hidden md:block md:bottom-7 right-3 origin-center [transform:rotateZ(180deg)] z-[2]">
          <RightVidIcon />
        </div>
        <div className="h-full w-full z-[2] relative flex flex-col items-center">
          <div className="flex flex-col w-full md:w-auto flex-1 gap-6 px-6 justify-center">
            <div className="flex flex-col items-center gap-2">
            <TextGenerateEffect words={words} />
              <div className="h-[100px] md:h-[180px]">
                <Logo w="200" h="200" />
              </div>
            </div>
            <div className="flex flex-col w-full items-center md:flex-row gap-2 md:gap-3 md:px-12">
              <Button
                label="Khám phá"
                containerStyles="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-primary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-primary
    hover:text-black hover:border-primary
    active:border-primary active:text-black
    w-full text-white cursor-pointer"
              />
              <Button
                label="Giao dịch"
                containerStyles="hover:no-underline hover:rounded-tl-2xl hover:rounded-br-2xl hover:bg-primary transition-all duration-100 ease-out clickable flex items-center whitespace-nowrap justify-center font-semibold p-2 sm-bold-caps gap-x-2 border border-primary
    hover:text-black hover:border-primary
    active:border-primary active:text-black
    w-full text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerVd;
