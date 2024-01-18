"use client";

import HeaderItemButton from "../../atoms/landing/header_item_button";

const HeaderMultiItemButton = (props) => {
  const data = props.data || [];
  return (
    <>
      <div className="flex flex-row">
        {data.map((item, i) => (
          <HeaderItemButton
            key={`Header Item Button ${i}`}
            size={item.size}
            weight={item.weight}
            style={item.style}
            text={item.text}
            function={item.function}
            href={item.href}
          />
        ))}
      </div>
    </>
  );
};

export default HeaderMultiItemButton;
