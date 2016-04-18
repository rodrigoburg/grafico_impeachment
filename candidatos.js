var complete_data = null;

function inicializa() {

    var svg = dimple.newSvg("#candidatos", 1400, 1000);
    d3.csv("dados_perfil.csv", function (data) {
        data = dimple.filterData(data, "existe", "TRUE")
        data.forEach(function (d) {
            d.governismo = parseFloat(d.governismo)
        })
        var cores_default = [
            "#A11217",
            "#00408F",
            "#E9BC00"
        ]
        //data = dimple.filterData(data, "categoria", "idade")
        var myChart = new dimple.chart(svg, data);
        myChart.setBounds(110, 30, 1900, 700);
        myChart.addMeasureAxis("y", "governismo");
        var x = myChart.addCategoryAxis("x", "nome_impeachment");

        series = myChart.addSeries(["nome_impeachment","posicao"], dimple.plot.bar);
        series.barGap = 0.42;
        myChart.assignColor("contra", cores_default[0],cores_default[0]);
        myChart.assignColor("a favor", cores_default[1],cores_default[1]);
        myChart.assignColor("abstencao", cores_default[2],cores_default[2]);
        myChart.assignColor("ausencia", cores_default[2],cores_default[2]);



        myChart.draw();
        x.shapes.selectAll("text").remove();

        console.log(data)

    });
}

