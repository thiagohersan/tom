var height = 1080,
	width = 1920,
  format = d3.format(",d");

var color = function(pkg) {
  if(pkg == 'hot'){
    return '#ff0000';
  }
  return '#ffff00';
}

var bubble = d3.layout.pack()
    .sort(null)
    .size([width, height])
    .padding(150);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("class", "bubble");

d3.json("flare.json", function(error, root) {
  var node = svg.selectAll(".node")
    .data(bubble.nodes(classes(root))
      .filter(function(d) { return !d.children; }))
        .enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("circle")
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { 
      return color(d.packageName); 
    })

  function wrapText(text, tail) {
    if(text.indexOf(' ')){
      var words = text.split(' ');
      var total = Math.ceil(words.length / 2);
      var text = "";
      var i=0;

      if(tail){
        i = total;
        total = words.length;
      }

      for(i; i < total; i++){
        text += words[i] + ' ';
      }
      return text;
    } else{
      return d.className;
    }
  }

  // first line
  node.append("text")
      .attr("dy", function(d) {
        return d.r + 20;
      })
      .style("text-anchor", "middle")
      .style("pointer-events", "none")
	    .style("font-family", "Open Sans")
      .style("font-size", "18px")
      .text(function(d){ return wrapText(d.className); });

  // second line
  node.append("text")
      .attr("dy", function(d) {
        return d.r + 40;
      })
      .style("text-anchor", "middle")
      .style("pointer-events", "none")
	    .style("font-family", "Open Sans")
      .style("font-size", "18px")
      .text(function(d){ return wrapText(d.className, true); });
});

// Returns a flattened hierarchy containing all leaf nodes under the root.
function classes(root) {
  var classes = [];

  function recurse(name, node) {
    if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
    else classes.push({packageName: name, className: node.name, value: node.size});
  }

  recurse(null, root);
  return {children: classes};
}

d3.select(self.frameElement).style("height", height + "px");
