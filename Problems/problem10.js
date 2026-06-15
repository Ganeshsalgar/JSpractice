// Q10. Count how many restaurants serve "North Indian" cuisine.

// Hint:

// restaurant.info.cuisines.includes("North Indian")

import data from "../Dataset/data.js";

function getListOfRestaurantHavingNorthIndiaCuisians(data){
    const restaurantInfo = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
    let count = 0;
    restaurantInfo.map((res) => {
        const cuisians = res.info.cuisines;
        // console.log(cuisians)
        cuisians.map((ele) =>{
            if(ele.includes("North Indian")){
                count++;
            }
        })
    })

    return count;
}

console.log(getListOfRestaurantHavingNorthIndiaCuisians(data));