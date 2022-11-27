import { AiOutlineClockCircle } from "react-icons/ai";

export default function Time() {
  return (
    <div className="flex items-center gap-1">
      <AiOutlineClockCircle className="fill-base-content/60" />
      <span className="text-base-content/60">۷ دقیقه</span>
    </div>
  );
}
