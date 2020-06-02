// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
     form.addEventListener("submit", function(event) {         
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
 
 Check that all form boxes have value
       if (pilotNameInput.value === "" || copilotNameInput.value === "") {
       alert("All fields are required!");
       event.preventDefault();
      } 
      else if (fuelLevelInput.value === "" || cargoMassInput.value === "") {
       alert("All fields are required!");
       event.preventDefault();
       } 

       let checklist = document.getElementById("faultyItems");
       checklist.style.visibility = hidden;
       let pilotStatus = document.getElementById("pilotStatus");
       pilotStatus.innerHTML =`Pilot ${pilotNameInput} is ready for launch.`;
       let copilotStatus = document.getElementById('copilotStatus');
       copilotStatus.innerHTML = `Copilot ${copilotNameInput} is ready for la
 
      }); // close eventlistner submit

      // Add pilot and copilot Status
     
         unch`;
    
      
 
 }); // close loadlistner
    
 
 /* This block of code shows how to format the HTML once you fetch some planetary JSON!
 <h2>Mission Destination</h2>
 <ol>
    <li>Name: ${}</li>
    <li>Diameter: ${}</li>
    <li>Star: ${}</li>
    <li>Distance from Earth: ${}</li>
    <li>Number of Moons: ${}</li>
 </ol>
 <img src="${}">
 */
 