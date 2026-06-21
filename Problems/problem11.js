// Q1. Top Rated Cuisine

// Print the average rating of each cuisine and sort by highest average rating.

// Output Example
// Desserts -> 4.58
// Beverages -> 4.44
// North Indian -> 4.41

// Concepts:

// Nested loops
// Object aggregation
// Average calculation
// Sorting

// Difficulty: ⭐⭐⭐

import data from "../Dataset/data.js";

function findTopRatedCuisines(data) {
  const restaurantList =
    data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

//   console.log(restaurantList[0].info.cuisines);
//   console.log(restaurantList[0].info.avgRating);

  const groupCuisines = {};
  restaurantList.map((rest) => {
    const cuisine = rest.info.cuisines;
    const rating = rest.info.avgRating;

    cuisine.forEach((val) => {
      if (!groupCuisines[val]) {
        groupCuisines[val] = {
          total: 0,
          count: 0,
        };
      }

      groupCuisines[val].total += rating;
      groupCuisines[val].count++;
    });

  });
    const ans = Object.entries(groupCuisines).sort((a , b) =>{
        const aAvg = a[1].total / a[1].count;
        const bAvg = b[1].total / b[1].count;

        return bAvg - aAvg;
    });
    
    

    ans.forEach((res)=> {
        console.log(`${res[0]} -> ${res[1].total / res[1].count}`);
    })
}

console.log(findTopRatedCuisines(data));
