// Q5. Count total number of restaurants.

// Expected Output:

// 15

// (or whatever count your dataset contains)

import data from "../Dataset/data.js";

function getTotalNumberOfRestaurant(data){
    const restaurantInfo = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(restaurantInfo)
    return restaurantInfo.length;
}



console.log(getTotalNumberOfRestaurant(data));