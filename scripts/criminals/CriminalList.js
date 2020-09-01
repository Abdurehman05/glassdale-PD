import {
    getCriminals,
    useCriminals
} from './CriminalProvider.js'
import {
    CriminalHTML
} from './CrimininalComponent.js'

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
    console.log("CriminalHTMLArray", CriminalHTMLArray);
    domCriminalElement.innerHTML = CriminalHTMLArray.join("");
}