import React from "react";
import { LineChart, Line, Tooltip, XAxis, YAxis } from "recharts";
import "../../../App.css"

function Graph() {
  const data = [
    {
      label: "$300k",
      uv: 300,
    },
    {
      label: "$400k",
      uv: 250,
    },
    {
      label: "$200k",
      uv: 250,
    },
    {
      label: "$400k",
      uv: 300,
    },
    {
      label: "$200k",
      uv: 200,
    },
    {
      label: "$300k",
      uv: 250,
    },
    {
      label: "$100k",
      uv: 190,
    },
    {
      label: "$800k",
      uv: 300,
    },
    {
      label: "$190k",
      uv: 190,
    },
    {
      label: "$800k",
      uv: 450,
    },
    {
      label: "$190k",
      uv: 230,
    },
    {
      label: "$100k",
      uv: 200,
    },
    
  ];

  return (
    <LineChart
      width={250}
      height={300}
      data={data}
      margin={{
        top: 35,
        bottom: 5
      }}
      style={{
        background:
          "linear-gradient(180deg,rgba(51, 56, 147, 1) 23%,rgba(45, 45, 45, 0.37888658881521353)54%,rgba(51, 56, 147, 1) 80%)",
        borderRadius: "8px",
      }}
    >
      <text  fill="white" textAnchor="inherit" verticalAnchor="start" dominantBaseline="central"  >
            <tspan  fontSize="18" x="10" y="40" fontFamily= "Poppins-regular">Sales last 6 month</tspan>
            <tspan fontSize="18" x="10" y="70" fontFamily= "Poppins-bold">$1500.89k</tspan>
      </text>
      <Line
        type="monotone"
        dataKey="uv"
        dot={false}
        stroke="#fff"
        
        style={{}}
        
      />
      <XAxis hide="true" dataKey="label" />
      <YAxis hide="false"/>
      <Tooltip  cursor={false}  allowEscapeViewBox={{x:false,y:true}} />
    </LineChart>
  );
}

export default Graph;
