"use client";
import SearchButton from "@/components/atoms/dashboard/search_button";
import PastItemCard from "@/components/organisms/dashboard/past_item_card";
import { ARRAY_TEST_NAME, PAST_ARRAY, PAST_TEXT } from "@/constant/constant";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useAddUsersMutation,
  useFetchUsersQuery,
  useFetchAfterReservationsQuery,
  useFetchBeforeReservationsQuery,
} from "@/services/store";
import SkeletonItem from "@/components/monecules/dashboard/skelethon_item";

const PastContent = (props) => {
  const [client, setClient] = useState("");
  const { data, isError, isFetching } = useFetchBeforeReservationsQuery();

  let content;
  let list;
  if (isFetching) {
    content = <SkeletonItem />;
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    let arr = [];
    content = (
      <>
        {data.reservation.map((item, i) => (
          <PastItemCard
            reservation={item._id}
            name={`${item.client_id.name}_${item.client_id.surName}`}
            day={item.day}
            time={item.time}
            key={`Dash ${i}`}
            color={item.color}
            type={"Standart"}
            active={item.active}
          />
        ))}
      </>
    );
    data.reservation.map((item) => {
      arr.push(`${item.client_id.name} ${item.client_id.surName}`);
    });
    const result = arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    list = result.map((item, i) => (
      <option key={`Name ${i}`} value={item}>
        {item}
      </option>
    ));
  }

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
                {list}
              </select>
            </div>
            <SearchButton />
          </div>
        </div>
        {content}
      </div>
    </>
  );
};

export default PastContent;
