const notesInp = document.querySelector("#notes");
const noteCards = document.querySelector("#card");
const saveBtn = document.querySelector("#save");
const notes = [];

if (notesInp != "") {
    saveBtn.addEventListener("dblclick", () => {
        let note = {
            itemNote: notesInp.value,
        };
        notes.push(note);
        console.log(notes);
        console.log(note);
    });
}

console.log(window.innerWidth);