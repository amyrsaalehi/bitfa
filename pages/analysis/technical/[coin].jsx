import Image from "next/image";
// import { useRouter } from "next/router";
import Layout from "src/components/Layout";
import Collapse from "src/components/Shared/Collapse";
import BitcoinImage from "src/images/Bitcoin.png";
import ChartImage from "src/images/Chart.png";

export default function CoinPage() {
  // const router = useRouter();
  // const coin = router.query.coin;

  // query the coin to get data related to the coin

  return (
    <Layout title={"تحلیل بیتکوین"}>
      <div className="flex flex-col py-20">
        <div className="relative w-full h-[300px] mb-6 bg-[#f19c2f]">
          <Image
            src={BitcoinImage}
            alt={"تحلیل بیتکوین"}
            placeholder="blur"
            className="p-8"
            priority
            style={{
              width: "100%",
              height: 300,
              objectFit: "contain",
            }}
          />
        </div>
        <h1 className="f-bold text-center text-4xl md:text-5xl">
          تحلیل بیتکوین
        </h1>
        <div className="flex flex-col gap-4 px-2 md:px-8 pt-12">
          {[
            "۹ آذر ۱۴۰۱",
            "۸ آذر ۱۴۰۱",
            "۷ آذر ۱۴۰۱",
            "۶ آذر ۱۴۰۱",
            "۵ آذر ۱۴۰۱",
            "۴ آذر ۱۴۰۱",
            "۳ آذر ۱۴۰۱",
            "۲ آذر ۱۴۰۱",
            "۱ آذر ۱۴۰۱",
          ].map((date, idx) => (
            <Collapse
              key={idx}
              title={<h2 className="text-xl f-bold">{date}</h2>}
              content={<Content />}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

function Content() {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={ChartImage}
        alt={"تحلیل بیتکوین"}
        placeholder="blur"
        className="rounded-lg"
        style={{
          width: "100%",
          height: 300,
          objectFit: "contain",
        }}
      />
      <p>
        بیت کوین در دو روز گذشته روند رنجی داشت. قیمت بیت کوین در محدوده کانال
        قیمتی 16500 دلار در نوسان بود. امروز با تلاش خریداران قیمت مجددا افزایش
        داشت، و به مقاومت محدوده 16675 الی 16750 دلار واکنش مثبت نشان داده است.
        در تایم فریم 1 ساعته می توانیم یک ناحیه رنج بین محدوده مقاومت ذکر شده تا
        حمایت 16285 الی 16380 دلار مشاهده کنیم همچنین یک خط روند صعودی کوتاه مدت
        که در ویدیو تحلیل رسم شده است، و می تواند برای امروز بسیار کمک کننده
        باشد. شکست هرکدام از سطوح می تواند ادامه روند قیمت بیت کوین را مشخص کند.
        مقاومت بعدی بیت کوین در محدوده 17000 دلار قرار دارد، و همچنین حمایت کف
        بیت کوین نیز در قیمت 15900 الی 15720 دلار است، که مجددا در صورت برخورد
        انتظار واکنش مثبت از این ناحیه داریم.
      </p>
      <h3 className="f-bold text-lg">تحلیل دامیننس بیت کوین:</h3>
      <p>
        دامیننس بیت کوین کف کانال خود را در محدوده 40.20 درصد شکست. این شاخص
        کاملا روند نزولی خود را حفظ کرده است، و می تواند به محدوده حمایت کف
        ماهانه خود مجددا برخورد داشته باشد. حمایتی که در ناحیه 39.85 الی 39 درصد
        قرار دارد. کف حمایتی فعلی دامیننس در محدوده 39.5 درصد می باشد، که رسیدن
        شاخص به این محدوده می تواند در کوتاه مدت اتفاق بیوفتد.
      </p>
      <h3 className="f-bold text-lg">تحلیل شاخص کل بازار (TOTAL):</h3>
      <p>
        شاخص کل بازار هنوز در حال افزایش است و این شاخص داخل یک کانال صعودی
        کوتاه مدت قرار دارد. مقاومت محدوده 800 میلیارد دلار برای این شاخص مقاومت
        بسیار مهمی است. اما به طور کلی تا زمانی که کف کانال در محدوده 780
        میلیارد دلار شکسته نشود، می توانیم انتظار افزایش بیشتر برای حرکت به سمت
        مقاومت 820 و حتی 850 میلیارد دلار را داشته باشیم. توان خریداران و سرمایه
        گذاران می تواند در ادامه روند صعودی نقش تعیین کندده ای داشته باشد. چرا
        که شاخص به سطوحی از مقاومت هایی رسیده است که شکست آن نیازمند حمایت ویژه
        خریداران می باشد.
      </p>
    </div>
  );
}
