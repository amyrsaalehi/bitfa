// import { BiChevronUp } from "react-icons/bi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { ImList2 } from "react-icons/im";
import Category from "src/components/Articles/Category";
// import Difficulity from "src/components/Articles/Difficulity";
// import ReadingTime from "src/components/Articles/ReadingTime";

export default function Filters({ total }) {
  const router = useRouter();
  const [ord, setOrd] = useState("latest");

  const handleOrdChanged = (e) => setOrd(e.target.value);

  // useEffect(() => {
  //   setOrd(router.query?.ord || "latest");
  // }, []);

  useEffect(() => {
    const query = router.query;
    router.replace(`/articles?page=1&category=${query.category}&ord=${ord}`);
  }, [ord]);

  return (
    <>
      {/* md:grid-cols-2 */}
      <div className="container grid grid-cols-1  gap-8 rounded-lg">
        <div className="flex flex-col gap-2 min-h-[250px]">
          <Category />
        </div>
        {/* <div className="flex flex-col gap-2">
          <Difficulity />
          <ReadingTime />
        </div> */}
      </div>
      <div className="w-full bg-base-300 mt-8">
        <div className="container flex items-center flex-wrap gap-2 py-2">
          <div className="flex-none sm:flex-1">
            <h1 className="f-bold text-3xl">مقالات ({total})</h1>
            {/* <button className="flex flex-nowrap btn btn-ghost px-1 md:px-2">
              <span className="whitespace-nowrap">پنهان فیلتر‌ها</span>
              <BiChevronUp size={18} />
            </button> */}
          </div>
          <div className="flex items-center gap-2">
            <select
              className="select select-bordered w-full max-w-[120px] sm:max-w-[150px]"
              onChange={handleOrdChanged}
            >
              <option value={"latest"}>انتشار اخیر</option>
              <option value={"most-visit"}>بیشترین بازدید</option>
              <option value={"last-update"}>به روزرسانی اخیر</option>
            </select>
            {/* <button className="btn btn-ghost px-1 md:px-2">حذف فیلتر‌ها</button>
            <button className="btn btn-primary px-1 md:px-2">
              اعمال فیلتر‌ها
            </button> */}
            {/* <div className="btn-group" dir="ltr">
              <button className="btn btn-active">
                <BsFillGridFill />
              </button>
              <button className="btn">
                <ImList2 />
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container flex justify-between items-center gap-2 mt-8">
        {/* <h1 className="f-bold text-3xl">مقالات ({total})</h1> */}
        {/* <select className="select select-bordered w-full max-w-[120px] sm:max-w-[150px]">
          <option selected>انتشار اخیر</option>
          <option>بیشترین بازدید</option>
          <option>به روزرسانی اخیر</option>
        </select> */}
      </div>
    </>
  );
}
