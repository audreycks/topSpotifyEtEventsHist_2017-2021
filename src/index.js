import * as d3 from 'd3';
import { json } from 'd3-fetch'



const height = 200;
const width = 200;
const margin = { top: 50, bottom: 50, left: 50, right: 50 }

const svg = d3.select("#spotifyAndEvents")
            .append("svg")
            .attr("class", "graphe")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr('viewBox', [0, 0, width, height])
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top}`)


console.log(42);

d3.json('../data-2017.json')
    .then( function(data_2017)
    {

        //axe X
        const x = d3.scaleBand()
            .range([0, width])
            .domain(data_2017.map(m => m.name))
            .padding(0.2);

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");


        //axe Y
        const y = d3.scaleLinear()
            .domain([0, 13000])
            .range([ height, 0]);


        svg.append("g")
            .call(d3.axisLeft(y));


        //mettre les barres



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

         
        d3.select(".graphe")
          .data(data_2017)
          .enter()
          .append('rect')
          .attr('x', (d,i) => i*25)
          .attr('y', (d) => 100-d)
          .attr('width',20)
          .attr('height', (d) => d)

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