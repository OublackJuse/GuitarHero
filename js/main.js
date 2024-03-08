document.addEventListener('keydown', playNote);

function playNote(event) {
    const key = event.keyCode;
    const noteElement = document.querySelector(`.note[data-key="${key}"]`);

    if (noteElement) {
        // You can add more advanced logic here, e.g., scoring, animations, etc.
        noteElement.style.backgroundColor = '#ff0000'; // Highlight the pressed note
    }
}

function createRandomNote() {
    const note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = getRandomColor();

    const notesContainer = document.getElementById('notes-container');
    notesContainer.appendChild(note);

    animateNoteDown(note);
}

function animateNoteDown(note) {
    const animationDuration = 2000; // in milliseconds
    note.style.animation = `fall ${animationDuration}ms linear`;
    note.addEventListener('animationend', () => {
        note.remove();
    });
}

function getRandomColor() {
    // You can implement more complex color generation logic here
    const colors = ['#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

setInterval(createRandomNote, 2000); // Create a new note every 2 seconds
