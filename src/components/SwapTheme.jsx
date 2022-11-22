import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import useUISafe from "src/helpers/useUISafe";

export default function SwapTheme({ toggle = false }) {
  const mounted = useUISafe();
  const initialTheme = useRef();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    initialTheme.current = theme;
  }, []);

  const changeSwap = (e) => {
    const checked = e.target.checked;
    let t = "light";
    if (checked) t = theme === "light" ? "luxury" : "light";
    else t = theme === "light" ? "luxury" : "light";
    setTheme(t);
  };

  if (!mounted) return null;

  if (toggle) {
    return (
      <div className="form-control w-full">
        <label className="w-full label cursor-pointer flex gap-4 items-center p-0">
          <span
            className="label-text font-semibold mr-1"
            style={{
              fontSize: 16,
            }}
          >
            Night mode
          </span>
          <input
            type="checkbox"
            className="toggle toggle-primary toggle-sm"
            checked={theme === "luxury"}
            onChange={changeSwap}
          />
        </label>
      </div>
    );
  }

  return (
    <label className="swap swap-rotate px-2 btn btn-ghost btn-circle">
      <input type="checkbox" onChange={changeSwap} />
      {initialTheme.current === "light" ? (
        <>
          <BsSun className={`swap-off fill-current w-5 h-5`} />
          <BsMoon className={`swap-on fill-current w-5 h-5`} />
        </>
      ) : (
        <>
          <BsMoon className={`swap-off fill-current w-5 h-5`} />
          <BsSun className={`swap-on fill-current w-5 h-5`} />
        </>
      )}
    </label>
  );
}
