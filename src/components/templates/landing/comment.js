import MultiComment from "@/components/monecules/landing/multi_comment_card";
import TextCard from "@/components/monecules/landing/text_card";
import {
  COMMENT_CARD_ARRAY,
  COMMENT_CARD_TEXT,
  COMMENT_CARD_TEXT_ARRAY,
} from "@/constant/constant";

const Comment = (props) => {
  return (
    <>
      <div className="flex flex-col items-center pt-[137px] pb-[155px]">
        <TextCard
          data={COMMENT_CARD_TEXT_ARRAY}
          textStyle="w-[640px] !text-homePageGray mt-[10px]"
          style="flex flex-col items-center"
        />
        <div className="flex flex-row justify-center mt-[102px]">
          {COMMENT_CARD_ARRAY.map((item, i) => (
            <div className="mx-[12px]" key={`Comment Column ${i}`}>
              <MultiComment data={item.column} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Comment;
