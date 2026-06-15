// Q4. Print all restaurants located in "Central Bangalore".

// Hint:

// restaurant.info.areaName;

import data from "../Dataset/data.js";


function getListOfRestaurant(data){
    const restaurantInfo = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    const result = [];

    
    restaurantInfo.map((ele) => {
        if(ele.info.areaName === "Central Bangalore"){
            result.push(ele.info.name);
        }
    })
    
    return result
}

console.log(getListOfRestaurant(data));