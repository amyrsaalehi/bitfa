import PercentageProgressbar from "src/components/Shared/PercentageProgressbar";

export default function Percentages() {
  return (
    <div className="flex justify-between flex-wrap sm:flex-nowrap gap-4">
      <div className="flex items-center gap-2">
        <div className="w-[100px]">
          <PercentageProgressbar targetPerc={93} r={50} g={232} b={133} />
        </div>
        <h3 className="f-bold text-xl text-success">میزان موفقیت</h3>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[100px]">
          <PercentageProgressbar targetPerc={42} r={253} g={93} b={93} />
        </div>
        <h3 className="f-bold text-xl text-error">میزان ریسک</h3>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-[100px]">
          <PercentageProgressbar targetPerc={10} />
        </div>
        <h3 className="f-bold text-primary text-xl">فرصت‌های باز</h3>
      </div>
    </div>
  );
}
