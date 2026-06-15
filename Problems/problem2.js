// Q2. Print all restaurants with rating greater than 4.5.

// Expected Output:

// Baskin Robbins - Ice Cream Desserts
// Chaayos Chai+Snacks=Relax
// Theobroma
// ...

import data from "../Dataset/data.js";

function getRestaurantRating(data){
    const restaurantInfo = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    const listRestaurantWithGreaterRating = [];

    for(let i = 0; i < restaurantInfo.length; i++){
       if(restaurantInfo[i].info.avgRatingString > '4.5') listRestaurantWithGreaterRating.push(restaurantInfo[i].info.name);
    }
    return listRestaurantWithGreaterRating;
}

console.log(getRestaurantRating(data));