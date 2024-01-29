import Header from "./header";
import React, { useEffect } from "react";
import useVerify from "@/services/auth/auth";

const PageWrapper = ({ children }) => {
  const { verify } = useVerify();

  useEffect(() => {
    verify();
  }, [verify]);

  return (
    <>
      <div className="flex flex-col pb-[160px] bg-dashboardBg bg-cover bg-top">
        <Header />
        {children}
      </div>
    </>
  );
};

export default PageWrapper;
