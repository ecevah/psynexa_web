"use client";
import Fixed_Icon from "@/components/atoms/login_register/fixed_icon";
import { DEPRESSION, MIDDEL_DEPRESSION_OBJECT } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import useVerify from "@/services/auth/auth";

const TestResponse = (props) => {
  const { verify } = useVerify();
  useEffect(() => {
    verify();
  }, [verify]);

  return (
    <>
      <div className="relative flex justify-center items-center w-full h-[100vh]">
        <div className="flex flex-col items-center">
          <Image
            src={MIDDEL_DEPRESSION_OBJECT.img}
            alt="text"
            width={200}
            height={200}
          />
          <div
            id="sfpro"
            className="text-[20px] leading-[18.57px] font-bold text-center text-gray mt-[29px]"
          >
            {MIDDEL_DEPRESSION_OBJECT.title}
          </div>
          <div
            id="sfpro"
            className="w-[660px] text-[13px] leading-[18.5px] tracking-[1%] font-normal text-center text-gray mt-[15px]"
          >
            {MIDDEL_DEPRESSION_OBJECT.text}
          </div>

          <Link
            id="sfpro"
            href="/dashboard/test"
            className="text-[12px] leading-[14.32px] font-medium text-center tracking-[1%] text-purple px-[30px] py-[15px] bg-purpleOpacity rounded-[5px] mt-[40px]"
          >
            Ana Sayfa
          </Link>
        </div>
        <Fixed_Icon />
      </div>
    </>
  );
};

export default TestResponse;
