import * as d3 from 'd3';
import { json } from 'd3-fetch'


d3.json('../donneesSpotifyParMois/data-2017-01-31')
    .then( function(data)
    {
        console.log ("musique", data)
    })
    .catch(function(error){
        console.log(error);
    })