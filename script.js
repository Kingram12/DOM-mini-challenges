"use strict";

let newDiv = document.createElement("div");

newDiv.setAttribute("class", "div-container");

let total = 0;

document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
    let price = parseFloat(button.getAttribute("data-price"));
    total += price;
    console.log (total.toFixed(2));
    let displayTotal = document.querySelector(".total");
    displayTotal.innerText= `Total: $${total.toFixed(2)}`
})});


let coinCalc = document.querySelector(".coin-calculator");

coinCalc.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(coinCalc);
    let amountOfCoins = formData.get("amountOfCoins");
    let typeOfCoin = formData.get("typeOfCoin");
    for (let i = 1; i <= amountOfCoins; i++){
    let addCoin = document.createElement("div")
    addCoin.innerText = `${typeOfCoin}`
    let coinCont = document.querySelector(".coin-container");
    coinCont.append(addCoin);
    addCoin.addEventListener("click", () => {
        addCoin.remove();
    })
    if (typeOfCoin === "Penny"){
        addCoin.classList.add("pennyStyle")
    } else if (typeOfCoin === "Nickel") {
        addCoin.classList.add("nickelStyle")
    } else if (typeOfCoin === "Dime"){
        addCoin.classList.add("dimeStyle")
    } else {
        addCoin.classList.add("quarterStyle") 
    };
}
coinCalc.reset();
});


let lightBulb = document.querySelector(".light");


const turnOnLight = () => {
    lightBulb.classList.add("lightOn");
};
const turnOffLight = () => {
    lightBulb.classList.remove("lightOn");
};
const toggleLight = () => {
    lightBulb.classList.toggle("lightOn");
};
const endLight = () => {
    lightBulb.classList.add("display");
    lightOn.disabled=true;
    lightOff.disabled=true;
    toggle.disabled=true;
    end.disabled=true;
};


let lightOn = document.querySelector(".onBtn")
lightOn.addEventListener("click", turnOnLight)

let lightOff = document.querySelector(".offBtn")
lightOff.addEventListener("click", turnOffLight)

let toggle = document.querySelector(".toggleBtn")
toggle.addEventListener("click", toggleLight)

let end = document.querySelector(".endBtn")
end.addEventListener("click", endLight)
