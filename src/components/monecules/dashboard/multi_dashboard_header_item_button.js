"use client";

import DashboardHeaderItemButton from "@/components/atoms/dashboard/dashboar_header_item_button";

const DashboardHeaderMultiItemButton = (props) => {
  const data = props.data || [];
  return (
    <>
      <div className="flex flex-row">
        {data.map((item, i) => (
          <DashboardHeaderItemButton
            key={`Header Item Button ${i}`}
            size={item.size}
            weight={item.weight}
            style={item.style}
            text={item.text}
            href={item.href}
          />
        ))}
      </div>
    </>
  );
};

export default DashboardHeaderMultiItemButton;
