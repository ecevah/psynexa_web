"use client";

const HeaderPurpleButton = (props) => {
  const width = props.width || "w-[202px]";
  const height = props.height || "h-[43px]";
  const size = props.size || "text-[12px]";
  const weight = props.weight || "font-semibold";

  return (
    <a
      className={`${width} ${height} rounded-[10px] bg-headerPurpleButtonBackground border-solid border border-[#E7E7E7] ${props.style} flex justify-center items-center hover:bg-[#3A36E71A]`}
      onClick={props.function}
      href={props.href}
    >
      <div
        className={`text-headerPurpleButtonText text-center ${size} ${weight} capitalize`}
      >
        {props.text}
      </div>
    </a>
  );
};

export default HeaderPurpleButton;
