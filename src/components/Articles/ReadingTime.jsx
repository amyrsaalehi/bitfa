import { useState } from "react";
import { BiInfinite } from "react-icons/bi";

export default function ReadingTime() {
  const [range, setRange] = useState(100);

  const handleRangeChange = (e) => setRange(e.target.value);

  return (
    <>
      <h3 className="f-bold mt-4">زمان مطالعه</h3>
      <input
        type="range"
        min="0"
        max="100"
        value={range}
        onChange={handleRangeChange}
        className="range range-xs"
        step="20"
      />
      <div className="w-full  flex justify-between text-xs px-2">
        <span>۱ دقیقه</span>
        <span>۳ دقیقه</span>
        <span>۵ دقیقه</span>
        <span>۱۰ دقیقه</span>
        <span>۱۵ دقیقه</span>
        <span>
          <BiInfinite />
        </span>
      </div>
    </>
  );
}
