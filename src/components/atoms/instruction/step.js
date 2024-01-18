import { STEP_ARRAY } from "@/constant/constant";

const Step = (props) => {
  return (
    <>
      <div className="flex flex-row justify-start items-center">
        {STEP_ARRAY.map((item, i) => (
          <div className="flex flex-row items-center" key={i}>
            {props.current === i + 1 ? (
              <>
                <div
                  id="sfpro"
                  className="flex justify-center items-center rounded-[2px] font-medium text-[10.94px] leading-[13.06px] -tracking-[2%] text-white bg-loginDarkGray w-[16px] h-[15px]"
                >
                  {i + 1}
                </div>
                <div
                  id="sfpro"
                  className=" font-medium text-[15px] leading-[18px] tracking-[3%] ml-[9px]"
                >
                  {item.name}
                </div>
                <div
                  className={
                    i + 1 == STEP_ARRAY.length
                      ? "hidden"
                      : `w-[1px] h-[23px] bg-[#EFEFEF] mx-[14px]`
                  }
                ></div>
              </>
            ) : (
              <div
                id="sfpro"
                className="flex justify-center items-center rounded-[2px] font-medium text-[10.94px] leading-[13.06px] -tracking-[2%] text-[#64646B] bg-[#EFEFEF] w-[16px] h-[15px] mr-[14px]"
              >
                {i + 1}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Step;
