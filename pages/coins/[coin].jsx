import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar, AiOutlineWarning } from "react-icons/ai";
import Layout from "src/components/Layout";
import BitcoinImage from "src/images/Bitcoin.png";
import { GoChevronUp } from "react-icons/go";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import ArticleImage from "src/images/Article.png";
import TradingView from "src/components/Shared/TradingView";
import axios from "axios";

export default function CoinPage({ data }) {
  console.log(data);
  return (
    <Layout title={"قیمت لحظه‌ای بیت‌کوین"}>
      <div className="max-w-[1280px] mx-auto flex flex-col py-16 px-2">
        <div className="breadcrumbs mt-4 mb-8">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/coins">قیمت رمزارز‌ها</Link>
            </li>
            <li className="text-base-content/60">قیمت لحظه‌ای بیت‌کوین</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full flex flex-col p-6 rounded-xl bg-base-300/30 shadow-lg">
            <div className="flex justify-between flex-col lg:flex-row gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={BitcoinImage}
                    alt="بیت‌کوین"
                    width={60}
                    height={60}
                  />
                  <h1 className="text-3xl f-bold text-primary">بیت‌کوین</h1>
                  <span className="text-base-content/60">(BTC)</span>
                  <button className="btn btn-ghost btn-circle ml-auto">
                    <AiOutlineStar size={30} className="text-primary" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <AiOutlineStar size={20} />{" "}
                    <span className="text-xl">۴,۲۳۲</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AiOutlineStar size={20} />{" "}
                    <span className="text-xl">۴,۲۳۲</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p>قیمت لحظه‌ای</p>
                <div className="flex items-center gap-4">
                  <p className="flex gap-1">
                    <span className="text-4xl f-bold">16,892</span>{" "}
                    <span className="text-sm">$</span>
                  </p>
                  <div className="flex items-center gap-1 text-success">
                    <p className="text-lg f-bold">2.23%</p>
                    <GoChevronUp />
                  </div>
                </div>
                <button className="btn btn-outline btn-primary btn-sm">
                  آلارم قیمت
                </button>
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
              <h2 className="text-xl f-bold text-primary">درباره بیت‌کوین</h2>
              <button className="flex items-center gap-1 btn btn-outline btn-warning btn-sm">
                <span className="mt-1">گزارش خطا</span>
                <AiOutlineWarning size={15} />
              </button>
            </div>
            <p className="leading-8 text-justify">
              همه چیز از سال ۲۰۰۸ و انتشار مقاله‌ای که نوعی پول الکترونیک به نام
              بیت کوین در آن معرفی شده بود آغاز شد. هویت ناشناسی به نام ساتوشی
              ناکاموتو آغازگر انقلابی بود که سال‌ها بعد به تیتر اول رسانه‌ها
              تبدیل شد و اقتصاددانان را به بحث‌های نظری گسترده درباره آن وادار
              کرد.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <div className="w-full">
            <div className="w-full flex flex-col gap-2 p-6 rounded-xl bg-base-300/30 shadow-lg">
              <h2 className="f-bold text-xl mb-4 text-primary">
                آنالیز قیمت بیت‌کوین
              </h2>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  قیمت بیت کوین (دلار)
                </h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">16,892</span>{" "}
                  <span className="text-sm">$</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  قیمت بیت کوین (ریال)
                </h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">614,565,914</span>{" "}
                  <span className="text-sm">تومان</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">حجم کل بازار</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    324,283,000,000
                  </span>{" "}
                  <span className="text-sm">$</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تسلط به بازار</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">16,36.47</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  حجم معاملات روزانه
                </h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    24,477,900,000
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
                  <span className="f-bold font-bold text-lg">16,370</span>
                  <span className="text-sm">$</span>
                  <span className="text-sm">/</span>
                  <span className="f-bold font-bold text-lg">17,004</span>{" "}
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
                  <span className="f-bold font-bold text-lg">16,074</span>
                  <span className="text-sm">$</span>
                  <span className="text-sm">/</span>
                  <span className="f-bold font-bold text-lg">17,004</span>{" "}
                  <span className="text-sm">$</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">رتبه در بازار</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">1</span>{" "}
                  <span className="text-sm">#</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">اوج قیمت دلاری</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">16,892</span>{" "}
                  <span className="text-sm">$</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">اوج قیمت ریالی</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">
                    1,962,421,875
                  </span>{" "}
                  <span className="text-sm">تومان</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات 1 ساعته</h3>
                <p className="flex items-center gap-1 text-error">
                  <span className="f-bold font-bold text-lg">0.11</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات 1 روزه</h3>
                <p className="flex items-center gap-1 text-error">
                  <span className="f-bold font-bold text-lg">0.11</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات 7 روزه</h3>
                <p className="flex items-center gap-1 text-success">
                  <span className="f-bold font-bold text-lg">0.11</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات 14 روزه</h3>
                <p className="flex items-center gap-1 text-error">
                  <span className="f-bold font-bold text-lg">0.11</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات 30 روزه</h3>
                <p className="flex items-center gap-1 text-error">
                  <span className="f-bold font-bold text-lg">0.11</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات 60 روزه</h3>
                <p className="flex items-center gap-1 text-success">
                  <span className="f-bold font-bold text-lg">0.11</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات شش ماهه</h3>
                <p className="flex items-center gap-1 text-success">
                  <span className="f-bold font-bold text-lg">0.11</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تغییرات دو ساله</h3>
                <p className="flex items-center gap-1 text-success">
                  <span className="f-bold font-bold text-lg">0.11</span>{" "}
                  <span className="text-sm">%</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">تاریخ پیدایش</h3>
                <p className="f-bold font-bold text-lg">2009/01/03</p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">سختی استخراج</h3>
                <p className="flex items-center gap-1">
                  <span className="text-sm">T</span>{" "}
                  <span className="f-bold font-bold text-lg">15.78</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  کل بلاک‌های ساخته‌شده
                </h3>
                <p className="f-bold font-bold text-lg">636,110</p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  تراکنش ها بر ثانیه
                </h3>
                <p className="f-bold font-bold text-lg">3.81</p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">
                  تراکنش های امروز
                </h3>
                <p className="f-bold font-bold text-lg">329,828</p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">سایز بلاک چین</h3>
                <p className="flex items-center gap-1">
                  <span className="text-sm">Gb</span>{" "}
                  <span className="f-bold font-bold text-lg">195.13</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">الگوریتم هش</h3>
                <p className="f-bold font-bold text-lg">SHA-256</p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">هش ریت</h3>
                <p className="flex items-center gap-1">
                  <span className="text-sm">m Th/s</span>{" "}
                  <span className="f-bold font-bold text-lg">123.19</span>
                </p>
              </div>
              <div className="flex justify-between border-b py-2">
                <h3 className="font-bold tex-sm md:text-lg">زمان ساخت بلاک</h3>
                <p className="flex items-center gap-1">
                  <span className="f-bold font-bold text-lg">8.39</span>{" "}
                  <span className="text-sm">دقیقه</span>
                </p>
              </div>
              <div className="flex justify-between">
                <h3 className="font-bold tex-sm md:text-lg">ارز در دسترس/کل</h3>
                <p className="flex items-center gap-1">
                  <span className="text-sm">M</span>
                  <span className="f-bold font-bold text-lg">18.4</span>
                  <span className="text-sm">/</span>
                  <span className="text-sm">M</span>
                  <span className="f-bold font-bold text-lg">21</span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 w-full flex flex-col gap-4">
            <div className="flex flex-col p-6 rounded-xl bg-base-300/30 shadow-lg">
              <TradingView />
            </div>
            <div className="flex flex-col gap-6 p-6 rounded-xl bg-base-300/30 shadow-lg">
              <h4 className="text-2xl f-bold text-primary">
                رمزنگاری یا کریپتوگرافی چیست ؟
              </h4>
              <p className="leading-8 text-justify">
                تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
                مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
                کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
                گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند.
                در این مقاله ابتدا سوال کریپتو چیست را با بررسی تفاوت‌های آن با
                عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو،
                استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش
                کریپتو می‌پردازیم.
              </p>
              <h4 className="text-2xl f-bold text-primary">
                رمزنگاری یا کریپتوگرافی چیست ؟
              </h4>
              <p className="leading-8 text-justify">
                تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
                مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
                کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
                گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند.
                در این مقاله ابتدا سوال کریپتو چیست را با بررسی تفاوت‌های آن با
                عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو،
                استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش
                کریپتو می‌پردازیم.
              </p>
              <p className="leading-8 text-justify">
                تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
                مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
                کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
                گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند.
                در این مقاله ابتدا سوال کریپتو چیست را با بررسی تفاوت‌های آن با
                عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو،
                استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش
                کریپتو می‌پردازیم.
              </p>
              <div className="relative w-full max-h-[500px]">
                <Image
                  src={ArticleImage}
                  alt={"بیت‌کوین"}
                  className="max-h-[500px] rounded-3xl"
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
              <h4 className="text-2xl f-bold text-primary">
                رمزنگاری یا کریپتوگرافی چیست ؟
              </h4>
              <p className="leading-8 text-justify">
                تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
                مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
                کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
                گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند.
                در این مقاله ابتدا سوال کریپتو چیست را با بررسی تفاوت‌های آن با
                عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو،
                استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش
                کریپتو می‌پردازیم.
              </p>
              <p className="leading-8 text-justify">
                تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
                مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
                کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
                گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند.
                در این مقاله ابتدا سوال کریپتو چیست را با بررسی تفاوت‌های آن با
                عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو،
                استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش
                کریپتو می‌پردازیم.
              </p>
              <h4 className="text-2xl f-bold text-primary">
                رمزنگاری یا کریپتوگرافی چیست ؟
              </h4>
              <p className="leading-8 text-justify">
                تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
                مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
                کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
                گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند.
                در این مقاله ابتدا سوال کریپتو چیست را با بررسی تفاوت‌های آن با
                عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو،
                استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش
                کریپتو می‌پردازیم.
              </p>
              <p className="leading-8 text-justify">
                تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
                مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
                کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
                گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند.
                در این مقاله ابتدا سوال کریپتو چیست را با بررسی تفاوت‌های آن با
                عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو،
                استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش
                کریپتو می‌پردازیم.
              </p>
              <h4 className="text-2xl f-bold text-primary">
                رمزنگاری یا کریپتوگرافی چیست ؟
              </h4>
              <p className="leading-8 text-justify">
                تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
                مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
                کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
                گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند.
                در این مقاله ابتدا سوال کریپتو چیست را با بررسی تفاوت‌های آن با
                عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو،
                استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش
                کریپتو می‌پردازیم.
              </p>
              <p className="leading-8 text-justify">
                تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
                مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
                کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
                گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند.
                در این مقاله ابتدا سوال کریپتو چیست را با بررسی تفاوت‌های آن با
                عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو،
                استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش
                کریپتو می‌پردازیم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(ctx) {
  const coin = ctx.params.coin;
  try {
    const res = await fetch(`https://bitfa.ir/api/coin/${coin}`);
    const data = await res.json();

    return {
      props: { data },
      revalidate: 10,
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/coins",
      },
      revalidate: 10,
    };
  }
}

export async function getStaticPaths(ctx) {
  try {
    const res = await axios(
      `https://mkvsssrfopyfrtgmjnac.supabase.co/rest/v1/designers?select=id`
    );
    const paths = res.data.map((d) => ({
      params: { coin: d.id.toString() },
    }));

    return {
      paths,
      fallback: "blocking",
    };
  } catch (err) {
    console.error(err);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}
