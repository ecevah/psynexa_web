"use client";

import ContentItem from "@/components/atoms/dashboard/content_item";
import CustomButton from "@/components/atoms/dashboard/custom_button";
import HumenIcon from "@/components/atoms/dashboard/humen_icon";
import MeetButton from "@/components/atoms/dashboard/meet_button";
import SearchButton from "@/components/atoms/dashboard/search_button";
import HumenAndItem from "@/components/monecules/dashboard/humen_and_item";
import DashboardHeaderMultiItemButton from "@/components/monecules/dashboard/multi_dashboard_header_item_button";
import DashItemCard from "@/components/organisms/dashboard/dash_item_card";
import PastItemCard from "@/components/organisms/dashboard/past_item_card";
import TestItemCard from "@/components/organisms/dashboard/test_item_card";
import DashboardContent from "@/components/templates/dashboard/dashboard_content";
import Header from "@/components/templates/dashboard/header";
import { UseSelector } from "react-redux";

const Dashboard = () => {
  return (
    <>
      {/*
     
      <MeetButton active={true} />
      <SearchButton />
      <CustomButton type="download" text="Raporu İndir" />
      <CustomButton type="detail" text="Raporu Görüntüle" />
      <CustomButton type="no-icon" text="Testi Gönder" />
      <CustomButton type="document" text="Raporu İndir" />
      <ContentItem title="Tarih" text="01.11.2023" />
      <HumenIcon color="gray" />
      <HumenIcon color="red" />
      <HumenIcon color="blue" />
      <HumenAndItem color="blue" type="Standart" />
      <HumenAndItem color="red" type="Standart" />
      <HumenAndItem color="gray" type="Standart" />
      <div className="layout">
        {DASH_ARRAY.map((item, i) => (
          <DashItemCard
            data={item.data}
            key={`Dash ${i}`}
            color={item.color}
            type={item.type}
            active={item.active}
          />
        ))}
        {TEST_ARRAY.map((item, i) => (
          <TestItemCard
            data={item.data}
            key={`Test ${i}`}
            color={item.color}
            type={item.type}
          />
        ))}
        {PAST_ARRAY.map((item, i) => (
          <PastItemCard
            data={item.data}
            key={`Past ${i}`}
            color={item.color}
            type={item.type}
          />
        ))}
      </div>

      */}
      <div className="flex flex-col pb-[160px] bg-dashboardBg bg-cover bg-top">
        <Header />
        <DashboardContent />
      </div>
    </>
  );
};

export default Dashboard;
