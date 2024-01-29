import "../../app/pdf.css";

const PDF = (props) => {
  return (
    <>
      <div id="pdf-inclusive">
        <div id="pdf-title-inclusive">
          <div id="pdf-title-logo-inclusive">
            <p id="pdf-title-logo-text">BELGE NO:01</p>
            <div id="pdf-title-logo-div">
              <img
                id="pdf-logo"
                src="http://localhost:3000/svg/logo.svg"
                alt="logo"
              ></img>
            </div>
            <p id="pdf-title-logo-text">YAPAY ZEKA</p>
          </div>
          <div id="pdf-title-content-inclusive">
            <p id="pdf-title-content-text">
              PSİKOLOJİK SAĞLIK DEĞERLENDİRMESİ - YAPAY ZEKA ANALİZİ
            </p>
            <p id="pdf-title-content-title">GÖRÜŞME ANALİZİ</p>
          </div>
          <div style={{ width: "135px" }}></div>
        </div>
        <div id="content-border">
          <div id="cover-letter">
            <p id="cover-letter-text">
              Bu rapor, yapay zeka tarafından gerçekleştirilen görüşme analizi
              sonuçlarını görsel olarak temsil eden grafikler içermektedir. Bu
              grafikler, katılımcıların duygusal ifadelerini ve konuşma dilini
              anlamamıza yardımcı olmak için oluşturulmuştur. Ancak, bu
              grafikler sadece bir analiz aracıdır ve kesin sonuçlarını
              yorumlamak için daha fazla bağlam gerekebilir. Raporun ilerleyen
              bölümlerinde, bu grafiklerin daha ayrıntılı açıklamaları
              bulunmaktadır. Lütfen bu grafikleri analiz etmek için diğer rapor
              bölümlerini inceleyiniz ve sonuçları daha kapsamlı bir şekilde
              değerlendirmek için uzman bir görüş almayı göz önünde
              bulundurunuz.
            </p>
            <p id="cover-letter-title">
              Tüm veriler, yapay zekanın görüşme sırasında oluşturduğu analiz
              grafiklerini içerir ve kesin sonuçların yorumlanması için ek
              bağlam gerekebilir.
            </p>
          </div>
          <div id="pdf-gray-title">Hasta Bilgileri</div>
          <div id="patient-information">
            <div id="patient-information-content">
              <p id="patient-information-title">Ad Soyad</p>
              <p id="patient-information-text">{props.name}</p>
            </div>
            <div id="patient-information-content">
              <p id="patient-information-title">Cinsiyet</p>
              <p id="patient-information-text">{props.sex}</p>
            </div>
            <div id="patient-information-content">
              <p id="patient-information-title">Doğum Tarihi</p>
              <p id="patient-information-text">{props.date}</p>
            </div>
            <div id="patient-information-content-last">
              <p id="patient-information-title">Telefon Numarası</p>
              <p id="patient-information-text">{props.number}</p>
            </div>
          </div>
          <div id="pdf-gray-title">Yapay Zeka Görüşme Analizi</div>
          <img
            id="disorder-rate"
            src={`http://localhost:3001/uploads/graph/${props.chart1}`}
            alt="Disorder Rate"
          ></img>
          <img
            id="head_move"
            src={`http://localhost:3001/uploads/graph/${props.chart2}`}
            alt="Head Move"
          ></img>
        </div>
      </div>
      <div id="pdf-inclusive">
        <div id="content-border-second">
          <img
            id="emotion"
            src={`http://localhost:3001/uploads/graph/${props.chart3}`}
            alt="Emotion"
          ></img>
          <div id="pdf-gray-title">
            Psikolojik Sağlık Değerlendirmesi - Psikolog tarafından bilinmesi
            gerekenler
          </div>
          <div id="footer">
            <p id="footer-paragraph">
              Belgeyi elde bulunduran psikolog, Psikolojik Görüşme Analizi’ni
              gözden geçirebilir ve hasta başvurusu üzerine yeni veya yeniden
              görüşme yapabilir.
            </p>
            <p id="footer-paragraph">
              Görüşmenin tekrar kabul edilmesi veya reddedilmesine ilişkin son
              karar psikoloğun sorumluluğundadır.
            </p>
            <p id="footer-paragraph">
              Psikologlarda, tüm bilgileri dikkatlice ve okunaklı bir şekilde
              her bölümü incelemeleri ve Psikolojik Görüşme Analizi’ni
              incelerken bu talimatları takip etmeleri istenmektedir:
            </p>
            <ul className="list-disc">
              <li>
                <b>Görüşme Bilgileri:</b>
                <br />
                LÜTFEN görüşmede yer alan verileri ve tüm bilgileri düzgün bir
                şekilde kontrol edin.
              </li>
              <li>
                <b>Psikolog Raporu:</b>
                <br />
                #1 Uygulanan tüm grafikleri ve durumları inceleyin.
                <br />
                #2 Hastayla takip, süre ve en son muayene dahil olmak üzere
                takip durumunu görüşmede belirtin.
                <br />
                #3 ANAliZLER, GEÇMİŞ RANDEVULARDA KAYDEDİLMİŞ OLARAK
                BEKLEMEKTEDİR. Görüşme bittikten sonra bile geçmişten bu belgeye
                ulaşmanız mümkün kılınmıştır.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PDF;
