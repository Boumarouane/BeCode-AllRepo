/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name :     
Date :  
Contact information : 
What does this script do ? 
...
*/

// Your scripting goes here...


(() => {


    let cloneTable1 = document.getElementById("table1");
    const dataObject= new Object();
    let countTable=0;
    let dataInTable1=[];


    for (let i=2;i<cloneTable1.rows.length;i++){

        const dataObject= [];

        for(let j=1;j<cloneTable1.rows[i].cells.length;j++){
            // console.log(cloneTable1.rows[i].cells.length);  //13

            if(j==1){
                dataObject.country=cloneTable1.rows[i].cells[j].innerHTML;
                // console.log(dataObject.country)  //les pays
            }

            if(j==2){
                dataObject.data2002=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2002.includes(",")){
                    dataObject.data2002=dataObject.data2002.replace(",",".");
                    // console.log(dataObject.data2002);
                    
                }
                
            }
            if(j==3){
                dataObject.data2003=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2003.includes(",")){
                    dataObject.data2003=dataObject.data2003.replace(",",".");
                    console.log(dataObject.data2003);
                }
                
            }
            if(j==4){
                dataObject.data2004=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2004.includes(",")){
                    dataObject.data2004=dataObject.data2004.replace(",",".");
                }
                
            }
            if(j==5){
                dataObject.data2005=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2005.includes(",")){
                    dataObject.data2005=dataObject.data2005.replace(",",".");
                }
                
            }
            if(j==6){
                dataObject.data2006=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2006.includes(",")){
                    dataObject.data2006=dataObject.data2006.replace(",",".");
                }
               
            }
            if(j==7){
                dataObject.data2007=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2007.includes(",")){
                    dataObject.data2007=dataObject.data2007.replace(",",".");
                }
                
            }
            if(j==8){
                dataObject.data2008=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2008.includes(",")){
                    dataObject.data2008=dataObject.data2008.replace(",",".");
                }
                
            }
            if(j==9){
                dataObject.data2009=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2009.includes(",")){
                    dataObject.data2009=dataObject.data2009.replace(",",".");
                }
                
            }
            if(j==10){
                dataObject.data2010=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2010.includes(",")){
                    dataObject.data2010=dataObject.data2010.replace(",",".");
                }
                
            }
            if(j==11){
                dataObject.data2011=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2011.includes(",")){
                    dataObject.data2011=dataObject.data2011.replace(",",".");
                }
                
            }
            if(j==12){
                dataObject.data2012=cloneTable1.rows[i].cells[j].innerHTML;
                if(dataObject.data2012.includes(",")){
                    dataObject.data2012=dataObject.data2012.replace(",",".");
                }
                
            }

        }
            dataInTable1[countTable++]=dataObject;
    }



    console.log(dataInTable1);





function mapping(dataTable, menuValue){

        let contentArray=[];

    switch(menuValue) {
          case "data2002":
                contentArray=dataTable.map(item=>item.data2002);
            break;
          case "data2003":
                contentArray=dataTable.map(item=>item.data2003);
            break;
          case "data2004":
                contentArray=dataTable.map(item=>item.data2004);
            break;
          case "data2005":
                contentArray=dataTable.map(item=>item.data2005);
            break;
          case "data2006":
                contentArray=dataTable.map(item=>item.data2006);
                
            break;
          case "data2007":
                contentArray=dataTable.map(item=>item.data2007);
            break;
          case "data2008":
                contentArray=dataTable.map(item=>item.data2008);
            break;
          case "data2009":
                contentArray=dataTable.map(item=>item.data2009);
              break;
          case "data2010":
                contentArray=dataTable.map(item=>item.data2010);
              break;
          case "data2011":
                contentArray=dataTable.map(item=>item.data2011);
              break;
          case "data2012":
                contentArray=dataTable.map(item=>item.data2012);
              break;
    }

        return contentArray;
        
        
        
}



const graph = (data, year) =>{


    // set the dimensions and margins of the graph
    let margin = {top: 30, right: 20, bottom: 55, left: 50},
        width = 800 - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    // insert the svg object to the body of the page
    const svg1 = d3.select("#mw-content-text")
                   .insert("svg","#table1")
                   .attr("width", width + margin.left + margin.right)
                   .attr("height", height + margin.top + margin.bottom)
                   .style("background", "GhostWhite");

    const graph= svg1.append('g')
                     .attr("width", width)
                     .attr("height",height)
                     .attr("transform",`translate(${margin.left},${margin.top})`);

    const groupeX=graph.append("g")
                       .attr("transform",`translate(0,${height})`);

    const groupeY=graph.append("g");

      // X axis: scale and draw:
      const x = d3.scaleBand()
                  .domain(data.map(item=>item.country))
                  .range([0, width])
                  .paddingInner(0.3)
                  .paddingOuter(0.2);

      // Y axis: scale and draw:
      const y = d3.scaleLinear()
                  .domain([0,6600])
                  .range([height,0]);


      // append the bar rectangles to the svg element
      graph.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("width", x.bandwidth())
          .attr("height",0)
          .attr("x", function(d){return x(d.country)})
          .attr("fill", "steelblue")
          .attr("y",height)
          .data(year)
          .transition()
          .duration(3000)
          .attr("y",function(d){return y(d)})
          .attr("height", function(d){return height-y(d)});

    // create AXIS

    const axeX=d3.axisBottom(x);
    const axeY=d3.axisLeft(y);

    groupeX.call(axeX);
    groupeY.call(axeY);

    groupeX.selectAll("text")
           .attr("transform", "rotate(-35) translate(-5,-5)")
           .attr("text-anchor","end");
}


// CREATE DROP DOWN

const dataYear=["data2002","data2003","data2004","data2005", "data2006","data2007","data2008","data2009","data2010","data2011","data2012"];
const years=[2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012];

const dropdown1=d3.select("#mw-content-text")
                  .insert("select","#table1")
                  .attr("id", "selectcountry")
                  .on("change", switchcountry);

    dropdown1.selectAll("option")
             .data(years)
             .enter()
             .append("option")
             .text(function(d){return d})
             .data(dataYear)
             .attr("value", function(d){return d});

    function switchcountry(){
        d3.select("#mw-content-text").select("svg").remove();
        graph(dataInTable1, mapping(dataInTable1,this.value));
    }


    const svg = d3.select('.box')
    .append('svg')
    .attr('width', 600)
    .attr('height', 550)
    .style('background', 'AntiqueWhite');


// Dimensions
const margin = {top: 20, right: 20, bottom: 100, left: 100};
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const graph = svg.append('g')
       .attr('width', graphWidth)
       .attr('height', graphHeight)
       .attr('transform', `translate(${margin.left}, ${margin.top})`);

const groupeX = graph.append('g')
           .attr('transform', `translate(0, ${graphHeight})`);
const groupeY = graph.append('g')

// Scales
// donnée Max

const y = d3.scaleLinear()
      .range([graphHeight, 0]);

const x = d3.scaleBand()
      .range([0, 480])
      .paddingInner(0.3)
      .paddingOuter(0.2)

// Création et mise en place des Axes

const axeX = d3.axisBottom(x)
const axeY = d3.axisLeft(y)
     .ticks(5)
     .tickFormat(d => d + ' Euros');

// Update function
const update = (donnee) => {

// updating scales domains
// donnée Max
const max = d3.max(donnee, d => d.prix);
y.domain([0, max]);
x.domain(donnee.map(item => item.nom));


const rects = graph.selectAll('rect')
.data(donnee);

// remove exists selection
rects.exit().remove()


rects.attr('width', x.bandwidth())
.attr('height', function(d){return graphHeight - y(d.prix)})
.attr('fill', 'teal')
.attr('x', function(d){return x(d.nom)})
.attr('y', function(d){return y(d.prix)});





rects.enter()
.append('rect')
.attr('width', x.bandwidth())
.attr('height', function(d){return graphHeight - y(d.prix)})
.attr('fill', 'teal')
.attr('x', function(d){return x(d.nom)})
.attr('y', function(d){return y(d.prix)});





groupeX.call(axeX)
.style('font-size', "14px");
groupeY.call(axeY)
.style('font-size', "13px");
}


db.collection('pays').get().then(res => {

var donnee = [];
res.docs.forEach(doc => {
    
    donnee.push(doc.data());
    
}) ;

update(donnee);

})

})();

