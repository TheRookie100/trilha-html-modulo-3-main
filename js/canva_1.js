document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById("myChart").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 280);
    gradient.addColorStop(0, "rgba(92, 70, 156, 0.8)");
    gradient.addColorStop(1, "rgba(92, 70, 156, 0.1)");
    // Line chart
    new Chart(document.getElementById("myChart"), {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            label: "Sales ($)",
            fill: true,
            backgroundColor: gradient,
            borderColor: "#1D267D",
            tension: 0.4,
            data: [
              2115,
              1562,
              1584,
              1892,
              1587,
              1923,
              2566,
              2448,
              2805,
              3438,
              2917,
              3327
            ]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          intersect: false
        },
        hover: {
          intersect: true
        },
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [
            {
              reverse: true,
              gridLines: {
                color: "rgba(0,0,0,0.05)"
              },
              ticks: {
                fontColor: "#000",
                fontFamily: "Poppins"
              },
              grid: {
                color: "white",
                borderColor: "white",
                tickColor: "white"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                stepSize: 1000,
                fontColor: "#000",
                fontFamily: "Poppins"
              },
              borderDash: [3, 3],
              gridLines: {
                color: "rgba(0,0,0,0.05)"
              },
              grid: {
                color: "white",
                borderColor: "white",
                tickColor: "white"
              }
            }
          ]
        }
      }
    });
  });