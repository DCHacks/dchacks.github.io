var options = {
	animationEasing : "easeOutQuart",
    tooltipTemplate: " <%=label%>: <%= numeral(value/100).format('%') %>" 
}

var successData = [
    {
        value: 100,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Yes"
    }
]

var ctx = document.getElementById("successChart").getContext("2d");
var successChart = new Chart(ctx).Doughnut(successData, options);

var againData = [
    {
        value: 97,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Definitely"
    },
    {
        value: 3,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Probably Not"
    }
]

var ctx = document.getElementById("againChart").getContext("2d");
var againChart = new Chart(ctx).Doughnut(againData, options);

var recommendData = [
    {
        value: 96,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Definitely"
    },
    {
        value: 4,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "Probably Not"
    }
]

var ctx = document.getElementById("recommendChart").getContext("2d");
var recommendChart = new Chart(ctx).Doughnut(recommendData, options);