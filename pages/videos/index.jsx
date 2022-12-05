import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "src/components/Layout";
import VideoCard from "src/components/Videos/VideoCard";

export default function VideosPage({ data }) {
  const router = useRouter();
  const [page, setPage] = useState(data.vidData.current_page);
  const morePages = data.vidData.last_page > 1;
  const total = data.vidData.total;

  console.log(data, router.query);

  const handleChangePage = (p) => () => {
    router.replace(`/videos?page=${p}`);
    setPage(p);
  };

  return (
    <Layout title={"ویدیو‌"}>
      <div className="container flex flex-col py-24">
        <div className="breadcrumbs mt-2">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li className="text-base-content/60">ویدیو‌ها</li>
          </ul>
        </div>
        <h1 className="f-fat text-5xl text-center mb-8">ویدیو ({total})</h1>
        <div className="masonary gap-4">
          {data.vidData.data.map((a) => {
            return (
              <VideoCard
                key={a.route}
                title={a.title}
                route={a.route}
                image={a.image}
                alt={a.image_alt}
              />
            );
          })}
        </div>
        {morePages && (
          <div className="container flex justify-center mt-8">
            <div className="btn-group flex-wrap gap-y-1" dir="ltr">
              {Array(data.vidData.last_page)
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
    const page = ctx.query?.page;
    if (page === undefined) {
      throw new Error("Type not exist!");
    }
    const url = `https://bitfa.ir/api/category-posts/3?page=${page}?type=ویدیو`;
    const vidRes = await fetch(url);
    const vidData = await vidRes.json();

    return {
      props: {
        data: {
          vidData,
        },
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/videos?page=1",
        // destination: "/articles?category=0",
      },
    };
  }
}
