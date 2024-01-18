import HomePageTitle from "../../atoms/landing/home_page_title";
import HomePageText from "../../atoms/landing/home_page_text";

const TextCard = (props) => {
  return (
    <>
      <div className={`flex flex-col ${props.style}`}>
        <HomePageTitle
          text={props.data[0].text}
          style={props.data[0].style}
          position={props.data[0].position}
          color={props.data[0].color}
        />
        <HomePageText
          text={props.data[1].text}
          style={props.textStyle}
          position={props.data[1].position}
          color={props.data[1].color}
          width={props.width}
        />
      </div>
    </>
  );
};

export default TextCard;
