import "./../../index.css";
import { LeftVidIcon, RightVidIcon } from "../common/icons";
import Button from "./Button";

const BannerVd = () => {
  return (
    <>
      {" "}
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
              <h4 class="font-semibold text-3xl text-white text-center text-shadow-lg shadow-black">
                Welcome to Miracle Trading Card Game
              </h4>
            </div>
            <div className="flex flex-col w-full items-center md:flex-row gap-2 md:gap-3 md:px-12">
              <Button label="Shop now" />
              <Button label="Sell with us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerVd;
