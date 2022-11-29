import Image from "next/image";
import Link from "next/link";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDiscord, FaTelegramPlane } from "react-icons/fa";
import Layout from "src/components/Layout";
import CountNumber from "src/components/Shared/CountNumber";
import AboutUsImage from "src/images/About-Us.jpg";
import Alireza from "src/images/team/alireza-tabrizi.webp";
import HistoryImage from "src/images/History.png";
import MissionImage from "src/images/Mission.png";
import TargetImage from "src/images/Target.png";

const team = [
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
  {
    name: "علیرضا تبریزی",
    role: "کارشناس سئو",
    image: Alireza,
  },
];

export default function AboutUs() {
  return (
    <Layout title={"درباره ما"}>
      <div className="container flex flex-col gap-4 py-20">
        <div className="breadcrumbs mt-2">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>درباره ما</li>
          </ul>
        </div>
        <div className="relative w-full max-h-[700px]">
          <Image
            src={AboutUsImage}
            alt={"درباره بیتفا"}
            className="max-h-[700px] rounded-3xl object-cover"
          />
        </div>
        <h1 className="mt-8 text-3xl md:text-5xl text-center text-primary f-fat">
          با حرفه ای ها مسیر کوتاه میشه
        </h1>

        <p className="leading-8 text-sm md:text-lg mt-4 text-justify">
          مجموعه بیتفا از سال 1397 با فعالیت در حوزه رمزارزها و تولید محتوای
          آموزشی و ارائه خدمات سرمایه گذاری همواره سعی دارد تا در دنیای پر
          رمزراز رمزارزها،همواره در کنار شما عزیزان باشد . سال 1397 را می توانیم
          نقطه عطف شکل گیری و شروع به فعالیت بیتفا در حوزه ی سرمایه گذاری و
          آموزش های تخصصی در حوزه ی رمز ارزها بدانیم. شروعی بر پایه و اساس
          رسالتی که بر دوش تک تک اعضای تیم مجموعه موجب تلاش هرروزه ی ما برای
          اطلاع رسانی های جامع و تخصصی برای همگان است، تا باشد در کنار شما
          هموطنان عزیزمان در مسیر یادگیری و فعالیت در این بازار همراه باشیم.
        </p>

        <div
          dir="ltr"
          className="stats stats-vertical lg:stats-horizontal shadow-lg mt-8"
        >
          <div className="stat">
            <p className="f-bold text-lg md:text-2xl text-center text-primary mb-4">
              تعداد کاربران
            </p>
            <CountNumber
              duration={0.000000001}
              targetNum={3250}
              className="stat-value text-center"
            />
          </div>

          <div className="stat">
            <p className="f-bold text-lg md:text-2xl text-center text-primary mb-4">
              بازدید سایت
            </p>
            <CountNumber
              duration={0.000000001}
              targetNum={5201}
              className="stat-value text-center"
            />
          </div>

          <div className="stat">
            <p className="f-bold text-lg md:text-2xl text-center text-primary mb-4">
              تعداد مقالات
            </p>
            <CountNumber
              duration={0.000000001}
              targetNum={432}
              className="stat-value text-center"
            />
          </div>
        </div>

        <div className="flex flex-wrap-reverse md:flex-nowrap gap-4 mt-8">
          <div className="relative">
            <Image
              src={TargetImage}
              alt={"رسالت بیتفا"}
              className="object-contain max-h-[400px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2 className=" text-3xl md:text-5xl text-center text-primary f-fat">
              رسالت بیتفا
            </h2>

            <p className="leading-8 text-sm md:text-lg text-justify">
              مجموعه بیتفا از سال 1397 با فعالیت در حوزه رمزارزها و تولید محتوای
              آموزشی و ارائه خدمات سرمایه گذاری همواره سعی دارد تا در دنیای پر
              رمزراز رمزارزها،همواره در کنار شما عزیزان باشد . سال 1397 را می
              توانیم نقطه عطف شکل گیری و شروع به فعالیت بیتفا در حوزه ی سرمایه
              گذاری و آموزش های تخصصی در حوزه ی رمز ارزها بدانیم.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-4 mt-8">
          <div className="flex flex-col justify-center gap-4">
            <h2 className=" text-3xl md:text-5xl text-center text-primary f-fat">
              ماموریت بیتفا
            </h2>

            <p className="leading-8 text-sm md:text-lg text-justify">
              مجموعه بیتفا از سال 1397 با فعالیت در حوزه رمزارزها و تولید محتوای
              آموزشی و ارائه خدمات سرمایه گذاری همواره سعی دارد تا در دنیای پر
              رمزراز رمزارزها،همواره در کنار شما عزیزان باشد . سال 1397 را می
              توانیم نقطه عطف شکل گیری و شروع به فعالیت بیتفا در حوزه ی سرمایه
              گذاری و آموزش های تخصصی در حوزه ی رمز ارزها بدانیم.
            </p>
          </div>
          <div className="relative">
            <Image
              src={MissionImage}
              alt={"ماموریت بیتفا"}
              className="object-contain max-h-[300px]"
            />
          </div>
        </div>

        <div className="flex flex-wrap-reverse md:flex-nowrap gap-4 mt-8">
          <div className="relative">
            <Image
              src={HistoryImage}
              alt={"تاریخچه بیتفا"}
              className="object-contain max-h-[300px]"
            />
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h2 className=" text-3xl md:text-5xl text-center text-primary f-fat">
              تاریخچه بیتفا
            </h2>

            <p className="leading-8 text-sm md:text-lg text-justify">
              مجموعه بیتفا از سال 1397 با فعالیت در حوزه رمزارزها و تولید محتوای
              آموزشی و ارائه خدمات سرمایه گذاری همواره سعی دارد تا در دنیای پر
              رمزراز رمزارزها،همواره در کنار شما عزیزان باشد . سال 1397 را می
              توانیم نقطه عطف شکل گیری و شروع به فعالیت بیتفا در حوزه ی سرمایه
              گذاری و آموزش های تخصصی در حوزه ی رمز ارزها بدانیم.
            </p>
          </div>
        </div>

        <h2 className="mt-16 text-3xl md:text-5xl text-center text-primary f-fat">
          تیم بیتفا
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
          {team.map((t) => (
            <div key={t.name} className="flex flex-col items-center">
              <div className="avatar mb-2">
                <div className="relative w-[150px] mask mask-squircle">
                  <Image key={t.name} src={t.image} alt={t.name} className="" />
                </div>
              </div>

              <p className="f-bold text-lg">{t.name}</p>
              <p>{t.role}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-xl md:text-3xl text-center text-primary f-fat">
          بیتفا در شبکه‌های اجتماعی
        </h2>

        <div className="flex justify-evenly mt-4">
          <a className="btn btn-circle btn-ghost">
            <FaTelegramPlane size={35} />
          </a>
          <a className="btn btn-circle btn-ghost">
            <AiFillInstagram size={35} />
          </a>
          <a className="btn btn-circle btn-ghost">
            <FaDiscord size={35} />
          </a>
          <a className="btn btn-circle btn-ghost">
            <AiOutlineTwitter size={35} />
          </a>
          <a className="btn btn-circle btn-ghost">
            <AiFillYoutube size={35} />
          </a>
        </div>
      </div>
    </Layout>
  );
}
