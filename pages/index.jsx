import Analytics from "src/components/Home/Analytics";
import Articles from "src/components/Home/Articles";
import Bitfunda from "src/components/Home/Bitfunda";
import Elections from "src/components/Home/Elections";
import FirstGrid from "src/components/Home/FirstGrid";
import News from "src/components/Home/News";
import Prices from "src/components/Home/Prices";
import QuickAccess from "src/components/Home/QuickAccess";
import Videos from "src/components/Home/Videos";
import Layout from "src/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-2 py-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] opacity-60 blur-3xl bg-gradient-to-r from-primary/80 via-primary to-primary/80 -z-50"></div>
        <h1 className="f-bold text-center text-4xl md:text-5xl">
          دنیا‌ی رمزارز‌ها در دستان شما
        </h1>
        <p className="text-base-content/70 text-center">
          تحلیل و بررسی رمزارز‌ها به شکل ۳۶۰ درجه در بیتفا
        </p>

        <FirstGrid />
        <Prices />
        <Elections />
        <QuickAccess />
        <Articles />
        <News />
        <Videos />
        <Analytics />
        <Bitfunda />
      </div>
    </Layout>
  );
}
