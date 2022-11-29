import { useEffect, useState } from "react";

export default function CountNumber({
  duration = 1.75,
  className = "",
  targetNum,
}) {
  const [num, setnum] = useState(0);

  useEffect(() => {
    let start = num;
    const incrTime = (duration / targetNum) * 1000;
    if (start === targetNum) return;
    const timer = setInterval(() => {
      start += 1;
      setnum((prev) => prev + 1);
      if (start === targetNum) clearInterval(timer);
    }, incrTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <p className={className}>{num}</p>;
}
