var globaldata;
var fullname = {
    "chitieu": "Chỉ tiêu",
    "diem": "Điểm",
    "trungtuyen": "Trúng tuyển",
    "soluong": "Số lượng đăng kí",
    "CQ": "chính quy",
    "TXDot1": "thường xuyên đợt 1",
    "TXDot2": "thường xuyên đợt 2",
    "CQsoluong": "chính quy số lượng",
    "dangky": "Số lượng đăng kí",
    "nhaphoc": "Số lượng nhập học",
    "dangkyNV1": "Số lượng đăng kí NV1",
    "dot1": "Đợt 1",
    "dot2": "Đợt 2",
    "CQtheotinh": "chính quy ở các tỉnh",
    "thacsi": "thạc sĩ",
    "duthi": "Dự thi",
    "TX": "thường xuyên",
    "nganh": "Ngành"
}
$.ajax({
    method: 'GET',
    url: '/data/',
    success: function (data) {
        console.log(data);
        globaldata = data;
        var i = 0;
        $("#nganh").append($("<option></option>")
            .attr("value", "allnganh").text("Tất cả"))
        for (var i = 0; i < data.nganh_2017_CQ.length; i++) {
            $("#nganh").append($("<option></option>")
                .attr("value", data.nganh_2017_CQ[i]).text(data.nganh_2017_CQ[i]))
        }
        function generateData(dataAPI1, dataAPI2) {
            var data = [];
            for (var i = 0; i < dataAPI1.length; i++) {
                data.push({
                    x: dataAPI1[i],
                    y: dataAPI2[i]
                });
            }
            return data;
        }
        var dynamicColors = function () {
            var r = Math.floor(Math.random() * 255);
            var g = Math.floor(Math.random() * 255);
            var b = Math.floor(Math.random() * 255);
            return "rgba(" + r + "," + g + "," + b + ",0.5)";
        };
        function BarChartSTA1data(cate, year, hedt) {
            var x = "sta_" + cate + "_" + year + "_" + hedt;
            new Chart(document.getElementById("sta-" + cate + "-" + year + "-" + hedt), {
                type: 'bar',
                data: {

                    labels: data.sta,
                    datasets: [
                        {
                            indexLabel: "{x}, {y}",
                            indexLabelPlacement: "outside",
                            indexLabelOrientation: "horizontal",
                            label: fullname[cate],
                            backgroundColor: "rgba(62, 149, 205, 0.5)",
                            borderColor: "rgba(62, 149, 205, 1)",
                            pointBackgroundColor: "rgba(62, 149, 205, 1)",
                            data: data[x],
                        }
                    ]
                },
                options: {
                    legend: {
                        labels: {
                            fontSize: 18
                        }
                    },
                    title: {
                        display: true,
                        text: "STA " + fullname[cate] + " " + year + " " + fullname[hedt],
                        fontSize: 22.0
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontSize: 15.0,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                                fontSize: 20.0,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontSize: 15.0,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Statistics',
                                fontSize: 20.0,
                            }
                        }]
                    },
                    responsive: false,
                }
            });
            $('<table>').html(
                "<caption><h2>" + "STA " + fullname[cate] + " " + year + " " + fullname[hedt] + "</h2><caption>" +
                "<thead> " +
                "<tr>" +
                "<th>   Min    </th>" +
                "<th>   Max  </th> " +
                "<th>   Sum  </th>" +
                "<th>   Count  </th>" +
                "<th>   Var  </th>" +
                "<th>   Std  </th>" +
                "<th>   Mean  </th>" +
                "</r> </thead>" +
                " <tbody>" +
                " <tr>" +
                "<td>" + data[x][0] + "</td>" +
                "<td>" + data[x][1] + "</td>" +
                "<td>" + data[x][2] + "</td> " +
                "<td>" + data[x][3] + "</td> " +
                "<td>" + data[x][4] + "</td> " +
                "<td>" + data[x][5] + "</td> " +
                "<td>" + data[x][6] + "</td> " +
                "</tr>" +
                "</tbody>" +
                "</table>"
            ).appendTo("#table-" + cate + "-" + year + "-" + hedt);
        }
        function BarChartSTA2data(cate1, cate2, year, hedt) {
            var x1 = "sta_" + cate1 + "_" + year + "_" + hedt;
            var x2 = "sta_" + cate2 + "_" + year + "_" + hedt;
            new Chart(document.getElementById("sta-" + cate1 + "-" + cate2 + "-" + year + "-" + hedt), {
                type: 'bar',
                data: {

                    labels: data.sta,
                    datasets: [
                        {
                            indexLabel: "{x}, {y}",
                            indexLabelPlacement: "outside",
                            indexLabelOrientation: "horizontal",
                            label: fullname[cate1],
                            backgroundColor: "rgba(62, 149, 205, 0.5)",
                            borderColor: "rgba(62, 149, 205, 1)",
                            pointBackgroundColor: "rgba(62, 149, 205, 1)",
                            data: data[x1],
                        },
                        {
                            label: fullname[cate2],
                            backgroundColor: "rgba(255, 10, 77, 0.5)",
                            borderColor: "rgba(255, 10, 77, 1)",
                            pointBackgroundColor: "rgba(255, 10, 77, 1)",
                            data: data[x2],
                        },
                    ]
                },
                options: {
                    legend: {
                        labels: {
                            fontSize: 18
                        }
                    },
                    title: {
                        display: true,
                        text: "STA " + fullname[cate1] + " và " + fullname[cate2] + " " + year + " " + fullname[hedt],
                        fontSize: 22.0
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontSize: 15.0,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Value',
                                fontSize: 20.0,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontSize: 15.0,
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Statistics',
                                fontSize: 20.0,
                            }
                        }]
                    },
                    responsive: false,
                }
            });
            $('<table>').html(
                "<caption><h2>" + "STA " + fullname[cate1] + " và " + fullname[cate2] + " " + year + " " + fullname[hedt] + "</h2><caption>" +
                "<thead> " +
                "<tr>" +
                "<th>   Cate    </th>" +
                "<th>   Min    </th>" +
                "<th>   Max  </th> " +
                "<th>   Sum  </th>" +
                "<th>   Count  </th>" +
                "<th>   Var  </th>" +
                "<th>   Std  </th>" +
                "<th>   Mean  </th>" +
                "</r> </thead>" +
                " <tbody>" +
                " <tr>" +
                "<td>  " + fullname[cate1] + "  </td>" +
                "<td>" + data[x1][0] + "</td>" +
                "<td>" + data[x1][1] + "</td>" +
                "<td>" + data[x1][2] + "</td> " +
                "<td>" + data[x1][3] + "</td> " +
                "<td>" + data[x1][4] + "</td> " +
                "<td>" + data[x1][5] + "</td> " +
                "<td>" + data[x1][6] + "</td> " +
                "</tr>" +
                " <tr>" +
                "<td>   " + fullname[cate2] + "  </td>" +
                "<td>" + data[x2][0] + "</td>" +
                "<td>" + data[x2][1] + "</td>" +
                "<td>" + data[x2][2] + "</td> " +
                "<td>" + data[x2][3] + "</td> " +
                "<td>" + data[x2][4] + "</td> " +
                "<td>" + data[x2][5] + "</td> " +
                "<td>" + data[x2][6] + "</td> " +
                "</tr>" +
                "</tbody>" +
                "</table>"
            ).appendTo("#table-" + cate1 + "-" + cate2 + "-" + year + "-" + hedt);
        }
        function PieandHeat(cate, year, hedt, locate = "nganh") {
            var coloR = [];
            var x = cate + "_" + year + "_" + hedt;
            for (var i in data[locate + "_" + year + "_" + hedt]) {

                coloR.push(dynamicColors());
            }
            new Chart(document.getElementById("pie-" + cate + "-" + year + "-" + hedt), {
                type: 'pie',
                data: {
                    labels: data[locate + "_" + year + "_" + hedt],
                    datasets: [{
                        data: data[x],
                        backgroundColor: coloR,
                        borderColor: 'rgba(200, 200, 200, 0.75)',
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        hoverBorderColor: 'rgba(200, 200, 200, 1)',
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: fullname[cate] + " " + year + " " + fullname[hedt]
                    }
                }
            });
            ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
            var myConfig = {
                "type": "heatmap",
                plot: {
                    'bars-space-left': "25%",
                    'bars-space-right': "25%",
                    tooltip: {
                        text: "%kl có " + fullname[cate] + " là %v.",
                        padding: "10%",
                        'border-radius': "5px",
                        sticky: true,
                        timeout: 10000,
                        x: "37%", //Specify x position.
                        y: "12%", //Specify y position.
                        "font-family": "Times New Roman",
                        "font-size": "20px"
                    }
                },
                'scale-y': {
                    values: [year],
                    item: {
                        angle: -90,
                    },
                    "size": '1000px'
                },
                'scale-x': {
                    labels: data[locate + "_" + year + "_" + hedt],  //X-Axis Scale Labels
                    'line-color': "none",   //Axis Lines
                    guide: {              //Plot Lines
                        visible: false
                    },
                    tick: {               //Tick Marks
                        visible: false
                    },
                    // placement: "opposite", //To change the placement of your axis.,
                    item: {
                        angle: -90,
                        visible: false,
                        "font-family": "Times New Roman"
                    },
                    'items-overlap': true,
                    'max-items': 60,
                },

                "series":
                    [
                        {
                            "values": data[x]
                        }
                    ]
            };
            zingchart.render({
                id: "heatmap-" + cate + "-" + year + "-" + hedt,
                data: myConfig,
                height: "100%",
                width: "100%"
            });
        }
        function ScatterChart3(cate, cate1, cate2, year, hedt) {
            new Chart(document.getElementById("scatter-" + cate + "-" + cate1 + "-" + cate2 + "-" + year + "-" + hedt).getContext('2d'), {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: fullname[cate] + " - " + fullname[cate1],
                        borderColor: dynamicColors(),
                        backgroundColor: "rgba(62, 149, 205, 1)",
                        data: generateData(data[cate1 + "_" + year + "_" + hedt], data[cate + "_" + year + "_" + hedt])
                    }, {
                        label: fullname[cate] + " - " + fullname[cate2],
                        borderColor: dynamicColors(),
                        backgroundColor: "rgba(255, 10, 77, 1)",
                        data: generateData(data[cate2 + "_" + year + "_" + hedt], data[cate + "_" + year + "_" + hedt])
                    }]
                },
                options: {
                    //responsive: true, // Instruct chart js to respond nicely.
                    //maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                    title: {
                        display: true,
                        text: "Tương quan giữa " + fullname[cate] + ", " + fullname[cate1] + " và " + fullname[cate2] + " " + year + " " + fullname[hedt],
                        fontSize: 22.0
                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Điểm',
                                fontSize: 20.0,
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Số Lượng',
                                fontSize: 20.0,
                            }
                        }]
                    }
                }
            });
            $('<div>').html(
                " <div style='" + "font-size: 20px" + "'>Hệ số tương quan pearson giữa " + fullname[cate] + " và " + fullname[cate1] + " là " + data["pearson_" + cate1 + "_" + cate + "_" + year] + "</div>" +
                " <div style='" + "font-size: 20px" + "'>Hệ số tương quan spearman giữa " + fullname[cate] + " và " + fullname[cate1] + " là " + data["spearman_" + cate1 + "_" + cate + "_" + year] + "</div>" +
                " <div style='" + "font-size: 20px" + "'>Hệ số tương quan pearson giữa " + fullname[cate] + " và " + fullname[cate2] + " là " + data["pearson_" + cate2 + "_" + cate + "_" + year] + "</div>" +
                " <div style='" + "font-size: 20px" + "'>Hệ số tương quan spearman giữa " + fullname[cate] + " và " + fullname[cate2] + " là " + data["spearman_" + cate2 + "_" + cate + "_" + year] + "</div>"
            ).appendTo("#pearson-spearman-" + cate + "-" + cate1 + "-" + cate2 + "-" + year + "-" + hedt);
        }
        function ScatterChart2(cate, cate1, year, hedt) {
            new Chart(document.getElementById("scatter-" + cate + "-" + cate1 + "-" + year + "-" + hedt).getContext('2d'), {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: fullname[cate] + " - " + fullname[cate1],
                        borderColor: dynamicColors(),
                        backgroundColor: "rgba(62, 149, 205, 1)",
                        data: generateData(data[cate1 + "_" + year + "_" + hedt], data[cate + "_" + year + "_" + hedt])
                    }]
                },
                options: {
                    //responsive: true, // Instruct chart js to respond nicely.
                    //maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
                    title: {
                        display: true,
                        text: "Tương quan giữa " + fullname[cate] + " và " + fullname[cate1] + " " + year + " " + fullname[hedt],
                        fontSize: 22.0
                    },
                    scales: {
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: fullname[cate],
                                fontSize: 20.0,
                            }
                        }],
                        xAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: fullname[cate1],
                                fontSize: 20.0,
                            }
                        }]
                    }
                }
            });
            $('<div>').html(
                "<div style='" + "font-size: 20px" + "'>Hệ số tương quan pearson giữa " + fullname[cate] + " và " + fullname[cate1] + " là " + data["pearson_" + cate1 + "_" + cate + "_" + year + "_" + hedt] + "</div>" +
                " <div style='" + "font-size: 20px" + "'>Hệ số tương quan spearman giữa " + fullname[cate] + " và " + fullname[cate1] + " là " + data["spearman_" + cate1 + "_" + cate + "_" + year + "_" + hedt] + "</div>"
            ).appendTo("#pearson-spearman-" + cate + "-" + cate1 + "-" + year + "-" + hedt);
        }
        // ****************************** 2017 CQ *****************************
        BarChartSTA1data("diem", "2017", "CQ");
        BarChartSTA2data("chitieu", "trungtuyen", "2017", "CQ");
        PieandHeat("diem", "2017", "CQ");
        PieandHeat("trungtuyen", "2017", "CQ");
        PieandHeat("chitieu", "2017", "CQ");
        ScatterChart3("diem", "trungtuyen", "chitieu", "2017", "CQ");
        // ****************************** END 2017 CQ *************************
        // ****************************** 2017 TXDot1 *************************
        BarChartSTA1data("diem", "2017", "TXDot1");
        BarChartSTA1data("soluong", "2017", "TXDot1");
        PieandHeat("diem", "2017", "TXDot1");
        PieandHeat("soluong", "2017", "TXDot1");
        ScatterChart2("diem", "soluong", "2017", "TXDot1");
        //******************************* END 2017 TXDot1 **********************
        // ****************************** 2017 TXDot2 *************************
        BarChartSTA1data("diem", "2017", "TXDot2");
        BarChartSTA1data("soluong", "2017", "TXDot2");
        PieandHeat("diem", "2017", "TXDot2");
        PieandHeat("soluong", "2017", "TXDot2");
        ScatterChart2("diem", "soluong", "2017", "TXDot2");
        //******************************* END 2017 TXDot2 **********************
        // ****************************** 2018 CQ *****************************
        BarChartSTA1data("diem", "2018", "CQ");
        BarChartSTA2data("chitieu", "trungtuyen", "2018", "CQ");
        PieandHeat("diem", "2018", "CQ");
        PieandHeat("trungtuyen", "2018", "CQ");
        PieandHeat("chitieu", "2018", "CQ");
        ScatterChart3("diem", "trungtuyen", "chitieu", "2018", "CQ");
        // ****************************** END 2018 CQ *************************
        // ****************************** 2018 CQsoluong **********************
        new Chart(document.getElementById("sta-2018-CQsoluong"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {
                        indexLabel: "{x}, {y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "horizontal",
                        label: "Chỉ tiêu",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_chitieu_2018_CQsoluong,
                    },
                    {
                        label: "Tổng đăng kí xét tuyển",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_dangky_2018_CQsoluong,
                    },
                    {
                        label: "Đăng kí xét tuyển NV1",
                        backgroundColor: "rgba(155, 10, 77, 0.5)",
                        borderColor: "rgba(155, 10, 77, 1)",
                        pointBackgroundColor: "rgba(155, 10, 77, 1)",
                        data: data.sta_dangkyNV1_2018_CQsoluong,
                    },
                    {
                        label: "Trúng tuyển",
                        backgroundColor: "rgba(155, 100, 77, 0.5)",
                        borderColor: "rgba(155, 100, 77, 1)",
                        pointBackgroundColor: "rgba(155, 10, 77, 1)",
                        data: data.sta_trungtuyen_2018_CQsoluong,
                    },
                    {
                        label: "Nhập học",
                        backgroundColor: "rgba(155, 10, 177, 0.5)",
                        borderColor: "rgba(155, 10, 177, 1)",
                        pointBackgroundColor: "rgba(155, 10, 177, 1)",
                        data: data.sta_nhaphoc_2018_CQsoluong,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "STA Chính Quy 2018",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        $('<table>').html(
            "<caption><h2>STA Chính Quy 2018</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th>   Cate    </th>" +
            "<th>   Min    </th>" +
            "<th>   Max  </th> " +
            "<th>   Sum  </th>" +
            "<th>   Count  </th>" +
            "<th>   Var  </th>" +
            "<th>   Std  </th>" +
            "<th>   Mean  </th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>   Chỉ tiêu  </td>" +
            "<td>" + data.sta_chitieu_2018_CQsoluong[0] + "</td>" +
            "<td>" + data.sta_chitieu_2018_CQsoluong[1] + "</td>" +
            "<td>" + data.sta_chitieu_2018_CQsoluong[2] + "</td> " +
            "<td>" + data.sta_chitieu_2018_CQsoluong[3] + "</td> " +
            "<td>" + data.sta_chitieu_2018_CQsoluong[4] + "</td> " +
            "<td>" + data.sta_chitieu_2018_CQsoluong[5] + "</td> " +
            "<td>" + data.sta_chitieu_2018_CQsoluong[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td>   Tổng ĐKXT  </td>" +
            "<td>" + data.sta_dangky_2018_CQsoluong[0] + "</td>" +
            "<td>" + data.sta_dangky_2018_CQsoluong[1] + "</td>" +
            "<td>" + data.sta_dangky_2018_CQsoluong[2] + "</td> " +
            "<td>" + data.sta_dangky_2018_CQsoluong[3] + "</td> " +
            "<td>" + data.sta_dangky_2018_CQsoluong[4] + "</td> " +
            "<td>" + data.sta_dangky_2018_CQsoluong[5] + "</td> " +
            "<td>" + data.sta_dangky_2018_CQsoluong[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td>   DKXT NV1  </td>" +
            "<td>" + data.sta_dangkyNV1_2018_CQsoluong[0] + "</td>" +
            "<td>" + data.sta_dangkyNV1_2018_CQsoluong[1] + "</td>" +
            "<td>" + data.sta_dangkyNV1_2018_CQsoluong[2] + "</td> " +
            "<td>" + data.sta_dangkyNV1_2018_CQsoluong[3] + "</td> " +
            "<td>" + data.sta_dangkyNV1_2018_CQsoluong[4] + "</td> " +
            "<td>" + data.sta_dangkyNV1_2018_CQsoluong[5] + "</td> " +
            "<td>" + data.sta_dangkyNV1_2018_CQsoluong[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td>   Trúng tuyển  </td>" +
            "<td>" + data.sta_trungtuyen_2018_CQsoluong[0] + "</td>" +
            "<td>" + data.sta_trungtuyen_2018_CQsoluong[1] + "</td>" +
            "<td>" + data.sta_trungtuyen_2018_CQsoluong[2] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_CQsoluong[3] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_CQsoluong[4] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_CQsoluong[5] + "</td> " +
            "<td>" + data.sta_trungtuyen_2018_CQsoluong[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td>   Nhập học  </td>" +
            "<td>" + data.sta_nhaphoc_2018_CQsoluong[0] + "</td>" +
            "<td>" + data.sta_nhaphoc_2018_CQsoluong[1] + "</td>" +
            "<td>" + data.sta_nhaphoc_2018_CQsoluong[2] + "</td> " +
            "<td>" + data.sta_nhaphoc_2018_CQsoluong[3] + "</td> " +
            "<td>" + data.sta_nhaphoc_2018_CQsoluong[4] + "</td> " +
            "<td>" + data.sta_nhaphoc_2018_CQsoluong[5] + "</td> " +
            "<td>" + data.sta_nhaphoc_2018_CQsoluong[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#table-2018-CQsoluong');
        PieandHeat("chitieu", "2018", "CQsoluong");
        PieandHeat("dangky", "2018", "CQsoluong");
        PieandHeat("dangkyNV1", "2018", "CQsoluong");
        PieandHeat("trungtuyen", "2018", "CQsoluong");
        PieandHeat("nhaphoc", "2018", "CQsoluong");
        ScatterChart2("chitieu", "nhaphoc", "2018", "CQsoluong");
        // ****************************** END 2018 CQsoluong ******************
        // ****************************** 2018 CQtheotinh *********************
        new Chart(document.getElementById("sta-2018-CQtheotinh"), {
            type: 'bar',
            data: {

                labels: data.sta,
                datasets: [
                    {
                        indexLabel: "{x}, {y}",
                        indexLabelPlacement: "outside",
                        indexLabelOrientation: "horizontal",
                        label: "Số lượng",
                        backgroundColor: "rgba(62, 149, 205, 0.5)",
                        borderColor: "rgba(62, 149, 205, 1)",
                        pointBackgroundColor: "rgba(62, 149, 205, 1)",
                        data: data.sta_soluong_2018_CQtheotinh,
                    },
                    {
                        label: "Đợt 1",
                        backgroundColor: "rgba(255, 10, 77, 0.5)",
                        borderColor: "rgba(255, 10, 77, 1)",
                        pointBackgroundColor: "rgba(255, 10, 77, 1)",
                        data: data.sta_dot1_2018_CQtheotinh,
                    },
                    {
                        label: "Đợt 2",
                        backgroundColor: "rgba(155, 10, 77, 0.5)",
                        borderColor: "rgba(155, 10, 77, 1)",
                        pointBackgroundColor: "rgba(155, 10, 77, 1)",
                        data: data.sta_dot2_2018_CQtheotinh,
                    },
                    {
                        label: "Nhập học",
                        backgroundColor: "rgba(155, 10, 177, 0.5)",
                        borderColor: "rgba(155, 10, 177, 1)",
                        pointBackgroundColor: "rgba(155, 10, 177, 1)",
                        data: data.sta_nhaphoc_2018_CQtheotinh,
                    },
                ]
            },
            options: {
                legend: {
                    labels: {
                        fontSize: 18
                    }
                },
                title: {
                    display: true,
                    text: "STA Chính Quy 2018 ở các tỉnh",
                    fontSize: 22.0
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Value',
                            fontSize: 20.0,
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontSize: 15.0,
                        },
                        scaleLabel: {
                            display: true,
                            labelString: 'Statistics',
                            fontSize: 20.0,
                        }
                    }]
                },
                responsive: false,
            }
        });
        $('<table>').html(
            "<caption><h2>STA Chính Quy 2018 ở các tỉnh</h2><caption>" +
            "<thead> " +
            "<tr>" +
            "<th>   Cate    </th>" +
            "<th>   Min    </th>" +
            "<th>   Max  </th> " +
            "<th>   Sum  </th>" +
            "<th>   Count  </th>" +
            "<th>   Var  </th>" +
            "<th>   Std  </th>" +
            "<th>   Mean  </th>" +
            "</r> </thead>" +
            " <tbody>" +
            " <tr>" +
            "<td>   Chỉ tiêu  </td>" +
            "<td>" + data.sta_soluong_2018_CQtheotinh[0] + "</td>" +
            "<td>" + data.sta_soluong_2018_CQtheotinh[1] + "</td>" +
            "<td>" + data.sta_soluong_2018_CQtheotinh[2] + "</td> " +
            "<td>" + data.sta_soluong_2018_CQtheotinh[3] + "</td> " +
            "<td>" + data.sta_soluong_2018_CQtheotinh[4] + "</td> " +
            "<td>" + data.sta_soluong_2018_CQtheotinh[5] + "</td> " +
            "<td>" + data.sta_soluong_2018_CQtheotinh[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td>   Tổng ĐKXT  </td>" +
            "<td>" + data.sta_dot1_2018_CQtheotinh[0] + "</td>" +
            "<td>" + data.sta_dot1_2018_CQtheotinh[1] + "</td>" +
            "<td>" + data.sta_dot1_2018_CQtheotinh[2] + "</td> " +
            "<td>" + data.sta_dot1_2018_CQtheotinh[3] + "</td> " +
            "<td>" + data.sta_dot1_2018_CQtheotinh[4] + "</td> " +
            "<td>" + data.sta_dot1_2018_CQtheotinh[5] + "</td> " +
            "<td>" + data.sta_dot1_2018_CQtheotinh[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td>   DKXT NV1  </td>" +
            "<td>" + data.sta_dot2_2018_CQtheotinh[0] + "</td>" +
            "<td>" + data.sta_dot2_2018_CQtheotinh[1] + "</td>" +
            "<td>" + data.sta_dot2_2018_CQtheotinh[2] + "</td> " +
            "<td>" + data.sta_dot2_2018_CQtheotinh[3] + "</td> " +
            "<td>" + data.sta_dot2_2018_CQtheotinh[4] + "</td> " +
            "<td>" + data.sta_dot2_2018_CQtheotinh[5] + "</td> " +
            "<td>" + data.sta_dot2_2018_CQtheotinh[6] + "</td> " +
            "</tr>" +
            " <tr>" +
            "<td>   Trúng tuyển  </td>" +
            "<td>" + data.sta_nhaphoc_2018_CQtheotinh[0] + "</td>" +
            "<td>" + data.sta_nhaphoc_2018_CQtheotinh[1] + "</td>" +
            "<td>" + data.sta_nhaphoc_2018_CQtheotinh[2] + "</td> " +
            "<td>" + data.sta_nhaphoc_2018_CQtheotinh[3] + "</td> " +
            "<td>" + data.sta_nhaphoc_2018_CQtheotinh[4] + "</td> " +
            "<td>" + data.sta_nhaphoc_2018_CQtheotinh[5] + "</td> " +
            "<td>" + data.sta_nhaphoc_2018_CQtheotinh[6] + "</td> " +
            "</tr>" +
            "</tbody>" +
            "</table>"
        ).appendTo('#table-2018-CQtheotinh');
        PieandHeat("soluong", "2018", "CQtheotinh", "tinh");
        PieandHeat("dot1", "2018", "CQtheotinh", "tinh");
        PieandHeat("dot2", "2018", "CQtheotinh", "tinh");
        PieandHeat("nhaphoc", "2018", "CQtheotinh", "tinh");
        ScatterChart2("soluong", "nhaphoc", "2018", "CQtheotinh")
        // ****************************** ENd 2018 CQtheotinh *****************
        // ****************************** 2018 thacsi *************************
        BarChartSTA2data("duthi", "trungtuyen", "2018", "thacsi");
        PieandHeat("duthi", "2018", "thacsi");
        PieandHeat("trungtuyen", "2018", "thacsi");
        ScatterChart2("duthi", "trungtuyen", "2018", "thacsi");
        // ****************************** END 2018 thacsi *********************
        // ****************************** 2018 TX *************************
        BarChartSTA1data("soluong", "2018", "TX");
        PieandHeat("soluong", "2018", "TX");
        // ****************************** END 2018 TX *********************
        // ****************************** 2018 TXDot1 *************************
        BarChartSTA1data("soluong", "2018", "TXDot1");
        PieandHeat("soluong", "2018", "TXDot1");
        // ****************************** END 2018 TXDot1 *********************
        // ****************************** 2018 TXDot2 *************************
        BarChartSTA1data("soluong", "2018", "TXDot2");
        PieandHeat("soluong", "2018", "TXDot2");
        // ****************************** END 2018 TXDot2 *********************
    },
    error: function (data) {
        console.log('Error!');
    }
});
var nam2017 = {
    "Chính quy": "CQ",
    "Thường xuyên đợt 1": "TXDot1",
    "Thường xuyên đợt 2": "TXDot2"
}
var nam2018 = {
    "Chính quy": "CQ",
    "Thường xuyên": "TX",
    "Thạc sĩ": "thacsi",
    "Thường xuyên đợt 1": "TXDot1",
    "Thường xuyên đợt 2": "TXDot2",
    "Chính quy số lượng": "CQsoluong",
    "Chính quy theo tỉnh": "CQtheotinh"
}
var nam2018_tuongquan = {
    "Chính quy": "CQ",
    "Thạc sĩ": "thacsi",
    "Chính quy số lượng": "CQsoluong",
    "Chính quy theo tỉnh": "CQtheotinh"
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(function () {
    var mybutton = document.getElementById("myBtn");
    var mybutton1 = document.getElementById("myBtn1");
    mybutton1.style.display = "block";
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };
    window.onclick = function (event) {
        switch (event.target) {
            case document.getElementById('id01'):
                document.getElementById('id01').style.display = 'none'
                break;
            case document.getElementById('id02'):
                document.getElementById('id02').style.display = 'none'
                break;
            case document.getElementById('id03'):
                document.getElementById('id03').style.display = 'none'
                break;
        }
    }
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document

    $(".nam2018").hide();
    $(".nam2017").hide();
    $('.excel').hide();
    $('.tablenganh').hide();
    $('.configchart').hide();
    $("#label-dudoan").hide();
    $("#year").change(function () {
        $('input').val('');
        var $el = $("#he");
        console.log("haha")
        $el.empty()
        if ($(this).val() == "2017") {
            $.each(nam2017, function (key, value) {
                $el.append($("<option></option>")
                    .attr("value", value).text(key));
            });
        } else if ($(this).val() == "2018") {
            $.each(nam2018, function (key, value) {
                $el.append($("<option></option>")
                    .attr("value", value).text(key));
            });
        }
        $("#nganh").empty();
        $("#nganh").append($("<option></option>")
            .attr("value", "allnganh").text("Tất cả"))
        if ($el.val() != "CQtheotinh") {
            for (var i = 0; i < globaldata["nganh_" + $("#year").val() + "_" + $el.val()].length; i++) {
                $("#nganh").append($("<option></option>")
                    .attr("value", globaldata["nganh_" + $("#year").val() + "_" + $el.val()][i]).text(globaldata["nganh_" + $("#year").val() + "_" + $el.val()][i]))
            }
        }
    })
    $("#he").change(function () {
        $('input').val('');
        var $el = $("#nganh");
        console.log("haha1")
        $el.empty()
        $el.append($("<option></option>")
            .attr("value", "allnganh").text("Tất cả"))
        if ($(this).val() != "CQtheotinh") {
            for (var i = 0; i < globaldata["nganh_" + $("#year").val() + "_" + $(this).val()].length; i++) {
                $("#nganh").append($("<option></option>")
                    .attr("value", globaldata["nganh_" + $("#year").val() + "_" + $(this).val()][i]).text(globaldata["nganh_" + $("#year").val() + "_" + $(this).val()][i]))
            }
        }
    })
    $("#year-tuongquan").change(function () {
        $('input').val('');
        let $el = $("#he-tuongquan");
        $el.empty()
        if ($(this).val() == "2017") {
            $.each(nam2017, function (key, value) {
                $el.append($("<option></option>")
                    .attr("value", value).text(key));
            });
        } else if ($(this).val() == "2018") {
            $.each(nam2018_tuongquan, function (key, value) {
                $el.append($("<option></option>")
                    .attr("value", value).text(key));
            });
        }
    })
    $("#year-dudoan").change(function () {
        $('input').val('');
        let $el = $("#he-dudoan");
        $el.empty()
        if ($(this).val() == "2017") {
            $.each(nam2017, function (key, value) {
                $el.append($("<option></option>")
                    .attr("value", value).text(key));
            });
        } else if ($(this).val() == "2018") {
            $.each(nam2018_tuongquan, function (key, value) {
                $el.append($("<option></option>")
                    .attr("value", value).text(key));
            });
        }
    })
});

function itemnganh(nganh) {
    return nganh == $("#nganh").val();
}
function chartfilter(type = 'none') {
    $('input').val('');
    $('.configchart').show();
    var regex;
    if(type != 'none'){
        regex = new RegExp("^[a-zA-Z0-9]+_" + $("#year" + "-" + type).val() + '_' + $("#he" + "-" + type).val() + "$");
    }else{
        regex = new RegExp("^[a-zA-Z0-9]+_" + $("#year").val() + '_' + $("#he").val() + "$");
    }
    var matches = Object.keys(globaldata).filter((key) => regex.test(key));
    $(".nam2018").hide();
    $(".nam2017").hide();
    $('.excel').hide();
    $(".tablenganh").hide();
    $("#label-dudoan").hide();
    if (type == 'none') {
        if ($("#nganh").val() != "allnganh") {
            // $("#nganh").val()
            var indexnganh = globaldata["nganh_" + $("#year").val() + "_" + $("#he").val()].findIndex(itemnganh)
            console.log("index: " + indexnganh)
            var thcard = "";
            var tdcard = ""
            matches.forEach(function (value) {
                if (value != "b_" + $("#year").val() + "_" + $("#he").val() && value != "arr_" + $("#year").val() + "_" + $("#he").val()) {
                    thcard = thcard + "<th>  " + fullname[value.split("_")[0]] + "   </th>";
                    tdcard = tdcard + "<td>" + globaldata[value][indexnganh] + "</td>"
                }
            })
            $("#tablenganh").html(
                "<caption><h2>Thông tin ngành " + $("#nganh").val() + "</h2><caption>" +
                "<thead> " +
                "<tr>" +
                thcard +
                "</r> </thead>" +
                " <tbody>" +
                " <tr>" +
                tdcard +
                "</tr>" +
                "</tbody>"
            )
            $(".tablenganh").show();
        } else {
            $(".nam" + $("#year").val() + "." + $("#he").val()).show();
            $("#excel").load("static/tableexcel/" + $("#year").val() + "/" + $("#he").val() + ".html");
            $('.exel').show();
        }
    }
    if (type == 'dudoan') {
        $(".nam" + $("#year-dudoan").val() + "." + $("#he-dudoan").val() + '-dudoan').show();
        if (itemConvertInt.includes($("#he-dudoan").val())) {
            $("#label-dudoan").html("Dự đoán " + fullname[$("#he-dudoan").val()] + " năm " + $("#year-dudoan").val());
        } else if ($("#he-dudoan").val() == 'CQ') {
            $("#label-dudoan").html("Dự đoán Điểm-Chỉ tiêu và Điểm-Trúng tuyển " + fullname[$("#he-dudoan").val()] + " năm " + $("#year-dudoan").val());
        } else {
            $("#label-dudoan").html("Dự đoán " + fullname[$("#he-dudoan").val()] + " năm " + $("#year-dudoan").val());
        }
        $("#label-dudoan").show();
    }
    if (type == 'tuongquan') {
        $(".nam" + $("#year-tuongquan").val() + "." + $("#he-tuongquan").val() + '-tuongquan').show();
    }
}
itemConvertInt = [
    "thacsi",
    "CQsoluong",
    "CQtheotinh"
]
function calculate(cate) {
    var cate1 = cate.replace(/-/g, "_");
    console.log(cate)
    console.log(cate1);
    var x = Number($(".inputnumber-" + cate).val());
    if (x != '') {
        var result = x * globaldata["arr_" + cate1][0] + x * x * globaldata["arr_" + cate1][1] + globaldata["arr_" + cate1][2] * x * Math.log10(x) + globaldata["b_" + cate1]
        console.log((cate.split('-'))[1]);
        if (itemConvertInt.includes((cate.split('-'))[1])) {
            console.log('INT');
            $("#result-" + cate).html(" Kết quả: " + parseInt(result));
        }
        else {
            console.log('Float');
            $("#result-" + cate).html(" Điểm: " + parseFloat(result));
        }
    }
    else {
        $("#result-" + cate).html("Hãy nhập giá trị!!!");
    }
}