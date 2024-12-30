/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const buttonEl = document.getElementById("button-el")

const lengthEl = document.getElementById("Length-results")
const volumeEl = document.getElementById("Volume-results")
const massEl = document.getElementById("Mass-results")


buttonEl.addEventListener("click", function() {
    const value = parseFloat(document.getElementById("input-el").value);
    
    if (isNaN(value)) {
        lengthEl.textContent = "Please enter a valid number.";
        volumeEl.textContent = "";
        massEl.textContent = "";
        return;
    }
    
    const meterstofeet = (value * 3.281).toFixed(3)
    const feettometers = (value / 3.281).toFixed(3)

    const litertogallon = (value * 0.264).toFixed(3)
    const gallontoliter = (value / 0.264).toFixed(3)

    const kilotopound = (value * 2.204).toFixed(3)
    const poundtokilo = (value / 2.204).toFixed(3)
    
    
   lengthEl.textContent = `${value} meters = ${meterstofeet} feet | ${value} feet: = ${feettometers} meters`
   
   volumeEl.textContent = `${value} liters = ${litertogallon} gallons | ${value} gallons: = ${gallontoliter} liters`
   
   massEl.textContent = `${value} kilos = ${kilotopound} pounds | ${value} pounds: = ${poundtokilo} kilos`
   
})
