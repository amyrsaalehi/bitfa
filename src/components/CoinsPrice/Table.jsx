import Image from "next/image";
import { useRouter } from "next/router";
import { separateNumberDigits } from "src/helpers/typography";

// const data = {
//   cgc_id: "bitcoin";
//   chart: "https://www.coingecko.com/coins/1/sparkline";
//   current_price: 17008.95;
//   image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579";
//   market_cap: 326896702668;
//   name: "Bitcoin";
//   price_change_24h: 30.29;
//   price_change_percentage_24h: 0.17842;
//   total_volume: 17264877194;
// }

// const nonused = {
//   fully_diluted_valuation: 357098179141;
//   link: "https://bitfa.ir/coins/bitcoin";
//   market_cap_change_24h: 686250383;
//   market_cap_change_percentage_24h: 0.21037;
//   market_cap_rank: 1;
//   symbol: "btc";
// };

export default function Table({ items = [] }) {
  const router = useRouter();

  const changeRoute = (route) => () => router.push(`/coins/${route}`);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th
              style={{
                position: "static",
              }}
            >
              #
            </th>
            <th className="">نام</th>
            <th className="text-center">قیمت (دلار)</th>
            <th className="text-center">حجم بازار</th>
            <th className="text-center">ارزش بازار</th>
            <th className="text-center">تغیرات روزانه (قیمت)</th>
            <th className="text-center">تغیرات روزانه (درصد)</th>
            <th className="text-center rounded-tl-lg">نمودار هفتگی</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr
              key={idx}
              className="hover hover:cursor-pointer"
              onClick={changeRoute(item.cgc_id)}
            >
              <td className="p-2 bg-transparent text-center">{idx + 1}</td>
              <td className="p-2 bg-transparent">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="relative w-[25px] h-[25px]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        className="rounded-full"
                        priority
                        width={25}
                        height={25}
                      />
                    </div>
                  </div>
                  <h2 className="font-bold">{item.name}</h2>
                </div>
              </td>
              <td className="p-2 bg-transparent text-center">
                {item.current_price}
              </td>
              <td className="p-2 bg-transparent text-center">
                {separateNumberDigits(item.total_volume)}
              </td>
              <td className="p-2 bg-transparent text-center">
                {separateNumberDigits(item.market_cap)}
              </td>
              <td
                className={`${
                  item.price_change_24h > 0 ? "text-success" : "text-error"
                } p-2 bg-transparent text-center`}
                dir="ltr"
              >
                {/* <div className="badge badge-accent badge-outline badge-lg"> */}
                <span className="mt-1">{`${item.price_change_24h?.toFixed(
                  2
                )}`}</span>
                {/* </div> */}
              </td>
              <td
                className={`${
                  item.price_change_percentage_24h > 0
                    ? "text-success"
                    : "text-error"
                } p-2 bg-transparent text-center`}
                dir="ltr"
              >
                {/* <div className="badge badge-error badge-outline badge-lg"> */}
                <span className="mt-1">{`${Math.abs(
                  item.price_change_percentage_24h?.toFixed(2)
                )}%`}</span>
                {/* </div> */}
              </td>
              <td>
                <div className="relative w-[150px] h-[50px]">
                  <img
                    src={item.chart}
                    alt={item.name}
                    // className="rounded-full"
                    // priority
                    width={150}
                    height={50}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
