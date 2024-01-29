import { URL } from "@/constant/constant";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function useVerify() {
  const router = useRouter();

  const verify = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        axios.defaults.headers.common["x-access-token"] = `${token}`;
      }
      const response = await axios.get(`${URL}api/verify`);

      if (response.data.status === true) {
        // Doğrulama başarılıysa true döndür
        return true;
      } else {
        // Doğrulama başarısızsa, giriş sayfasına yönlendir ve false döndür
        router.push("/login");
        return false;
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return { verify };
}
