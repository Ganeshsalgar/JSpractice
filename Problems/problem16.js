// Q6. Area Analytics Dashboard

// Given the restaurant dataset, generate an analytics report for every area.

// For each area, print:
// Total number of restaurants
// Average restaurant rating
// Average cost for two
// Highest-rated restaurant name
// Lowest-cost restaurant name
// Expected Output Format
// Central Bangalore
// ------------------
// Restaurant Count : 3
// Average Rating   : 4.50
// Average Cost     : 283.33
// Highest Rated    : Baskin Robbins - Ice Cream Desserts
// Lowest Cost      : Baskin Robbins - Ice Cream Desserts

// Rajajinagar
// ------------------
// Restaurant Count : 1
// Average Rating   : 4.70
// Average Cost     : 120
// Highest Rated    : NIC Ice Creams
// Lowest Cost      : NIC Ice Creams

import data from "../Dataset/data.js";

function getAreaAnalyticsDashboard(data){
    const restaurantList = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    // console.log(restaurantList);
    const Arealist = {};

    restaurantList.map((rest) => {
        const name = rest.info.name;
        const rating = rest.info.avgRating;
        const area = rest.info.areaName;
        const cost = Number((rest.info.costForTwo).split(" ")[0].replace('₹' , ""));
        

        if(!Arealist[area]){
            Arealist[area] = {
                restaurantCount : 0,
                totalRating : 0,
                totalCost : 0,
                maxRatingAtArea : 0,
                maxRatingRest : "",
                lowestCostPrice : Number.MAX_VALUE,
                lowestCost : ""
            }

        }

        Arealist[area].restaurantCount++;
        Arealist[area].totalRating += rating;
        Arealist[area].totalCost += cost;
    

        


        if(rating > Arealist[area].maxRatingAtArea){
            Arealist[area].maxRatingAtArea = rating;
            Arealist[area].maxRatingRest = name;
        }
        if(Arealist[area].lowestCostPrice > cost){
            Arealist[area].lowestCostPrice = cost;
            Arealist[area].lowestCost = name;
        }
        
        
    })

    // console.log(Arealist);


    for(const [key , value] of Object.entries(Arealist)){
        console.log(key)
        console.log("--------------------------")
        console.log(`Restaurant Count : ${value.restaurantCount}`)
        console.log(`Average Rating : ${value.totalRating / value.restaurantCount}`)
        console.log(`Average Cost : ${value.totalCost / value.restaurantCount} `)
        console.log(`Highest Rated : ${value.maxRatingRest}`);
        console.log(`Lowest Cost : ${value.lowestCost}\n\n`);
        
        
    }
}


console.log(getAreaAnalyticsDashboard(data));
