// import React from "react";

// const BarChartTwo = () => {
//   return <div>BarChartTwo</div>;
// };

// // npm uninstall esbuild
// npm install esbuild@0.21.5

// export default BarChartTwo;

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

export default function SimpleBarChart() {
  return (
    <BarChart
      width={500}
      height={300}
      series={[
        { data: pData, label: "pv", id: "pvId" },
        { data: uData, label: "uv", id: "uvId" },
      ]}
      xAxis={[{ data: xLabels, scaleType: "band" }]}
    />
  );
}
