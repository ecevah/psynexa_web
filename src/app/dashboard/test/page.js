"use client";
import Header from "@/components/templates/dashboard/header";
import TestContent from "@/components/templates/dashboard/test_content";

const Test = (props) => {
  return (
    <>
      <div className="flex flex-col pb-[160px] bg-dashboardBg bg-cover bg-top">
        <Header />
        <TestContent />
      </div>
    </>
  );
};

export default Test;
