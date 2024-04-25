const noteContainer = document.querySelector('.note-container');
const createBtn = document.querySelector('.create-btn');
let notes = document.querySelectorAll('.note-box');

function fetchData () {
    noteContainer.innerHTML = localStorage.getItem('notes')
}
fetchData ();

function updateData () {
    localStorage.setItem('notes', noteContainer.innerHTML);
}

createBtn.addEventListener('click', ()=> {
    let noteBox = document.createElement('p');
    noteBox.setAttribute ('contenteditable', 'true');
    noteBox.className = 'note-box';

    let deleteImg = document.createElement('img');
    deleteImg.src= 'images/delete.png';
    
    noteContainer.appendChild(noteBox).appendChild(deleteImg);
})

noteContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'IMG') {
        e.target.parentNode.remove();
        updateData ();
    }
    else if (e.target.tagName === 'P') {
        notes = document.querySelectorAll('.note-box');
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateData ();
            }
        })
    }
})