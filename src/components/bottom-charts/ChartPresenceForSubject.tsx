import React from "react";
import { Chart } from "react-google-charts";//importando

export const data = [
    ["Presença", "Presença por materia"],//definindo os parametros 
    ["Matemática", 11],//formato de apresentacao 
    ["Português", 2]
  ];
 
export const options = {
    title: "Presença por matéria",
    colors: ['#404254', '#848ddc'],
    animation: {
        duration: 1000,
        easing: 'in'
    }
};

export function PresenceForSubject() {
    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    );
  }