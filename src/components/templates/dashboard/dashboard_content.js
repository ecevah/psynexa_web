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
import { useAddUsersMutation, useFetchUsersQuery } from "@/services/store";

const DashboardContent = () => {
  const [client, setClient] = useState("");
  const dispatch = useDispatch();
  const { quantity, cartItems } = useSelector((store) => store.card);
  const { data, isError, isFetching } = useFetchUsersQuery();
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
  if (isFetching) {
    content = <div>Yükleniyor</div>;
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = data.value.clients.map((user) => {
      return <div key={user.surName}>{user.name}</div>;
    });
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
              {content}
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
        {cartItems.map((item, i) => (
          <DashItemCard
            data={item.data}
            key={`Dash ${i}`}
            color={item.color}
            type={item.type}
            active={item.active}
          />
        ))}
        <button onClick={() => dispatch(removeItem(1))}>Sil</button>
        <button onClick={handleUserAdd}>
          {results.isLoading ? "yükleniyor" : "bitti"}
        </button>
      </div>
    </>
  );
};

export default DashboardContent;
