FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer2',
            width: '1100',
            height: '400',
            dataFormat: 'json',
            dataSource: {
                "chart": {                   
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "Brand",
                     "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0.5",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "canvasbgColor": "c7c7c7",
                    "yAxisMaxValue": "0",
                    "showLegend":"0",
                    "theme": "fint",
                    "showValues":"0",
                    "canvasBgAlpha":"0",
                    "legendBgAlpha":"0",
                    "bgColor":"0",
                    "showYAxisValues":"0",
                    "showXAxisValues":"0",
                    // "borderColor": "afb6b1",
                    // "lineThickness": "2",
                    "numVDivLines": "5",
                    "showLegend":"0",
                },
                "categories": [
                    {
                        "category": [
                            {
                                "label": "01/06"
                            },
                            {
                                "label": "02/06"
                            },
                            {
                                "label": "03/06"
                            },
                            {
                                "label": "04/06"
                            },
                            {
                                "label": "05/06"
                            },
                            {
                                "label": "06/06"
                            },
                            {
                                "label": "07/06"
                            },
                            {
                                "label": "08/06"
                            },
                            {
                                "label": "09/06"
                            },
                            {
                                "label": "10/06"
                            },
                            {
                                "label": "11/06"
                            },
                            {
                                "label": "12/06"
                            }
                        ]
                    }
                ],
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
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.0.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.0.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.0.y",
                                    "thickness": "5",
                                    "color": "0d0c0c",
                                },
                                {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.1.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.1.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.1.y",
                                    "thickness": "5",
                                    "color": "0d0c0c",
                                }, {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.2.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.2.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.2.y",
                                    "thickness": "5",
                                    "color": "17DEFF",
                                },
                                {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.3.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.3.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.3.y",
                                    "thickness": "5",
                                    "color": "17DEFF",
                                },
                                {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.4.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.4.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.4.y",
                                    "thickness": "5",
                                    "color": "0d0c0c",
                                }
                                , {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.5.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.5.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.5.y",
                                    "thickness": "5",
                                    "color": "17DEFF",
                                }
                                , {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.6.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.6.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.6.y",
                                    "thickness": "5",
                                    "color": "0d0c0c",
                                }
                                , {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.7.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.7.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.7.y",
                                    "thickness": "5",
                                    "color": "17DEFF",
                                }
                                , {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.8.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.8.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.8.y",
                                    "thickness": "5",
                                    "color": "0d0c0c",
                                }
                                , {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.9.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.9.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.9.y",
                                    "thickness": "5",
                                    "color": "17DEFF",
                                }
                                , {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.10.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.10.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.10.y",
                                    "thickness": "5",
                                    "color": "17DEFF",
                                }
                                , {
                                    //Color block for weekend
                                    "id": "zone",
                                    "type": "line",
                                    //Starting at 6th data label (based on index)
                                    "x": "$xaxis.label.11.x",
                                    //Setting y position relative to canvas
                                    "y": "$canvasStartY",
                                    //Ending at 7th data label (based on index)
                                    "tox": "$xaxis.label.11.x",
                                    //Setting y position relative to canvas
                                    "toy": "$dataset.1.set.11.y",
                                    "thickness": "5",
                                    "color": "0d0c0c",
                                }
                            ]

                        }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Actual Revenue",
                           "showValues": "0",
                           "color": "afb6b1",
                           "data": [
                              		    {
                              		        "label": "Jan",
                              		        "value": "-26000"
                              		    },

                            {
                                "label": "Feb",
                                "value": "-46000"
                            },
                            {
                                "label": "Mar",
                                "value": "-66000"
                            },
                            {
                                "label": "Apr",
                                "value": "-56000"
                            },
                            {
                                "label": "May",
                                "value": "-26000"
                            },
                            {
                                "label": "Jun",
                                "value": "-76000"
                            },
                            {
                                "label": "Jul",
                                "value": "-96000"
                            },
                            {
                                "label": "Aug",
                                "value": "-56000"
                            },
                            {
                                "label": "Sep",
                                "value": "-46000"
                            },
                            {
                                "label": "Oct",
                                "value": "-86000"
                            },
                            {
                                "label": "Nov",
                                "value": "-46000"
                            },
                            {
                                "label": "Dec",
                                "value": "-16000"
                            }
                           ]
                       },

                    {
                        "seriesName": "Projected Revenue",
                        "renderAs": "line",
			"anchorRadius": "20",                        
                        "color": "none",
                        "data": [
                          {
                              "value": "-16000",
                              "anchorBgcolor": "0d0c0c"
                          },
                          {
                              "value": "-20000",
                              "anchorBgcolor": "0d0c0c"
                          },
                          {
                              "value": "-18000",
				"anchorBgcolor": "17DEFF"
                          },
                          {
                              "value": "-19000",
				"anchorBgcolor": "17DEFF"
                          },
                          {
                              "value": "-15000",
                              "anchorBgcolor": "0d0c0c"
                          },
                          {
                              "value": "-21000",
				"anchorBgcolor": "17DEFF"
                          },
                          {
                              "value": "-16000",
                              "anchorBgcolor": "0d0c0c"
                          },
                          {
                              "value": "-20000",
				"anchorBgcolor": "17DEFF"
                          },
                          {
                              "value": "-17000",
                              "anchorBgcolor": "0d0c0c"
                          },
                          {
                              "value": "-25000",
				"anchorBgcolor": "17DEFF"

                          },
                          {
                              "value": "-19000",
				"anchorBgcolor": "17DEFF"
                          },
                          {
                              "value": "-23000",
                              "anchorBgcolor": "0d0c0c"
                          }
                        ]
                    },
                    {
                        "seriesName": "Profit",
                        "renderAs": "line",
                        "anchorRadius": "0",
                        "data": [
                            {
                                "value": "-14000"
                            },
                            {
                                "value": "-15000"
                            },
                            {
                                "value": "-23000"
                            },
                            {
                                "value": "-14000"
                            },
                            {
                                "value": "-11000"
                            },
                            {
                                "value": "-27000"
                            },
                            {
                                "value": "-41000"
                            },
                            {
                                "value": "-44000"
                            },
                            {
                                "value": "-21000"
                            },
                            {
                                "value": "-28000"
                            },
                            {
                                "value": "-42000"
                            },
                            {
                                "value": "-37000"
                            }
                        ]
                    },
                    {
                        "seriesName": "Profit",
                        "renderAs": "line",
                        "anchorRadius": "0",
                        "data": [
                            {
                                "value": "-14000"
                            },
                            {
                                "value": "-35000"
                            },
                            {
                                "value": "-33000"
                            },
                            {
                                "value": "-64000"
                            },
                            {
                                "value": "-41000"
                            },
                            {
                                "value": "-37000"
                            },
                            {
                                "value": "-71000"
                            },
                            {
                                "value": "-54000"
                            },
                            {
                                "value": "-61000"
                            },
                            {
                                "value": "-48000"
                            },
                            {
                                "value": "-42000"
                            },
                            {
                                "value": "-37000"
                            }
                        ]
                    }
                ]
            }
        }).render();
    });