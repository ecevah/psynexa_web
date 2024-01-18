"use client";
import SearchButton from "@/components/atoms/dashboard/search_button";
import PastItemCard from "@/components/organisms/dashboard/past_item_card";
import { ARRAY_TEST_NAME, PAST_ARRAY, PAST_TEXT } from "@/constant/constant";
import { useState } from "react";

const PastContent = (props) => {
  const [client, setClient] = useState("");
  return (
    <>
      <div className="flex flex-col dashLayout">
        <div className="flex flex-row justify-between items-end mb-[65px]">
          <div className="flex flex-col ">
            <div
              id="sfpro"
              className="text-[52px] font-medium leading-[74px] tracking-[1%] text-[#18171A]"
            >
              Geçmiş Randevular
            </div>
            <div
              id="sfpro"
              className="text-[12px] font-normal leading-[17px] -tracking-[1%] text-gray w-[600px] mt-[32px]"
            >
              {PAST_TEXT}
            </div>
          </div>
          <div className="flex flex-row pb-[6px]">
            <div className="w-[216px] h-[42px] px-[15px] flex justify-center items-center bg-white border-solid border-[1px] border-grayLight shadow-sm rounded-[8px] mr-[20px]">
              <select
                id="sfpro"
                name="clientName"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                required
                className="w-full bg-transparent"
              >
                <option value="" disabled hidden>
                  Ad Soyad
                </option>
                {ARRAY_TEST_NAME.map((title, index) => (
                  <option key={index} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>
            <SearchButton />
          </div>
        </div>
        {PAST_ARRAY.map((item, i) => (
          <PastItemCard
            data={item.data}
            key={`Dash ${i}`}
            color={item.color}
            type={item.type}
            active={item.active}
          />
        ))}
      </div>
    </>
  );
};

export default PastContent;
