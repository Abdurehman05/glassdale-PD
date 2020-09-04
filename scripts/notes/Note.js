const eventHub = document.querySelector(".container")

export const NoteHTML = (noteObj) => {
    return `
    <section class="note>
        <div class="note--title>Criminal ${noteObj.suspect}</div>
        <div class="note--content">Note: ${noteObj.noteText}</div>
        <div class="note--timestamp">Date: ${new Date(noteObj.date).toLocaleDateString('en-US')}</div>
    </section>    
    `
}