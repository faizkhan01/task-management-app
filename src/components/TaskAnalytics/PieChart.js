import React, { useRef, useLayoutEffect } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
// import "./App.css";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const PieChart = () => {
  //   const x = useRef(null);
  //   const resultSet = props.todos;
  //   console.log(resultSet);

  useLayoutEffect(() => {
    var chart = am4core.create("pieChartdiv", am4charts.PieChart);

    chart.marginRight = 400;

    // Add data
    chart.data = [
      {
        task: "Cricket",
        time: 50,
      },
      {
        task: "Football",
        time: 120,
      },
      {
        task: "Coding",
        time: 201.1,
      },
      {
        task: "Travelling",
        time: 165.8,
      },
      {
        task: "Bazar",
        time: 139.9,
      },
      {
        task: "Watching Tutorial",
        time: 128.3,
      },
      {
        task: "Walking",
        time: 99,
      },
      {
        task: "Exercise",
        time: 60,
      },
      {
        task: "Sleep",
        time: 250,
      },
    ];

    //console.log('chart', chart);

    // Create axes
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "time";
    pieSeries.dataFields.category = "task";
    pieSeries.stacked = true;

    // var series2 = chart.series.push(new am4charts.ColumnSeries());
    // series2.dataFields.valueY = "marketing";
    // series2.dataFields.categoryX = "country";
    // series2.name = "Marketing";
    // series2.tooltipText = "{name}: [bold]{valueY}[/]";
    // series2.stacked = true;

    // var series3 = chart.series.push(new am4charts.ColumnSeries());
    // series3.dataFields.valueY = "sales";
    // series3.dataFields.categoryX = "country";
    // series3.name = "Sales";
    // series3.tooltipText = "{name}: [bold]{valueY}[/]";
    // series3.stacked = true;

    // Add cursor
    // chart.cursor = new am4charts.XYCursor();
    // let x = am4core.create("chartdiv", am4charts.XYChart);

    // x.paddingRight = 20;

    // x.data = [
    //   {
    //     task: "Cricket",
    //     time: 50,
    //   },
    //   {
    //     task: "Football",
    //     time: 90,
    //   },
    //   {
    //     task: "Coding",
    //     time: 200,
    //   },
    //   {
    //     task: "Germany",
    //     time: 165,
    //   },
    //   {
    //     task: "Australia",
    //     time: 139,
    //   },
    //   {
    //     task: "Austria",
    //     time: 128,
    //   },
    //   {
    //     task: "UK",
    //     time: 99,
    //   },
    //   {
    //     task: "Belgium",
    //     time: 60,
    //   },
    //   {
    //     task: "The Netherlands",
    //     time: 50,
    //   },
    // ];

    // let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    // categoryAxis.renderer.grid.template.location = 0;

    // let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.tooltip.disabled = true;
    // valueAxis.renderer.minWidth = 35;

    // let series = x.series.push(new am4charts.ColumnSeries());
    // series.dataFields.categoryX = "task";
    // series.dataFields.valueY = "time";
    // series.tooltipText = "{valueY.value}";
    // x.cursor = new am4charts.XYCursor();

    // let scrollbarX = new am4charts.XYChartScrollbar();
    // scrollbarX.series.push(series);
    // chart.scrollbarX = scrollbarX;

    // x.current = x;

    return () => {
      chart.dispose();
    };
  }, []);

  return <div id="pieChartdiv" style={{ width: "80%", height: "300px" }}></div>;
};

export default PieChart;
