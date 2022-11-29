import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ArticleCard from "src/components/Articles/ArticleCard";
import Date from "src/components/Articles/Date";
import Time from "src/components/Articles/TIme";
import Layout from "src/components/Layout";
import Chips from "src/components/Shared/Chips";
import VideoCard from "src/components/Videos/VideoCard";
import ArticleImage from "src/images/Article.png";
import UserImage from "src/images/User.jpeg";

export default function VideoDetailsPage() {
  const router = useRouter();
  const article = router.query.article;

  return (
    <Layout title={article}>
      <div className="container flex flex-col gap-2 py-24">
        <h1 className="f-fat text-primary text-4xl md:text-5xl mb-4">
          کریپتو چیست؟
        </h1>
        <div className="relative w-full max-h-[500px] mt-4">
          <Image
            src={ArticleImage}
            alt={article}
            className="max-h-[500px] rounded-3xl"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="flex items-start justify-between flex-wrap-reverse gap-4 mt-4">
          <div className="flex flex-col">
            <div className="breadcrumbs mt-2">
              <ul>
                <li>
                  <Link href="/">خانه</Link>
                </li>
                <li>
                  <Link href="/videos">ویدیو</Link>
                </li>
                <li className="text-base-content/60">کریپتو چیست</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Chips title={"متوسط"} color="warning" noplus />
              <Date />
              <Time />
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="avatar">
              <div className="relative w-[70px] sm:w-[90px] mask mask-hexagon ">
                <Image
                  src={UserImage}
                  alt={"پاتریک‌ شاه‌نظری"}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <p className="text-sm text-base-content/70">پاتریک‌ شاه‌نظری</p>
          </div>
        </div>

        <div className="flex flex-col gap-8 mt-8">
          <p className="leading-8 text-justify">
            تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های مختلفی
            به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند کریپتو،
            کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور گسترده در بین
            سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند. در این مقاله ابتدا
            سوال کریپتو چیست را با بررسی تفاوت‌های آن با عبارات مشابه پاسخ
            می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو، استخراج آن، کیف پول
            کریپتو، صرافی کریپتو و نحوه خرید و فروش کریپتو می‌پردازیم.
          </p>
          <h2 className="text-2xl f-bold text-primary">
            رمزنگاری یا کریپتوگرافی چیست ؟
          </h2>
          <p className="leading-8 text-justify">
            تکنولوژی‌های جدید با ورود به هر جامعه‌ای، واژگان و عبارت‌های مختلفی
            به خود می‌گیرند. با ظهور و گسترش بیت‌کوین، عباراتی مانند کریپتو،
            کریپتوکارنسی، ارز دیجیتال، رمز ارز و بلاک چین به طور گسترده در بین
            سرمایه‌گذاران و تریدرهای ایرانی استفاده می‌شوند. در این مقاله ابتدا
            سوال کریپتو چیست را با بررسی تفاوت‌های آن با عبارات مشابه پاسخ
            می‌دهیم. سپس، به بررسی فرآیندهای ایجاد کریپتو، استخراج آن، کیف پول
            کریپتو، صرافی کریپتو و نحوه خرید و فروش کریپتو می‌پردازیم.
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-8 rounded-3xl">
          <h2 className="text-3xl f-bold">ویدیو‌های مرتبط</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
    </Layout>
  );
}
