export default function Status() {
  return (
    <div className="stats bg-base-200 shadow-lg -mb-28">
      <div className="stat hidden md:block">
        <div className="stat-title mb-2">حجم بازار</div>
        <div className="stat-value">
          <span className="text-lg ml-1">$</span>
          <span className="f-bold">89,400</span>
        </div>
        {/* <div className="stat-actions"></div> */}
      </div>

      <div className="stat hidden sm:block">
        <div className="stat-title mb-2">ارزش بازار</div>
        <div className="stat-value">
          <span className="text-lg ml-1">$</span>
          <span className="f-bold">18,234,400</span>
        </div>
        {/* <div className="stat-actions"></div> */}
      </div>

      <div className="stat">
        <div className="stat-title mb-2">قیمت فعلی</div>
        <div className="stat-value">
          <span className="text-lg ml-1">$</span>
          <span className="f-bold">16,400</span>
        </div>
        {/* <div className="stat-actions"></div> */}
      </div>
    </div>
  );
}
