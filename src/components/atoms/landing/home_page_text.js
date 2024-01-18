const HomePageText = (props) => {
  return (
    <>
      <p
        className={`${
          props.width
        } text-[13px] leading-[30px] font-normal -tracking-[1%] ${
          props.color == "dark"
            ? "text-homePageDarkGray"
            : props.color == "normal"
            ? "text-homePageGray"
            : "text-homePageLightGray"
        }
        ${props.position == "center" ? "text-center" : "text-left"} ${
          props.style
        }`}
      >
        {props.text}
      </p>
    </>
  );
};

export default HomePageText;
