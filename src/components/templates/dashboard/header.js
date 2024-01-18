import React, { useState, useRef } from "react";
import Notification from "@/components/organisms/dashboard/notification";
import {
  ARRAY_DASHBOARD_HEADER_ITEM_BUTTON,
  MINI_LOGO,
  NOTIFICATION,
  NOTIFICATION_FILL,
  TR_FLAG,
} from "@/constant/constant";
import Image from "next/image";
import DashboardHeaderMultiItemButton from "@/components/monecules/dashboard/multi_dashboard_header_item_button";

const Header = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const notificationRef = useRef(null);

  const closeNotificationWithDelay = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  return (
    <div className="flex flex-row justify-between pt-[24px] px-[32px] pb-[159px]">
      <Image src={MINI_LOGO} alt="mini_logo" width={24} height={24} />
      <DashboardHeaderMultiItemButton
        data={ARRAY_DASHBOARD_HEADER_ITEM_BUTTON}
      />
      <div className="flex flex-row items-center">
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={closeNotificationWithDelay}
        >
          <Image
            src={
              isHovered || isNotificationVisible
                ? NOTIFICATION_FILL
                : NOTIFICATION
            }
            alt="notif"
            width={14}
            height={17.5}
          />
          {(isHovered || isNotificationVisible) && (
            <div
              ref={notificationRef}
              onMouseEnter={() => {
                setIsHovered(true);
                setIsNotificationVisible(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setIsNotificationVisible(false);
              }}
            >
              <Notification />
            </div>
          )}
        </div>
        <Image
          src={TR_FLAG}
          alt="flag"
          width={22.53}
          height={15}
          className="ml-[25px]"
        />
      </div>
    </div>
  );
};

export default Header;
