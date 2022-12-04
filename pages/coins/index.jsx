import Layout from "src/components/Layout";
import Table from "src/components/CoinsPrice/Table";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CoinsPage({ data }) {
  const router = useRouter();
  const [page, setPage] = useState(data.page);
  const list = Object.values(data.data);

  const handleChangePage = (p) => () => {
    setPage(p);
    router.replace(`/coins?page=${p}`);
  };

  return (
    <Layout title={"لیست رمزارز‌ها"}>
      <div className="max-w-[1280px] mx-auto flex flex-col py-24 px-4">
        <div className="breadcrumbs mt-2">
          <ul>
            <li>
              <Link href="/">خانه</Link>
            </li>
            <li className="text-base-content/60">قیمت رمزارز‌ها</li>
          </ul>
        </div>
        <h1 className="f-fat text-5xl text-center mb-8">لیست رمزارز‌ها</h1>
        {/* <DataGrid /> */}
        <Table items={list} page={page} />
        <div className="flex justify-center mt-8">
          <div className="btn-group" dir="ltr">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <button
                  key={idx}
                  className={`btn ${Number(page) === idx + 1 && "btn-active"}`}
                  onClick={handleChangePage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const page = ctx.query?.page;
    if (!page) {
      throw new Error("Page not exist!");
    }
    const res = await fetch(`https://bitfa.ir/api/coins/${page}`);
    const data = await res.json();

    return {
      props: {
        data: {
          data,
          page,
        },
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/coins?page=1",
      },
    };
  }
}
