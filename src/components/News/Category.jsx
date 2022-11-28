import Chips from "src/components/Shared/Chips";

const topics = [
  "کریپتو",
  "بیت‌کوین",
  "اتریوم",
  "تتر",
  "کریپتو",
  "بیت‌کوین",
  "اتریوم",
  "تتر",
  "کریپتو",
  "بیت‌کوین",
  "اتریوم",
  "تتر",
  "کریپتو",
  "بیت‌کوین",
  "اتریوم",
];

export default function Category() {
  return (
    <>
      <h3 className="f-bold">دسته‌بندی اخبار</h3>
      <div className="flex flex-wrap gap-1">
        {topics.map((t, i) => (
          <Chips key={i} title={t} />
        ))}
      </div>
    </>
  );
}
