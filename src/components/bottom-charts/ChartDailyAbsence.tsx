import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Faltas", "Faltas por dia"],
  ["Faltas", 4],
  ["Ainda não bateram", 2],
  ["Presença", 10],
];

export const options = {
  title: "Faltas",
  pieHole: 0.6,
  is3D: false,
  colors: ['#fd7273', '#eeb930','#6aa556'],
};

export function DailyAbsence() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}