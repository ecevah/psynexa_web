"use client";
import CustomButton from "@/components/atoms/dashboard/custom_button";
import Header from "@/components/templates/dashboard/header";
import { A4, URL } from "@/constant/constant";
import Image from "next/image";
import React, { useEffect } from "react";
import useVerify from "@/services/auth/auth";
import PageWrapper from "@/components/templates/dashboard/page_wrapper";
import { useFetchResponseReservationsQuery } from "@/services/store";
import PDF from "@/components/templates/pdf";

const Response = ({ params }) => {
  const { verify } = useVerify();
  useEffect(() => {
    verify();
  }, [verify]);
  const { data, isError, isFetching } = useFetchResponseReservationsQuery(
    params.slug
  );
  function formatTarih(tarihString) {
    const tarih = new Date(tarihString);
    const gun = tarih.getDate();
    const ay = tarih.getMonth() + 1;
    const yil = tarih.getFullYear();
    const formatliAy = ay < 10 ? `0${ay}` : ay;
    const formatliGun = gun < 10 ? `0${gun}` : gun;
    const formatliTarih = `${formatliGun}.${formatliAy}.${yil}`;
    return formatliTarih;
  }

  let content;
  if (isFetching) {
    content = <div>Yükleniyor</div>;
  } else if (isError) {
    content = <div>Hata Var</div>;
  } else {
    content = (
      <>
        <div
          id="sfpro"
          className="text-[12px] font-normal leading-[17px] tracking-[1%] text-gray text-center"
        >
          {`${data.talks[0].reservation_id.client_id.name}_${data.talks[0].reservation_id.client_id.surName}_Görüşme_Analizi.pdf`}
        </div>
        <a
          href={`${URL}uploads/pdf/${params.slug}.pdf`}
          download={`${data.talks[0].reservation_id.client_id.name}_${data.talks[0].reservation_id.client_id.surName}_Görüşme_Analizi.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton
            type="document"
            text="Raporu İndir"
            style="w-fit mx-auto mt-[8px] mb-[45px]"
          />
        </a>
        <div className=" drop-shadow-md rounded-xl overflow-hidden">
          <PDF
            name={`${data.talks[0].reservation_id.client_id.name} ${data.talks[0].reservation_id.client_id.surName}`}
            sex={`${data.talks[0].reservation_id.client_id.sex}`}
            number={`${data.talks[0].reservation_id.client_id.number}`}
            date={`${formatTarih(
              data.talks[0].reservation_id.client_id.dateOfBirth
            )}`}
            chart1={`${data.talks[0].disorder_rate}`}
            chart2={`${data.talks[0].head_move}`}
            chart3={`${data.talks[0].emotion}`}
          />
        </div>
      </>
    );
  }

  return (
    <>
      <PageWrapper>
        <div className="flex flex-col items-center">
          <div className="flex flex-col">
            <div
              id="sfpro"
              className="text-[45px] font-medium leading-[74px] tracking-[1%] text-[#18171A] text-center"
            >
              Yapay Zeka - Görüşme Analizi Sonucu
            </div>
            <div
              id="sfpro"
              className="text-[12px] font-normal leading-[17px] tracking-[1%] text-gray text-center w-[800px] mt-[25px] mb-[35px]"
            >
              Yapay Zeka tarafından gerçekleştirilen görüşme analizi sonuçları,
              katılımcıların duygusal ifadelerini ve konuşma dilini inceleyerek
              önemli içgörüler sunar. Bu veriler, psikolojik sağlık
              değerlendirmelerini daha etkili ve kişiselleştirilmiş hale getirme
              amacıyla kullanılır.
            </div>
          </div>
          {content}
        </div>
      </PageWrapper>
    </>
  );
};

export default Response;
