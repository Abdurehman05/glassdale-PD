export const CriminalHTML = (criminalObj) => {
    return `
    <article id="criminal-${criminalObj.id}" class="criminalsList">
    <div class="criminal-card">
        <h2>${criminalObj.name}</h2>
        <h3>Age: ${criminalObj.age}</h3>
        <h3>Crime: ${criminalObj.conviction}</h3>
        <h3>Term Start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</h3>
        <h3>Term End: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</h3>
     </div>   
    </article>
    `
}