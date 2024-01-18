import Image from "next/image";
import MultiIconCard from "@/components/monecules/landing/multi_icon_card";
import TextCard from "@/components/monecules/landing/text_card";
import {
  ICON_CARD_DATA_ARRAY,
  ICON_CARD_TEXT_ARRAY,
} from "@/constant/constant";
import IconCardPhotoCarousel from "@/components/atoms/landing/icon_card_photo_carousel";

const OrganismIconCard = (props) => {
  return (
    <>
      <TextCard
        data={ICON_CARD_TEXT_ARRAY}
        style="items-center"
        width="w-[600px]"
        textStyle="mt-[5px]"
      />
      <MultiIconCard data={ICON_CARD_DATA_ARRAY} style="mt-[113px] mb-[92px]" />
      <IconCardPhotoCarousel />
    </>
  );
};

export default OrganismIconCard;
