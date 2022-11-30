import "chart.js/auto";
import { Chart } from "react-chartjs-2";

export default function MiniChart() {
  const numbers = [
    54, 79, 18, 6, 89, 85, 71, 22, 88, 47, 12, 64, 94, 14, 38, 78, 82, 57, 16,
    81, 54, 79, 18, 6, 89, 85, 71, 22, 88, 47, 12, 64, 94, 14, 38, 78, 82, 57,
    16, 81,
  ].sort();

  const data = {
    labels: Array(40).fill(0),
    datasets: [
      {
        data: numbers,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(232,154,50,0.8)",
        fill: "start",
        backgroundColor: "rgba(232,154,50,0.1)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: false,
        },
      },
      y: {
        display: false,
        title: {
          display: false,
        },
      },
    },
  };
  return (
    <Chart
      type="line"
      data={data}
      className="w-[150px] max-h-[50px]"
      options={options}
      // options={{
      //   scales: {

      //   }
      // }}
    />
  );
}
