import Image from "next/image";
import { useRouter } from "next/router";
import MiniChart from "./MiniChart";

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
            <th className="text-center">نام</th>
            <th className="text-center">قیمت (دلار)</th>
            <th className="text-center">قیمت (تومان)</th>
            <th className="text-center">حجم بازار</th>
            <th className="text-center">ارزش بازار</th>
            <th className="text-center">روزانه</th>
            <th className="text-center">هفتگی</th>
            <th className="text-center rounded-tl-lg">نمودار هفتگی</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr
              key={idx}
              className="hover hover:cursor-pointer"
              onClick={changeRoute(item.route)}
            >
              <td className="p-2 bg-transparent text-center">{idx + 1}</td>
              <td className="p-2 bg-transparent">
                <div className="flex items-center gap-3 ">
                  {/* <span>{idx + 1}</span> */}
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
                  <p className="font-bold">{item.name}</p>
                </div>
              </td>
              <td className="p-2 bg-transparent text-center">
                {item.usdPrice}
              </td>
              <td className="p-2 bg-transparent text-center">
                {item.rialPrice}
              </td>
              <td className="p-2 bg-transparent text-center">{item.volume}</td>
              <td className="p-2 bg-transparent text-center">
                {item.marketCap}
              </td>
              <td
                className={`${
                  item.daily > 0 ? "text-success" : "text-error"
                } p-2 bg-transparent text-center`}
                dir="ltr"
              >
                <div className="badge badge-accent badge-outline badge-lg">
                  <span className="mt-1">{`${item.daily}%`}</span>
                </div>
              </td>
              <td
                className={`${
                  item.weekly > 0 ? "text-success" : "text-error"
                } p-2 bg-transparent text-center`}
                dir="ltr"
              >
                <div className="badge badge-error badge-outline badge-lg">
                  <span className="mt-1">{`${Math.abs(item.weekly)}%`}</span>
                </div>
              </td>
              <td>
                <MiniChart />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
