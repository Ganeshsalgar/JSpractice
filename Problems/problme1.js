// Q1. Print all restaurant names.

// Expected Output:

// NH1 Bowls - Highway To North
// Baskin Robbins - Ice Cream Desserts
// The Good Bowl
// ...


import data from "../Dataset/data.js";

function getListofAllRestaurant(data){
    const namesRestaurant = [];
    const restaurantInfo = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(restaurantInfo[0].info.name);
    for(let i = 0; i < restaurantInfo.length; i++){
        
        namesRestaurant.push(restaurantInfo[i].info.name);

    }
    return namesRestaurant;
    
}   

console.log(getListofAllRestaurant(data));