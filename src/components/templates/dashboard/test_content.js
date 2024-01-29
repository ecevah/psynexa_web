"use client";
import CustomButton from "@/components/atoms/dashboard/custom_button";
import SearchButton from "@/components/atoms/dashboard/search_button";
import TestItemCard from "@/components/organisms/dashboard/test_item_card";
import { ARRAY_TEST_NAME, TEST_ARRAY, TEST_TEXT } from "@/constant/constant";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useAddTestMutation,
  useFetchTestQuery,
  useFetchUsersQuery,
} from "@/services/store";
import SkeletonItem from "@/components/monecules/dashboard/skelethon_item";

const TestContent = (props) => {
  const [client, setClient] = useState("");
  const [test, setTest] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const {
    data: testData,
    isError: isTestError,
    isFetching: isTestFetching,
  } = useFetchTestQuery();

  // Fetch Users Data
  const {
    data: userData,
    isError: isUserError,
    isFetching: isUserFetching,
  } = useFetchUsersQuery();

  let content;
  let list;
  if (isTestFetching) {
    content = <SkeletonItem />;
  } else if (isTestError) {
    content = <div>Hata Var</div>;
  } else {
    let arr = [];
    content = (
      <>
        {testData.tests.map((item, i) => (
          <TestItemCard
            time={item.date}
            text={item.testName}
            title={`${item.client_id.name} ${item.client_id.surName}`}
            key={`Dash ${i}`}
            color={item.color}
            type={item.date}
            active={item.active}
            id={item._id}
          />
        ))}
      </>
    );
    testData.tests.map((item) => {
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

  let userList;
  let userArr = [];

  if (userData) {
    userData.value.clients.map((item, i) => {
      userArr.push(`${item.name} ${item.surName}`);
    });
    userList = userArr.map((item, i) => (
      <option key={`User List Name ${i}`} value={item}>
        {item}
      </option>
    ));
  }

  return (
    <>
      <div className="flex flex-col dashLayout">
        <div className="flex flex-col justify-between mb-[65px]">
          <div className="flex flex-col ">
            <div
              id="sfpro"
              className="text-[52px] font-medium leading-[74px] tracking-[1%] text-[#18171A]"
            >
              Psikolojik Testler
            </div>
            <div
              id="sfpro"
              className="text-[12px] font-normal leading-[17px] -tracking-[1%] text-gray w-[600px] mt-[32px]"
            >
              {TEST_TEXT}
            </div>
          </div>
          <div className="flex flex-row items-end">
            <div className="flex flex-col">
              <div
                id="sfpro"
                className="text-[13px] font-medium leading-[15.51px] tracking-[1%] text-gray mt-[40px] mb-[12px]"
              >
                Ad Soyad
              </div>
              <div className="w-[216px] h-[42px] px-[15px] flex justify-center items-center bg-white border-solid border-[1px] border-grayLight shadow-sm rounded-[8px] mr-[20px]">
                <select
                  id="sfpro"
                  name="clientName"
                  value={selectedUser}
                  onChange={(e) => setSelectedUser(e.target.value)}
                  required
                  className="w-full bg-transparent"
                >
                  <option value="" disabled hidden>
                    Ad Soyad
                  </option>
                  {userList}
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <div
                id="sfpro"
                className="text-[13px] font-medium leading-[15.51px] tracking-[1%] text-gray mt-[40px] mb-[12px]"
              >
                Göndereceğin Testi Seç
              </div>
              <div className="w-[340px] h-[42px] px-[15px] flex justify-center items-center bg-white border-solid border-[1px] border-grayLight shadow-sm rounded-[8px] mr-[30px]">
                <select
                  id="sfpro"
                  name="test"
                  value={test}
                  onChange={(e) => setTest(e.target.value)}
                  required
                  className="w-full bg-transparent"
                >
                  <option value="" disabled hidden>
                    Test Seç
                  </option>
                  {ARRAY_TEST_NAME.map((title, index) => (
                    <option key={index} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <CustomButton type="no-icon" text="Testi Gönder" style="h-[42px]" />
          </div>
          <div className="flex flex-row w-full justify-between items-center mt-[50px]">
            <div
              id="sfpro"
              className="text-[25px] font-medium leading-[30px] tracking-[1%] text-[#18171A]"
            >
              Geçmiş Test Sonuçları
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
        </div>
        {content}
      </div>
    </>
  );
};

export default TestContent;
