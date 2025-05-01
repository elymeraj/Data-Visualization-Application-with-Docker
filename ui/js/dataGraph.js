/**
 * 
 * @param {Array<{date : string,count: int,description: string}>} dataArray 
 * The date should be a string of year
 * @param {String} htmlIdorClass html id or class
 * @param {String} labelY label for the yAxis
 * @param {string} labelX label for the xAxis
 */
function multiLineGraph(dataArray, htmlIdorClass, labelY, labelX) {
    const width = 1100; 
    const height = 600; 
    const marginTop = 60; 
    const marginRight = 250; 
    const marginBottom = 80; 
    const marginLeft = 140; 

    const parseTime = d3.utcParse("%Y");

    const x = d3.scaleUtc()
        .domain([parseTime(dataArray[0].date), parseTime(dataArray[dataArray.length - 1].date)])
        .range([marginLeft, width - marginRight]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(dataArray, d => d.count)])
        .range([height - marginBottom, marginTop]);

    const color = d3.scaleOrdinal()
        .domain(dataArray.map(d => d.description))
        .range(d3.schemeSet3);

    const svg = d3.select(htmlIdorClass).append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 12px sans-serif; background-color: #f9f9f9;");

    // Title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", marginTop / 2)
        .attr("text-anchor", "middle")
        .attr("style", "font-size: 20px; font-weight: bold;")
        .text("Évolution des Prestations Annuellement");

    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).tickSize(10))
        .append("text")
        .attr("x", width / 2)
        .attr("y", marginBottom - 10)
        .attr("fill", "#000")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("style", "font: 18px sans-serif;")
        .text(labelX);

    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).ticks(8).tickSize(10))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -marginLeft + 50)
        .attr("fill", "#000")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("style", "font: 18px sans-serif;")
        .text(labelY);

    const serie = svg.append("g")
        .selectAll()
        .data(d3.group(dataArray, d => d.description))
        .join("g");

    serie.append("path")
        .attr("fill", "none")
        .attr("stroke", d => color(d[0]))
        .attr("stroke-width", 2.5)
        .attr("stroke-dasharray", "6,3") 
        .attr(
            "d", d => d3.line()
                .x(d => x(parseTime(d.date)))
                .y(d => y(d.count))(d[1])
        );

    const legend = svg.append("g")
        .attr("transform", `translate(${width - marginRight + 20},${marginTop + 20})`);

    const legends = legend.selectAll(".legend")
        .data(color.domain())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(0,${i * 30})`);

    legends.append("rect")
        .attr("x", 0)
        .attr("width", 25)
        .attr("height", 25)
        .style("fill", color);

    legends.append("text")
        .attr("x", 35)
        .attr("y", 12.5)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .attr("style", "font: 14px sans-serif;")
        .text(d => d);
}

/**
 * 
 * @param {Array<{date : number, count: int, description: string}>} dataArray 
 * The date should be a number representing the month
 * @param {String} htmlIdorClass html id or class
 * @param {String} labelY label for the yAxis
 * @param {string} labelX label for the xAxis
 */
function multiLineGraphMonth(dataArray, htmlIdorClass, labelY, labelX) {
    const width = 1100;
    const height = 600;
    const marginTop = 60;
    const marginRight = 250;
    const marginBottom = 80;
    const marginLeft = 140;

    const x = d3.scaleLinear()
        .domain([1, 12])
        .range([marginLeft, width - marginRight]);

    const y = d3.scaleLinear()
        .domain([0, d3.max(dataArray, d => d.sum)])
        .range([height - marginBottom, marginTop]);

    const color = d3.scaleOrdinal()
        .domain(dataArray.map(d => d.description))
        .range(d3.schemeSet3);

    const svg = d3.select(htmlIdorClass).append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 12px sans-serif; background-color: #f9f9f9;");

    svg.append("text")
        .attr("x", width / 2)
        .attr("y", marginTop / 2)
        .attr("text-anchor", "middle")
        .attr("style", "font-size: 20px; font-weight: bold;")
        .text("Revenus Mensuels des Prestations");

    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).tickSize(10).tickFormat(d => `Mois ${d}`))
        .append("text")
        .attr("x", width / 2)
        .attr("y", marginBottom - 10)
        .attr("fill", "#000")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("style", "font: 18px sans-serif;")
        .text(labelX);

    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).ticks(8).tickSize(10))
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -marginLeft + 50)
        .attr("fill", "#000")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("style", "font: 18px sans-serif;")
        .text(labelY);

    const serie = svg.append("g")
        .selectAll()
        .data(d3.group(dataArray, d => d.description))
        .join("g");

    serie.append("path")
        .attr("fill", "none")
        .attr("stroke", d => color(d[0]))
        .attr("stroke-width", 2.5)
        .attr("stroke-dasharray", "6,3")
        .attr(
            "d", d => d3.line()
                .x(d => x(d.month))
                .y(d => y(d.sum))(d[1])
        );

    const legend = svg.append("g")
        .attr("transform", `translate(${width - marginRight + 20},${marginTop + 20})`);

    const legends = legend.selectAll(".legend")
        .data(color.domain())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", (d, i) => `translate(0,${i * 30})`);

    legends.append("rect")
        .attr("x", 0)
        .attr("width", 25)
        .attr("height", 25)
        .style("fill", color);

    legends.append("text")
        .attr("x", 35)
        .attr("y", 12.5)
        .attr("dy", ".35em")
        .style("text-anchor", "start")
        .attr("style", "font: 14px sans-serif;")
        .text(d => d);
}


