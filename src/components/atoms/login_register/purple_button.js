"use client";
const Purple_Button = (props) => {
  return (
    <>
      <button
        type="button"
        onClick={props.function}
        id="sfpro"
        className="w-[350px] h-[50px] bg-purple rounded-[5px] font-normal text-[14px] leading-[21px] text-white mt-[30px] hover:bg-[#5A3EB0]"
      >
        {props.text}
      </button>
    </>
  );
};

export default Purple_Button;
