"use client";

import { useEffect, useState } from "react";
import * as d3 from "d3";
// import { transition } from "d3-transition";

export default function SvgClient() {
  //   const [message, setMessage] = useState("svg client not monted ");
  useEffect(() => {
    // setMessage("svg client now mounted!!");
    const svg = d3.select("#svg");

    const c = d3.selectAll("circle");


    svg.selectAll("circle")
        .transition()
        .duration(3000)
        .attr("fill", "#00f");

    console.log("**** svg", c);
  }, []);

  return <></>;
}
