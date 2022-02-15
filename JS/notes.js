// //  ||completed||  //
// window.addEventListener('DOMContentLoaded', () => {
//     const notesInp = document.querySelector("#notes");
//     const clearBtn = document.querySelector('#clear')
//     const saveBtn = document.querySelector("#save");
//     let rand = Math.floor(Math.random() * 3)
//     let arr = ["hello!", 'vent your feelings...', 'express your ideas!!!']
//     notesInp.value = arr[rand]

//     notesInp.addEventListener('click', () => {
//         notesInp.value = ''
//         saveBtn.style.display = "initial"
//         clearBtn.style.display = "initial"
//     })

//     saveBtn.style.display = "none"
//     clearBtn.style.display = "none"


// })

// const modal = document.querySelector('.modal')
// const overlay = document.querySelector('#overlay')
// const notesInp = document.querySelector("#notes");
// const noteCards = document.querySelector("#card");
// const saveBtn = document.querySelector("#save");
// const bodyNotes = document.querySelector('.body-notes')
// const clearBtn = document.querySelector('#clear')

// const getNotes = () => {
//     if (localStorage.notes != undefined) {
//         return JSON.parse(localStorage.notes)
//     } else {
//         return []
//     }
// }
// let currNotes
// let notes = getNotes()

// const notesCanvas = document.querySelector('.canvas')
// const createDiv = () => document.createElement('div')
// const createSpan = () => document.createElement('span')

// const renderNotes = () => {
//     let noteCard = ''
//     for (let x = 0; x < notes.length; x++) {
//         const element = notes[x];
//         noteCard += `<div data-id='${element.id}' class="noteCard"><div class='_delete'><button data-delete='${element.id}' class='delete'>&times</button></div><div id="body">${element.body}</div><div id="time">${element.time}</div></div>`
//     }
//     bodyNotes.innerHTML = noteCard
//     if (bodyNotes.innerHTML !== '') {
//         bodyNotes.style.display = 'grid'
//     }
//     const deleteBtn = document.querySelectorAll('[data-delete]')
//     setDelete(deleteBtn)
// }
// renderNotes()
// const note_card = document.querySelectorAll('[data-id]')
// if (note_card !== null) {
//     note_card.forEach(card => {
//         card.addEventListener('click', () => {
//             overlay.style.opacity = 1
//         })
//     })
// }




// saveBtn.addEventListener('click', () => {
//     if (notesInp.value !== '') {
//         if (localStorage.notes == undefined) {
//             localStorage.notes = ''
//             notes.push(new NoteCard(notesInp.value))
//             save2LS(notes)
//             notesInp.value = ''
//             renderNotes()
//             if (note_card !== null) {
//                 note_card.forEach(card => {
//                     card.addEventListener('click', () => {
//                         overlay.style.opacity = 1
//                     })
//                 })
//             }
//         } else {
//             notes.push(new NoteCard(notesInp.value))
//             save2LS(notes)
//             notesInp.value = ''
//             renderNotes()
//             if (note_card !== null) {
//                 note_card.forEach(card => {
//                     card.addEventListener('click', () => {
//                         overlay.style.opacity = 1
//                     })
//                 })
//             }
//         }
//     }
// })

// const removeByAttr = function(arr, attr, value) {
//     var i = arr.length;
//     while (i--) {
//         if (arr[i] &&
//             arr[i].hasOwnProperty(attr) &&
//             (arguments.length > 2 && arr[i][attr] === value)) {

//             arr.splice(i, 1);

//         }
//     }
//     return arr;
// }

// function NoteCard(body) {
//     return {
//         id: new Date().getTime(),
//         body: body,
//         time: JSON.stringify(/\d\d:\d\d:\d\d/.exec(new Date())[0])
//     }
// }

// function save2LS(notesArr) {
//     if (localStorage.notes !== undefined) {
//         localStorage.setItem('notes', JSON.stringify(notesArr))
//     }
//     // notes = JSON.parse(localStorage.getItem("notes"))
//     // notesArr = notes
// }

// clearBtn.addEventListener('click', () => {
//     localStorage.clear()
//     notes = []
//     renderNotes()
//     bodyNotes.style.display = 'none'
// })


// function setDelete(deleteBtn) {
//     deleteBtn.forEach(btn => {
//         btn.addEventListener('click', () => {
//             // returns filtered array of note that needs to be deleted
//             const filtered = notes.filter((a) => {
//                 if (a.id == btn.dataset.delete) {
//                     return a
//                 }
//             });
//             if (btn.dataset.delete !== filtered[0].id) {
//                 currNotes = removeByAttr(notes, "id", filtered[0].id)
//                 save2LS(currNotes)
//             }


//             btn.parentNode.parentNode.parentNode.removeChild(btn.parentNode.parentNode);

//             if (bodyNotes.innerHTML == '') {
//                 bodyNotes.style.display = 'none'
//             }

//         })
//     })
// }