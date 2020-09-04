import {
    getCriminals,
    useCriminals
} from './CriminalProvider.js'
import {
    CriminalHTML
} from './CrimininalComponent.js'

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if ("crimeId" in event.detail) {
        console.log(event.detail.crimeThatWasChosen);

        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const unfilteredCriminals = useCriminals();
        const filteredCriminals = useCriminals().filter(criminal => {
            return criminal.conviction === event.detail.crimeThatWasChosen
        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
        addCriminalsToDom(filteredCriminals);

    }
})

// const render = criminalCollection => {
//     contentTarget.innerHTML =
// }

export const CriminalList = () => {
    getCriminals()
        .then(() => {
                const criminalArray = useCriminals();
                console.log("CriminalArray", criminalArray);
                addCriminalsToDom(criminalArray)
            }

        )
}

const addCriminalsToDom = (theCriminalArray) => {
    const domCriminalElement = document.querySelector(".criminalsContainer");
    let CriminalHTMLArray = theCriminalArray.map(criminal => {
            return CriminalHTML(criminal);
        })
        // console.log("CriminalHTMLArray", CriminalHTMLArray);
    domCriminalElement.innerHTML = CriminalHTMLArray.join(" ");
}