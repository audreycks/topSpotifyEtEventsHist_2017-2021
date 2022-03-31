/* utile pour générer du json, les evenements
   on les a entrees à la main*/

let output = [];
let imputMonth = [
    "Janvier", 
    "Février", 
    "Mars", 
    "Avril", 
    "Mai", 
    "Juin", 
    "Juillet", 
    "Août", 
    "Septembre", 
    "Octobre", 
    "Novembre", 
    "Décembre"]

let tmp;

for (let annee = 2017; annee < 2022; annee++)
{
    for(let mois = 1; mois < 13; mois++){
        tmp = 
          {
            "year" : annee,
            "month_number" : mois,
            "month" : imputMonth[(mois-1)],
            "event" : ""
          };

        output.push(tmp);
      }
}

console.log(output)