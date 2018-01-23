// $(function () {
//    $('#Bar2Container').highcharts({
//        chart: {
//            type: 'line',
//            backgroundColor:'none'
//        },
//        title: {
//            text: ''

//        },
//        subtitle: {
//            text: ''

//        },
//        credits: {
//            enabled:false
//        },
//        exporting: {
//            enabled: false
//        },
//        xAxis: {
//            categories: ['10:30', '11:35', '14:45'],
//            labels:
//            {
//                enabled: false
//            }
//        },
//        yAxis: {
//            title: {
//                text: ''
//            },
//            gridLineWidth: 0,
//            minorGridLineWidth: 0,
//            plotLines: [{
//                value: 64,
//                width: 2,
//                color: '#fff',
//                dashStyle: 'shortdash'
//            }],
//            labels:
//            {
//                enabled: false
//            }
//        },
//        tooltip: {
//            valueSuffix: '%',
//            borderColor: '#ccc'
//        },
//        legend: {
//            enabled: false
//        },
//        series: [{
//            name: '',
//            type: 'line',
//            data: [47, 76, 38],
//            color: '#17DEFF',
//            lineColor: "#fff",
//            allowPointSelect: true,
//            marker: {
//                enabled: true,
//                fillcolor: '#17DEFF',
//                lineWidth: 1,
//                lineColor: '#17DEFF',
//                radius : 25,
//                symbol: 'circle'
//            }
//        }]
//    });
//});


$(function () {
    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'msline',
            renderAt: 'Bar2Container',
            width: '100%',
            height: '250',
            dataFormat: 'json',
            containerBackgroundOpacity: '0',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "showLegend": "0",
                    "showLabels": "0",
                    "pYAxisname": "",
                    "SYAxisname": "",
                    "canvasBgAlpha": "0",
                    "animation": "0",
                    "borderColor": "0",
                    "canvasBorderColor": "0",
                    "canvasBorderAlpha": "0",
                    "showValues": "0",
                    "showYAxisValues": "0",
                    "showXAxisValues": "0",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "4",
                    "divLineDashGap": "1",
                    "divLineColor": "none",
                    "lineThickness": "1",
                    "chartBottomMargin": "-10"

                },
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1100",
                    "origh": "400",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [
                        {
                            "items": [
                                {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "text",
                                    "text": "75%",
                                    //Starting at 6th data label (based on index)
                                    "x": "$dataset.0.set.3.x",
                                    //Setting y position relative to canvas
                                    "y": "$dataset.0.set.3.y",
                                    //Ending at 7th data label (based on index)
                                    // "tox": "$xaxis.label.0.x",
                                    //Setting y position relative to canvas
                                    //"toy": "$dataset.0.set.0.y",
                                    "thickness": "15",
                                    "fontSize": "20",
                                    "color": "ffffff",
                                }
                            ]
                        }
                    ]
                },
                "categories": [
                 {
                     "category": [
                         { "label": "Mon" },
                         { "label": "Tue" },
                         { "label": "Wed" },
                         { "label": "Thu" },

                     ]
                 }
                ],
                "dataset": [
                    {
                        "seriesname": "Bakersfield Central",
                        "color": "FFFFFF",
                        "anchorBgColor": "17DEFF",
                        "data": [
                            { "value": "42", "anchorRadius": "0" },
                            { "value": "42", "anchorRadius": "18" },
                            { "value": "76", "anchorRadius": "18" },
                            { "value": "28", "anchorRadius": "30" },


                        ]
                    }
                ],
                "trendlines": [
      {
          "line": [
              {
                  "startvalue": "60",
                  "color": "ffffff",
                  "thickness": "1",
                  "dashed": "1",
                  "displayvalue": " "


              }
          ]
      }
                ]
            }
        }).render();

    });

});

/* Slot Adherence - Bubble Chart */
$(function () {
    $('#bubbleContainer').highcharts({

        chart: {
            type: 'bubble'
            
        },

        title: {
            text: ''
        },
        xAxis: {
            lineColor: 'transparent',
            minorTickLength: 0,
            tickLength: 0,
            labels:
            {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineWidth: 0,
            minorGridLineWidth: 0,
            plotLines: [{
                value: 4,
                width: 2,
                color: '#ccc',
                dashStyle: 'shortdash'
            }],
            labels:
            {
                enabled: false
            }
        },


        plotOptions: {
            bubble: {
                dataLabels: {
                    enabled: true,
                    style: {
                        textShadow: 'none',
                        color: '#FFF',
                        borderColor: 'none',
                        fontSize: '1.4em',
                        fontWeight: 'bold'
                    },
                    formatter: function () {
                        return this.point.name;
                    }
                },
                minSize: '20%',
                maxSize: '40%'
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        legend: {
            enabled: false
        },

        series: [
            {
                name: 'Arrival',
                marker: { fillColor: '#EDA9A9', lineColor: 'none' },
                data: [
                   { name: 'OAL-77%', x: 4.8, y: 2.5, z: 9 }
                ]
            },
            {
                name: 'Departure',
                marker: { fillColor: '#7DCC62', lineColor: 'none' },
                data: [
                   { name: 'FZ-87%', x: 4.4, y: 5, z: 6 },
                   { name: 'EK-92%', x: 5, y: 6, z: 7 }

                ]
            }
        ]
    });

});
