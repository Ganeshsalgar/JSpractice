// Q3. Best Restaurant Per Area


// Print the highest-rated restaurant from each area.

// Example Output
// Central Bangalore
// ---------------
// Chaayos Chai+Snacks=Relax -> 4.6

// Seshadripuram
// ---------------
// The Good Bowl -> 4.3

// Rajajinagar
// ---------------
// NIC Ice Creams -> 4.7

// High Grounds
// ---------------
// // Starbucks Coffee -> 4.4

import data from "../Dataset/data.js";

function getHighRatedRestaurantByArea(data){
    const restaurantList = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    // console.log(restaurantList[0].info.name);

    const topRatedRestaurant = {};

    restaurantList.map((res) => {
        // console.log(res.info.areaName, " -> " , res.info.name, "->" ,res.info.avgRating);
        const area = res.info.areaName;
        const name = res.info.name;
        const rating = res.info.avgRating;


        if(!topRatedRestaurant[area]){
            topRatedRestaurant[area] = {
                name : name,
                rating : rating,
            }
        }


        if(topRatedRestaurant[area].rating < rating){
            topRatedRestaurant[area].name = name;
            topRatedRestaurant[area].rating = rating;
        }


        
    })

    for(const [key , value] of Object.entries(topRatedRestaurant)){
        console.log(key);
        console.log("---------------")
        console.log(`${value.name} -> ${value.rating}\n`);
        
    }
    return topRatedRestaurant;
}




console.log(getHighRatedRestaurantByArea(data));