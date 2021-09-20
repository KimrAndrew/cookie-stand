let generateSale = function(minCust,maxCust,avgSale) {
    //generate customers for the hour
    //generate random number of customers between the minimum and maximum limits
    let customers = Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
    //generate cookie sales from customer attendance and average number of cookies sold
    let sales = Math.floor(customers * avgSale);
    return sales;
}

let generateTimeStamps = function(Location) {
    let timeStamps = [];
    let time = 0;
        //start at opening time and run for numbber of hours open
        for(let i = Location.openingTime; i < Location.hoursOfOperation + Location.openingTime; i++) {
            if (i < 12) {
                time = i + "am";
            } else if (i === 12) {
                time = i + "pm";
            } else {
                time = i - 12 + "pm";
            }
            timeStamps.push(time);
        }
    return timeStamps;
}
/*
let postSalesToPage = function(element, location) {
    let currentLi;
    for(let i = 0; i <= location["salesByHour"].length; i++) {
        element.createElement("<li></li>");
        currentLi = element.lastChild;
        currentLi.innerHTML = location.salesByHour[i];
    }
}
*/

let Seattle = {
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,
    openingTime: 6,
    hoursOfOperation: 14,
    generateSales: function() {
        let sales = [];
        for(let i = 0; i < this["hoursOfOperation"]; i++) {
        sales.push(generateSale(this["minCust"],this["maxCust"],this["avgSale"]));
        }
        return sales;
    }
}

let Tokyo = {
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,
    openingTime: 6,
    hoursOfOperation: 14,
    generateSales: function() {
        let sales = [];
        for(let i = 0; i < this["hoursOfOperation"]; i++) {
        sales.push(generateSale(this["minCust"],this["maxCust"],this["avgSale"]));
        }
        return sales;
    }
}

let Dubai = {
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
    openingTime: 6,
    hoursOfOperation: 14,
    generateSales: function() {
        let sales = [];
        for(let i = 0; i < this["hoursOfOperation"]; i++) {
        sales.push(generateSale(this["minCust"],this["maxCust"],this["avgSale"]));
        }
        return sales;
    }
}

let Paris = {
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,
    openingTime: 6,
    hoursOfOperation: 14,
    generateSales: function() {
        let sales = [];
        for(let i = 0; i < this["hoursOfOperation"]; i++) {
        sales.push(generateSale(this["minCust"],this["maxCust"],this["avgSale"]));
        }
        return sales;
    }
}

let Lima = {
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,
    openingTime: 6,
    hoursOfOperation: 14,
    generateSales: function() {
        let sales = [];
        for(let i = 0; i < this["hoursOfOperation"]; i++) {
        sales.push(generateSale(this["minCust"],this["maxCust"],this["avgSale"]));
        }
        return sales;
    }
}

console.log("Seattle: " + Seattle.generateSales());
console.log("Tokyo: " + Tokyo.generateSales());
console.log("Dubai: " + Dubai.generateSales());
console.log("Paris: " + Paris.generateSales());
console.log("Lima: " + Lima.generateSales());
console.log(generateTimeStamps(Seattle));