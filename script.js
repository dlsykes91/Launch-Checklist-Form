// Write your JavaScript code here!

//Load Page function
let toLoadPage = function() {
  let form = document.querySelector("form");
  form.addEventListener("submit",toCheckInput);
  form.addEventListener("submit",toUpdateStrings);
  form.addEventListener("submit",toCheckFuel);
  form.addEventListener("submit",toCheckCargo);
  form.addEventListener("submit",toLaunch);
  
};

// Check input
let toCheckInput = function(){         
  let pilot = String(document.querySelector("input[name=pilotName]").value);
  let copilot = String(document.querySelector("input[name=copilotName]").value);
  let fuel = Number(document.querySelector("input[name=fuelLevel]").value);
  let cargo = Number(document.querySelector("input[name=cargoMass]").value);
// Check that all form boxes have value
  if (pilot === "" || copilot === "") {
  alert("All fields are required!");
  event.preventDefault();
 } 
 else if (fuel === "" || cargo === "") {
  alert("All fields are required!");
  event.preventDefault();
 }
};
// Function to add pilot and copilot Status
let toUpdateStrings = function(){
// Get pilot names
 let pilot = String(document.querySelector("input[name=pilotName]").value);
 let copilot = String(document.querySelector("input[name=copilotName]").value);
// Get faulty items checklist
 let checklist = document.getElementById("faultyItems");
// Get Pilot and copilot name on checklist
 let pilotStatus = document.getElementById("pilotStatus");
 let copilotStatus = document.getElementById('copilotStatus');
// Assign new string to checklist
 pilotStatus.innerHTML =`Pilot ${pilot} is ready for launch.`;
 copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`;
// Change style property from hidden to visible
checklist.style.visibility = "visible";
}

//Check the value of fuel
let toCheckFuel = function(){
 let fuel = Number(document.querySelector("input[name=fuelLevel]").value);
 let fuelStatus = document.getElementById("fuelStatus");
 let checklist = document.getElementById
 ("faultyItems");
 let launchStatus = document.getElementById
 ("launchStatus");
// Check if fuel is less than 10000
if (fuel < 10000){
checklist.style.visibility = "visible";
fuelStatus.innerHTML = "not enough fuel for the journey";
launchStatus.innerHTML = 'Shuttle not ready for launch';
launchStatus.style.color = "red";
}
};

let toCheckCargo = function(){
 let cargo = Number(document.querySelector("input[name=cargoMass]").value);
 let fuelStatus = document.getElementById("cargoStatus");
 let checklist = document.getElementById
 ("faultyItems");
 let launchStatus = document.getElementById
 ("launchStatus");
// Check if cargo is greater than 10000
if (cargo > 10000){
checklist.style.visibility = "visible";
cargoStatus.innerHTML = "The cargo mass is too heavy for the shuttle to take off";
// Update Checklist
launchStatus.innerHTML = 'Shuttle not ready for launch';
launchStatus.style.color = "red";
}
};

// Check to Launch
let toLaunch = function(){
 let launchStatus = document.getElementById
 ("launchStatus");
 let cargo = Number(document.querySelector("input[name=cargoMass]").value);
 let fuel = Number(document.querySelector("input[name=fuelLevel]").value);
 
 if (fuel > 10000 && cargo < 10000){
launchStatus.innerHTML = 'Shuttle ready for Launch';
launchStatus.style.color = "green"; 
 }
};
// This block of code shows how to format the HTML once you fetch some planetary JSON!
let toMissionTarget = function(){ fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
                response.json().then( function(json) {
                  json = json[0];
                   const div = document.getElementById("missionTarget");
                   // Add HTML that includes the JSON data
                   div.innerHTML = `<h2>Mission Destination</h2>
  <ol>
     <li>Name: ${json.name}</li>
     <li>Diameter: ${json.diameter}</li>
     <li>Star: ${json.star}</li>
     <li>Distance from Earth: ${json.distance}</li>
     <li>Number of Moons: ${json.moons}</li>
  </ol> <img src=${json.image}>`
  ;
  
 }); 
 }); 
}; 

// Webpage load listener
window.addEventListener("load",toMissionTarget);
window.addEventListener("load", toLoadPage);
