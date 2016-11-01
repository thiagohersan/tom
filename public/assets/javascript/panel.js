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
      .padding(600);

  var svgOld = undefined;
  var multR = 2.5;

  function generateChart(){
    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "bubble");
    d3.json("/panel/", function(error, data) {
      root = createRoot(data);
      var node = svg.selectAll(".node")
        .data(bubble.nodes(classes(root))
          .filter(function(d) { return !d.children; }))
            .enter().append("g")
              .attr("class", "node")
              .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

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
          .style("font-size", "14px")
          .text(function(d){ return wrapText(d.className); });

      // second line
      node.append("text")
          .attr("dy", function(d) {
            return d.r * multR + 40;
          })
          .style("text-anchor", "middle")
          .style("pointer-events", "none")
          .style("font-family", "Open Sans")
          .style("font-size", "14px")
          .text(function(d){ return wrapText(d.className, true); });
    });

    // Returns a flattened hierarchy containing all leaf nodes under the root.
    function classes(root) {
      var classes = [];

      function recurse(name, node) {
        if(node === undefined) return;
        if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
        else classes.push({packageName: name, className: node.name, value: node.count});
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
  setInterval(generateChart, 30000);
})();
