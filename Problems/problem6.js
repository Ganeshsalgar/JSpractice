// Q6. Find all restaurants serving "Desserts".

// Hint:

// // restaurant.info.cuisines
import data from "../Dataset/data.js";

function getListOfRestaurantWithDesserts(data){
    const result = [];
    const restaurantInfo = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    restaurantInfo.map((ele) => {
        ele.info.cuisines.map((idx) => {
            if(idx === "Desserts"){
                // console.log(ele.info.name);
                result.push(ele.info.name);
            }
        })
    })


    return result;
}


console.log(getListOfRestaurantWithDesserts(data));