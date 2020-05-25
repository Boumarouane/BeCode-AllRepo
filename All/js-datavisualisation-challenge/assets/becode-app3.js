(() => {
let table1 = document.getElementById("table1");
let compte = 0;
let dataTableEnd = [];
//Première boucle pour générer un tableau pour chaque ensemble de donnée récolté
for (let i=2; i< table1.rows.length;i++){
    const dataTable= [];
    //Deuxième boucle pour rajouter les données dans le tableau dataTable
    for(let a=1;a < table1.rows[i].cells.length;a++){
        if(a == 1){
            dataTable.country=table1.rows[i].cells[a].innerHTML;
        }
        if(a == 2){
            dataTable.data2002=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2002.includes(",")){
                dataTable.data2002=dataTable.data2002.replace(",",".");
            }
        }
        if(a == 3){
            dataTable.data2003=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2003.includes(",")){
                dataTable.data2003=dataTable.data2003.replace(",",".");
            }
        }
        if(a == 4){
            dataTable.data2004=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2004.includes(",")){
                dataTable.data2004=dataTable.data2004.replace(",",".");
            }
        }
        if(a == 5){
            dataTable.data2005=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2005.includes(",")){
                dataTable.data2005=dataTable.data2005.replace(",",".");
            }
        }
        if(a == 6){
            dataTable.data2006=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2006.includes(",")){
                dataTable.data2006=dataTable.data2006.replace(",",".");
            }
        }
        if(a == 7){
            dataTable.data2007=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2007.includes(",")){
                dataTable.data2007=dataTable.data2007.replace(",",".");
            }
        }
        if(a == 8){
            dataTable.data2008=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2008.includes(",")){
                dataTable.data2008=dataTable.data2008.replace(",",".");
            }
        }
        if(a == 9){
            dataTable.data2009=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2009.includes(",")){
                dataTable.data2009=dataTable.data2009.replace(",",".");
            }
        }
        if(a == 10){
            dataTable.data2010=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2010.includes(",")){
                dataTable.data2010=dataTable.data2010.replace(",",".");
            }
        }
        if(a == 11){
            dataTable.data2011=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2011.includes(",")){
                dataTable.data2011=dataTable.data2011.replace(",",".");
            }
        }
        if(a == 12){
            dataTable.data2012=table1.rows[i].cells[a].innerHTML;
            if(dataTable.data2012.includes(",")){
                dataTable.data2012=dataTable.data2012.replace(",",".");
            }
        }
    }
        dataTableEnd[compte++] = dataTable;
}


//Construction du graphique

const svg = d3.select("#mw-content-text")
            .insert("svg","#table1")
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
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


// donnée Max

const y = d3.scaleLinear()
        .domain([0,6600])
        .range([height,0]);


const x = d3.scaleBand()
        .domain(data.map(item => item.country))
        .range([0, width])
        .paddingInner(0.3)
        .paddingOuter(0.2)

// Création et mise en place des Axes

const axeX = d3.axisBottom(x)
const axeY = d3.axisLeft(y)
            .ticks(5)
            .tickFormat(d => d + ' (milliers)');


const update = (donnee) => {


// donnée Max
const max = d3.max(donnee, d => d.data2002);
y.domain([0, max]);
x.domain(donnee.map(item => item.country));


const rects = graph.selectAll('rect')
.data(donnee);


rects.exit().remove()


rects.attr('width', x.bandwidth())
.attr('height', function(d){return graphHeight - y(d.data2002)})
.attr('fill', 'teal')
.attr('x', function(d){return x(d.country)})
.attr('y', function(d){return y(d.data2002)});


rects.enter()
.append('rect')
.attr('width', x.bandwidth())
.attr('height', function(d){return graphHeight - y(d.data2002)})
.attr('fill', 'teal')
.attr('x', function(d){return x(d.country)})
.attr('y', function(d){return y(d.data2002)});


groupeX.call(axeX)
.style('font-size', "14px");
groupeY.call(axeY)
.style('font-size', "13px");
}

db.collection('pays').get().then(res => {

let donnee = [];
res.docs.forEach(doc => {
    
    donnee.push(doc.data());
    
}) ;

update(donnee);

})

})();