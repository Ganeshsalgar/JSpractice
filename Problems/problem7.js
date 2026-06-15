// Q7. Print restaurant names and their ratings.

// Expected Output:

// NH1 Bowls - Highway To North -> 4.5
// Theobroma -> 4.7

import data from "../Dataset/data.js";

function getRestaurantWithRating(data){
    const result = {};

    const restaurantInfo = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    restaurantInfo.map((ele) => {
        console.log(ele.info.name)
        result[`${ele.info.name} -> `] = ele.info.avgRating;
    })

    return result;
}


console.log(getRestaurantWithRating(data));

console.log(getRestaurantWithRating(data));