var colors = {
  'color0': '#EC3331',
  'color1': '#f58832',
  'color2': '#fcef57',
  'color3': '#7dcdd4',
  'color4': '#0bbbcc',
  'color5': '#0578bd'
}
function color(pkg) {
  return colors[pkg];
}

function createRoot(data) {
  for(var i=0; i < data.length; i++) {
    data[i].index = i;
  }
  var root = {
    name: 'painel',
    children: [{
      name: 'color0',
      children: [data[0],data[1],data[2]]
    },
    {
      name: 'color1',
      children: [data[3],data[4],data[5],data[6]]
    },
    {
      name: 'color2',
      children: [data[7],data[8], data[9],data[10]]
    },
    {
      name: 'color3',
      children: [data[11], data[12], data[13],data[14]]
    },
    {
      name: 'color4',
      children: [data[15],data[16], data[17],data[18]]
    },
    {
      name: 'color5',
      children: [data[19], data[20],data[21]]
    }]
  };

  return root;
};

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

function change(svgOld) {
  svgOld.attr("class", "bubble bubble-remove");
  setTimeout(function(){svgOld.remove();}, 1500); 
}

(function() {
  var height = 875,
    width = 1920,
    format = d3.format(",d");

  var bubble = d3.layout.pack()
      .sort(null)
      .size([width, height])
      .padding(75);

  var svgOld = undefined;
  var multR = 1;
  function getPosition(d){
    var middlex = width / 2;
    var middley = height / 2 + 50;

    var basePosition = [
      {x: middlex + d.r, y: middley - d.r / 2},
      {x: middlex + d.r - 220, y: middley - d.r / 2 - 100},
      {x: middlex + d.r + 220, y: middley - d.r / 2 - 100},
      {x: middlex + d.r, y: middley - d.r / 2 - 250},
      {x: middlex + d.r - 230, y: middley - d.r / 2 + 100},
      {x: middlex + d.r + 230, y: middley - d.r / 2 + 100},
      {x: middlex + d.r, y: middley - d.r / 2 + 250},
      {x: middlex + d.r - 325, y: middley - d.r / 2 - 275},
      {x: middlex + d.r - 315, y: middley - d.r / 2 + 275},
      {x: middlex + d.r + 315, y: middley - d.r / 2 - 275},
      {x: middlex + d.r + 325, y: middley - d.r / 2 + 275},
      {x: middlex + d.r - 470, y: middley - d.r / 2 - 95},
      {x: middlex + d.r - 455, y: middley - d.r / 2 + 95},
      {x: middlex + d.r + 455, y: middley - d.r / 2 - 95},
      {x: middlex + d.r + 455, y: middley - d.r / 2 + 95},
      {x: middlex + d.r - 650, y: middley - d.r / 2 + 25},
      {x: middlex + d.r - 570, y: middley - d.r / 2 + 225},
      {x: middlex + d.r + 580, y: middley - d.r / 2 + 250},
      {x: middlex + d.r + 650, y: middley - d.r / 2 - 130},
      {x: middlex + d.r + 700, y: middley - d.r / 2 + 70},
      {x: middlex + d.r - 700, y: middley - d.r / 2 - 170},
      {x: middlex + d.r - 840, y: middley - d.r / 2},
    ];

    if(basePosition[d.index]) {
      d.x = basePosition[d.index].x;
      d.y = basePosition[d.index].y;
    }
    else {
      d.y = 0;
      d.x = 0;
    }
    return "translate(" + d.x + "," + d.y + ")"; 
    
  }

  function generateChart(){
    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "bubble");
    d3.json("/panel/", function(error, data) {
      root = createRoot(data);
      var nodes = bubble.nodes(classes(root));
      console.log(nodes);
      var node = svg.selectAll(".node")
        .data(
          nodes.filter(function(d) { return !d.children; }))
            .enter().append("g")
              .attr("class", "node")
              .attr("transform", getPosition);

      node.append("circle")
        .attr("r", function(d) { return d.r * multR; })
        .style("fill", function(d) { 
          return color(d.packageName); 
        })

      // first line
      node.append("text")
          .attr("dy", function(d) {
            return d.r * multR + 20;
          })
          .style("text-anchor", "middle")
          .style("pointer-events", "none")
          .style("font-family", "Open Sans")
          .style("font-size", "18px")
          .text(function(d){ return wrapText(d.className); });

      // second line
      node.append("text")
          .attr("dy", function(d) {
            return d.r * multR + 40;
          })
          .style("text-anchor", "middle")
          .style("pointer-events", "none")
          .style("font-family", "Open Sans")
          .style("font-size", "18px")
          .text(function(d){ return wrapText(d.className, true); });

      node.append("text")
          .attr("dy", function(d) {
            return 0 + 12;
          })
          .style("text-anchor", "middle")
          .style("pointer-events", "none")
          .style("font-family", "Open Sans")
          .style("fill", "#FFFFFF")
          .style("font-weight", "bold")
          .style("font-size", function(d){
            var fontSize = d.r * 0.66;
            return fontSize + "px";
          })
          .text(function(d){ return d.index + 1; });
    });

    // Returns a flattened hierarchy containing all leaf nodes under the root.
    function classes(root) {
      var classes = [];

      function recurse(name, node) {
        if(node === undefined) return;
        if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
        else classes.push({packageName: name, className: node.name, value: node.count, index: node.index});
      }

      recurse(null, root);
      return {children: classes};
    }

    d3.select(self.frameElement).style("height", height + "px");

    if(svgOld) {
      change(svgOld);
    }
    svgOld = svg;
  }

  generateChart();
  // TODO: uncomment
  // setInterval(generateChart, 30000);
})();
