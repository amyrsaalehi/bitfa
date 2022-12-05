import { useRouter } from "next/router";
import { useState } from "react";
import ArticleCard from "src/components/Articles/ArticleCard";
import Filters from "src/components/Articles/Filters";
import Layout from "src/components/Layout";

export default function ArticlesPage({ data }) {
  const router = useRouter();
  const [page, setPage] = useState(data.articlesData.current_page);
  const morePages = data.articlesData.last_page > 1;

  console.log(data, router.query);

  const handleChangePage = (p) => () => {
    const query = router.query;
    router.replace(
      `/articles?page=${p}&category=${query.category}&ord=${query.ord}`
    );
    setPage(p);
  };

  return (
    <Layout title={"مقالات"}>
      <div className="flex flex-col py-24">
        <Filters total={data.articlesData.total} />
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {data.articlesData.data.map((a) => (
            <ArticleCard
              key={a.route}
              title={a.title}
              content={a.content}
              readingTime={a.reading_time}
              route={a.route}
              image={a.image}
              level={a.level}
              alt={a.image_alt}
              date={a.date}
            />
          ))}
        </div>
        {morePages && (
          <div className="container flex justify-center mt-8">
            <div className="btn-group flex-wrap gap-y-1" dir="ltr">
              {Array(data.articlesData.last_page)
                .fill(0)
                .map((_, idx) => (
                  <button
                    key={idx}
                    className={`btn ${
                      Number(page) === idx + 1 && "btn-active"
                    }`}
                    onClick={handleChangePage(idx + 1)}
                  >
                    {idx + 1}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    console.log(ctx.query);
    const category = ctx.query?.category;
    const page = ctx.query?.page;
    const ord = ctx.query?.ord;
    if (category === undefined || page === undefined || ord === undefined) {
      throw new Error("Category not exist!");
    }
    const url =
      category === "0"
        ? `https://bitfa.ir/api/category-posts?page=${page}&ord=${ord}`
        : `https://bitfa.ir/api/category-posts/${category}?page=${page}&ord=${ord}`;
    const articlesRes = await fetch(url);
    const articlesData = await articlesRes.json();

    return {
      props: {
        data: {
          articlesData,
        },
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/articles?page=1&category=0&ord=latest",
        // destination: "/articles?category=0",
      },
    };
  }
}
