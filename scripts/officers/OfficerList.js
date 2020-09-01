import {
    OfficerHTML
} from './Officer.js'

import {
    getOfficers,
    useOfficers
} from './OfficerProvider.js'

export const OfficerList = () => {
    getOfficers()
        .then(() => {
            const officerArray = useOfficers();
            console.log("officerArray", officerArray);
            addOfficersToDom(officerArray);

        })
}

const addOfficersToDom = (anOfficerArray) => {
    const domElement = document.querySelector(".officersContainer")
    let HTMLArray = anOfficerArray.map(singleOfficer => {
        return OfficerHTML(singleOfficer);
    })
    console.log("HTML Array", HTMLArray)
    domElement.innerHTML = HTMLArray.join("")

}