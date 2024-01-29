import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonItem = (props) => {
  return (
    <>
      <div className="flex flex-row px-[50px] py-[29.5px] justify-between items-center border-solid border-[1.5px] border-grayLight rounded-[8px] shadow-sm mb-[20px]">
        <div className="flex flex-row">
          <Skeleton className="mr-[20px]" width={50} height={50} />
          <div className="flex flex-col h-full">
            <Skeleton className="mb-[7px]" width={100} height={20} />
            <Skeleton className="" width={100} height={20} />
          </div>
        </div>
        <div className="flex flex-col h-full">
          <Skeleton className="mb-[7px]" width={200} height={20} />
          <Skeleton className="" width={200} height={20} />
        </div>
        <div className="flex flex-row h-full items-center">
          <Skeleton className="mr-[20px]" width={120} height={40} />
          <Skeleton className="" width={120} height={40} />
        </div>
      </div>
    </>
  );
};

export default SkeletonItem;
