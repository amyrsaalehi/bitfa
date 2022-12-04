import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineWarning,
} from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import Layout from "src/components/Layout";
import { separateNumberDigits } from "src/helpers/typography";

const TradingView = dynamic(() => import("src/components/Shared/TradingView"), {
  ssr: false,
});
// import TradingView from "src/components/Shared/TradingView";

export default function CoinPage({ data }) {
  return (
    <Layout
      title={data.meta_title}
      description={data.meta_description}
      keywords={data.meta_keywords}
    >
      <div className="max-w-[1280px] mx-auto flex flex-col py-16 px-2">
        <div className="breadcrumbs mt-4 mb-8">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/coins">قیمت رمزارز‌ها</Link>
            </li>
            <li className="text-base-content/60">
              قیمت لحظه‌ای {data.fa_name}
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full flex flex-col justify-between p-6 rounded-xl bg-base-300/30 shadow-lg">
            <div className="flex justify-between flex-col lg:flex-row gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={data.logo}
                    alt="بیت‌کوین"
                    priority
                    width={60}
                    height={60}
                  />
                  <h1 className="text-2xl f-bold text-primary">
                    {data.fa_name}
                  </h1>
                  <span className="text-base-content/60">
                    ({data.symbol.toUpperCase()})
                  </span>
                  {/* <button className="btn btn-ghost btn-circle ml-auto">
                    <AiOutlineStar size={30} className="text-primary" />
                  </button> */}
                </div>
                <div className="flex items-center gap-4">
                  {/* <div className="flex items-center gap-1">
                    <BiMedal size={20} />{" "}
                    <span className="text-xl -mb-1">{data.rank}</span>
                  </div> */}
                  {/* <div className="flex items-center gap-1">
                    <AiOutlineStar size={20} />{" "}
                    <span className="text-xl">۴,۲۳۲</span>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>قیمت لحظه‌ای</p>
                <div className="flex items-center gap-4">
                  <p className="flex gap-1">
                    <span className="text-4xl f-bold">
                      {separateNumberDigits(data.price)}
                    </span>{" "}
                    <span className="text-sm">$</span>
                  </p>
                  <div
                    className={`flex items-center gap-1 ${
                      data.percent_change_1h > 0 ? "text-success" : "text-error"
                    }`}
                  >
                    <p dir="ltr">
                      <span className="text-lg f-bold">
                        {data.percent_change_1h}
                      </span>
                      <span>%</span>
                    </p>
                  </div>
                </div>
                {/* <button className="btn btn-outline btn-primary btn-sm">
                  آلارم قیمت
                </button> */}
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <a className="btn btn-circle btn-ghost">
                <FaTelegramPlane size={25} />
              </a>
              <a className="btn btn-circle btn-ghost">
                <AiFillInstagram size={25} />
              </a>
              <a className="btn btn-circle btn-ghost">
                <FaDiscord size={25} />
              </a>
              <a className="btn btn-circle btn-ghost">
                <AiOutlineTwitter size={28} />
              </a>
              <a className="btn btn-circle btn-ghost">
                <AiFillYoutube size={25} />
              </a>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 p-6 rounded-xl bg-base-300/30 shadow-lg">
            <div className="flex justify-between gap-2">
              <h2 className="text-xl f-bold text-primary">
                درباره {data.fa_name}
              </h2>
              <button className="flex items-center gap-1 btn btn-outline btn-warning btn-sm">
                <span className="mt-1">گزارش خطا</span>
                <AiOutlineWarning size={15} />
              </button>
            </div>
            <p className="leading-8 text-justify">
              همه چیز از سال ۲۰۰۸ و انتشار مقاله‌ای که نوعی پول الکترونیک به نام
              {data.fa_name} در آن معرفی شده بود آغاز شد. هویت ناشناسی به نام
              ساتوشی ناکاموتو آغازگر انقلابی بود که سال‌ها بعد به تیتر اول
              رسانه‌ها تبدیل شد و اقتصاددانان را به بحث‌های نظری گسترده درباره
              آن وادار کرد.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div className="w-full">
            <div className="w-full flex flex-col gap-2 p-6 rounded-xl bg-base-300/30 shadow-lg">
              <h2 className="f-bold text-xl mb-4 text-primary">
                آنالیز {data.fa_name}
              </h2>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  قیمت {data.fa_name} (دلار)
                </h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    {separateNumberDigits(data.price)}
                  </span>{" "}
                  <span className="text-sm">$</span>
                </p>
              </div>
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  قیمت {data.fa_name} (ریال)
                </h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">614,565,914</span>{" "}
                  <span className="text-sm">تومان</span>
                </p>
              </div> */}
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">حجم کل بازار</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    {separateNumberDigits(data.volume_24h)}
                  </span>{" "}
                  <span className="text-sm">$</span>
                </p>
              </div>
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تسلط به بازار</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">16,36.47</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div> */}
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  حجم معاملات روزانه
                </h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    {separateNumberDigits(data.volume_24h)}
                  </span>{" "}
                  <span className="text-sm">$</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <div className="flex flex-col">
                  <h3 className="font-bold tex-sm md:text-lg">
                    پایین ترین/بالاترین
                  </h3>
                  <p className="text-sm text-base-content/70">
                    قیمت 24 ساعت اخیر
                  </p>
                </div>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    {separateNumberDigits(data.low_24h)}
                  </span>
                  <span className="text-sm">$</span>
                  <span className="text-sm">/</span>
                  <span className="f-bold font-bold text-lg">
                    {separateNumberDigits(data.high_24h)}
                  </span>{" "}
                  <span className="text-sm">$</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">رتبه در بازار</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">{data.rank}</span>{" "}
                  <span className="text-sm">#</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">اوج قیمت دلاری</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    {separateNumberDigits(data.ath_price)}
                  </span>{" "}
                  <span className="text-sm">$</span>
                </p>
              </div>
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">اوج قیمت ریالی</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    1,962,421,875
                  </span>{" "}
                  <span className="text-sm">تومان</span>
                </p>
              </div> */}
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات ۱ ساعته</h3>
                <p
                  className={`flex items-center gap-1 ${
                    data.percent_change_1h > 0 ? "text-success" : "text-error"
                  }`}
                  dir="ltr"
                >
                  <span className="f-bold font-bold text-lg">
                    {data.percent_change_1h}
                  </span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات ۱ روزه</h3>
                <p
                  className={`flex items-center gap-1 ${
                    data.percent_change_24h > 0 ? "text-success" : "text-error"
                  }`}
                  dir="ltr"
                >
                  <span className="f-bold font-bold text-lg">
                    {data.percent_change_24h}
                  </span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات ۱ هفته</h3>
                <p
                  className={`flex items-center gap-1 ${
                    data.percent_change_7d > 0 ? "text-success" : "text-error"
                  }`}
                  dir="ltr"
                >
                  <span className="f-bold font-bold text-lg">
                    {data.percent_change_7d}
                  </span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات ۲ هفته</h3>
                <p
                  className={`flex items-center gap-1 ${
                    data.percent_change_14d > 0 ? "text-success" : "text-error"
                  }`}
                  dir="ltr"
                >
                  <span className="f-bold font-bold text-lg">
                    {data.percent_change_14d}
                  </span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات ۱ ماهه</h3>
                <p
                  className={`flex items-center gap-1 ${
                    data.percent_change_30d > 0 ? "text-success" : "text-error"
                  }`}
                  dir="ltr"
                >
                  <span className="f-bold font-bold text-lg">
                    {data.percent_change_30d}
                  </span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات ۲ ماهه</h3>
                <p
                  className={`flex items-center gap-1 ${
                    data.percent_change_60d > 0 ? "text-success" : "text-error"
                  }`}
                  dir="ltr"
                >
                  <span className="f-bold font-bold text-lg">
                    {data.percent_change_60d}
                  </span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات ۳ ماهه</h3>
                <p
                  className={`flex items-center gap-1 ${
                    data.percent_change_90d > 0 ? "text-success" : "text-error"
                  }`}
                  dir="ltr"
                >
                  <span className="f-bold font-bold text-lg">
                    {data.percent_change_90d}
                  </span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  تغییرات ۲۰۰ روزه
                </h3>
                <p
                  className={`flex items-center gap-1 ${
                    data.percent_change_200d > 0 ? "text-success" : "text-error"
                  }`}
                  dir="ltr"
                >
                  <span className="f-bold font-bold text-lg">
                    {data.percent_change_200d}
                  </span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تاریخ پیدایش</h3>
                <p className="f-bold font-bold text-lg">{data.genesis_date}</p>
              </div>
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">سختی استخراج</h3>
                <p className="flex items-center gap-1">
                  <span className="text-sm">T</span>{" "}
                  <span className="f-bold font-bold text-lg">15.78</span>
                </p>
              </div> */}
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  کل بلاک‌های ساخته‌شده
                </h3>
                <p className="f-bold font-bold text-lg">636,110</p>
              </div> */}
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  تراکنش ها بر ثانیه
                </h3>
                <p className="f-bold font-bold text-lg">3.81</p>
              </div> */}
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  تراکنش های امروز
                </h3>
                <p className="f-bold font-bold text-lg">329,828</p>
              </div> */}
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">سایز بلاک چین</h3>
                <p className="flex items-center gap-1">
                  <span className="text-sm">Gb</span>{" "}
                  <span className="f-bold font-bold text-lg">195.13</span>
                </p>
              </div> */}
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">الگوریتم هش</h3>
                <p className="f-bold font-bold text-lg">
                  {data.hashing_algorithm}
                </p>
              </div>
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">هش ریت</h3>
                <p className="flex items-center gap-1">
                  <span className="text-sm">m Th/s</span>{" "}
                  <span className="f-bold font-bold text-lg">123.19</span>
                </p>
              </div> */}
              {/* <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">زمان ساخت بلاک</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">8.39</span>{" "}
                  <span className="text-sm">دقیقه</span>
                </p>
              </div> */}
              <div className="flex justify-between">
                <h3 className="font-bold tex-sm md:text-lg">عرضه کل</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    {separateNumberDigits(data.total_supply)}
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 w-full flex flex-col gap-4">
            <div className="flex flex-col p-6 rounded-xl bg-base-300/30 shadow-lg">
              <TradingView
                Ticker={`${data.symbol.toUpperCase()}${
                  data.symbol.toUpperCase() === "USDT" ? "USD" : "USDT"
                }`}
                Exchange={data.tradingview_exchange}
              />
            </div>
            <div
              className="flex flex-col gap-6 p-6 rounded-xl bg-base-300/30 shadow-lg"
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const coin = ctx.params.coin;
  try {
    const res = await fetch(`https://bitfa.ir/api/coin/${coin}`);
    const data = await res.json();

    return {
      props: { data },
      // revalidate: 10,
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/coins",
      },
      // revalidate: 10,
    };
  }
}

// export async function getStaticProps(ctx) {
//   const coin = ctx.params.coin;
//   try {
//     const res = await fetch(`https://bitfa.ir/api/coin/${coin}`);
//     const data = await res.json();

//     return {
//       props: { data },
//       revalidate: 10,
//     };
//   } catch (err) {
//     console.error(err);
//     return {
//       props: {},
//       redirect: {
//         permanent: false,
//         destination: "/coins",
//       },
//       revalidate: 10,
//     };
//   }
// }

// export async function getStaticPaths() {
//   try {
//     const res = await fetch(`https://bitfa.ir/api/coins-list`);
//     const data = await res.json();

//     const paths = data.slice(0, 50).map((d) => ({
//       params: { coin: d },
//     }));

//     return {
//       paths,
//       fallback: "blocking",
//     };
//   } catch (err) {
//     console.error(err);
//     return {
//       paths: [],
//       fallback: "blocking",
//     };
//   }
// }
