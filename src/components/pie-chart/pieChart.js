import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import './pieChart.css'

am4core.useTheme(am4themes_animated);

const PieChart = () => {

    useEffect(() => {
        async function fetchStateData() {
            let response = await fetch(`https://api.covid19india.org/data.json`);
            let data = await response.json();
            let transformedData = data.statewise.map(val => {
                return { state: val.state, active: val.active }
            });
            transformedData.shift();
            var chart = am4core.create("pieChartDiv", am4charts.PieChart3D);
            chart.data = transformedData;
            // Add and configure Series
            var pieSeries = chart.series.push(new am4charts.PieSeries3D());
            pieSeries.dataFields.value = "active";
            pieSeries.dataFields.category = "state";
            chart.innerRadius = am4core.percent(40);
            pieSeries.slices.template.stroke = am4core.color("#fff");
            pieSeries.slices.template.strokeWidth = 2;
            pieSeries.slices.template.strokeOpacity = 1;
            
            // Disabling labels and ticks on inner circle
            pieSeries.labels.template.disabled = true;
            pieSeries.ticks.template.disabled = true;
            // Put a thick white border around each Slice
            pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
            pieSeries.slices.template.states.getKey("hover").properties.scale = 1.1;
            // Add a legend
            chart.legend = new am4charts.Legend();
        }
        fetchStateData();
    }, []);

    return (
        <div>
            <div id="pieChartDiv"></div>
        </div>
    );
};

export default PieChart;