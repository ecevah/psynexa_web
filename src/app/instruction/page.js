"use client";
import Step from "@/components/atoms/instruction/step";
import MiniLogo from "@/components/atoms/login_register/mini_logo";
import {
  DOCUMENT,
  FILE,
  STEP_1_PARAGRAPH,
  STEP_1_TEXT,
  STEP_1_TITLE,
  STEP_ARRAY,
  UPLOAD,
} from "@/constant/constant";
import { useState } from "react";
import Image from "next/image";
import UserAgreement from "@/components/atoms/instruction/user_agreement";

const Instruction = (props) => {
  const [current, setCurrent] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [userAgreement, setUserAgreement] = useState(false);
  const [securityPolicy, setSecurityPolicy] = useState(false);
  const [error, setError] = useState(false);
  const step = async (isNext) => {
    if (isNext) {
      if (current != STEP_ARRAY.length) {
        setCurrent(current + 1);
      }
    } else {
      if (current != 1) {
        setCurrent(current - 1);
      }
    }
  };

  const handleFileChange = (event) => {
    setError(false);
    setSelectedFiles([]);
    const files = event.target.files;

    const acceptedFiles = Array.from(files)
      .filter((file) => file.type === "application/pdf")
      .slice(0, 3);

    if (acceptedFiles.length > 0) {
      setSelectedFiles(acceptedFiles);
    } else {
      alert("Lütfen geçerli bir PDF dosyası seçin.");
      setSelectedFiles([]);
      event.target.value = null;
    }

    if (files.length > 3) {
      alert("Fazla dosya seçildi. Sadece 3 dosya seçebilirsiniz.");
      setSelectedFiles([]);
      event.target.value = null;
    }
  };

  const handleNextButtonActive = () => {
    if (current == 1) {
      if (selectedFiles.length > 0) {
        step(true);
        setError(false);
      } else {
        setError(true);
      }
    }
    if (current == 2) {
      if (userAgreement) {
        step(true);
        setError(false);
      } else {
        setError(true);
      }
    }
    if (current == 3) {
      if (securityPolicy) {
        step(true);
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  return (
    <>
      <div className="w-full h-[100vh] bg-[#F9FAFB] flex flex-col items-center">
        <div className="w-full bg-white drop-shadow pt-[82px] pb-[23px] mb-[60px]">
          <div className="flex flex-rox justify-between items-end layout">
            <MiniLogo text="Psynexa Sistem Başvuru Süreci" />
            <Step current={current} />
          </div>
        </div>
        <div className="layout mb-[40px]">
          <div className="bg-white drop-shadow-sm rounded-[8px] flex flex-col px-[22px] py-[31px]">
            <div className="flex flex-row items-center justify-between mb-[25px]">
              <div className="flex flex-row items-center">
                <Image src={DOCUMENT} alt="document" width={24} height={24} />
                <div
                  id="sfpro"
                  className="text-[#18171A] font-medium text-[16px] leading-[19px] tracking-[3%] ml-[6.25px]"
                >
                  {STEP_ARRAY[current - 1].title}
                </div>
              </div>
              <div
                className={`${
                  current == 1 ? "flex" : "hidden"
                }  flex-row items-center`}
              >
                <progress
                  id="progress"
                  value={selectedFiles.length}
                  max={3}
                ></progress>
                <div
                  id="sfpro"
                  className={`font-normal text-[12px] leading-[20px] tracking-[3%] text-[#5C5C64] ml-[9px]`}
                >{`${selectedFiles.length}/3`}</div>
              </div>
            </div>
            <div className={`${current == 1 ? "flex" : "hidden"} flex-col`}>
              <p
                id="sfpro"
                className="font-normal text-[12px] leading-[20px] tracking-[4%] text-[#58585F] my-[25px]"
              >
                {STEP_1_PARAGRAPH}
              </p>

              <div className="flex flex-row justify-start items-center mb-[40px]">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="w-[279px] h-[45px] rounded-[5px] py-[10px] pl-[28px] flex flex-row items-center justify-start bg-[#F9FAFB] mr-[34.5px]"
                  >
                    <Image src={FILE} alt="file" width={24} height={24} />
                    <p
                      id="sfpro"
                      className=" font-medium text-[12px] leading-[14.32px] tracking-[3%]"
                    >
                      {file.name}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-row justify-between items-center border-solid border-[#DFDFDF] px-[22px] py-[39px] border-[1px] rounded-[8px] ">
                <div
                  className={`${
                    selectedFiles.length > 0
                      ? "bg-tick bg-cover bg-center"
                      : "bg-white border-solid border-[1.5px] border-[#DFDFDF]"
                  } rounded-full  w-[21px] h-[21px] flex justify-center items-center`}
                ></div>
                <div className="flex flex-col w-[calc(100%-178px)]">
                  <div
                    id="sfpro"
                    className="font-medium text-[15px] leading-[18px] tracking-[3%] text-[#18171A]"
                  >
                    {STEP_1_TITLE}
                  </div>
                  <div
                    id="sfpro"
                    className="font-normal text-[12px] leading-[20px] tracking-[5%] text-[#18171A] mt-[15px]"
                  >
                    {STEP_1_TEXT}
                  </div>
                </div>
                <label
                  htmlFor="fileInput"
                  className={`flex flex-row items-center justify-center rounded-[5px] w-[115px] h-[50px] bg-[#F9FAFB] ${
                    error ? "border-solid border-[1px] border-loginRed" : ""
                  }`}
                >
                  <Image src={UPLOAD} alt="upload" width={20} height={20} />
                  <div
                    id="sfpro"
                    className="font-medium text-[12px] leading-[14.32px] tracking-[3%] text-[#2B2A2A]"
                  >
                    Yükle
                  </div>
                </label>
                <input
                  id="fileInput"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  multiple
                  style={{ display: "none" }}
                />
              </div>
            </div>
            <div
              className={`${
                current == 2 ? "flex" : "hidden"
              } flex-col px-[30px]`}
            >
              <UserAgreement />
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="Kullanıcı Sözleşmesi"
                  value={userAgreement}
                  onChange={(e) => setUserAgreement(!userAgreement)}
                  id="checkbox"
                />
                <div
                  id="sfpro"
                  className="font-semibold text-[12px] leading-[18px] tracking-[3%] text-[#18171A] ml-[5px]"
                >
                  Kişisel verilerinin işlenmesine yönelik Aydınlatma Metni’ni
                  okudum ve anladım.*
                </div>
              </div>
            </div>
            <div
              className={`${
                current == 3 ? "flex" : "hidden"
              } flex-col px-[30px]`}
            >
              <UserAgreement />
              <div className="flex flex-row">
                <input
                  type="checkbox"
                  name="Kullanıcı Sözleşmesi"
                  value={securityPolicy}
                  onChange={(e) => setSecurityPolicy(!securityPolicy)}
                  id="checkbox"
                />
                <div
                  id="sfpro"
                  className="font-semibold text-[12px] leading-[18px] tracking-[3%] text-[#18171A] ml-[5px]"
                >
                  Gizlilik Politikasını okudum ve anladım.*
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <button
            onClick={() => step(false)}
            id="sfpro"
            className={
              current == 1
                ? "hidden"
                : `px-[40px] py-[15px] mr-[15px] bg-white rounded-[8px] drop-shadow-sm font-medium text-[12px] leading-[14.32px] tracking-[3%] hover:bg-[#ECECEC]`
            }
          >
            Önceki
          </button>
          <button
            onClick={handleNextButtonActive}
            id="sfpro"
            className={`px-[40px] py-[15px] bg-white rounded-[8px] drop-shadow-sm font-medium text-[12px] leading-[14.32px] tracking-[3%] hover:bg-[#ECECEC]`}
          >
            Sonraki
          </button>
        </div>
        <div
          id="sfpro"
          className={
            error
              ? "text-[12px] leading-[20px] font-normal text-loginRed w-[350px] mt-[5px] text-center"
              : "hidden"
          }
        >
          Öncülleri tamamlamanız gerekmektedir
        </div>
      </div>
    </>
  );
};

export default Instruction;
