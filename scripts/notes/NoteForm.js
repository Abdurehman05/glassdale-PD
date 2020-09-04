import {
    getCriminals,
    useCriminals
} from "../criminals/CriminalProvider.js"
import {
    saveNote
} from "./NoteDataProvider.js";

const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".noteFormContainer");

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteContent = document.querySelector("#noteForm--text")
        const noteCriminal = document.querySelector("#noteForm--criminal")

        if (noteCriminal.value !== "0") {
            const newNote = {
                noteText: noteContent.value,
                suspect: noteCriminal.value,
                date: Date.now()
            }
            saveNote(newNote);

        } else {
            window.alert("Select a Suspect");
        }
    }
})

const render = (criminalArray) => {
        contentTarget.innerHTML = `
        <h3>New Note Details</h3>
       
        <textarea id="noteForm--text" placeholder="Put a note Here"></textarea>
       
                <select class="dropdown" id="noteForm--criminal">
                     <option value="0">Please select a criminal...</option>
             ${
                criminalArray.map(criminalObject => {
                  return  `<option value="${criminalObject.name}">${criminalObject.name}</option>`
                }).join("")
            }
                </select> 
                <button id="saveNote">Save Note</button>
      
`

}

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            render(useCriminals())
        })
}