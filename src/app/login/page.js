"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EYE, EYE_OFF, GRAY_LOGO, LOGIN_MINI_LOGO } from "@/constant/constant";
import MiniLogo from "@/components/atoms/login_register/mini_logo";
import Fixed_Icon from "@/components/atoms/login_register/fixed_icon";
import Purple_Button from "@/components/atoms/login_register/purple_button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState(true);

  const validateLogin = async () => {
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
      alert("şlqdasş");
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

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-loginRegisterBackgroundColor">
        <MiniLogo text={LOGIN_MINI_LOGO} />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta"
          required
          className={`w-[350px] h-[50px] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] mt-[50px] px-[16px] py-[12px] focus:outline-none focus:border-purple focus:border-[1.5px] ${
            passwordError && "!border-solid !border-loginRed !border-[1px]"
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
              passwordError && "!border-solid !border-loginRed !border-[1px]"
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

        <Purple_Button text="Giriş Yap" function={validateLogin} />

        <Link
          href="/password"
          id="sfpro"
          className="text-purple text-[14px] leading-[21px] font-normal mt-[20px] mb-[50px]"
        >
          Şifremi Unuttum
        </Link>
        <p
          id="sfpro"
          className="font-normal text-[14px] leading-[24px] text-loginGray"
        >
          Henüz üye değil misiniz?{" "}
          <Link
            id="sfpro"
            href={"/register"}
            className="font-normal text-[14px] leading-[24px] text-loginDarkGray"
          >
            Hesap oluşturun
          </Link>
        </p>
      </div>
      <Fixed_Icon />
    </>
  );
};

export default Login;
