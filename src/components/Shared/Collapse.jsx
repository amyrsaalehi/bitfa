import { useEffect, useState } from "react";

export default function Collapse({
  defaultOpen = false,
  noborder = false,
  title,
  content,
  titlePaddingZero = false,
}) {
  const [open, setOpen] = useState(false);

  const changeOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    setOpen(defaultOpen);
  }, [defaultOpen]);

  return (
    <div
      className={`w-full collapse ${
        open ? "collapse-open bg-primary" : "collapse-close"
      } transition collapse-plus ${
        !noborder && "border border-base-300"
      } bg-base-100 rounded-box hover:bg-primary`}
    >
      <input
        type="checkbox"
        className="peer flex cursor-pointer"
        onChange={changeOpen}
      />
      <div
        className={`collapse-title text-base font-medium flex items-center gap-1  ${
          titlePaddingZero && "p-0"
        }`}
      >
        {title}
      </div>
      <div className="collapse-content bg-base-100">{content}</div>
    </div>
  );
}
