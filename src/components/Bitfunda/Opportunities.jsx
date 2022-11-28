import Image from "next/image";
import BitcoinImage from "src/images/Bitcoin.png";

export default function Opportunities() {
  return (
    <>
      <h2 className="f-fat text-2xl mt-8">انواع فرصت‌ها</h2>

      <div className="flex overflow-x-auto sm:flex-wrap gap-2">
        {[
          "بیت‌کوین",
          "ایردراپ",
          "بیت‌کوین",
          "ایردراپ",
          "بیت‌کوین",
          "ایردراپ",
        ].map((i) => (
          <div
            key={i}
            className="min-w-fit flex items-center gap-1 bg-base-300 hover:bg-base-200 p-2 rounded-lg cursor-pointer"
          >
            <Image
              src={BitcoinImage}
              alt={i}
              placeholder="blur"
              priority
              width={20}
              height={20}
              style={{
                objectFit: "contain",
              }}
            />
            <p className="text-sm">{i}</p>
          </div>
        ))}
      </div>
    </>
  );
}
