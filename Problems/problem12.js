// Q2. Most Common Cuisine Combination

// Find the most frequently occurring pair of cuisines.

// Output Example
// North Indian + Home Food -> 4 Restaurants

// Concepts:

// Frequency map
// Combination generation

// Difficulty: ⭐⭐⭐⭐

import data from "../Dataset/data.js";

function frequentlyOccuringPairOfCuisines(data) {
  const restaurantList =
    data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
  // console.log(restaurantList[0].info.name);

  const occuranceOfEach = {
    maxCuisine: "",
    maxCount: 0,
  };

  restaurantList.map((res) => {
    const cuisine = res.info.cuisines;
    // console.log(cuisine[0]);

    for (const val of cuisine) {
      // console.log(val);
    }
    for (let i = 0; i < cuisine.length; i++) {
      // console.log(cuisine[i]);
      let dish = cuisine[i];
      let count = 0;
      for (let j = i + 1; j < cuisine.length; j++) {
        const combo = [cuisine[i], cuisine[j]].sort().join(" + ");
        // console.log(combo)

        if (!occuranceOfEach[combo] ) {
          occuranceOfEach[combo] = 1;
        } else occuranceOfEach[combo]++;

        if (occuranceOfEach[combo] > occuranceOfEach.maxCount) {
          occuranceOfEach.maxCuisine = combo;
          occuranceOfEach.maxCount = occuranceOfEach[combo];
        }
      }
    }
  });

  return occuranceOfEach;
}

const result = frequentlyOccuringPairOfCuisines(data);

console.log(result);
console.log(`${result.maxCuisine} -> ${result.maxCount}`);
