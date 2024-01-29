"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  EYE,
  EYE_OFF,
  GRAY_LOGO,
  LOGIN_MINI_LOGO,
  URL,
} from "@/constant/constant";
import MiniLogo from "@/components/atoms/login_register/mini_logo";
import Fixed_Icon from "@/components/atoms/login_register/fixed_icon";
import Purple_Button from "@/components/atoms/login_register/purple_button";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [show, setShow] = useState(true);
  const validateLogin = async () => {
    setEmailError("");
    setPassError("");
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

    let hasErrors = false;

    if (!email) {
      setEmailError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    }

    /*if (!pass) {
      setPassError("Üzgünüm, ancak bu alan boş bırakılamaz.");
      hasErrors = true;
    } else if (!passRegex.test(pass)) {
      setPassError(
        "Şifreniz en az 8 karakter uzunluğunda olmalıdır, en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir."
      );
      hasErrors = true;
    }*/

    if (!hasErrors) {
      try {
        const response = await fetch(`${URL}api/psyc/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, pass }),
        });
        const responseData = await response.json();
        if (responseData.status) {
          const token = responseData.token;
          const id = responseData.psychologist._id;
          localStorage.setItem("token", token);
          localStorage.setItem("id", id);
          console.log(responseData.psychologist._id);
          router.push(`/dashboard`);
        } else {
          const errorData = await response.json();
          console.error("Giriş hatası:", errorData);
          alert(`Giriş başarısız: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Giriş hatası:", error);
        alert("Bir hata oluştu. Lütfen tekrar deneyin.");
      }
      return;
    }
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
            passError && "!border-solid !border-loginRed !border-[1px]"
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
            type={show ? "pass" : "text"}
            id="pass"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Şifre"
            required
            className={`w-[350px] h-[50px] border-solid border-[1px] border-loginRegisterInputBorder rounded-[5px] pl-[16px] pr-[40px] py-[12px] mt-[15px] focus:outline-none focus:border-purple focus:border-[1.5px] ${
              passError && "!border-solid !border-loginRed !border-[1px]"
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
        {passError && (
          <div
            id="sfpro"
            className="text-[12px] leading-[20px] font-normal text-loginRed w-[350px] mt-[5px]"
          >
            {passError}
          </div>
        )}

        <Purple_Button text="Giriş Yap" function={validateLogin} />

        <Link
          href="/pass"
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
