var kpi1L2HighestPicPointArray = new Array();

function onclickHome() {
    window.location = "/Home/Index"
}
function OpenAirportDelayKPI() {
    window.location = "/Home/KPI"
}
function OpenslotAdherenceKPI() {
    window.location = "/Home/slotAdherenceKPI"
}
// To Get table coulmn as cetogery
function GetColumnHeaders(obj) {

    var cols = new Array();
    for (var key in obj[0]) {
        cols.push({
            "label": key
        });
    }
    return cols;
}
// To Get row value as cetogery
function GetRowCetogery(obj, key) {
    debugger;

    var cols = new Array();
   
    for (var i in obj) {
        var value = obj[i][key];
        //alert(value);
        if (trafficHandled_Frequency == "Daily") {
            var dfrom = value.split("-");
            value = dfrom[2] + "/" + dfrom[1];
        }
        else
            value += ":00";

        var obj1 = {
            "label": value
        };
        cols.push(obj1);
    }
    return cols;
}

//get series data
function GetSeriesData(obj, columnKey) {

    var cols = new Array();
    for (var i in obj) {
        var obj1 = {
            "value": obj[i][columnKey]
        };
        cols.push(obj1);
    }
    return cols;
}

function GetLoliPopSeriesData(obj, columnKey, labelKey,img) {
    //alert('hello');
    var cols = new Array();
    var MaxValue = GetMaximumValue(obj, columnKey)
    var dir="all";
    if (img == "/img/icons/arrival.png")
        dir = "inbound";
    else if (img == "/img/icons/depart.png")
        dir = "outbound";
    //alert(dir);
    for (var i in obj) {

        var value = obj[i][columnKey];
        var time = obj[i][labelKey];
       // alert(time);
        if (value == MaxValue) {
            //var mark = (value>500)?900:value; 
            var obj1 = {
                "value": value,
                "label": obj[i][labelKey],
                "anchorBgcolor": "5CDEFF",
                "anchorRadius": "25"
            };
            cols.push(obj1);
        }
        else if (value == 0) {
            if (time.indexOf("-") != -1 && (dir=="all"))
                actvals = 2000
            else  if (time.indexOf("-") != -1 && (dir=="inbound"))
                actvals = 1200
            else if (time.indexOf("-") != -1 && (dir == "outbound"))
                actvals = 750
            else actvals = 80
            var obj1 = {
                "value": actvals,
                "label": obj[i][labelKey],
                //"anchorBgcolor": "5CDEFF",
               // "anchorRadius": "25"
            };
            cols.push(obj1);
        }
        
        
        else {
            //alert(value);
            var obj1 = {
                "value": value,
                "label": obj[i][labelKey]
            };
            cols.push(obj1);

        }
    }
    return cols;
}

function GetLoliPopSeriesDataConstant(obj, columnKey, labelKey) {
    debugger;
   // alert(labelKey);
    var cols = new Array();
    var MaxValue = GetMaximumValueForDashBoard(obj, columnKey, labelKey)
    //alert(MaxValue);
    for (var i in obj) {
        //alert(MaxValue[0]);
        //alert(MaxValue[1]);
        //alert(MaxValue[2]);
        var value = obj[i][columnKey];
        var time = obj[i][labelKey];
        if (value == MaxValue[1]) {
            var obj1 = {
                "value": value,
                "label": obj[i][labelKey],
                "anchorBgcolor": "5CDEFF",
                "anchorRadius": "20"
            };
            cols.push(obj1);
        }
        else if ((time == MaxValue[0] || time == MaxValue[2]) && (value!=0)) {
            var obj1 = {
                "value": value,
                "label": obj[i][labelKey],
                "anchorRadius": "17"
            };
            cols.push(obj1);
        }
     else   {
            //alert(MaxValue[1]);
            var obj1 = {
                "value": MaxValue[1] / 5
                // "label": obj[i][labelKey]
            };
            cols.push(obj1);
        }
    }
    return cols;
}

function GetLoliPopReverseSeriesData(obj, columnKey, labelKey) {
    alert('hello');
    var cols = new Array();
    var MaxValue = GetMaximumValue(obj, columnKey)
    for (var i in obj) {
        var value = obj[i][columnKey];
        if (value == MaxValue[0]) {
            var obj1 = {
                "value": "-" + value,
                "label": obj[i][labelKey],
                "anchorBgcolor": "4F88FC",
                "anchorRadius": "25"
            };
            cols.push(obj1);
        }

       //else  if (value == 0) {
       //     var obj1 = {
       //         "value": "-" + value,
       //         "label": obj[i][labelKey],
       //         "anchorBgcolor": "fff000",
       //         "anchorRadius": "250"
       //     };
       //     cols.push(obj1);
       // }
        else {
            var obj1 = {
                "value": "-" + value,
                "label": obj[i][labelKey]
            };
            cols.push(obj1);

        }
    }
    return cols;
}



function GetBubbleReverseSeriesDataKPI1L2(obj, columnKey, labelKey) {
    debugger;

    var cols = new Array();
    for (var i in obj) {
        var value = obj[i][columnKey];
        var time = obj[i][labelKey];
        if (time == kpi1L2HighestPicPointArray[0]) {
            var obj1 = {
                "value": "-" + value,
                "label": obj[i][labelKey],
                "anchorBgcolor": "4F88FC",
                "anchorRadius": "25"
            };
            cols.push(obj1);
        }
        else if (value == 0) {
            if (time.indexOf("-") != -1)
                actvals = -1350
            else actvals = -150
            var obj1 = {
                "value": actvals,
                "label": obj[i][labelKey],
                //"anchorBgcolor": "ff0000",
                // "anchorBgcolor": "5CDEFF",
                //"anchorRadius": "25"
            };
            cols.push(obj1);
        }


        else {
            if (value < 100) { value = value + 100; }
            var obj1 = {
                "value": "-" + value,
                "label": obj[i][labelKey]
            };
            cols.push(obj1);

        }
    }
    return cols;
}

function GetBubbleSeriesDataKPI1L2(obj, columnKey, labelKey) {
    debugger;
    //alert('hello');
    var cols = new Array();
    for (var i in obj) {
        var value = obj[i][columnKey];
        var time = obj[i][labelKey];
        //alert(value);
        if (time == kpi1L2HighestPicPointArray[0]) {
            var obj1 = {
                "value": value,
                "label": obj[i][labelKey],
                "anchorBgcolor": "5CDEFF",
                "anchorRadius": "25"
            };
            cols.push(obj1);
        }
        else if (value == 0) {
            //alert(time);
            //alert(value);
            if (time.indexOf("-") != -1)
                actvals = 2500
            else actvals = 170
            var obj1 = {
                "value": actvals,
                "label": obj[i][labelKey],
                //"anchorBgcolor": "ff0000",
               // "anchorBgcolor": "5CDEFF",
                //"anchorRadius": "25"
            };
            cols.push(obj1);
        }


        else {
            
            var obj1 = {
                "value": value,
                "label": obj[i][labelKey]
            };
            cols.push(obj1);
        }
        //}
    }
    return cols;
}

function GetSeriesReverseData(obj, columnKey) {

    var cols = new Array();
    for (var i in obj) {
        var obj1 = {
            "value": "-" + obj[i][columnKey]
        };
        cols.push(obj1);
    }
    return cols;
}

function GetMaximumValue(obj, key) {
    var maxValue = 0;
    for (var i in obj) {
        
        if (parseFloat(maxValue) < parseFloat(obj[i][key]))
            maxValue = obj[i][key];
    }
   
    return maxValue;
}

function GetMaximumValueForDashBoard(obj, key, lable) {
    debugger
    var value = new Array();
    var maxValue = 0;
    var previousValue, nextValue;
    //alert(Object.keys(obj).length);
    for (var i in obj) {
        
        if (parseFloat(maxValue) < parseFloat(obj[i][key])) {
            maxValue = obj[i][key];
            //alert('count'+i);
            var prv = parseInt(i) - 1;
            var nxt = parseInt(i) + 1;
            prv = (prv == -1) ? 0 : prv;
            //alert(prv);
            //alert(nxt);
            //if (nxt = 15)
               // nxt = 14
            //if (prv = 0)
            // prv = 1
            if (Object.keys(obj).length = 15) {
                if (Object.keys(obj).length = i) nxt = Object.keys(obj).length - 1;
            }
            //if (Object.keys(obj).length = 9) {
            //    if (Object.keys(obj).length = i) nxt = Object.keys(obj).length - 1;
            //}
            //alert('obj' + obj[nxt][lable]);
            previousValue = obj[prv][lable];
            nextValue = obj[nxt][lable];
          
        }
    }
    value.push(previousValue);
    value.push(maxValue); value.push(nextValue);
    
    return value;
}


function GetMaximumValueKPI2Array(objArrival, objDeparture, key) {
    debugger;
    kpi1L2HighestPicPointArray = new Array();
    var value = 0;
    var index = 0;
    for (var i in objArrival) {
        var maxValue = objArrival[i][key] + objDeparture[i][key];
        if (parseFloat(value) < parseFloat(maxValue)) {
            value = maxValue;
            index = i;
        }
    }

    kpi1L2HighestPicPointArray.push(objArrival[index]['TIMEPERIOD']);
    kpi1L2HighestPicPointArray.push(objArrival[index][key]);
    kpi1L2HighestPicPointArray.push(objDeparture[index][key]);
    return kpi1L2HighestPicPointArray;
}
function GetMaximumValueArry(obj, key) {
    var value = new Array();
    var maxValue = 0;
    var secondMaxValue = 0;
    // maxValue = Math.max.apply(Math, obj);
    for (var i in obj) {
        
        if (parseFloat(maxValue) < parseFloat(obj[i][key])) {
            secondMaxValue = maxValue;
            maxValue = obj[i][key];
        }
    }
    value.push(maxValue);

    value.push(secondMaxValue);
    return value;
}

//Create Bubble series for dashboard
function CreateBubbleSeriesData(obj, key) {
    var bubbleSeries = new Array();
    debugger;
    //alert(key);
    var MaxValue = GetMaximumValue(obj, key)
    //alert(MaxValue);
    for (var i in obj) {
        var value = obj[i][key];
        if (value == MaxValue) {
            var obj1 = {
                "id": "zone",
                "type": "rectangle",
                "x": "$xaxis.label." + i + ".x ",
                "y": "$canvasEndY-1.5",
                "tox": "$xaxis.label." + i + ".x + 2",
                "toy": "$dataset.1.set." + i + ".y ",
                "thickness": "5",
                "color": "5CDEFF",
            };
            bubbleSeries.push(obj1);
        }
        else {
            var obj1 = {
                "id": "zone",
                "type": "rectangle",
                "x": "$xaxis.label." + i + ".x",
                "y": "$canvasEndY-1.5",
                "tox": "$xaxis.label." + i + ".x + 2",
                "toy": "$dataset.1.set." + i + ".y ",
                "thickness": "5",
                "color": "000000",
            };
            bubbleSeries.push(obj1);

        }
        var obj2 = {
            //Label 'Weekend' on the color block
            "id": "label",
            "type": "text",
            "text": value,
            "color": "FFFFFF",
            "fontSize": "8",
            "bold": "1",
            "showBelow": "0",
            "x": "$xaxis.label." + i + ".x",
            "y": "$dataset.1.set." + i + ".y",

        };
        bubbleSeries.push(obj2);
    }
    return bubbleSeries;
}

function CreateBubbleReverseSeriesData(obj, key, img) {

    var bubbleSeries = new Array();
    var MaxValue = GetMaximumValue(obj, key)
    
    for (var i in obj) {
        var value = obj[i][key]; debugger;
        if (value == MaxValue) {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasStartY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "4F88FC",
            };
            bubbleSeries.push(obj1);
            var obj2 = {
                //Label 'Weekend' on the color block
                "id": "label",
                "type": "text",
                "text": value,
                "color": "ffffff",
                "fontSize": "12",
                "bold": "1",
                "showBelow": "0",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$dataset.1.set." + i + ".y",

            };
            bubbleSeries.push(obj2);
        }
            if (value == MaxValue) {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasStartY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "4F88FC",
            };
            bubbleSeries.push(obj1);
            var obj2 = {
                //Label 'Weekend' on the color block
                "id": "label",
                "type": "text",
                "text": value,
                "color": "ffffff",
                "fontSize": "12",
                "bold": "1",
                "showBelow": "0",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$dataset.1.set." + i + ".y",

            };
            bubbleSeries.push(obj2);
        }
        else {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasStartY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "FFFFFF ",
            };
            bubbleSeries.push(obj1);
            var obj2 = {
                //Label 'Weekend' on the color block
                "id": "label",
                "type": "text",
                "text": value,
                "color": "000000",
                "fontSize": "12",
                "bold": "1",
                "showBelow": "0",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$dataset.1.set." + i + ".y",

            };
            bubbleSeries.push(obj2);
        }

    }

    var ob3 = {
        "id": "Milton-user-icon",
        "type": "image",
        "url": img,
        "x": "$canvasEndX+10",
        "tox": "$canvasEndX + 40",
        "toy": "$canvasStartY -20",
        "xScale": "143",
        "yScale": "90",
        "y": "$canvasStartY +20"
    };

    var obj4 = {
        "id": "zone",
        "type": "rectangle",
        "x": "$canvasStartX + $xaxis.label.11.x - $xaxis.label.11.x ",
        "y": "$canvasStartY-7.5",
        "tox": "$canvasEndX+11",
        "toy": "$canvasStartY+7.5",
        //"thickness": "15",
        "color": "4F88FC",
    };
    bubbleSeries.push(ob3); bubbleSeries.push(obj4);
    return bubbleSeries;
}

function CreateAnotationSeriesData(obj, key, img) {

    var bubbleSeries = new Array();
    var MaxValue = GetMaximumValue(obj, key)
    for (var i in obj) {
        var value = obj[i][key]; debugger;
        if (value == MaxValue) {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasEndY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
               "thickness": "5",
                "color": "5CDEFF",
            };
            bubbleSeries.push(obj1);
        }
        else {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasEndY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "000000 ",
            };
            bubbleSeries.push(obj1);

        }
        var obj2 = {
            //Label 'Weekend' on the color block
            "id": "label",
            "type": "text",
            "text": value,
            "color": "FFFFFF",
            "fontSize": "12",
            "bold": "1",
            "showBelow": "0",
            "x": "$dataset.1.set." + i + ".x",
            "y": "$dataset.1.set." + i + ".y",

        };
        bubbleSeries.push(obj2);
    }
    var ob3 = {
        "id": "Milton-user-icon",
       "type": "image",
        "url": img,
        "x": "$canvasEndX+10",
        "tox": "$canvasEndX + 40",
        "toy": "$canvasEndY - 20",
        "xScale": "143",
        "yScale": "85",
        "y": "$canvasEndY + 20"
    };

    var obj4 = {
        "id": "zone",
        "type": "rectangle",
        "x": "$canvasStartX + $xaxis.label.11.x - $xaxis.label.11.x ",
        "y": "$canvasEndY+5",
        "tox": "$canvasEndX+12",
        "toy": "$canvasEndY-10",
        "thickness": "15",
        "color": "5CDEFF",
    };
    bubbleSeries.push(ob3); bubbleSeries.push(obj4);
    return bubbleSeries;

}


function CreateAnotationKPIL1SeriesData(obj, key, img) {

    var bubbleSeries = new Array();
    var MaxValue = GetMaximumValue(obj, key)
    for (var i in obj) {
        var value = obj[i][key];
        if (value == MaxValue) {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasEndY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "5CDEFF",
            };
            bubbleSeries.push(obj1);
        }

        else {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasEndY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "000000 ",
            };
            bubbleSeries.push(obj1);

        }
        var obj2 = {
            //Label 'Weekend' on the color block
            "id": "label",
            "type": "text",
            "text": value,
            "color": "FFFFFF",
            "fontSize": "12",
            "bold": "1",
            "showBelow": "0",
            "x": "$dataset.1.set." + i + ".x",
            "y": "$dataset.1.set." + i + ".y",

        };
        bubbleSeries.push(obj2);
    }
    var ob3 = {
        "id": "Milton-user-icon",
        "type": "image",
        "url": img,
        "x": "$canvasEndX+10",
        "tox": "$canvasEndX + 40",
        "toy": "$canvasEndY - 20",
        "xScale": "143",
        "yScale": "85",
        "y": "$canvasEndY + 20"
    };

    var obj4 = {
        "id": "zone",
        "type": "rectangle",
        "x": "$canvasStartX + $xaxis.label.11.x - $xaxis.label.11.x ",
        "y": "$canvasEndY+5",
        "tox": "$canvasEndX+12",
        "toy": "$canvasEndY-10",
        "thickness": "15",
        "color": "5CDEFF",
    };
    bubbleSeries.push(ob3); bubbleSeries.push(obj4);
    return bubbleSeries;

}



function CreateKPI1L2AnotationData(objArrival, objDeparture, key) {
    debugger;

    var bubbleSeries = new Array();
    var MaxTime = GetMaximumValueKPI2Array(objArrival, objDeparture, key)
    for (var i in objArrival) {
        var value = objArrival[i][key];
        var maxValue = 0;
        var time = objArrival[i]['TIMEPERIOD'];
        if (time == kpi1L2HighestPicPointArray[0]) {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasEndY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "5CDEFF",
            };
            bubbleSeries.push(obj1);
        }
        else {
            //if (value == MaxValue[1]) {
            //    var obj1 = {
            //        "id": "zone",
            //        "type": "line",
            //        "x": "$dataset.1.set." + i + ".x",
            //        "y": "$canvasEndY",
            //        "tox": "$dataset.1.set." + i + ".x",
            //        "toy": "$dataset.1.set." + i + ".y",
            //        "thickness": "5",
            //        "color": "5CDEFF",
            //    };
            //    bubbleSeries.push(obj1);
            //}
            //else {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasEndY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "000000 ",
            };
            bubbleSeries.push(obj1);
            //}
        }
        var obj2 = {
            //Label 'Weekend' on the color block
            "id": "label",
            "type": "text",
            "text": value,
            "color": "FFFFFF",
            "fontSize": "12",
            "bold": "1",
            "showBelow": "0",
            "x": "$dataset.1.set." + i + ".x",
            "y": "$dataset.1.set." + i + ".y",

        };
        bubbleSeries.push(obj2);
    }
    var ob3 = {
        "id": "Milton-user-icon",
        "type": "image",
        "url": "/img/icons/arrival.png",
        "x": "$canvasEndX+10",
        "tox": "$canvasEndX + 40",
        "toy": "$canvasEndY - 24",
        "xScale": "143",
        "yScale": "85",
        "y": "$canvasEndY + 20"
    };

    var obj4 = {
        "id": "zone",
        "type": "rectangle",
        "x": "$canvasStartX + $xaxis.label.11.x - $xaxis.label.11.x ",
        "y": "$canvasEndY+5",
        "tox": "$canvasEndX+12",
        "toy": "$canvasEndY-10",
        "thickness": "15",
        "color": "5CDEFF",
    };
    bubbleSeries.push(ob3); bubbleSeries.push(obj4);
    return bubbleSeries;

}

function CreateBubbleReverseSeriesDataKPI2(objDeparture, key, img) {
    debugger;

    var bubbleSeries = new Array();

    for (var i in objDeparture) {
        var value = objDeparture[i][key];
        var time = objDeparture[i]['TIMEPERIOD'];
        if (time == kpi1L2HighestPicPointArray[0]) {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasStartY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "4F88FC",
            };
            bubbleSeries.push(obj1);
            var obj2 = {
                //Label 'Weekend' on the color block
                "id": "label",
                "type": "text",
                "text": value,
                "color": "ffffff",
                "fontSize": "12",
                "bold": "1",
                "showBelow": "0",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$dataset.1.set." + i + ".y",

            };
            bubbleSeries.push(obj2);
        }

        else {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasStartY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "FFFFFF ",
            };
            bubbleSeries.push(obj1);
            var obj2 = {
                //Label 'Weekend' on the color block
                "id": "label",
                "type": "text",
                "text": value,
                "color": "000000",
                "fontSize": "12",
                "bold": "1",
                "showBelow": "0",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$dataset.1.set." + i + ".y",

            };
            bubbleSeries.push(obj2);

        }

    }

    var ob3 = {
        "id": "Milton-user-icon",
        "type": "image",
        "url": img,
        "x": "$canvasEndX+10",
        "tox": "$canvasEndX + 40",
        "toy": "$canvasStartY -22",
        "xScale": "143",
        "yScale": "90",
        "y": "$canvasStartY +23"
    };

    var obj4 = {
        "id": "zone",
        "type": "rectangle",
        "x": "$canvasStartX + $xaxis.label.11.x - $xaxis.label.11.x ",
        "y": "$canvasStartY-7.5",
        "tox": "$canvasEndX+11",
        "toy": "$canvasStartY+7.5",
        //"thickness": "15",
        "color": "4F88FC",
    };
    bubbleSeries.push(ob3); bubbleSeries.push(obj4);
    return bubbleSeries;

}

function GetLollyPopChart(jsonObject) {
    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'lollyPopChartContainer',
            width: '650',
            height: '250',
            dataFormat: 'json',
            containerBackgroundOpacity: '0',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "showYAxisValues": "0",
                    "showXAxisValues": "0",
                    "showLegend": "0",
                    "numVDivLines": "5",
                    "showYAxisValues": "0",
                    "showXAxisValues": "0",
                    "pYAxisname": "",
                    "SYAxisname": "",
                    "sYAxisMaxValue": 1.8 * GetMaximumValue(jsonObject, 'DELAY_MINS'),
                    "pYAxisMaxValue": 1.4 * GetMaximumValue(jsonObject, 'MOVEMENTS'),
                    "canvasBgAlpha": "0",
                    "divLineThickness": "0",
                    "divLineIsDashed": "0",
                    "divLineDashLen": "0",
                    "divLineDashGap": "0",
                    "outCnvbaseFontSize": "7.5",
                    "outCnvbaseFontColor": "ffffff",
                    "labeldisplay": "WRAP",
                    //"slantLabels":"1"

                },
                "categories": [
                    {
                        "category": GetRowCetogery(jsonObject, 'TIMEPERIOD') //GetHeaders(jsonObject)
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "750",
                    "origh": "250",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [
                                                 {
                                                     "items": CreateBubbleSeriesData(jsonObject, 'DELAY_MINS')
                                                 }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Tickets",
                           "showValues": "0",
                           "color": "667889",
                           "borderColor": "667889",
                           "borderAlpha": "70",
                           "alpha": "70",

                           "data": GetSeriesData(jsonObject, 'MOVEMENTS')
                       },

                     {
                         "seriesName": "Tickets ",
                         "renderAs": "line",
                         "showValues": "0",
                        "anchorRadius": "12",
                         "color": "none",
                         "anchorBgColor": "000000",
                         "parentYAxis": "S",
                         "data": GetLoliPopSeriesDataConstant(jsonObject, 'DELAY_MINS', 'TIMEPERIOD')
                     }

                ]
            }
        }).render();
    });
}

function GetLolipopChartL2(jsonObject, img) {
    
    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer',
            width: '1170',
            height: '480',
            containerBackgroundOpacity: '0',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "chartRightMargin": "30",
                    "showLegend": "0",
                    "pYAxisname": "",
                    "SYAxisname": "",
                    "sYAxisMaxValue": Math.round((1.25 * GetMaximumValue(jsonObject, 'DELAY_MINS')) / 1000) * 1000,
                    "pYAxisMaxValue": Math.round((1.1 * GetMaximumValue(jsonObject, 'MOVEMENTS')) / 100) * 100,
                    "canvasBgAlpha": "0",
                    "outCnvbaseFontSize": "11",
                    "outCnvbaseFontColor": "ffffff",
                    "divLineColor": "ffffff",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineDashGap": "1",
                    "showSecondaryLimits": "0",
                    "animation": "0",
                    "labeldisplay": "WRAP"

                },
                "categories": [
                    {
                        "category": GetRowCetogery(jsonObject, 'TIMEPERIOD') //GetHeaders(jsonObject)
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1170",
                    "origh": "480",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [

                        {
                            "items": CreateAnotationKPIL1SeriesData(jsonObject, 'DELAY_MINS', img)
                        }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Ground Traffic",
                           "showValues": "0",
                           "color": "AFAFAF",
                           "alpha": "30",
                           "data": GetSeriesData(jsonObject, 'MOVEMENTS')
                       },
                       {
                           "seriesName": "Tickets",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "20",
                           "parentYAxis": "S",
                           "color": "none",
                           "anchorBgColor": "000000",
                           "data": GetLoliPopSeriesData(jsonObject, 'DELAY_MINS', 'TIMEPERIOD',img)
                       },
                       {
                           "seriesName": "Declared Capacity",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFE504",
                           "lineThickness": ".5",
                           "data": GetSeriesData(jsonObject, 'DECLARED_CAPACITY')
                       }, {
                           "seriesName": "Scheduled Demand",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFAC61",
                           "lineThickness": ".5",
                           "data": GetSeriesData(jsonObject, 'SCHEDULED_DEMAND')
                       }, {
                           "seriesName": "Actual Demand",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "showValues": "0",
                           "color": "FFFFFF",
                           "lineThickness": ".5",
                           "data": GetSeriesData(jsonObject, 'ACTUAL_DEMAND')
                       }

                ]
            }

        }).render();
    });
}


function GetKPI1L2ReverseChart(jsonObject) {
    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer2',
            width: '1170',
            height: '480',
            dataFormat: 'json',
            containerBackgroundOpacity: '0',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "chartRightMargin": "65",
                    "chartTopMargin": "22",
                    "showLegend": "0",
                    "showLabels": "0",
                    "pYAxisname": "",
                    "SYAxisname": "",
                    "sYAxisMinValue": Math.round((-1.25 * GetMaximumValue(jsonObject, 'DELAY_MINS')) / 1000) * 1000,
                    "pYAxisMinValue": Math.round((-1.1 * GetMaximumValue(jsonObject, 'MOVEMENTS')) / 100) * 100,
                    "canvasBgAlpha": "0",
                    "divLineColor": "ffffff",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineDashGap": "1",
                    "animation": "0",
                    "outCnvbaseFontSize": "12",
                    "outCnvbaseFontColor": "ffffff"
                },
                "categories": [
                    {
                        "category": GetRowCetogery(jsonObject, 'TIMEPERIOD')
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1170",
                    "origh": "480",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [
                        {
                            "items": CreateBubbleReverseSeriesData(jsonObject, 'DELAY_MINS', "/img/icons/depart.png")

                        }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Ground Traffic",
                           "showValues": "0",
                           "color": "afb6b1",
                           "alpha": "30",
                           "data": GetSeriesReverseData(jsonObject, 'MOVEMENTS')
                       },
                       {
                           "seriesName": "Tickets",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "20",
                           "color": "none",
                           "anchorBgColor": "FFFFFF",
                           "parentYAxis": "S",
                           "data": GetLoliPopReverseSeriesData(jsonObject, 'DELAY_MINS', 'TIMEPERIOD')
                       },
                       {
                           "seriesName": "Declared Capacity",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFE504",
                           "lineThickness": ".5",
                           "data": GetSeriesReverseData(jsonObject, 'DECLARED_CAPACITY')
                       }, {
                           "seriesName": "Scheduled Demand",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFAC61",
                           "lineThickness": ".5",
                           "data": GetSeriesReverseData(jsonObject, 'SCHEDULED_DEMAND')
                       }, {
                           "seriesName": "Actual Demand",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFFFFF",
                           "lineThickness": ".5",
                           "data": GetSeriesReverseData(jsonObject, 'ACTUAL_DEMAND')
                       }

                ]
            }
        }).render();

    });
}

function CreateKPI1L2ArrivalDepartureChart(arrivaljsonObject, departurejsonObject) {
    debugger;
    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer',
            width: '1170',
            height: '250',
            containerBackgroundOpacity: '0',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "chartRightMargin": "30",
                    "showLegend": "0",
                    "pYAxisname": "",
                    "SYAxisname": "",
                    "sYAxisMaxValue": Math.round((1.25 * GetMaximumValue(arrivaljsonObject, 'DELAY_MINS')) / 1000) * 1000,
                    "pYAxisMaxValue": Math.round((1 * GetMaximumValue(arrivaljsonObject, 'MOVEMENTS')) / 100) * 100,
                    "numDivLines": "3",
                    "adjustDiv": "1",//rounds decimal value
                    "canvasBgAlpha": "0",
                    "outCnvbaseFontSize": "11",
                    "outCnvbaseFontColor": "ffffff",
                    "divLineColor": "ffffff",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineDashGap": "1",
                    "showSecondaryLimits": "0",
                    "animation": "0",
                     "labeldisplay": "WRAP",
                },
                "categories": [
                    {
                        "category": GetRowCetogery(arrivaljsonObject, 'TIMEPERIOD') //GetHeaders(jsonObject)
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1170",
                    "origh": "100",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [

                        {
                            "items": CreateKPI1L2AnotationData(arrivaljsonObject, departurejsonObject, 'DELAY_MINS')
                        }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Ground Traffic",
                           "showValues": "0",
                           "color": "AFAFAF",
                           "alpha": "30",
                           "data": GetSeriesData(arrivaljsonObject, 'MOVEMENTS')
                       },
                       {
                           "seriesName": "Tickets",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "20",
                           "parentYAxis": "S",
                           "color": "none",
                           "anchorBgColor": "000000",
                           "data": GetBubbleSeriesDataKPI1L2(arrivaljsonObject, 'DELAY_MINS', 'TIMEPERIOD')
                       },
                       {
                           "seriesName": "Declared Capacity",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFE504",
                           "lineThickness": ".5",
                           "data": GetSeriesData(arrivaljsonObject, 'DECLARED_CAPACITY')
                       }, {
                           "seriesName": "Scheduled Demand",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFAC61",
                           "lineThickness": ".5",
                           "data": GetSeriesData(arrivaljsonObject, 'SCHEDULED_DEMAND')
                       }, {
                           "seriesName": "Actual Demand",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "showValues": "0",
                           "color": "FFFFFF",
                           "lineThickness": ".5",
                           "data": GetSeriesData(arrivaljsonObject, 'ACTUAL_DEMAND')
                       }

                ]
            }

        }).render();
    });

    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer2',
            width: '1170',
            height: '250',
            dataFormat: 'json',
            containerBackgroundOpacity: '0',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "chartRightMargin": "15",
                    "chartTopMargin": "22",
                    "showLegend": "0",
                    "showLabels": "0",
                    "pYAxisname": "",
                    "SYAxisname": "",
                    "sYAxisMinValue": Math.round((-1.25 * GetMaximumValue(departurejsonObject, 'DELAY_MINS')) / 1000) * 1000,
                    "pYAxisMinValue": Math.round((-1 * GetMaximumValue(departurejsonObject, 'MOVEMENTS')) / 100) * 100,
                    "numDivLines": "3",
                    "adjustDiv": "1",//rounds decimal value
                    "canvasBgAlpha": "0",
                    "divLineColor": "ffffff",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineDashGap": "1",
                    "animation": "0",
                    "outCnvbaseFontSize": "12",
                    "outCnvbaseFontColor": "ffffff"
                },
                "categories": [
                    {
                        "category": GetRowCetogery(departurejsonObject, 'TIMEPERIOD')
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1170",
                    "origh": "100",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [
                        {
                            "items": CreateBubbleReverseSeriesDataKPI2(departurejsonObject, 'DELAY_MINS', "/img/icons/depart.png")

                        }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Ground Traffic",
                           "showValues": "0",
                           "color": "afb6b1",
                           "alpha": "30",
                           "data": GetSeriesReverseData(departurejsonObject, 'MOVEMENTS')
                       },
                       {
                           "seriesName": "Tickets",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "20",
                           "color": "none",
                           "anchorBgColor": "FFFFFF",
                           "parentYAxis": "S",
                           "data": GetBubbleReverseSeriesDataKPI1L2(departurejsonObject, 'DELAY_MINS', 'TIMEPERIOD')
                       },
                       {
                           "seriesName": "Declared Capacity",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFE504",
                           "lineThickness": ".5",
                           "data": GetSeriesReverseData(departurejsonObject, 'DECLARED_CAPACITY')
                       }, {
                           "seriesName": "Scheduled Demand",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFAC61",
                           "lineThickness": ".5",
                           "data": GetSeriesReverseData(departurejsonObject, 'SCHEDULED_DEMAND')
                       }, {
                           "seriesName": "Actual Demand",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "0",
                           "color": "FFFFFF",
                           "lineThickness": ".5",
          "data": GetSeriesReverseData(departurejsonObject, 'ACTUAL_DEMAND')
                       }

                ]
            }
        }).render();

    });
}

function CreateKPI2L2Chart(BardatajsonObject, LolipopjsonObject, EKSeriesdatajsonObject, FDSeriesdatajsonObject, OALSeriesdatajsonObject, img) {

    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer',
            width: '1170',
            height: '250',
            containerBackgroundOpacity: '0',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "chartRightMargin": "40",
                    "showLegend": "0",

                    "pYAxisname": "",
                    "SYAxisname": "",
                    "sYAxisMaxValue": Math.round((1.25 * GetMaximumValue(LolipopjsonObject, 'SA_PERCENT')) / 100) * 100,
                    "pYAxisMaxValue": Math.round((1.1 * GetMaximumValue(BardatajsonObject, 'SA_PERCENT')) / 100) * 100,
                    "numDivLines": "2",
                    "adjustDiv": "1",//rounds decimal value
                    "canvasBgAlpha": "0",
                    "outCnvbaseFontSize": "13",
                    "outCnvbaseFontColor": "ffffff",
                    "divLineColor": "ffffff",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineDashGap": "1"
                },
                "categories": [
                    {
                        "category": GetRowCetogery(BardatajsonObject, 'TIMEPERIOD') //GetHeaders(jsonObject)
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1100",
                    "origh": "100",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [

                        {
                            "items": CreateAnotationForSlotAdherSeriesData(LolipopjsonObject, 'SA_PERCENT', img)
                        }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Towing",
                           "showValues": "0",
                           "color": "AFAFAF",
                           "data": GetSeriesData(BardatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "Slot Adherence",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "20",
                           "color": "none",
                           "anchorBgColor": "000000",
                           "parentYAxis": "S",
                           "data": GetLoliPopSlotAdherSeriesData(LolipopjsonObject, 'SA_PERCENT', 'TIMEPERIOD')
                       },
                       {
                           "seriesName": "EK",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "CFFFBD",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesData(EKSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "FZ",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFAC61",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesData(FDSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "OAL",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFFFFF",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesData(OALSeriesdatajsonObject, 'SA_PERCENT')
                       }


                ]
            }
        }).render();
    });

    // KPI2 Reverse Chart
    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer2',
            width: '1170',
            height: '250',
            dataFormat: 'json',
            containerBackgroundOpacity: '0',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "chartRightMargin": "30",
                    "chartTopMargin": "22",
                    "showLegend": "0",
                    "showLabels": "0",
                    "pYAxisname": "",
                    "SYAxisname": "",

                    "outCnvbaseFontSize": "13",
                    "outCnvbaseFontColor": "ffffff",
                    "sYAxisMinValue": Math.round((-1.25 * GetMaximumValue(LolipopjsonObject, 'SA_PERCENT')) / 100) * 100,
                    "pYAxisMinValue": Math.round((-1.1 * GetMaximumValue(BardatajsonObject, 'SA_PERCENT')) / 100) * 100,
                    "numDivLines": "2",
                    "adjustDiv": "1",//rounds decimal value
                    "canvasBgAlpha": "0",
                    "divLineColor": "ffffff",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineDashGap": "1"
                },
                "categories": [
                    {
                        "category": GetRowCetogery(BardatajsonObject, 'TIMEPERIOD') //GetHeaders(jsonObject)
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1100",
                    "origh": "100",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [

                                               {
                                                   "items": CreateBubbleReverseSlotAdherenceSeriesData(LolipopjsonObject, 'SA_PERCENT', "/img/icons/depart.png")
                                               }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Towing",
                           "showValues": "0",
                           "color": "AFAFAF",
                           "data": GetSeriesReverseData(BardatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "Slot Adherence",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "20",
                           "color": "none",
                           "anchorBgColor": "FFFFFF",
                           "parentYAxis": "S",
                           "data": GetLoliPopSlotAdherReverseSeriesData(LolipopjsonObject, 'SA_PERCENT', 'TIMEPERIOD')
                       },
                       {
                           "seriesName": "EK",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "CFFFBD",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesReverseData(EKSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "FZ",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFAC61",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesReverseData(FDSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "OAL",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFFFFF",
                           "showValues": "0",
                           "data": GetSeriesReverseData(OALSeriesdatajsonObject, 'SA_PERCENT')
                       }


                ]
            }

        }).render();
    });
}


function CreateKPI2L2ChartLoadL1lazy(BardatajsonObject, LolipopjsonObject, EKSeriesdatajsonObject, FDSeriesdatajsonObject, OALSeriesdatajsonObject, img) {
        img = "/img/icons/arrival.png";
    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer',
            width: '1170',
            height: '250',
            containerBackgroundOpacity: '0',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "chartRightMargin": "40",
                    "showLegend": "0",

                    "pYAxisname": "",
                    "SYAxisname": "",
                    "sYAxisMaxValue": Math.round((1.25 * GetMaximumValue(LolipopjsonObject, 'SA_PERCENT')) / 100) * 100,
                    "pYAxisMaxValue": Math.round((1.1 * GetMaximumValue(BardatajsonObject, 'SA_PERCENT')) / 100) * 100,
                    "numDivLines": "2",
                    "adjustDiv": "1",//rounds decimal value
                    "canvasBgAlpha": "0",
                    "outCnvbaseFontSize": "11",
                    "outCnvbaseFontColor": "ffffff",
                    "divLineColor": "ffffff",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineDashGap": "1",
                    "labeldisplay": "WRAP"
                },
                "categories": [
                    {
                        "category": GetRowCetogery(BardatajsonObject, 'TIMEPERIOD') //GetHeaders(jsonObject)
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1100",
                    "origh": "250",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [

                        {
                            "items": CreateAnotationForSlotAdherSeriesData(LolipopjsonObject, 'SA_PERCENT', img)
                        }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Towing",
                           "showValues": "0",
                           "color": "AFAFAF",
                           "data": GetSeriesData(BardatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "Slot Adherence",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "20",
                           "color": "none",
                           "anchorBgColor": "000000",
                           "parentYAxis": "S",
                           "data": GetLoliPopSlotAdherSeriesDataL1lazy(LolipopjsonObject, 'SA_PERCENT', 'TIMEPERIOD')
                       },
                       {
                           "seriesName": "EK",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "CFFFBD",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesData(EKSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "FZ",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFAC61",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesData(FDSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "OAL",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFFFFF",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesData(OALSeriesdatajsonObject, 'SA_PERCENT')
                       }


                ]
            }
        }).render();
    });


}

//loads only upper chart for SA
function CreateKPI2L2ChartLoadL1(BardatajsonObject, LolipopjsonObject, EKSeriesdatajsonObject, FDSeriesdatajsonObject, OALSeriesdatajsonObject, img) {

    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer',
            width: '1170',
            height: '480',
            containerBackgroundOpacity: '0',
            dataFormat: 'json',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "chartRightMargin": "40",
                    "showLegend": "0",

                    "pYAxisname": "",
                    "SYAxisname": "",
                    "sYAxisMaxValue": Math.round((1.25 * GetMaximumValue(LolipopjsonObject, 'SA_PERCENT')) / 100) * 100,
                    "pYAxisMaxValue": Math.round((1.1 * GetMaximumValue(BardatajsonObject, 'SA_PERCENT')) / 100) * 100,
                    "numDivLines": "2",
                    "adjustDiv": "1",//rounds decimal value
                    "canvasBgAlpha": "0",
                    "outCnvbaseFontSize": "11",//13
                    "outCnvbaseFontColor": "ffffff",
                    "divLineColor": "ffffff",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineDashGap": "1",
                    "labeldisplay": "WRAP"
                },
                "categories": [
                    {
                        "category": GetRowCetogery(BardatajsonObject, 'TIMEPERIOD') //GetHeaders(jsonObject)
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1100",
                    "origh": "480",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [

                        {
                            "items": CreateAnotationForSlotAdherSeriesData(LolipopjsonObject, 'SA_PERCENT', img)
                        }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Towing",
                           "showValues": "0",
                           "color": "AFAFAF",
                           "data": GetSeriesData(BardatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "Slot Adherence",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "20",
                           "color": "none",
                           "anchorBgColor": "000000",
                           "parentYAxis": "S",
                           "data": GetLoliPopSlotAdherSeriesData(LolipopjsonObject, 'SA_PERCENT', 'TIMEPERIOD')
                       },
                       {
                           "seriesName": "EK",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "CFFFBD",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesData(EKSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "FZ",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFAC61",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesData(FDSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "OAL",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFFFFF",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesData(OALSeriesdatajsonObject, 'SA_PERCENT')
                       }


                ]
            }
        }).render();
    });

    
}

//loads only reverse chart for SA
function CreateKPI2L2ChartLoadL2(BardatajsonObject, LolipopjsonObject, EKSeriesdatajsonObject, FDSeriesdatajsonObject, OALSeriesdatajsonObject, img) {


    // KPI2 Reverse Chart
    FusionCharts.ready(function () {
        var salesAnlysisChart = new FusionCharts({
            type: 'mscombidy2d',
            renderAt: 'chartContainer2',
            width: '1170',
            height: '250',
            dataFormat: 'json',
            containerBackgroundOpacity: '0',
            dataSource: {
                "chart": {
                    "caption": "",
                    "subcaption": "",
                    "aligncaptiontocanvas": "0",
                    "yaxisname": "Statewise Sales (in %)",
                    "xaxisname": "",
                    "showPlotBorder": "0",
                    "plotspacepercent": "0",
                    "showxaxispercentvalues": "0",
                    "showsum": "1",
                    "usePercentDistribution": "0",
                    "theme": "fint",
                    "bgAlpha": "0",
                    "bgColor": "none",
                    "chartRightMargin": "30",
                    "chartTopMargin": "22",
                    "showLegend": "0",
                    "showLabels": "0",
                    "pYAxisname": "",
                    "SYAxisname": "",

                    "outCnvbaseFontSize": "13",
                    "outCnvbaseFontColor": "ffffff",
                    "sYAxisMinValue": Math.round((-1.25 * GetMaximumValue(LolipopjsonObject, 'SA_PERCENT')) / 100) * 100,
                    "pYAxisMinValue": Math.round((-1.1 * GetMaximumValue(BardatajsonObject, 'SA_PERCENT')) / 100) * 100,
                    "numDivLines": "2",
                    "adjustDiv": "1",//rounds decimal value
                    "canvasBgAlpha": "0",
                    "divLineColor": "ffffff",
                    "divLineThickness": "1",
                    "divLineIsDashed": "1",
                    "divLineDashLen": "1",
                    "divLineDashGap": "1",
                    "labeldisplay": "WRAP"
                },
                "categories": [
                    {
                        "category": GetRowCetogery(BardatajsonObject, 'TIMEPERIOD') //GetHeaders(jsonObject)
                    }
                ],
                "annotations": {
                    //Refers to the original width/height of the chart, based on which the absolute dimensions/positioning of this annotation was defined. Later, if you change the chart dimensions, the annotation will auto-adjust to the new dimensions, as it recalculates its own position/dimensions by taking into considersation original width/height of chart, and current width/height
                    "origw": "1100",
                    "origh": "100",
                    "autoscale": "1",
                    "showBelow": "0",
                    "groups": [

                                               {
                                                   "items": CreateBubbleReverseSlotAdherenceSeriesData(LolipopjsonObject, 'SA_PERCENT', "/img/icons/depart.png")
                                               }
                    ]
                },
                "dataset": [
                       {

                           "seriesName": "Towing",
                           "showValues": "0",
                           "color": "AFAFAF",
                           "data": GetSeriesReverseData(BardatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "Slot Adherence",
                           "renderAs": "line",
                           "showValues": "0",
                           "anchorRadius": "20",
                           "color": "none",
                           "anchorBgColor": "FFFFFF",
                           "parentYAxis": "S",
                           "data": GetLoliPopSlotAdherReverseSeriesData(LolipopjsonObject, 'SA_PERCENT', 'TIMEPERIOD')
                       },
                       {
                           "seriesName": "EK",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "CFFFBD",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesReverseData(EKSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "FZ",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFAC61",
                           "showValues": "0",
                           "lineThickness": ".5",
                           "data": GetSeriesReverseData(FDSeriesdatajsonObject, 'SA_PERCENT')
                       },
                       {
                           "seriesName": "OAL",
                           "renderAs": "line",
                           "anchorRadius": "0",
                           "color": "FFFFFF",
                           "showValues": "0",
                           "data": GetSeriesReverseData(OALSeriesdatajsonObject, 'SA_PERCENT')
                       }


                ]
            }

        }).render();
    });
}



function CreateBubbleReverseSlotAdherenceSeriesData(obj, key, img) {

    var bubbleSeries = new Array();
    var MaxValue = GetMaximumValue(obj, key)
    for (var i in obj) {
        var value = obj[i][key]; debugger;
        if (value == MaxValue) {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasStartY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "4F88FC",
            };
            bubbleSeries.push(obj1);
            var obj2 = {
                //Label 'Weekend' on the color block
                "id": "label",
                "type": "text",
                "text": value,
                "color": "ffffff",
                "fontSize": "12",
                "bold": "1",
                "showBelow": "0",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$dataset.1.set." + i + ".y",

            };
            bubbleSeries.push(obj2);
        }
        else {
            if (value == 0) {
                var obj1 = {
                    "id": "zone",
                    "type": "line",
                    "x": "$dataset.1.set." + i + ".x",
                    "y": "$canvasStartY",
                    "tox": "$dataset.1.set." + i + ".x",
                    "toy": "$dataset.1.set." + i + ".y",
                    "thickness": "5",
                    "color": "AFAFAF ",
                };
                bubbleSeries.push(obj1);
            }
            else {
                var obj1 = {
                    "id": "zone",
                    "type": "line",
                    "x": "$dataset.1.set." + i + ".x",
                    "y": "$canvasStartY",
                    "tox": "$dataset.1.set." + i + ".x",
                    "toy": "$dataset.1.set." + i + ".y",
                    "thickness": "5",
                    "color": "FFFFFF ",
                };
                bubbleSeries.push(obj1);
            }
            var obj2 = {
                //Label 'Weekend' on the color block
                "id": "label",
                "type": "text",
                "text": (value == 0) ? null : value,
                "color": "000000",
                "fontSize": "12",
                "bold": "1",
                "showBelow": "0",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$dataset.1.set." + i + ".y",

            };
            bubbleSeries.push(obj2);
        }

    }

    var ob3 = {
        "id": "Milton-user-icon",
        "type": "image",
        "url": img,
        "x": "$canvasEndX+10",
        "tox": "$canvasEndX + 40",
        "toy": "$canvasStartY -22",
        "xScale": "143",
        "yScale": "90",
        "y": "$canvasStartY +25"
    };

    var obj4 = {
        "id": "zone",
        "type": "rectangle",
        "x": "$canvasStartX + $xaxis.label.11.x - $xaxis.label.11.x ",
        "y": "$canvasStartY-7.5",
        "tox": "$canvasEndX+11",
        "toy": "$canvasStartY+7.5",
        //"thickness": "15",
        "color": "4F88FC",
    };
    bubbleSeries.push(ob3); bubbleSeries.push(obj4);

    for (var i in obj) {
        var obj3 = {
            //Color block for weekend
            "id": "zone1",
            "type": "text",
            //Starting at 6th data label (based on index)
            "x": "$dataset.1.set." + i + ".x",
            //Setting y position relative to canvas
            "y": "$canvasStartY",
            "text": obj[i]['EARLY_LATE_PERCENT'],
            "color": "0d0c0c",
            "fontSize": "12",
            "bold": "1",
        };
        bubbleSeries.push(obj3);
    }
    return bubbleSeries;
}

function CreateAnotationForSlotAdherSeriesData(obj, key, img) {

    var bubbleSeries = new Array();
    var MaxValue = GetMaximumValue(obj, key)
    for (var i in obj) {
        var value = obj[i][key]; debugger;
        if (value == MaxValue) {
            var obj1 = {
                "id": "zone",
                "type": "line",
                "x": "$dataset.1.set." + i + ".x",
                "y": "$canvasEndY",
                "tox": "$dataset.1.set." + i + ".x",
                "toy": "$dataset.1.set." + i + ".y",
                "thickness": "5",
                "color": "5CDEFF",
            };
            bubbleSeries.push(obj1);
        }
        else {
            if (value == 0) {
                var obj1 = {
                    "id": "zone",
                    "type": "line",
                    "x": "$dataset.1.set." + i + ".x",
                    "y": "$canvasEndY",
                    "tox": "$dataset.1.set." + i + ".x",
                    "toy": "$dataset.1.set." + i + ".y",
                    "thickness": "5",
                    "color": "AFAFAF ",
                };
                bubbleSeries.push(obj1);
            }
            else {
                var obj1 = {
                    "id": "zone",
                    "type": "line",
                    "x": "$dataset.1.set." + i + ".x",
                    "y": "$canvasEndY",
                    "tox": "$dataset.1.set." + i + ".x",
                    "toy": "$dataset.1.set." + i + ".y",
                    "thickness": "5",
                    "color": "000000 ",
                };
                bubbleSeries.push(obj1);
            }

        }
        var obj2 = {
            //Label 'Weekend' on the color block
            "id": "label",
            "type": "text",
            "text": (value == 0) ? null : value,
            "color": "FFFFFF",
            "fontSize": "12",
            "bold": "1",
            "showBelow": "0",
            "x": "$dataset.1.set." + i + ".x",
            "y": "$dataset.1.set." + i + ".y",

        };
        bubbleSeries.push(obj2);


    }
    var ob3 = {
        "id": "Milton-user-icon",
        "type": "image",
        "url": img,
        "x": "$canvasEndX+10",
        "tox": "$canvasEndX + 40",
        "toy": "$canvasEndY - 24",
        "xScale": "143",
        "yScale": "85",
        "y": "$canvasEndY + 20"
    };

    var obj4 = {
        "id": "zone",
        "type": "rectangle",
        "x": "$canvasStartX + $xaxis.label.11.x - $xaxis.label.11.x ",
        "y": "$canvasEndY+5",
        "tox": "$canvasEndX+12",
        "toy": "$canvasEndY-10",
        "thickness": "15",
        "color": "5CDEFF",
    };
    bubbleSeries.push(ob3); bubbleSeries.push(obj4);

    for (var i in obj) {
        var obj3 = {
            //Color block for weekend
            "id": "zone1",
            "type": "text",
            //Starting at 6th data label (based on index)
            "x": "$dataset.1.set." + i + ".x",
            //Setting y position relative to canvas
            "y": "$canvasEndY",
            "text": obj[i]['EARLY_LATE_PERCENT'],
            "color": "0d0c0c",
            "fontSize": "12",
            "bold": "1",
        };
        bubbleSeries.push(obj3);
    }
    return bubbleSeries;

}

function GetLoliPopSlotAdherSeriesData(obj, columnKey, labelKey) {

    var cols = new Array();
    var MaxValue = GetMaximumValue(obj, columnKey)
    for (var i in obj) {
        var value = obj[i][columnKey];
        if (value == MaxValue) {
            var obj1 = {
                "value": value,
                "label": obj[i][labelKey],
                "anchorBgcolor": "5CDEFF",
                "anchorRadius": "25"
            };
            cols.push(obj1);
        }
        else {

            if (value == 0) {
                var obj1 = {
                   "value": 7,
                     //20"value": 8,
                    "label": obj[i][labelKey],
                    "anchorBgcolor": "AFAFAF"
                };
                cols.push(obj1);
            } else {
                var obj1 = {
                    "value": value,
                    "label": obj[i][labelKey],
                    
                };
                cols.push(obj1);
            }

        }
    }
    return cols;
}


function GetLoliPopSlotAdherSeriesDataL1lazy(obj, columnKey, labelKey) {

    var cols = new Array();
    var MaxValue = GetMaximumValue(obj, columnKey)
    for (var i in obj) {
        var value = obj[i][columnKey];
        if (value == MaxValue) {
            var obj1 = {
                "value": value,
                "label": obj[i][labelKey],
                "anchorBgcolor": "5CDEFF",
                "anchorRadius": "25"
            };
            cols.push(obj1);
        }
        else {

            if (value == 0) {
                var obj1 = {
                    "value": 15,
                    //20"value": 8,
                    "label": obj[i][labelKey],
                    "anchorBgcolor": "AFAFAF"
                };
                cols.push(obj1);
            } else {
                var obj1 = {
                    "value": value,
                    "label": obj[i][labelKey],

                };
                cols.push(obj1);
            }

        }
    }
    return cols;
}

function GetLoliPopSlotAdherReverseSeriesData(obj, columnKey, labelKey) {

    var cols = new Array();
    var MaxValue = GetMaximumValue(obj, columnKey)
    for (var i in obj) {
        var value = obj[i][columnKey];
        if (value == MaxValue) {
            var obj1 = {
                "value": "-" + value,
                "label": obj[i][labelKey],
                "anchorBgcolor": "4F88FC",
                "anchorRadius": "25"
            };
            cols.push(obj1);
        }

        else {
            if (value == 0) {
                var obj1 = {
                     "value": "-" + 13,
                     //"value": "-" + 13,
                    "label": obj[i][labelKey],
                    "anchorBgcolor": "AFAFAF"

                };
                cols.push(obj1);
            }
            else {
                var obj1 = {
                    "value": "-" + value,
                    "label": obj[i][labelKey],
                   
                };
                cols.push(obj1);
            }

        }
    }
    return cols;
}
