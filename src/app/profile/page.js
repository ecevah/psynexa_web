"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/templates/dashboard/header";
import {
  CAMERA,
  GREEN_CLICK,
  PROFESSION_OPTIONS,
  PROFILE_ITEM,
  PROFILE_TEXT,
  TAG_OPTIONS,
  TL_ICON,
} from "@/constant/constant";
import CustomButton from "@/components/atoms/dashboard/custom_button";

const Profile = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState(undefined);
  const [date, setDate] = useState(undefined);
  const [tag, setTag] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [price, setPrice] = useState(undefined);
  const [profession, setProfession] = useState("");
  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  const [tagError, setTagError] = useState("");
  const [introduceError, setIntroduceError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [professionError, setProfessionError] = useState("");
  const [selectedImageError, setSelectedImageError] = useState("");
  const [introduceLengthError, setIntroduceLengthError] = useState(false);
  const [check, setCheck] = useState(false);

  const validateForm = async () => {
    setNameError("");
    setTagError("");
    setDateError("");
    setProfessionError("");
    setPriceError("");
    setIntroduceError("");
    setSelectedImageError("");

    let hasErrors = false;

    if (!name) {
      setNameError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }
    if (!tag) {
      setTagError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }
    if (!date) {
      setDateError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }
    if (!profession) {
      setProfessionError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }
    if (!price) {
      setPriceError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }
    if (!introduce) {
      setIntroduceError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }
    if (!selectedImage) {
      setSelectedImageError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }

    if (!hasErrors) {
      setCheck(true);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const maxFileSize = 1024 * 1024;

    if (file) {
      if (file.size > maxFileSize) {
        alert("Dosya boyutu çok büyük. Lütfen 1 MB'den küçük bir dosya seçin.");
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const fileInputRef = React.createRef();
  const MAX_INTRODUCE_LENGTH = 300;
  const today = new Date();
  const minBirthdate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const formattedMinBirthdate = minBirthdate.toISOString().split("T")[0];
  const handleDateFocus = () => {
    const dateInput = document.getElementById("date");
    if (dateInput.value === "") {
      dateInput.setAttribute("type", "date");
    }
  };
  const handleDateBlur = () => {
    const dateInput = document.getElementById("date");
    if (dateInput.value === "gg.aa.yyyy") {
      dateInput.setAttribute("type", "date");
      dateInput.value = date;
    }
  };
  return (
    <>
      <div className="flex flex-col pb-[160px] bg-dashboardBg bg-cover bg-top">
        <Header />
        <div className="flex flex-col dashLayout">
          <div
            id="sfpro"
            className="font-medium text-[52px] leading-[74px] tracking-[1%] text-[#18171A]"
          >
            Profil Ayarları
          </div>
          <div
            id="sfpro"
            className="font-normal text-[12px] leading-[17px] tracking-[1%] text-gray mt-[32px] w-[620px]"
          >
            {PROFILE_TEXT}
          </div>
          <div
            id="sfpro"
            className={`${
              check ? "flex" : "hidden"
            } w-[350px] h-[25px] bg-[#EDFDF8] py-[5.83px] px-[16.33px] flex-row justify-start items-center rounded-[4px] mt-[32px]`}
          >
            <Image src={GREEN_CLICK} width={13.33} height={13.33} alt="tick" />
            <div
              id="sfpro"
              className="font-normal text-[12px] leading-[12px] text-[#1D2433] ml-[5.33px]"
            >
              Başvurunuz Onaylanmıştır.
            </div>
          </div>
          <div className="flex flex-col justify-center items-start mt-[50px] w-full">
            <div className="flex flex-row">
              <div>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  accept="image/*"
                  required
                />
                <div
                  onClick={handleImageClick}
                  style={{
                    width: "155px",
                    height: "155px",
                    border: "1px solid #ccc",
                    position: "relative",
                    cursor: "pointer",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    backgroundColor: "#FFFFFF",
                    marginRight: "59px",
                  }}
                  className={`${
                    nameError && "!border-solid !border-loginRed !border-[1px]"
                  }`}
                >
                  {selectedImage ? (
                    <div
                      className="w-full h-full relative"
                      id="image-selected-button"
                    >
                      <Image
                        src={selectedImage}
                        alt="Selected"
                        width={155}
                        height={155}
                        id="selected-image"
                        style={{
                          objectFit: "cover",
                          borderRadius: "100%",
                          width: "100%",
                          height: "100%",
                          zIndex: "1",
                        }}
                      />
                      <Image
                        id="camera-image"
                        src={CAMERA}
                        alt="Selected"
                        style={{
                          objectFit: "contain",
                        }}
                        width={50}
                        height={50}
                        className="hidden absolute top-[43%] z-[123] left-[40.5%] w-[30px]"
                      />
                    </div>
                  ) : (
                    <Image src={CAMERA} alt="Camera" width={50} height={50} />
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row mb-[15px]">
                  <div className="flex flex-col mr-[40px]">
                    <label
                      id="sfpro"
                      className="font-medium text-[13px] leading-[15.51px] tracking-[1%] text-gray mb-[8px]"
                    >
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name-surname"
                      name="name-surname"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={PROFILE_ITEM.name}
                      required
                      className={`w-[216px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px]  ${
                        nameError &&
                        "!border-solid !border-loginRed !border-[1px]"
                      } `}
                    />
                    {nameError && (
                      <div
                        id="sfpro"
                        className="text-[12px] leading-[20px] font-normal text-loginRed"
                      >
                        Üzgünüm, ancak alan boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label
                      id="sfpro"
                      className="font-medium text-[13px] leading-[15.51px] tracking-[1%] text-gray mb-[8px]"
                    >
                      Doğum Tarihi
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        console.log(date);
                      }}
                      max={formattedMinBirthdate}
                      placeholder={PROFILE_ITEM.date}
                      onFocus={handleDateFocus}
                      onBlur={handleDateBlur}
                      required
                      className={`w-[216px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] mr-[20px] ${
                        dateError &&
                        "!border-solid !border-loginRed !border-[1px] "
                      }`}
                    />
                    {dateError && (
                      <div
                        id="sfpro"
                        className="text-[12px] leading-[20px] font-normal text-loginRed"
                      >
                        Üzgünüm, ancak alan boş bırakılamaz.
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-col mr-[40px]">
                    <label
                      id="sfpro"
                      className="font-medium text-[13px] leading-[15.51px] tracking-[1%] text-gray mb-[8px]"
                    >
                      Unvan
                    </label>
                    <div
                      className={`w-[216px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] bg-white  ${
                        tagError &&
                        "!border-solid !border-loginRed !border-[1px]"
                      }`}
                    >
                      <select
                        id="sfpro"
                        name="tag"
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                        required
                        className="w-full bg-transparent"
                      >
                        <option value="" disabled hidden>
                          {PROFILE_ITEM.tag}
                        </option>
                        {TAG_OPTIONS.map((title, index) => (
                          <option key={index} value={title}>
                            {title}
                          </option>
                        ))}
                      </select>
                    </div>
                    {tagError && (
                      <div
                        id="sfpro"
                        className="text-[12px] leading-[20px] font-normal text-loginRed"
                      >
                        Üzgünüm, ancak alan boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col mr-[40px]">
                    <label
                      id="sfpro"
                      className="font-medium text-[13px] leading-[15.51px] tracking-[1%] text-gray mb-[8px]"
                    >
                      Uzmanlık Alanı
                    </label>
                    <div
                      className={`w-[250px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] bg-white  ${
                        tagError &&
                        "!border-solid !border-loginRed !border-[1px]"
                      }`}
                    >
                      <select
                        id="sfpro"
                        name="profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        required
                        className="w-full bg-transparent"
                      >
                        <option value="" disabled hidden>
                          {PROFILE_ITEM.profession}
                        </option>
                        {PROFESSION_OPTIONS.map((title, index) => (
                          <option key={index} value={title}>
                            {title}
                          </option>
                        ))}
                      </select>
                    </div>
                    {professionError && (
                      <div
                        id="sfpro"
                        className="text-[12px] leading-[20px] font-normal text-loginRed"
                      >
                        Üzgünüm, ancak alan boş bırakılamaz.
                      </div>
                    )}
                  </div>
                  <div className="relative flex flex-col">
                    <label
                      id="sfpro"
                      className="font-medium text-[13px] leading-[15.51px] tracking-[1%] text-gray mb-[8px]"
                    >
                      Seans Ücreti
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder={PROFILE_ITEM.price}
                      required
                      className={`w-[152px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] ${
                        priceError &&
                        "!border-solid !border-loginRed !border-[1px]"
                      }`}
                    />
                    <Image
                      src={TL_ICON}
                      alt="TL"
                      width={23}
                      height={23}
                      className="absolute left-[123px] top-[37px]"
                    />
                    {priceError && (
                      <div
                        id="sfpro"
                        className="text-[12px] leading-[20px] font-normal text-loginRed"
                      >
                        Üzgünüm, ancak alan boş bırakılamaz.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-[20px] w-[912px]">
              <label
                id="sfpro"
                className="font-medium text-[13px] leading-[15.51px] tracking-[1%] text-gray mb-[8px]"
              >
                Hakkında
              </label>
              <div className="flex flex-col items-end w-full">
                <textarea
                  id="introduce"
                  name="introduce"
                  value={introduce}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (inputValue.length <= MAX_INTRODUCE_LENGTH) {
                      setIntroduce(inputValue);
                      setIntroduceLengthError(false);
                    } else {
                      setIntroduceLengthError(true);
                    }
                  }}
                  placeholder={PROFILE_ITEM.introduce}
                  required
                  className={`w-full text-[#999caa] min-h-[200px] max-h-[250px]  border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] !bg-white px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] ${
                    introduceError &&
                    "!border-solid !border-loginRed !border-[1px]"
                  } ${
                    introduceLengthError == true
                      ? "!border-solid !border-loginRed !border-[1px]"
                      : null
                  }`}
                />
                <div className="w-full flex flex-row justify-between items-center">
                  <p className="text-[12px] leading-[20px] font-normal text-loginRed">
                    {introduceLengthError &&
                      "En fazla 300 karakter girebilirsiniz."}
                  </p>
                  <p className="text-[12px] leading-[20px] font-normal text-homePageLightGray">
                    {introduce.length}/{MAX_INTRODUCE_LENGTH}
                  </p>
                </div>
              </div>
            </div>

            {introduceError && (
              <div
                id="sfpro"
                className="text-[12px] leading-[20px] font-normal text-loginRed"
              >
                Üzgünüm, ancak alan boş bırakılamaz.
              </div>
            )}
          </div>
          <CustomButton
            type="no-icon"
            text="Kaydet"
            style="w-fit mx-auto"
            function={validateForm}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
