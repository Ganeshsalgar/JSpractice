// Q9. Advanced Search + Filters ⭐⭐⭐⭐⭐

// Build a search system similar to Swiggy/Zomato filters.

// Input
// const filters = {
//     keyword: "desserts",
//     minRating: 4.5,
//     maxCost: 300
// };
// Search In
// Restaurant Name
// Cuisine Names
// Area Name

// Case-insensitive.

// Conditions

// A restaurant should be included only if:

// Keyword matches
// AND
// Rating >= minRating
// AND
// Cost <= maxCost
// Example

// Restaurant:

// {
//     name: "NIC Ice Creams",
//     rating: 4.7,
//     cost: 120,
//     cuisines: ["Desserts", "Ice Cream"]
// }

// Checks:

// Keyword "desserts" → ✅
// Rating >= 4.5 → ✅
// Cost <= 300 → ✅

// Include it.

// Expected Output
// NIC Ice Creams
// Baskin Robbins - Ice Cream Desserts
// Theobroma

const filters = {
  target: "desserts",
  minRating: 4.5,
  maxCost: 300,
};

import data from "../Dataset/data.js";

function advancedSearchFilter(data) {
  const restaurantList =
    data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
  // console.log(restaurantList[0]);

    const keyword = filters.target.toLowerCase();
    const listOfRest = [];
  restaurantList.forEach((rest) => {
    const name = rest.info.name.toLowerCase();
    const originalName = rest.info.name;
    const rating = rest.info.avgRating;
    const cost = parseInt(rest.info.costForTwo.slice(1));
    const area = rest.info.areaName.toLowerCase();
    const cuisine = rest.info.cuisines;

    const foundInCuisines = cuisine.some((dish) => dish.toLowerCase().includes(keyword));

    if((name.includes(keyword) || area.includes(keyword) || foundInCuisines)&& rating >= filters.minRating && cost <= filters.maxCost){
        listOfRest.push(originalName);
    }
  });
  return listOfRest;
}


for(const val of advancedSearchFilter(data)){
    console.log(val)
}
console.log(advancedSearchFilter(data));
