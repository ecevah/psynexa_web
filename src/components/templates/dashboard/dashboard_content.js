"use client";
import SearchButton from "@/components/atoms/dashboard/search_button";
import DashItemCard from "@/components/organisms/dashboard/dash_item_card";
import {
  ARRAY_TEST_NAME,
  DASHBOARD_TEXT,
  DASH_ARRAY,
} from "@/constant/constant";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCard, removeItem } from "@/services/control/cartSlice";
import {
  useAddUsersMutation,
  useFetchUsersQuery,
  useFetchAfterReservationsQuery,
} from "@/services/store";
import SkeletonItem from "@/components/monecules/dashboard/skelethon_item";

const DashboardContent = () => {
  const [client, setClient] = useState("");
  const dispatch = useDispatch();
  const { quantity, cartItems } = useSelector((store) => store.card);
  const { data, isError, isFetching } = useFetchAfterReservationsQuery();
  const [addUser, results] = useAddUsersMutation();
  const handleUserAdd = () => {
    const userBody = {
      client: "65a81e8495aaa2e182019ace",
      psyc: "65b15b6b58f795dd816ba7f6",
      day: "2024-01-28",
      time: "12.30",
    };
    addUser(userBody);
  };
  let content;
  let list;
  if (isFetching) {
    content = <SkeletonItem width={800} />;
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    let arr = [];
    content = (
      <>
        {data.reservation.map((item, i) => (
          <DashItemCard
            reservation={item._id}
            name={item.client_id.name}
            surName={item.client_id.surName}
            day={item.day}
            time={item.time}
            key={`Dash ${i}`}
            type={"Standart"}
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
              Randevu Takvimi
            </div>
            <div
              id="sfpro"
              className="text-[12px] font-normal leading-[17px] -tracking-[1%] text-gray w-[600px] mt-[32px]"
            >
              {DASHBOARD_TEXT}
            </div>
          </div>
          <div className="flex flex-row">
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

export default DashboardContent;
