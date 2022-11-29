import React from "react";

export default function RadialEffect({
  top = null,
  left = null,
  right = null,
  bottom = null,
  className = "bg-[#580CFA]",
}) {
  let style = {
    filter: "blur(150px)",
    // background: bg,
  };
  if (top != null) {
    style.top = top;
  }
  if (left != null) {
    style.left = left;
  }
  if (bottom != null) {
    style.bottom = bottom;
  }
  if (right != null) {
    style.right = right;
  }

  if (top == null) return null;

  return (
    <div
      className={`-z-10 absolute w-48 h-48 rounded-full ${className} animate-pulse`}
      style={style}
    />
  );
}
