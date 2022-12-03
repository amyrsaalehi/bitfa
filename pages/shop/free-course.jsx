import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Layout from "src/components/Layout";
import Collapse from "src/components/Shared/Collapse";
import CountNumber from "src/components/Shared/CountNumber";
import Slider from "src/components/Shared/Slider";
import ArticleImage from "src/images/Article.png";
import Alireza from "src/images/team/alireza-tabrizi.webp";

export default function FreeCoursePage() {
  const sessionsRef = useRef(null);
  const audienceRef = useRef(null);
  const teachersRef = useRef(null);
  const qaRef = useRef(null);
  const commentsRef = useRef(null);

  const scrollToSection = (ref) => () =>
    window.scrollTo({
      top: ref.current?.offsetTop - 100,
      behavior: "smooth",
    });

  return (
    <Layout title={"دوره رایگان"}>
      <div className="max-w-[1280px] px-4 mx-auto flex flex-col gap-2 py-24">
        <div className=" breadcrumbs">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li>
              <Link href="/shop">فروشگاه</Link>
            </li>
            <li className="text-base-content/60">دوره رایگان بیتفا</li>
          </ul>
        </div>
        <div className=" relative w-full max-h-[500px]">
          <Image
            src={ArticleImage}
            alt={"دوره رایگان"}
            className="max-h-[500px] rounded-3xl object-cover"
            priority
          />
        </div>
        <h1 className="f-fat text-4xl md:text-5xl mt-8 text-center text-primary">
          دوره رایگان بیتفا
        </h1>
        <p className="leading-8 text-justify mt-4">
          تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های مختلفی به
          خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند کریپتو،
          کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور گسترده در بین
          سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند. در این مقاله ابتدا
          سوال پیش‌بینی‌های مدیرعامل بایننس را با بررسی تفاوت‌های آن با عبارات
          مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو، استخراج آن،
          کیف پول کریپتو، صرافی کریپتو و نحوه خرید و فروش کریپتو می‌پردازیم.
        </p>
        <div className="flex justify-center">
          <Link
            href={"/sign"}
            className="btn btn-block md:btn-wide btn-primary"
          >
            ثبت‌نام
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4  mt-12">
          <div className="flex flex-col col-span-3">
            <div className="relative w-full max-h-[500px] mt-4">
              <Image
                src={ArticleImage}
                alt={"دوره رایگان"}
                className="max-h-[500px] rounded-3xl object-cover"
                priority
              />
            </div>
            <p className="leading-8 text-justify mt-4">
              تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های
              مختلفی به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند
              کریپتو، کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور
              گسترده در بین سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند. در
              این مقاله ابتدا سوال پیش‌بینی‌های مدیرعامل بایننس را با بررسی
              تفاوت‌های آن با عبارات مشابه پاسخ می‌دهیم. سپس، به بررسی فرآیندهای
              ایجاد کریپتو، استخراج آن، کیف پول کریپتو، صرافی کریپتو و نحوه خرید
              و فروش کریپتو می‌پردازیم.
            </p>
            <div
              dir="ltr"
              className="stats stats-vertical lg:stats-horizontal shadow-lg mt-4"
            >
              <div className="stat">
                <p className="f-bold text-lg md:text-2xl text-center text-primary mb-4">
                  تعداد جلسات
                </p>
                <CountNumber
                  duration={0.000000001}
                  targetNum={120}
                  className="stat-value text-center"
                />
              </div>

              <div className="stat">
                <p className="f-bold text-lg md:text-2xl text-center text-primary mb-4">
                  دوره‌های خریداری شده
                </p>
                <CountNumber
                  duration={0.000000001}
                  targetNum={5201}
                  className="stat-value text-center"
                />
              </div>

              <div className="stat">
                <p className="f-bold text-lg md:text-2xl text-center text-primary mb-4">
                  تعداد شرکت‌کنندگان
                </p>
                <CountNumber
                  duration={0.000000001}
                  targetNum={10000}
                  className="stat-value text-center"
                />
              </div>

              <div className="stat">
                <p className="f-bold text-lg md:text-2xl text-center text-primary mb-4">
                  تعداد قبولی‌ها
                </p>
                <CountNumber
                  duration={0.000000001}
                  targetNum={1000}
                  className="stat-value text-center"
                />
              </div>
            </div>
            <div ref={sessionsRef} className="flex flex-col gap-2 mt-16">
              <h2 className="divider f-bold text-4xl md:text-5xl">
                جلسات دوره
              </h2>
              <Collapse title={"جلسه اول"} />
              <Collapse title={"جلسه دوم"} />
              <Collapse title={"جلسه سوم"} />
              <Collapse title={"جلسه چهارم"} />
              <Collapse title={"جلسه پنجم"} />
            </div>
            <div ref={audienceRef} className="flex flex-col gap-2 mt-16">
              <h2 className="divider f-bold text-4xl md:text-5xl">
                مخاطبین دوره
              </h2>
              <Collapse title={"جلسه اول"} />
              <Collapse title={"جلسه دوم"} />
              <Collapse title={"جلسه سوم"} />
              <Collapse title={"جلسه چهارم"} />
              <Collapse title={"جلسه پنجم"} />
            </div>
            <div ref={teachersRef} className="flex flex-col gap-2 mt-16">
              <h2 className="divider f-bold text-4xl md:text-5xl">
                اساتید دوره
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-8">
                {Array(4)
                  .fill({
                    name: "علیرضا تبریزی",
                    role: "کارشناس سئو",
                    image: Alireza,
                  })
                  .map((t, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="avatar mb-2">
                        <div className="relative w-[150px] mask mask-squircle">
                          <Image
                            key={t.name}
                            src={t.image}
                            alt={t.name}
                            className=""
                          />
                        </div>
                      </div>

                      <p className="f-bold text-lg">{t.name}</p>
                      <p>{t.role}</p>
                    </div>
                  ))}
              </div>
            </div>
            <div ref={qaRef} className="flex flex-col gap-2 mt-16">
              <h2 className="divider f-bold text-4xl md:text-5xl">
                سوالات متداول
              </h2>
              <Collapse title={"جلسه اول"} />
              <Collapse title={"جلسه دوم"} />
              <Collapse title={"جلسه سوم"} />
              <Collapse title={"جلسه چهارم"} />
              <Collapse title={"جلسه پنجم"} />
            </div>
            <div ref={commentsRef} className="flex flex-col gap-2 mt-16">
              <h2 className="divider f-bold text-4xl md:text-5xl">
                نظرات دانشجویان
              </h2>
              <Slider />
            </div>
          </div>
          <div className="hidden lg:flex flex-col">
            <div className="sticky top-[80px] left-0 flex flex-col gap-4 p-4 rounded-xl shadow-lg">
              <div className="stat">
                <p className="f-bold text-lg md:text-2xl text-center text-primary mb-4">
                  تعداد شرکت‌کنندگان
                </p>
                <CountNumber
                  duration={0.000000001}
                  targetNum={5201}
                  className="stat-value text-center"
                />
              </div>
              <div className="divider my-0"></div>
              <a
                className="p-2 cursor-pointer border-b hover:border-none hover:rounded-lg hover:bg-primary/40  transition-all"
                onClick={scrollToSection(sessionsRef)}
              >
                جلسات دوره
              </a>
              <a
                className="p-2 cursor-pointer border-b hover:border-none hover:rounded-lg hover:bg-primary/40  transition-all"
                onClick={scrollToSection(audienceRef)}
              >
                مخاطبین دوره
              </a>
              <a
                className="p-2 cursor-pointer border-b hover:border-none hover:rounded-lg hover:bg-primary/40  transition-all"
                onClick={scrollToSection(teachersRef)}
              >
                اساتید دوره
              </a>
              <a
                className="p-2 cursor-pointer border-b hover:border-none hover:rounded-lg hover:bg-primary/40  transition-all"
                onClick={scrollToSection(qaRef)}
              >
                سوالات متداول
              </a>
              <a
                className="p-2 cursor-pointer hover:rounded-lg hover:bg-primary/40  transition-all"
                onClick={scrollToSection(commentsRef)}
              >
                نظرات دانشجویان
              </a>
              <Link href={"/sign"} className="btn btn-primary">
                ثبت‌نام در دوره
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
