import Layout from "src/components/Layout";
import Slider from "src/components/Shared/Slider";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-2 py-24">
        <div className="py-8 bg-base-200">
          {/* <h1 className="px-4 text-4xl f-fat">مقالات</h1> */}
          <Slider />
        </div>
      </div>
    </Layout>
  );
}
