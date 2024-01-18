"use client";
//Atoms
import HeaderPurpleButton from "../../atoms/landing/header_purple_button";

const HeaderMultiPurpleButton = (props) => {
  const data = props.data || [];
  return (
    <>
      <div className="flex flex-row">
        {data.map((item, i) => (
          <HeaderPurpleButton
            key={`Header Purple Button ${i}`}
            width={item.width}
            height={item.height}
            size={item.size}
            weight={item.weight}
            style={item.style + " " + props.margin}
            text={item.text}
            function={item.function}
            href={item.href}
          />
        ))}
      </div>
    </>
  );
};

export default HeaderMultiPurpleButton;
