"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CAMERA,
  EYE,
  EYE_OFF,
  PROFESSION_OPTIONS,
  REGİSTER_MINI_LOGO,
  TAG_OPTIONS,
  TL_ICON,
} from "@/constant/constant";
import MiniLogo from "@/components/atoms/login_register/mini_logo";
import Fixed_Icon from "@/components/atoms/login_register/fixed_icon";
import Purple_Button from "@/components/atoms/login_register/purple_button";

const Register = () => {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(null);
  const [tag, setTag] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [price, setPrice] = useState("");
  const [profession, setProfession] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [dateError, setDateError] = useState("");
  const [tagError, setTagError] = useState("");
  const [introduceError, setIntroduceError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [professionError, setProfessionError] = useState("");
  const [selectedImageError, setSelectedImageError] = useState("");
  const [introduceLengthError, setIntroduceLengthError] = useState(false);
  const [show, setShow] = useState(true);
  const [check, setCheck] = useState(false);
  const [post, setPost] = useState(false);

  const validateRegister = async () => {
    setEmailError("");
    setPasswordError("");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

    let hasErrors = false;

    if (!email) {
      setEmailError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }

    if (!password) {
      setPasswordError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Şifreniz en az 8 karakter uzunluğunda olmalıdır, en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir."
      );
      hasErrors = true;
    }

    if (!hasErrors) {
      //post
      setPost(true);
      return;
    }

    // If you want to set setCheck(true) here, uncomment the line below
    // setCheck(true);

    /*try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            alert("Giriş başarılı!");
        } else {
            const errorData = await response.json();
            alert(`Giriş başarısız: ${errorData.message}`);
        }
    } catch (error) {
        console.error("Giriş hatası:", error);
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
    }*/
  };

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
      <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-loginRegisterBackgroundColor">
        <MiniLogo text={REGİSTER_MINI_LOGO} />
        <div className="flex flex-row justify-center items-center mt-[20px] mb-[30px]">
          <div
            id="sfpro"
            className="w-[30px] h-[30px] rounded-full bg-purple flex justify-center items-center text-white text-[14px] font-bold cursor-pointer"
            onClick={check ? () => setCheck(false) : null}
          >
            1
          </div>
          <div
            className={
              check
                ? "w-[170px] h-[2px] bg-purple"
                : "w-[170px] h-[1px] bg-loginRegisterInputBorder"
            }
          ></div>
          <div
            className={
              check
                ? "w-[30px] h-[30px] rounded-full bg-purple flex justify-center items-center text-white text-[14px] font-bold"
                : "w-[30px] h-[30px] rounded-full border-solid border-purple border-[2px] flex justify-center items-center text-purple text-[14px] font-bold cursor-default"
            }
          >
            2
          </div>
        </div>
        {check ? (
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta"
              required
              className={`w-[350px] h-[50px] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] ${
                emailError && "!border-solid !border-loginRed !border-[1px]"
              }`}
            />
            {emailError && (
              <div
                id="sfpro"
                className="text-[12px] leading-[20px] font-normal text-loginRed w-[350px] mt-[5px]"
              >
                {emailError}
              </div>
            )}

            <div className="relative">
              <input
                type={show ? "password" : "text"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Şifre"
                required
                className={`w-[350px] h-[50px] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] pl-[16px] pr-[40px] py-[12px] mt-[15px] focus:outline-none focus:border-purple focus:border-[1.5px] ${
                  passwordError &&
                  "!border-solid !border-loginRed !border-[1px]"
                }`}
              />
              <Image
                src={show ? EYE : EYE_OFF}
                width={24}
                height={24}
                alt="show/hide"
                className=" absolute right-[13px] top-[28px]"
                onClick={() => setShow(!show)}
              />
            </div>
            {passwordError && (
              <div
                id="sfpro"
                className="text-[12px] leading-[20px] font-normal text-loginRed w-[350px] mt-[5px]"
              >
                {passwordError}
              </div>
            )}

            <Purple_Button
              text="Kaydı Tamamla"
              function={post ? () => router.push("/login") : validateRegister}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
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
                    width: "111px",
                    height: "111px",
                    border: "1px solid #ccc",
                    position: "relative",
                    cursor: "pointer",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    backgroundColor: "#FFFFFF",
                    marginRight: "14px",
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
                        width={111}
                        height={111}
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
                        width={30}
                        height={30}
                        className="hidden absolute top-[40.5px] z-[123] left-[40.5px] w-[30px]"
                      />
                    </div>
                  ) : (
                    <Image src={CAMERA} alt="Camera" width={30} height={30} />
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="name-surname"
                  name="name-surname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ad Soyad"
                  required
                  className={`w-[350px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] mb-[15px] ${
                    nameError && "!border-solid !border-loginRed !border-[1px]"
                  } `}
                />
                <div className="flex flex-row">
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
                    placeholder="Doğum Tarihi"
                    onFocus={handleDateFocus}
                    onBlur={handleDateBlur}
                    required
                    className={`w-[165px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] mr-[20px] ${
                      dateError &&
                      "!border-solid !border-loginRed !border-[1px] "
                    }`}
                  />
                  <div
                    className={`w-[165px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] bg-white  ${
                      tagError && "!border-solid !border-loginRed !border-[1px]"
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
                        Unvan
                      </option>
                      {TAG_OPTIONS.map((title, index) => (
                        <option key={index} value={title}>
                          {title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row my-[15px] justify-between w-[476px]">
              <div
                className={`w-[230px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] bg-white  ${
                  tagError && "!border-solid !border-loginRed !border-[1px]"
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
                    Uzmanlık Alanı
                  </option>
                  {PROFESSION_OPTIONS.map((title, index) => (
                    <option key={index} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Seans Ücreti"
                  required
                  className={`w-[230px] h-[50px] text-[#999caa] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] ${
                    priceError && "!border-solid !border-loginRed !border-[1px]"
                  }`}
                />
                <Image
                  src={TL_ICON}
                  alt="TL"
                  width={23}
                  height={23}
                  className="absolute right-[10px] top-[13px]"
                />
              </div>
            </div>
            <div className="w-[476px] flex flex-col items-end">
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
                placeholder="Kendinizi tanıtın"
                required
                className={`w-[476px] min-w-[476px] max-w-[476px] text-[#999caa] min-h-[100px] max-h-[250px]  border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] !bg-white px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] ${
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
            {(nameError ||
              tagError ||
              dateError ||
              professionError ||
              priceError ||
              introduceError ||
              selectedImageError) && (
              <div
                id="sfpro"
                className="text-[12px] leading-[20px] font-normal text-loginRed w-[476px]"
              >
                Üzgünüm, ancak alan boş bırakılamaz.
              </div>
            )}

            <button
              id="sfpro"
              className="w-[155px] h-[45px] border-solid border-[1px] border-[rgba(0,0,0,0.10)] rounded-[8px] bg-white mt-[30px] font-medium text-[14px] text-[#2B2A2A] leading-[16.71px] tracking-[3%] hover:bg-[#ECECEC]"
              onClick={validateForm}
            >
              Sonraki
            </button>
          </div>
        )}

        <p
          id="sfpro"
          className="font-normal text-[14px] leading-[24px] text-loginGray mt-[50px]"
        >
          Hesabınız var mı?{" "}
          <Link
            id="sfpro"
            href={"/login"}
            className="font-normal text-[14px] leading-[24px] text-loginDarkGray"
          >
            Giriş Yapın
          </Link>
        </p>
      </div>

      <Fixed_Icon />
    </>
  );
};

export default Register;
