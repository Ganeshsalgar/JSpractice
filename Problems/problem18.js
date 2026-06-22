// Q8. Restaurant Search Engine ⭐⭐⭐⭐⭐


// Input:

// desserts

// Search keyword in:

// Restaurant Name
// Cuisine Names
// Area Name

// Case-insensitive.

// Output:

// Theobroma
// Mad Over Donuts
// Baskin Robbins - Ice Cream Desserts
// Starbucks Coffee
// This introduces:

// String Search
// Case Insensitive Matching
// Multi-field Search
// Search Engine Logic

import data from "../Dataset/data.js";

const keyword = "Desserts";

function restaurantSearchEngine(data){
    const restaurantList = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
    const target = keyword.toLowerCase();
    
    const listOfKeyWordFound = [];

    restaurantList.forEach((rest) => {
        const name = (rest.info.name).toLowerCase();
        const area = (rest.info.areaName).toLowerCase();
        const cuisine = rest.info.cuisines;
        const originalName = rest.info.name;
        const foundCuisines = cuisine.some((dish) =>  dish.toLowerCase().includes(target)) 

        if(name.includes(target) || area.includes(target) || foundCuisines){
            listOfKeyWordFound.push(originalName);
        }
    });
    return listOfKeyWordFound;
}
restaurantSearchEngine(data).forEach((name) => console.log(name));
console.log(restaurantSearchEngine(data));