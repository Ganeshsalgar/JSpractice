// Q8. Find the restaurant with the highest rating.

// Expected Output:

// Theobroma -> 4.7

import data from "../Dataset/data.js";

function getHighestRatingRestaurant(data) {
  const result = {};

  const restaurantInfo =
    data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

  let restName;
  let restRating;
  const ans = restaurantInfo.reduce((res, curr) => {
    if (curr.info.avgRating > res.info.avgRating) {
      return curr;
    } else {
      return res;
    }
  }, restaurantInfo[0]);

  return {
    restName: ans.info.name,
    restRating: ans.info.avgRating,
  };
}

console.log(getHighestRatingRestaurant(data));
