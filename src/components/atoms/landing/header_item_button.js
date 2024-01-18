"use client";

const HeaderItemButton = (props) => {
  const size = props.size || "text-[12px]";
  const weight = props.weight || "font-medium";
  return (
    <>
      <button
        className={`text-center ${size} ${weight} ${props.style} text-homePageGray mx-[18px]`}
        onClick={props.function}
      >
        {props.text}
      </button>
    </>
  );
};

export default HeaderItemButton;
