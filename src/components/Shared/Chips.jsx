import { AiOutlinePlus } from "react-icons/ai";

export default function Chips({
  title,
  color = "base",
  noplus = false,
  selected,
}) {
  if (color === "base") {
    return (
      <div
        className={`flex justify-center items-center gap-1 max-w-fit px-4 py-2 rounded-3xl transition-colors ${
          selected ? "bg-primary" : "bg-base-300 hover:bg-base-200"
        }  cursor-pointer`}
      >
        <p className="text-sm text-base-content/70 -mb-0.5 whitespace-nowrap">
          {title}
        </p>
        {!noplus ? (
          <AiOutlinePlus className="fill-base-content/70" size={13} />
        ) : null}
      </div>
    );
  } else if (color === "error")
    return (
      <div
        className={`flex justify-center items-center gap-1 max-w-fit px-4 py-2 rounded-3xl transition-colors border border-error/40 ${
          selected ? "bg-error/70" : "bg-base-100 hover:bg-error/70"
        } cursor-pointer`}
      >
        <div className={`w-1.5 h-1.5 rounded-full bg-error mr-1`} />
        <p className="text-sm text-base-content/70 -mb-0.5 whitespace-nowrap">
          {title}
        </p>
        {!noplus ? (
          <AiOutlinePlus className="fill-base-content/70" size={13} />
        ) : null}
      </div>
    );
  else if (color === "warning")
    return (
      <div
        className={`flex justify-center items-center gap-1 max-w-fit px-4 py-2 rounded-3xl transition-colors border border-warning/40 ${
          selected ? "bg-warning/70" : "bg-base-100 hover:bg-warning/70"
        } cursor-pointer`}
      >
        <div className={`w-1.5 h-1.5 rounded-full bg-warning mr-1`} />
        <p className="text-sm text-base-content/70 -mb-0.5 whitespace-nowrap">
          {title}
        </p>
        {!noplus ? (
          <AiOutlinePlus className="fill-base-content/70" size={13} />
        ) : null}
      </div>
    );
  else if (color === "success")
    return (
      <div
        className={`flex justify-center items-center gap-1 max-w-fit px-4 py-2 rounded-3xl transition-colors border border-success/40 ${
          selected ? "bg-success/70" : "bg-base-100 hover:bg-success/70"
        } cursor-pointer`}
      >
        <div className={`w-1.5 h-1.5 rounded-full bg-success mr-1`} />
        <p className="text-sm text-base-content/70 -mb-0.5 whitespace-nowrap">
          {title}
        </p>
        {!noplus ? (
          <AiOutlinePlus className="fill-base-content/70" size={13} />
        ) : null}
      </div>
    );
}
