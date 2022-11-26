import Image from "next/image";
import Content from "src/components/Coin/Content";
import Status from "src/components/Coin/Status";
// import { useRouter } from "next/router";
import Layout from "src/components/Layout";
import Collapse from "src/components/Shared/Collapse";
import BitcoinImage from "src/images/Bitcoin.png";
import ChartImage from "src/images/Chart.png";

export default function CoinPage() {
  // const router = useRouter();
  // const coin = router.query.coin;

  // query the coin to get data related to the coin

  return (
    <Layout title={"تحلیل بیتکوین"}>
      <div className="flex flex-col py-16">
        <div
          className="w-full bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${ChartImage.src})`,
          }}
        >
          <div className="w-full h-full bg-[rgba(0,0,0,.4)] flex flex-col items-center p-16 backdrop-blur-sm">
            <div className="avatar mb-8">
              <div className="w-48">
                <Image
                  src={BitcoinImage}
                  alt="تحلیل بیتکوین"
                  className="rounded-full"
                  fill
                  priority
                />
              </div>
            </div>
            <h1 className="f-fat text-white text-center text-3xl mb-8">
              تحلیل تکنیکال بیت کوین
            </h1>
            <Status />
          </div>
        </div>
        <div className="flex flex-col gap-4 px-2 md:px-12 pt-20">
          {[
            "جمعه ۹ آذر ۱۴۰۱",
            "شنبه ۸ آذر ۱۴۰۱",
            "یکشنبه ۷ آذر ۱۴۰۱",
            "پنجشنبه ۶ آذر ۱۴۰۱",
            "شنبه ۵ آذر ۱۴۰۱",
            "یکشنبه ۴ آذر ۱۴۰۱",
            "جمعه ۳ آذر ۱۴۰۱",
            "یکشنبه ۲ آذر ۱۴۰۱",
            "پنجشنبه ۱ آذر ۱۴۰۱",
          ].map((date, idx) => (
            <Collapse
              key={idx}
              title={<h2 className="text-xl ">{date}</h2>}
              defaultOpen={idx === 0}
              content={<Content />}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
