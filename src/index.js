import * as d3 from 'd3';
import { json } from 'd3-fetch'


// set the dimensions and margins of the graph
const height = 100 //window.innerHeight*0.8;
const width = 200 //window.innerWidth*0.6;
const margin = { top: 50, bottom: 50, left: 50, right: 50 }


// append les titres des chansons
let titre = d3.select(".titres")
    .append("h2")

let artiste = d3.select(".titres")
    .append("p")
    .text("artiste")
    
let album = d3.select(".titres")
    .append("p")
    .text("album")

// append les events
let events = d3.select(".events")
    .append("p")
    .text("quand blabla")

// append the svg object to the body of the page
let svgGraphe = d3.select(".stats")
    .append("svg")
    .attr("class", "graphe")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("transform", `translate(${margin.left},${margin.top}`)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top}`)


Promise.all([
    json('../data-2017.json'),
    json('../data-2018.json'),
    json('../data-2019.json'),
    json('../data-2020.json'),
    json('../data-2021.json'),
    json('../events.json')
])
//d3.json('../data-2017.json')
    .then(([data_2017, data_2018, data_2019, data_2020, data_2021, data_events]) =>
    {


        

        /*
        // Parse the Data

        //axe X
        const x = d3.scaleBand()
            .domain(data_2017.map(m => m.name))
            .range([0, width])
            .padding(0.2);

        svgGraphe.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))
          


        //axe Y
        const y = d3.scaleLinear()
            .domain([0, 1])
            .range([ height, 0]);


        svgGraphe.append("g")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y));


        //bars
        svgGraphe.selectAll("rect")
            .data(data_2017)
            .enter()
            .append("rect")
            .attr("x", function(d) { return x(d.name); })
            .attr("y", function(d) { return y(d.danceability); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d.danceability); })
            .attr("fill", "#69b3a2")



        
        /*data_2017.name.forEach(e => {
            console.log(e.name)
        }); /** */

        /*
        const musiques = data_2017.reduce((m, music) =>
        {
            const dance = m[music.danceability]
            return {}
        });*/
    })
    .catch(function(error){
        console.log(error);
    }) /**/