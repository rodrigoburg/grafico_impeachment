var complete_data = null;

function inicializa() {

    var svg = dimple.newSvg("#candidatos", 1400, 1000);
    d3.csv("dados_perfil.csv", function (data) {
        //data = dimple.filterData(data, "candidato", ["total","dilma"])
        //data = dimple.filterData(data, "categoria", "idade")
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(110, 30, 1900, 700);
        myChart.addMeasureAxis("y", "valor");
        var y = myChart.addCategoryAxis("x", ["dado","candidato"]);
        y.title = ""
        series = myChart.addSeries("candidato", dimple.plot.bar);
        series.barGap = 0.42;
        y.overrideMin = 3500;
        myChart.draw();

    });
}

