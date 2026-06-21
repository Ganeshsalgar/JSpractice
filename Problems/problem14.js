// Q4. Cost Efficiency Ranking

// Find the Top 5 restaurants that provide the best value for money.

// Formula:

// valueScore = avgRating / costForTwo

// Example:

// NIC Ice Creams -> 0.039
// BOX8 -> 0.022

// Challenge:

// costForTwo is stored as:

// "₹250 for two"

// You'll need to extract the numeric value first.

import data from "../Dataset/data.js";

function getValueForMoneyRestautant(data) {
  const restaurantList =
    data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

  // console.log(restaurantList);
  const valueForMoney = {};

  restaurantList.map((rest) => {
    const rating = rest.info.avgRating;
    const name = rest.info.name;
    const cost = rest.info.costForTwo;
    const price = Number(cost.split(" ")[0].substring(1));
    const value = rating / price;
    // console.log(name);

    if (!valueForMoney[name]) {
      valueForMoney[name] = {
        valueFor: 0,
      };
    }

    valueForMoney[name].valueFor += value;
  });
  const restArr = Object.entries(valueForMoney);
  // console.log(restArr);

  restArr.sort((a, b) => {
      const valA = a[1].valueFor;
      const valB = b[1].valueFor;
      return valB - valA;
  })
  
  for(let i = 0; i < 5; i++){
    console.log(
      `${restArr[i][0]} -> ${restArr[i][1].valueFor.toFixed(4)}`
    );
}
    console.log(restArr)
  return restArr;
}

getValueForMoneyRestautant(data)
