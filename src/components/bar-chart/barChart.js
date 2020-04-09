import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import './barChart.css'
am4core.useTheme(am4themes_animated); 
am4core.useTheme(am4themes_kelly);

const BarChart = () => {
    useEffect(() => {
        async function fetchStateData() {
            let response = await fetch(`https://api.covid19india.org/data.json`);
            let data = await response.json();
            let transformedData = data.statewise.map(({state, active, confirmed, recovered, deaths}) => {
                return { state, active, confirmed, recovered, deaths }
            });
            transformedData.shift();
            // Create chart instance
        var chart = am4core.create("barChartDiv", am4charts.XYChart3D);

        // Add data
        chart.data = transformedData;
        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "state";
        categoryAxis.title.text = "State covid cases";
        categoryAxis.renderer.grid.template.location = 0;
        // categoryAxis.renderer.minGridDistance = 20;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Active Cases";

        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries3D());
        series.dataFields.valueY = "active";
        series.dataFields.categoryX = "state";
        series.name = "Active";
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        // This has no effect
        // series.stacked = true;

        var series2 = chart.series.push(new am4charts.ColumnSeries3D());
        series2.dataFields.valueY = "recovered";
        series2.dataFields.categoryX = "state";
        series2.name = "Recovered";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        // Do not try to stack on top of previous series
        // series2.stacked = true;

        var series3 = chart.series.push(new am4charts.ColumnSeries3D());
        series3.dataFields.valueY = "deaths";
        series3.dataFields.categoryX = "state";
        series3.name = "Deaths";
        series3.tooltipText = "{name}: [bold]{valueY}[/]";
        series3.stacked = true;

        // Add cursor
        chart.cursor = new am4charts.XYCursor();

        // Add legend
        chart.legend = new am4charts.Legend();
        chart.scrollbarX = new am4core.Scrollbar();
        chart.scrollbarY = new am4core.Scrollbar();
        }
        fetchStateData();

        
    }, []);

    return (
        <div>
            <div id="barChartDiv"></div>
        </div>
    );
};

export default BarChart;