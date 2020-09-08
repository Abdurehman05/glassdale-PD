/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions, getConvictions } from "./ConvictionProvider.js";

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".filters__crime");

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", changeEvent => {
    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id.startsWith("crimeSelect")) {
        // Create custom event. Provide an appropriate name.
        const crimeName = changeEvent.target.id;
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: crimeName
            }
        });

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent);
    }
});

const render = theConvictionsArray => {
        contentTarget.innerHTML = `

    <fieldset>
         <legend> Conviction List </legend> 
         <select class = "dropdown" id = "crimeSelect">
             <option value = "0"> Please select a crime... </option>
                ${theConvictionsArray
                  .map(convictionObject => {
                    return `<option value="${convictionObject.name}">${convictionObject.name}</option>`;
                  })
                  .join("")}
        </select >

    </fieldset>
`;
};

export const ConvictionSelect = () => {
  //     // Get all convictions from application state
  getConvictions().then(() => {
    const convictionsArray = useConvictions();
    render(convictionsArray);
  });
};