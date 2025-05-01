function barChart(htmlClassorId, graphQlQuery) {
  const margin = { top: 50, right: 50, bottom: 90, left: 70 },
  width = 800 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

  const svg = d3.select(htmlClassorId)
  .append("svg")
  .attr("width", width + margin.left + margin.right) 
  .attr("height", height + margin.top + margin.bottom) 
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`); 
  d3.json("data/countries.json")
  .then(function (data) {
      const x = d3.scaleBand()
      .range([0, width]) 
      .domain(data.map((d) => d.country)) 
      .padding(0.3); 

      svg
      .append("g")
      .attr("transform", `translate(0, ${height})`) 
      .call(d3.axisBottom(x)) 
      .selectAll("text") 
      .attr("transform", "translate(-10,0)rotate(-30)")
      .style("text-anchor", "end")
      .style("font-size", "12px")
      .style("font-weight", "bold");
      const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.count) + 100]) 
      .range([height, 0]); 
      svg
      .append("g")
      .call(d3.axisLeft(y).ticks(10)) 
      .selectAll("text") 
      .style("font-size", "12px")
      .style("font-weight", "bold");
      svg
      .selectAll("mybar")
      .data(data) 
      .join("rect") 
      .attr("x", (d) => x(d.country)) 
      .attr("y", (d) => y(d.count))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.count)) 
      .attr("fill", "#0078D4") 
      .attr("rx", 6) 
      .attr("ry", 6) 
      .on("mouseover", function (event, d) {
      d3.select(this).attr("fill", "#0056A2");
      })
      .on("mouseout", function (event, d) {
      d3.select(this).attr("fill", "#0078D4");
      });
      svg
      .append("text")
      .attr("x", width / 2) 
      .attr("y", -10) 
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text("Nombre de Prestations par Pays");
      svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2) 
      .attr("y", height + 50) 
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .text("Pays");
      svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", -height / 2) 
      .attr("y", -50) 
      .attr("transform", "rotate(-90)")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .text("Nombre de Prestations");
  })
  .catch((error) => console.error(error)); 
}
