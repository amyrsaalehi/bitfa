import NewsCard from "src/components/News/NewsCard";
import Filters from "src/components/News/Filters";
import Layout from "src/components/Layout";
import ArticleImage from "src/images/Article.png";

const news = [
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
  {
    title: "پیش‌بینی‌های مدیرعامل بایننس از سرمایه‌گذاری دولت‌ها",
  },
];

export default function NewsPage() {
  return (
    <Layout title={"اخبار"}>
      <div className="flex flex-col py-24">
        <Filters />

        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {news.map((a, idx) => (
            <NewsCard key={idx} image={ArticleImage} title={a.title} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
