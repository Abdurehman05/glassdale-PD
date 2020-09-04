// Holds array of notes 
// useNotes makes a copy of array of notes and returns 
// get all notes from DB, add a note to the DB

let notes = [];

const eventHub = document.querySelector(".container")

const dipatchStateChangeEvent = () => {
    const noteStateChangeEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangeEvent)
}

export const getNotes = () => {
    return fetch("http://localhost:8088/notes")
        .then(res => res.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

export const useNotes = () => {
    return notes.slice();
}

export const saveNote = noteObj => {
    return fetch("http://localhost:8088/notes", {
            method: "POST",
            headers: {
                "Conten-Type": "application/json"
            },
            body: JSON.stringify(noteObj)

        })
        .then(() => {
            return getNotes()
        })
        .then(dipatchStateChangeEvent)

}