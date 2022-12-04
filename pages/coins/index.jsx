import Layout from "src/components/Layout";
import Table from "src/components/CoinsPrice/Table";
import Link from "next/link";

export default function CoinsPage({ data }) {
  const list = Object.values(data);
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
        <Table items={list} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  try {
    const res = await fetch("https://bitfa.ir/api/coins/1");
    const data = await res.json();

    return {
      props: {
        data,
      },
      // revalidate: 10,
    };
  } catch (err) {
    console.error(err);
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/coins",
      },
      // revalidate: 10,
    };
  }
}
