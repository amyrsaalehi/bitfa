import { MdDateRange } from "react-icons/md";

export default function Date() {
  return (
    <div className="flex items-center gap-1">
      <MdDateRange className="fill-base-content/60" />
      <span className="text-base-content/60">امروز</span>
    </div>
  );
}
