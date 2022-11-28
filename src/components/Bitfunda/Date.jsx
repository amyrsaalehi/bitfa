import { MdDateRange } from "react-icons/md";

export default function Date() {
  return (
    <div className="flex items-center gap-1 bg-base-200 p-2 rounded-lg">
      <MdDateRange className="fill-base-content/60" />
      <span className="text-sm text-base-content/60">۷ آذر ۱۳۹۹</span>
    </div>
  );
}
