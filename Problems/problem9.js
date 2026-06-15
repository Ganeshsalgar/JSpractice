// Q9. Find all restaurants whose delivery time is less than 30 minutes.

// Hint:

// restaurant.info.sla.deliveryTime

import data from "../Dataset/data.js";

function getListOfRestaurant30MinsLessTimeToDelivery(data){
    const result = [];

    const restaurantInfo = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    restaurantInfo.map((ele) =>{
        if(ele.info.sla.deliveryTime <= 30){
            result.push(ele.info.name);
        }
    })

    return result;
}

console.log(getListOfRestaurant30MinsLessTimeToDelivery(data));