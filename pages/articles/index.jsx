import ArticleCard from "src/components/Articles/ArticleCard";
import Filters from "src/components/Articles/Filters";
import Layout from "src/components/Layout";
import ArticleImage from "src/images/Article.png";

const articles = [
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
  {
    title: "کریپتو چیست؟",
  },
];

export default function ArticlesPage() {
  return (
    <Layout title={"مقالات"}>
      <div className="flex flex-col py-24">
        <Filters />

        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {articles.map((a, idx) => (
            <ArticleCard key={idx} image={ArticleImage} title={a.title} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
