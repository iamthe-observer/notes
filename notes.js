const notesInp = document.querySelector("#notes");
const noteCards = document.querySelector("#card");
const saveBtn = document.querySelector("#save");
const notes = [];

saveBtn.addEventListener("click", () => {
    let note = {
        input: notesInp.value,
    };
    notes.push(note);
    notesInp = "";
    console.log(notes);
    console.log(note);
});