// buttons 

const addNote = document.querySelector('.add-note-button');
const removetext = document.querySelector('#delete-button');

// boxes
const formbox = document.querySelector('#notes');

// text areas
const title = document.querySelector('#title');
const textbox = document.querySelector('#text-box');

// extras
const createbullet = document.querySelector('#create-bullet');
const wordCountButton = document.querySelector('#word-counter');
const wordcounttext = document.querySelector('#number-of-word-text');
const wordcountValue = document.querySelector('#word-count-value');
let wordcount = 0;

// display the note with this button on startup page
function displayNotes()  {
    formbox.style.display = "block";
    formbox.style.opacity = "1"; 
}

// erase everything from the notes window
function eraseText()  {
    title.value = ' ';
    textbox.value = ' '; 
}


function AddBulletPoint()  {
    const HTMLString = `<li>${textbox.value}</li>`;
    textbox.value = HTMLString;
}

function DisplayWord_Count()  {
        let wordArrays = textbox.value.split(' ');
        wordcount = 0;
        const notchars = ['!', '?', ',', '-', '/', '_'];
        for (let f = 0; f < wordArrays.length; f++)  
        {
            if (!(wordArrays[f] in notchars))
            {
                wordcount++;
            }
        }  

        wordcounttext.style.display = 'block';
        wordcountValue.innerText = `${wordcount}`;

}

function HideWord_Counter() {
    wordcounttext.style.display = 'none';
    wordcountValue.innerText = '0';
}

addNote.addEventListener('click', displayNotes);
removetext.addEventListener('click', eraseText);
createbullet.addEventListener('click', AddBulletPoint);
wordCountButton.addEventListener('click', DisplayWord_Count);
wordCountButton.addEventListener('dblclick', HideWord_Counter);






