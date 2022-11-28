import { AiOutlineClockCircle } from "react-icons/ai";

export default function Time() {
  return (
    <div className="flex items-center gap-1 bg-base-200 p-2 rounded-lg">
      <AiOutlineClockCircle className="fill-base-content/60" />
      <span className="text-sm text-base-content/60">۵ روز</span>
    </div>
  );
}
