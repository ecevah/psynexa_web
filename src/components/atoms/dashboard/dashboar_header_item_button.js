"use client";

const DashboardHeaderItemButton = (props) => {
  const size = props.size || "text-[13px]";
  const weight = props.weight || "font-medium";
  return (
    <>
      <a
        id="sfpro"
        className={`text-center ${size} ${weight} ${props.style} text-gray mx-[25px]`}
        href={props.href}
      >
        {props.text}
      </a>
    </>
  );
};

export default DashboardHeaderItemButton;
