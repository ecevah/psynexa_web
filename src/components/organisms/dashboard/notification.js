import NotifItem from "@/components/atoms/dashboard/notif_item";
import NotifSolid from "@/components/atoms/dashboard/notif_solid";
import { NOTIFICATION, NOTIF_ARRAY } from "@/constant/constant";

const Notification = (props) => {
  return (
    <>
      <div className="absolute w-[438.54px] h-[517.78px] bg-white top-[65px] right-[83.46px] shadow-md rounded-[5px] flex flex-col px-[15px] overflow-y-auto">
        <div
          id="sfpro"
          className="text-[#1A1F36] font-medium leading-[18.57px] mt-[11.61px] mr-auto mb-[15px] "
        >
          Bildirimler
        </div>
        {NOTIF_ARRAY.map((item, i) => (
          <div key={`Notif ${i}`} className="pb-[11px]">
            <NotifItem
              bold1={item.bold1}
              text1={item.text1}
              bold2={item.bold2}
              text2={item.text2}
              text={item.text}
              buttonText={item.buttonText}
              date={item.date}
              time={item.time}
            />
            {NOTIF_ARRAY.length > i + 1 ? <NotifSolid /> : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default Notification;
