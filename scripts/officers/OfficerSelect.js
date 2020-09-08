import { useOfficers, getOfficers } from "./OfficerProvider.js";

//reference to container that holds all
const eventHub = document.querySelector(".container");

//on eventHub, listen for changes
eventHub.addEventListener("change", event => {
    //do this if crimeSelect element changes
    if (event.target.id === "officerSelect") {
        const customEvent = new CustomEvent("OfficerChosen", {
            detail: {
                officerThatWasChosen: event.target.value
            }
        });

        //add event to the hub
        eventHub.dispatchEvent(customEvent);
    }
});

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__officer");

export const OfficerSelect = () => {
    getOfficers().then(() => {
        // Get all convictions from application state
        const officerArray = useOfficers();
        render(officerArray);
    });
};

const render = theOfficersArray => {
        contentTarget.innerHTML = `
		<select class="dropdown" id="officerSelect">
			<option value="0">Please select an officer...</option>
			${theOfficersArray
        .map(officerObject => {
          return `<option value="${officerObject.name}">${officerObject.name}</option>`;
        })
        .join("")}
		</select>
    `;
};