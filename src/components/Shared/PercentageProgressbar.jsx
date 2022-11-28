import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function PercentageProgressbar({
  duration = 1.75,
  targetPerc,
  r = 232,
  g = 154,
  b = 50,
}) {
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    let start = perc;
    const incrTime = (duration / targetPerc) * 1000;
    if (start === targetPerc) return;
    const timer = setInterval(() => {
      start += 1;
      setPerc((prev) => prev + 1);
      if (start === targetPerc) clearInterval(timer);
    }, incrTime);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CircularProgressbar
      value={perc}
      text={`${perc}%`}
      maxValue={100}
      styles={buildStyles({
        trailColor: "#d6d6d6",
        pathColor: `rgba(${r}, ${g}, ${b}, ${perc / 10})`,
        // pathColor: `rgb(${r}, ${g}, ${b})`,
        textColor: `rgb(${r}, ${g}, ${b})`,
        backgroundColor: `rgba(${r}, ${g}, ${b}, 10)`,
      })}
    />
  );
}
