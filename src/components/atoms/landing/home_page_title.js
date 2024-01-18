import { Lexend } from "next/font/google";
const lexand = Lexend({ subsets: ["latin"] });

const HomePageTitle = (props) => {
  return (
    <>
      <h3
        className={`${
          props.width
        } text-[40px] leading-[50px] -tracking-[1%] font-normal text-homePageDarkGray ${
          lexand.className
        } ${props.position == "center" ? "text-center" : "text-left"} ${
          props.style
        }`}
      >
        {props.text}
      </h3>
    </>
  );
};

export default HomePageTitle;
