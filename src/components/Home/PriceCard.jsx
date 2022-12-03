import Image from "next/image";
import BitcoinImage from "src/images/Bitcoin.png";

export default function PriceCard({
  title = "بیت‌کوین",
  image = BitcoinImage,
  price = "16,234",
}) {
  return (
    <div className="w-full flex items-center gap-1 rounded-3xl bg-base-100 transition-all cursor-pointer shadow-md hover:shadow-xl p-4">
      <Image
        src={image}
        alt={title}
        placeholder="blur"
        priority
        width={60}
        height={60}
        style={{
          objectFit: "contain",
        }}
      />
      <div className="flex flex-col">
        <h3 className="f-bold text-center text-2xl">{title}</h3>
        <p className="flex items-center gap-1">
          <span className="f-bold font-bold text-lg">{price}</span>{" "}
          <span className="text-sm">$</span>
        </p>
      </div>
    </div>
  );
}
