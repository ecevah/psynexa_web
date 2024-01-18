import { FAQ_TEXT_CARD_ARRAY } from "@/constant/constant";
import FAQ from "@/components/organisms/landing/faq";
import FooterCard from "@/components/organisms/landing/footer_card";
import TextCard from "@/components/monecules/landing/text_card";

const Footer = (props) => {
  return (
    <>
      <div className="pt-[132px] pb-[112px] bg-pageCardBg bg-cover bg-center bg-no-repeat">
        <div className="layout ">
          <TextCard
            data={FAQ_TEXT_CARD_ARRAY}
            style="ml-[14px] mb-[104px]"
            textStyle="mt-[10px]"
          />
          <FAQ />
          <FooterCard />
        </div>
      </div>
    </>
  );
};

export default Footer;
