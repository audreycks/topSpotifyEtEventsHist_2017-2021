import * as d3 from 'd3';
import { json } from 'd3-fetch'

console.log(42)
d3.json('../data-2017-01-31.json')
    .then( function(data)
    {
        console.log ("musique", data)
    })
    .catch(function(error){
        console.log(error);
    })