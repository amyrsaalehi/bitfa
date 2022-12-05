import { MdDateRange } from "react-icons/md";

export default function Date({ date }) {
  return (
    <div className="flex items-center gap-1">
      <MdDateRange className="fill-base-content/60 -mt-1" />
      <span className="text-base-content/60">{date}</span>
    </div>
  );
}
