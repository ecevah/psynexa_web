"use client";
const HomePageBlackButton = (props) => {
  return (
    <>
      <button
        className={`px-[35px] py-[12px] bg-homePageDarkGray rounded-full font-semibold text-[14px] leading-[17px] text-center text-white ${props.style} `}
        onClick={props.function}
      >
        {props.text}
      </button>
    </>
  );
};
export default HomePageBlackButton;
