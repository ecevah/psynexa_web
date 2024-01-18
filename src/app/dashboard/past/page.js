"use client";
import Header from "@/components/templates/dashboard/header";
import PastContent from "@/components/templates/dashboard/past_content";

const Past = (props) => {
  return (
    <>
      <div className="flex flex-col pb-[160px] bg-dashboardBg bg-cover bg-top">
        <Header />
        <PastContent />
      </div>
    </>
  );
};

export default Past;
