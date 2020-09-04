import {
    getNote,
    useNotes,
    getNotes
} from './NoteDataProvider.js'
import {
    NoteHTML
} from './Note.js'
import {
    useCriminals
} from '../criminals/CriminalProvider.js'

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteListContainer")

const render = (notes) => {
    const criminals = useCriminals()
    contentTarget.innerHTML = notes.map((noteObject) => {
        return NoteHTML(noteObject)
    }).join("");

}

export const NoteList = () => {
    getNotes()
        .then(useNotes)
        .then(render)
}

eventHub.addEventListener("noteStateChanged", () => {
    const newNotes = useNotes()
    render(newNotes)
})