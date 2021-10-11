const notesInp = document.querySelector("#notes");
const noteCards = document.querySelector("#card");
const saveBtn = document.querySelector(".save");
const notes = [];

const saveNotes = () => {
    let note = {
        input: notesInp.value,
    };
    notes.push(note);
    notesInp = "";
    console.log(notes);
    console.log(note);
};

saveBtn.addEventListener("click", () => {
    saveNotes();
});