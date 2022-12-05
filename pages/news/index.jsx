import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "src/components/Layout";
import Filters from "src/components/News/Filters";
import NewsCard from "src/components/News/NewsCard";

export default function NewsPage({ data }) {
  const router = useRouter();
  const [page, setPage] = useState(data.newsData.current_page);
  const morePages = data.newsData.last_page > 1;

  console.log(data, router.query);

  const handleChangePage = (p) => () => {
    const query = router.query;
    router.replace(`/news?page=${p}&type=${query.type}&ord=${query.ord}`);
    setPage(p);
  };

  return (
    <Layout title={"اخبار"}>
      <div className="flex flex-col py-24">
        <Filters total={data.newsData.total} />

        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {data.newsData.data.map((a) => (
            <NewsCard
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
              {Array(data.newsData.last_page)
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
    const type = ctx.query?.type;
    const page = ctx.query?.page;
    const ord = ctx.query?.ord;
    if (type === undefined || page === undefined || ord === undefined) {
      throw new Error("Type not exist!");
    }
    const url =
      type === "breaking"
        ? `https://bitfa.ir/api/category-posts/1?page=${page}&ord=${ord}`
        : `https://bitfa.ir/api/category-posts/15?page=${page}&ord=${ord}`;
    const newsRes = await fetch(url);
    const newsData = await newsRes.json();

    return {
      props: {
        data: {
          newsData,
        },
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/news?page=1&type=breaking&ord=latest",
        // destination: "/articles?category=0",
      },
    };
  }
}
