let Locations = [];
let hourlyTotals = [];

//Generates a random number of customers within a range based upon the objects data
generateSale = function(location) {
    //generate customers for the hour
    //generate random number of customers between the minimum and maximum limits
    let customers = Math.floor(Math.random() * (location.maxCust - location.minCust + 1)) + location.minCust;
    //console.log(customers + " customers");
    //console.log(location.maxCust);
    //generate cookie sales from customer attendance and average number of cookies sold
    let sale = Math.floor(customers * location.avgSale);
    //console.log(typeof(location.minCust));
    //console.log(location.minCust + "min cust");
    //console.log(location.maxCust + "max cust");
    //console.log(sale);
    return sale;
},


//Constructor function for Shop objects
Shop = function(name,minCust,maxCust,avgSale) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSale = avgSale;
    this.salesByHour = [];
    this.generateSales = function() {
        //console.log('generating sales');
        for(let i = 0; i < Shop.prototype.hours.length; i++) {

        let sale = generateSale(this);
        //console.log(sale);
        this.salesByHour.push(sale);
        }
    }
    Locations.push(this);
};

Shop.prototype.numLocations = Locations.length;

Shop.prototype.hours = ["6 am","7 am","8 am",'9 am', '10 am', '11 am',
'12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];


//Renders the table header on the webpage
renderTableHead = function() {
    let table = document.getElementById('Sales');
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    tr.appendChild(document.createElement('th'));
    for (let i = 0; i < Shop.prototype.hours.length; i++) {
        let th = document.createElement('th');
        th.innerHTML = Shop.prototype.hours[i];
        tr.appendChild(th);
    }
    let th = document.createElement('th');
    th.innerHTML = "Daily Location Total";
    tr.appendChild(th);
    thead.appendChild(tr)
    table.appendChild(thead);
}

//Render the table body on the webpage
Shop.prototype.render = function() {
    let table = document.getElementById('Sales');
    //let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.innerHTML = this.name;
    tr.appendChild(th);
    for(let i = 0; i < Shop.prototype.hours.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = this.salesByHour[i];
        tr.appendChild(td);
    }

    let total = 0;
    for(let i = 0; i < this.salesByHour.length; i++) {
        total += this.salesByHour[i];
    }
    let td = document.createElement('td');
    td.innerHTML = total;
    tr.appendChild(td);
    table.appendChild(tr);
}



let Seattle = new Shop('Seattle',23,65,6.3);
Seattle.generateSales();
//Locations.push(Seattle);


let Tokyo = new Shop('Tokyo',3,24,1.2);
Tokyo.generateSales();
//Locations.push(Tokyo);

let Dubai = new Shop('Dubai',11,38,3.7);
Dubai.generateSales();
//Locations.push(Dubai);

let Paris = new Shop('Paris',20,38,3.2);
Paris.generateSales();
Locations.push(Paris);

let Lima = new Shop('Lima',2,16,4.7);
Lima.generateSales();
//Locations.push(Lima);

//Calculates the total cookies sold between locations for each hour of operation
let calcHourlyTotal = function(locationArr) {
    for(let i = 0; i < Shop.prototype.hours.length;i++) {
        let total = 0;
        for(let j = 0; j < locationArr.length; j++) {
            total += locationArr[j].salesByHour[i];
        }
        hourlyTotals.push(total);
    }
}

//Calculates the grand total for sales made between all stores
let calcGrandTotal = function() {
    total = 0;
    for(let i = 0; i < hourlyTotals.length; i++) {
        total += hourlyTotals[i];
    }
    //console.log("grand total" + total);
    return total;
}

let renderTableFooter = function() {
    let table = document.getElementById('Sales');
    let tfoot = document.createElement('tfoot');
    let tr = document.createElement('tr');  
    let th = document.createElement('th')
    th.innerHTML = "Total";
    tr.appendChild(th);
    for(let i = 0; i < hourlyTotals.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = hourlyTotals[i];
        tr.appendChild(td);
    }
    let td = document.createElement('td');
    td.innerHTML = calcGrandTotal();
    tr.appendChild(td);
    tfoot.appendChild(tr);
    table.appendChild(tfoot);

}

calcHourlyTotal(Locations);
//console.log(hourlyTotals);

let createNewLocation = function(formSubmission) {
    formSubmission.preventDefault();
    let locationName = formSubmission.target.locationName.value;

    //WHY DO THESE RETURN STRINGS WHEN TYPE IS SET TO NUMBER?????
    let minCust = parseInt(formSubmission.target.minCust.value);
    let maxCust = parseInt(formSubmission.target.maxCust.value);
    let avgSale = parseFloat(formSubmission.target.avgSale.value);
    let newShop = new Shop(locationName,minCust,maxCust,avgSale);
    newShop.generateSales();
    console.log(newShop);
    newShop.render();
}

let locationForm = document.getElementById('location-form');
locationForm.addEventListener('submit', createNewLocation);
renderTableHead();

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();

renderTableFooter();
console.log("done");
console.log(Locations);