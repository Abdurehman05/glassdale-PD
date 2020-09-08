import { getCriminals, useCriminals } from "./CriminalProvider.js";
import { CriminalHTML } from "./CrimininalComponent.js";

const eventHub = document.querySelector(".container");

eventHub.addEventListener("crimeChosen", customEvent => {
    const contentTarget = document.querySelector("#officerSelect");
    console.log("Officer Selected is ", contentTarget.value);

    if (event.detail.crimeThatWasChosen !== "0") {
        // filter
        const matchingCriminals = useCriminals().filter(singleCriminal => {
            return singleCriminal.conviction === event.detail.crimeThatWasChosen;
        });
        addCriminalsToDOM(matchingCriminals);
    } else {
        addCriminalsToDOM(useCriminals());
    }
});

eventHub.addEventListener("OfficerChosen", event => {
    if (event.detail.officerThatWasChosen !== "0") {
        const matchingCriminals = useCriminals().filter(singleCriminal => {
            return (
                singleCriminal.arrestingOfficer ===
                encodeURIComponent.detail.officerThatWasChosen
            );
        });
        addCriminalsToDOM(matchingCriminals);
    } else {
        addCriminalsToDOM(useCriminals());
    }
});

export const CriminalList = () => {
    getCriminals().then(() => {
        const criminalArray = useCriminals();
        console.log("criminalArray", criminalArray);
        addCriminalsToDOM(criminalArray);
    });
};

const addCriminalsToDOM = aCriminalArray => {
    const domElement = document.querySelector(".criminalsContainer");
    //    addSelectToTheDOM()
    let HTMLArray = aCriminalArray.map(criminalObject => {
        return CriminalHTML(criminalObject);
    });
    domElement.innerHTML = HTMLArray.join("");
};