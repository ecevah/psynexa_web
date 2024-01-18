import Image from "next/image";
import { ICON_CARD_PHOTO_ARRAY } from "@/constant/constant";

const IconCardPhotoCarousel = (props) => {
  return (
    <>
      <div
        id="scrolbar-none"
        className="w-full h-[540px] bg-iconCardPhotoBackground border-solid border-[1px] border-iconCardPhotoBorder rounded-[30px] overflow-x-auto flex flex-row items-center"
      >
        {ICON_CARD_PHOTO_ARRAY.map((item, i) => (
          <Image
            key={`Photo ${i}`}
            src={item.img}
            width={844}
            height={428}
            alt="photo"
            className={`max-h-[428px] min-h-[428px] min-w-[844px] max-w-[844px] rounded-[10px] object-contain object-bottom shadow-xl  ${
              i == ICON_CARD_PHOTO_ARRAY.length ? "mr-[56px]" : "mr-[36px]"
            } ${i == 0 ? "ml-[56px]" : ""}`}
          />
        ))}
      </div>
    </>
  );
};

export default IconCardPhotoCarousel;
