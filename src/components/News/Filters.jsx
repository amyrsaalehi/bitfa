import { BiChevronUp } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { ImList2 } from "react-icons/im";
import Category from "src/components/News/Category";
import Importance from "src/components/News/Importance";

export default function Filters() {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 rounded-lg">
        <div className="flex flex-col gap-2">
          <Category />
        </div>
        <div className="flex flex-col gap-2">
          <Importance />
        </div>
      </div>

      <div className="w-full bg-base-300 mt-8">
        <div className="container flex flex-wrap gap-2 py-2">
          <div className="flex-none sm:flex-1">
            <button className="flex flex-nowrap btn btn-ghost px-1 md:px-2">
              <span className="whitespace-nowrap">پنهان فیلتر‌ها</span>
              <BiChevronUp size={18} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost px-1 md:px-2">حذف فیلتر‌ها</button>
            <button className="btn btn-primary px-1 md:px-2">
              اعمال فیلتر‌ها
            </button>
            <div className="btn-group" dir="ltr">
              <button className="btn btn-active">
                <BsFillGridFill />
              </button>
              <button className="btn">
                <ImList2 />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex justify-between items-center gap-2 mt-8">
        <h1 className="f-bold text-3xl">اخبار (۴۲۸)</h1>
        <select className="select select-bordered w-full max-w-[120px] sm:max-w-[150px]">
          <option selected>انتشار اخیر</option>
          <option>بیشترین بازدید</option>
          <option>به روزرسانی اخیر</option>
        </select>
      </div>
    </>
  );
}
