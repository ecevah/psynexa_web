import { HUMEN, HUMEN_BLUE, HUMEN_RED } from "@/constant/constant";
import Image from "next/image";

const HumenIcon = (props) => {
  return (
    <>
      <div
        className={`${
          props.color == "red"
            ? "bg-[#EF24241A]"
            : props.color == "blue"
            ? "bg-transparent"
            : "bg-gray010"
        }  w-[41px] h-[41px] flex items-center justify-center rounded-[8px]`}
      >
        <Image
          src={
            props.color == "red"
              ? HUMEN_RED
              : props.color == "blue"
              ? HUMEN_BLUE
              : HUMEN
          }
          alt="humen"
          width={20}
          height={20}
        />
      </div>
    </>
  );
};

export default HumenIcon;
