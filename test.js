'use strict'
function getRandom(max, min) {
    return Math.ceil(Math.random() * (max - min) + min);
    
}

const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    location: 'Seattle',
    hoursOfOperation: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
    customersPerHour: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++){
            console.log(this.max);
        console.log(this.min);
        return getRandom(this.max, this.min);
        }
        
        
        //console.log(this.max);
        //console.log(this.min);
        //return getRandom(this.max, this.min);
    },
    cookiesPerHour: [],
    getCookies: function() {
        for(let i = 0; i < this.hoursOfOperation.length; i++) {
            console.log('seattle avg cookies/sale', this.avg);
            console.log('seattle avg customers/hour', this.customersPerHour());
            this.cookiesPerHour.push(Math.ceil(this.avg * this.customersPerHour()));
        }
        return this.cookiesPerHour;
    },
    
}

    let hoursDemo = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    let cookieDemo = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
    let hoursArray = document.querySelector('.output')
    for(let i = 0; i < hoursDemo.length; i++) {
        //hoursDemo[i].innerHTML
        let variable = document.createElement("li");
        variable.innerHTML = `${hoursDemo[i]}: ${cookieDemo[i]} cookies`;
        hoursArray.append(variable);
    }
    
    const Tokyo = {
        min: 3,
        max: 24,
        avg: 1.2,
        location: 'Tokyo',
        hoursOfOperation2: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour2: function() {
            console.log(this.max);
            console.log(this.min);
            return getRandom(this.max, this.min);
        },
        cookiesPerHour2: [],
        getCookies2: function() {
            for(let i = 0; i < this.hoursOfOperation.length; i++) {
                console.log('Tokyo avg cookies/sale', this.avg);
                console.log('Tokyo avg customers/hour', this.customersPerHour2());
                this.cookiesPerHour2.push(Math.ceil(this.avg * this.customersPerHour2()));
            }
            return this.cookiesPerHour2;
        },
        
    }
    let hoursDemo2 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    let cookieDemo2 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
    let hoursArray2 = document.querySelector('.output2')
    for(let i = 0; i < hoursDemo2.length; i++) {
        //hoursDemo[i].innerHTML
        let variable = document.createElement("li");
        variable.innerHTML = `${hoursDemo2[i]}: ${cookieDemo2[i]} cookies`;
        hoursArray2.append(variable);
    }

    const Dubai = {
        min: 11,
        max: 38,
        avg: 3.7,
        location: 'Tokyo',
        hoursOfOperation2: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour2: function() {
            console.log(this.max);
            console.log(this.min);
            return getRandom(this.max, this.min);
        },
        cookiesPerHour2: [],
        getCookies2: function() {
            for(let i = 0; i < this.hoursOfOperation.length; i++) {
                console.log('Tokyo avg cookies/sale', this.avg);
                console.log('Tokyo avg customers/hour', this.customersPerHour2());
                this.cookiesPerHour2.push(Math.ceil(this.avg * this.customersPerHour2()));
            }
            return this.cookiesPerHour2;
        },
        
    }
    let hoursDemo3 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    let cookieDemo3 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
    let hoursArray3 = document.querySelector('.output3')
    for(let i = 0; i < hoursDemo2.length; i++) {
        //hoursDemo[i].innerHTML
        let variable = document.createElement("li");
        variable.innerHTML = `${hoursDemo3[i]}: ${cookieDemo3[i]} cookies`;
        hoursArray3.append(variable);
    }

    const Pairs = {
        min: 20,
        max: 38,
        avg: 2.3,
        location: 'Tokyo',
        hoursOfOperation2: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour2: function() {
            console.log(this.max);
            console.log(this.min);
            return getRandom(this.max, this.min);
        },
        cookiesPerHour2: [],
        getCookies2: function() {
            for(let i = 0; i < this.hoursOfOperation.length; i++) {
                console.log('Tokyo avg cookies/sale', this.avg);
                console.log('Tokyo avg customers/hour', this.customersPerHour2());
                this.cookiesPerHour2.push(Math.ceil(this.avg * this.customersPerHour2()));
            }
            return this.cookiesPerHour2;
        },
        
    }
    let hoursDemo4 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    let cookieDemo4 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
    let hoursArray4 = document.querySelector('.output4')
    for(let i = 0; i < hoursDemo2.length; i++) {
        //hoursDemo[i].innerHTML
        let variable = document.createElement("li");
        variable.innerHTML = `${hoursDemo4[i]}: ${cookieDemo4[i]} cookies`;
        hoursArray4.append(variable);
    }

    const Lima = {
        min: 2,
        max: 16,
        avg: 4.6,
        location: 'Tokyo',
        hoursOfOperation2: ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"],
        customersPerHour2: function() {
            console.log(this.max);
            console.log(this.min);
            return getRandom(this.max, this.min);
        },
        cookiesPerHour2: [],
        getCookies2: function() {
            for(let i = 0; i < this.hoursOfOperation.length; i++) {
                console.log('Tokyo avg cookies/sale', this.avg);
                console.log('Tokyo avg customers/hour', this.customersPerHour2());
                this.cookiesPerHour2.push(Math.ceil(this.avg * this.customersPerHour2()));
            }
            return this.cookiesPerHour2;
        },
        
    }
    let hoursDemo5 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
    let cookieDemo5 = [152,265,202,353,227,221,202,378,171,309,215,189,189,385];
    let hoursArray5 = document.querySelector('.output5')
    for(let i = 0; i < hoursDemo2.length; i++) {
        //hoursDemo[i].innerHTML
        let variable = document.createElement("li");
        variable.innerHTML = `${hoursDemo5[i]}: ${cookieDemo5[i]} cookies`;
        hoursArray5.append(variable);
    }