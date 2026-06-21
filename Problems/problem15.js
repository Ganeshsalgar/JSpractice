// Q5. Cuisine Popularity Score

// Popularity Formula:

// popularityScore =
// avgRating * totalRatings

// Print Top 5 Most Popular Cuisines.

// Example:

// Desserts -> 45230
// Beverages -> 38900
// North Indian -> 35400

// Challenge:

// totalRatingsString is stored as:

// "7.4K+"
// "901"
// "14K+"

// You'll need to convert:

// "7.4K+" -> 7400
// "14K+" -> 14000
// "901" -> 901

// Concepts:

// String Parsing
// Aggregation
// Group By
// Sorting
// Real-world Analytics

// Difficulty: ⭐⭐⭐⭐⭐

import data from "../Dataset/data.js";

function getPopularCuisines(data) {
  const restaurntList =
    data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

  // console.log(restaurntList);
    const cuisinesPopularity = {};
  restaurntList.map((rest) => {
    const rating = rest.info.avgRating;
    const totalRating = rest.info.totalRatingsString;
    const cuisine = rest.info.cuisines;
    let peoplesRate;
    if (totalRating.includes("K")) {
      peoplesRate = parseFloat(totalRating) * 1000;
    } else {
      peoplesRate = Number(totalRating);
    }

    const finalRating = rating * peoplesRate;
    // console.log(ans);

    // console.log(cuisine)

    cuisine.map((dish) => {
        
        if(!cuisinesPopularity[dish]){
            cuisinesPopularity[dish] = {
                popularTotal : 0
            }
        }

        cuisinesPopularity[dish].popularTotal += finalRating;
    })

    // console.log(`${rest.info.name} ${Number(finalRating.toFixed())}`);
  });
  const cuisineArr = Object.entries(cuisinesPopularity).sort((a , b) => {
        const valA = a[1].popularTotal;
        const valB = b[1].popularTotal;
        return valB - valA
  });



  return cuisineArr
}
const result = getPopularCuisines(data);

for(let i = 0; i < 5; i++){
    console.log(`${result[i][0]} -> ${result[i][1].popularTotal}`)
}
console.log(getPopularCuisines(data));
