// Q10. Cuisine Market Share Analysis ⭐⭐⭐⭐⭐
// Problem Statement

import data from "../Dataset/data.js";

// Calculate the market share of each cuisine in the dataset.

// A restaurant contributes 1 count to every cuisine it serves.

// Example

// Restaurant A:

// ["Desserts", "Bakery"]

// Restaurant B:

// ["Desserts"]

// Restaurant C:

// ["Bakery"]

// Cuisine Counts:

// Desserts -> 2
// Bakery -> 2

// Total Cuisine Associations:

// 4

// Market Share:

// Desserts -> 50%
// Bakery -> 50%
// Formula
// marketShare =
// (cuisineCount / totalCuisineAssociations) * 100
// Expected Output
// Desserts -> 18.42%
// Beverages -> 14.73%
// North Indian -> 10.52%
// Bakery -> 8.94%
// Snacks -> 7.36%

// (Numbers will depend on your dataset.)

// Dataset Fields Needed
// rest.info.cuisines
// Concepts Tested
// Frequency Map
// Aggregation
// Percentage Calculation
// Sorting
// Analytics Reporting


function persentageOfShearOfCuisine(data){
    const restaurantList = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    let totalAssociations = 0;
    const Eachcuisines = {};

    restaurantList.map((rest)=>{
        const cuisine = rest.info.cuisines;

        cuisine.map((dish) => {
            if(!Eachcuisines[dish]){
                Eachcuisines[dish] ={
                    count : 0,
                    marketShear : 0
                }
            }
            Eachcuisines[dish].count++;
        })


        totalAssociations += cuisine.length;
    })

    const result = Object.entries(Eachcuisines);

    for(const value of result){
        value[1].marketShear = (((value[1].count / totalAssociations) * 100).toFixed(2));
    }
     
    const ans = result.sort((a , b) => {
        const valA = a[1].marketShear;
        const valB = b[1].marketShear;
        return valB - valA;
    });
    
    return ans;
    
}

console.log(persentageOfShearOfCuisine(data));
