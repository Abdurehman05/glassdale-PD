/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import {
    useConvictions,
    getConvictions
} from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value,

            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})


// export const ConvictionSelect = () => {
//     // Get all convictions from application state
//     getConvictions().then(() => {
//         const convictions = useConvictions();
//         render(convictions)
//     })
// }

// const render = convictionsCollection => {
//         /*
//             Use interpolation here to invoke the map() method on
//             the convictionsCollection to generate the option elements.
//             Look back at the example provided above.
//         */
//         contentTarget.innerHTML = `
//             <fieldset>
//                 <legend>Conviction List </legend>
//                     <select class="dropdown" id="crimeSelect">
//                         <option value="0">Please select a crime...</option>
//                 ${
//                     convictionsCollection.map(convictionObject =>{
//                         const conviction = convictionObject.name
//                         return `<option>${conviction}</option>`
//                     })
//                 }
//                         </select>
//              </fieldset> 
//         `
// }

export const ConvictionSelect = () => {
    //     // Get all convictions from application state
    getConvictions()
        .then(() => {
            const convictionsArray = useConvictions();
            render(convictionsArray)
        })
}


const render = (theConvictionsArray) => {
        contentTarget.innerHTML = `

        <fieldset>
             <legend> Conviction List </legend> 
             <select class = "dropdown" id = "crimeSelect">
                 <option value = "0"> Please select a crime... </option>
                    ${
                         theConvictionsArray.map(convictionObject => {
                             return `<option value="${convictionObject.name}">${convictionObject.name}</option>`
                           }).join("") 
                    }
            </select >

        </fieldset>
`
}