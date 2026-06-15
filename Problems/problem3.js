// Q3. Find all vegetarian restaurants.

// Hint:

// restaurant.info.veg
import data from "../Dataset/data.js";

function getListOfVegRestaurant(data){
    // console.log(data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
    const restaurantInfo = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
    const listOfAllVegRestaurant = [];


    for(const num of restaurantInfo){
        if(num.info.veg === true){
            listOfAllVegRestaurant.push(num.info.name);
        }
    }

    return listOfAllVegRestaurant;

}

console.log(getListOfVegRestaurant(data));