import Link from "next/link";
import { AiFillShop } from "react-icons/ai";

export default function QuickAccessCard({
  title = "فروشگاه",
  Icon = AiFillShop,
  href = "/shop",
}) {
  return (
    <div className="w-full h-[100px] flex flex-col justify-center items-center gap-1 rounded-3xl bg-base-100 transition-all cursor-pointer shadow-md hover:shadow-xl p-4">
      <Icon size={40} />
      <Link href={href} className="f-bold text-center text-lg">
        {title}
      </Link>
    </div>
  );
}
