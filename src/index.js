import * as d3 from 'd3';
import { json } from 'd3-fetch'


// set the dimensions and margins of the graph
const height = window.innerHeight*0.8;
const width = window.innerWidth*0.6;
const margin = { top: 50, bottom: 50, left: 50, right: 50 }

// append the svg object to the body of the page
const svg = d3.select("#spotifyAndEvents")
            .append("svg")
            .attr("class", "graphe")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
           // .attr('viewBox', [0, 0, width, height])
            .attr("transform", `translate(${margin.left},${margin.top}`)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top}`)


console.log(42);

d3.json('../data-2017.json')
    .then( function(data_2017)
    {

        // Parse the Data

        //axe X
        const x = d3.scaleBand()
        .domain(data_2017.map(m => m.name))
            .range([0, width])
            .padding(0.2);

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))
          


        //axe Y
        const y = d3.scaleLinear()
            .domain([0, 1])
            .range([ height, 0]);


        svg.append("g")
            .attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y));


        //bars
        svg.selectAll("rect")
            .data(data_2017)
            .enter()
            .append("rect")
            .attr("x", function(d) { return x(d.name); })
            .attr("y", function(d) { return y(d.danceability); })
            .attr("width", x.bandwidth())
            .attr("height", function(d) { return height - y(d.danceability); })
            .attr("fill", "#69b3a2")


        /*
        data_2017.forEach(el => {
            console.log(el.genres)
        });*/

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


/*
Promise.all ([
    json("../data_2017.json")
    //json("../data_2018.json")
])
    .then(([data_2017, data_2018]) => {
        console.log ("musique", data_2017);
    })
    .catch(function(error){
        console.log(error);
    })/**/ 