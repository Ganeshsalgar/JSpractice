// Q7. Restaurant Recommendation Engine
// Problem Statement


// Given a restaurant name, recommend similar restaurants.

// A restaurant is considered similar if it shares at least 2 cuisines with the input restaurant.

// Input
// Theobroma

// Assume:

// Theobroma

// [
    //   "Desserts",
    //   "Bakery",
    //   "Beverages"
    // ]
    // Output
    // Baskin Robbins - Ice Cream Desserts
    // Starbucks Coffee
    // Mad Over Donuts
    
    import data from "../Dataset/data.js";

const restName = "Theobroma";
// console.log(restName);


function getRestaurantRecommendation(data){
    const restaurantList = data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

    const nameWithCuisines = {};

    const recommendations = {};
    let tarRest ;
    let tarCuisines;

    restaurantList.forEach((rest) => {
        if(rest.info.name === restName){
            tarRest = rest.info.name;
            tarCuisines = rest.info.cuisines;
        }
        else{
            nameWithCuisines[rest.info.name] = rest.info.cuisines;
        }
    })

    Object.entries(nameWithCuisines).map((rest) => {
        const name = rest[0];
        const cuisine = rest[1];
        
        let count = 0;
        
        for(let value of tarCuisines){
            if(rest[1].includes(value)){
                count++;
            }
        }

    
        if(!recommendations[name] && count >= 2){
            recommendations[name] = count;
        }
            
    })

    return Object.entries(recommendations).sort((a ,b) => {
        return b[1] - a[1]; 
    })
}

const result = getRestaurantRecommendation(data);

for(const value of result){
    console.log(`${value[0]} -> ${value[1]}`)
}
