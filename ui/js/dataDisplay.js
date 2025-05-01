let prestations;
let prestationsDescriptionSort = "down";
let prestationsCountSort = "down";
let prestationsSumSort = "down";

function sortByDescription() {
    if (prestationsDescriptionSort == "down") {
        prestations.sort((a, b) => d3.ascending(a.description, b.description));
        prestationsDescriptionSort = "up";
    } else {
        prestations.sort((a, b) => d3.descending(a.description, b.description));
        prestationsDescriptionSort = "down";
    }
    
    d3.select("#content")
        .selectAll("div")
        .data(prestations, d => d.id)
        .order();
}

function sortByCount() {
    if (prestationsCountSort == "down") {
        prestations.sort((a, b) => d3.ascending(a.count, b.count));
        prestationsCountSort = "up";
    } else {
        prestations.sort((a, b) => d3.descending(a.count, b.count));
        prestationsCountSort = "down";
    }
    
    d3.select("#content")
        .selectAll("div")
        .data(prestations, d => d.id)
        .order();
}

function sortBySum() {
    if (prestationsSumSort == "down") {
        prestations.sort((a, b) => d3.ascending(a.sum, b.sum));
        prestationsSumSort = "up";
    } else {
        prestations.sort((a, b) => d3.descending(a.sum, b.sum));
        prestationsSumSort = "down";
    }
    
    d3.select("#content")
        .selectAll("div")
        .data(prestations, d => d.id)
        .order();
}

/**
 * 
 * @param {Array<{sum : int, count: int, description: string}>} data 
 */
function draw(data) {
    prestations = data;
    
    const colorScale = d3.scaleOrdinal()
        .domain(prestations.map(d => d.description))
        .range(["#6a0dad", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"]);
    
    d3.selectAll("#content")
        .selectAll("div")
        .data(prestations)
        .join("div")
        .attr("class", "prestation")
        .append("div")
        .attr("class", "prestationDescription")
        .style("color", d => colorScale(d.description)) 
        .text(d => d.description);
    
    d3.selectAll(".prestation")
        .append("div")
        .attr("class", "prestationCount")
        .text(d => d.count);
    
    d3.selectAll(".prestation")
        .append("div")
        .attr("class", "prestationSum")
        .transition()
        .style("width", "0px")
        .duration(1200) 
        .style("width", d => 60 + d.sum / 40 + "px") 
        .text(d => d.sum)
        .style("background-color", d => colorScale(d.description)) 
        .style("color", "white");
}
    
