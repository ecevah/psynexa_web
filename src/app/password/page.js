"use client";
import { useState } from "react";
import Image from "next/image";
import {
  CLICK,
  GRAY_LOGO,
  GREEN_CLICK,
  MINI_LOGO,
  PASSWORD_MINI_LOGO,
  VERSION,
} from "@/constant/constant";
import MiniLogo from "@/components/atoms/login_register/mini_logo";
import Purple_Button from "@/components/atoms/login_register/purple_button";
import Fixed_Icon from "@/components/atoms/login_register/fixed_icon";
import Link from "next/link";

const Password = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [send, setSend] = useState(false);

  const validatePassword = async () => {
    setEmailError("");
    let hasErrors = false;
    if (!email) {
      setEmailError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }

    if (!hasErrors) {
      return;
    }

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

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-loginRegisterBackgroundColor">
        <MiniLogo text={PASSWORD_MINI_LOGO} />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresinizi girin"
          required
          className={`w-[350px] h-[50px] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] mt-[50px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] ${
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
        {send && (
          <div
            id="sfpro"
            className="w-[350px] h-[25px] bg-[#EDFDF8] py-[5.83px] px-[16.33px] flex flex-row justify-start items-center rounded-[4px] mt-[5px]"
          >
            <Image src={GREEN_CLICK} width={13.33} height={13.33} alt="tick" />
            <div
              id="sfpro"
              className="font-normal text-[12px] leading-[12px] text-[#1D2433] ml-[5.33px]"
            >
              Yeni şifreniz e-posta adresinize iletilmiştir.
            </div>
          </div>
        )}
        <Purple_Button text="Gönder" function={validatePassword} />
        <Link
          id="sfpro"
          className="text-[#00000080] text-[14px] leading-[21px] font-normal mt-[20px] mb-[50px] underline underline-offset-1"
          href="/login"
        >
          Giriş formuna dön
        </Link>
      </div>
      <Fixed_Icon text={VERSION} />
    </>
  );
};

export default Password;
