/* 
Cross word Puzzle Game in Javascript..
Status: In progress
coded by: Avanteesh
startdate: 2nd March 2024
*/
// using for each to access indvidual elements from the nodelist
// cells
const cells = document.querySelectorAll("div[cellnumber]");
// texts
const texts = document.querySelectorAll("li[listnumber]");
// buttons
const checkButton = document.querySelector('#checker-button');
// score text
const textdisplay = document.querySelector('#score');

// Our Object containing the words of the puzzle and maximum Score
const Word_Dictionary = {
    puzzle1: ["Came", "Critical", "Done", "Rest", "Sense", "Site", "Such", "Upon", "Wide"],
    TotalScore: 9,
    CurrentScore: 0
};
// convert the NodeList of Texts into an Array
// using Array.from()
const DivArray = Array.from(cells);

// iterating over the nodelist to add EventListener to Every Div 'box' inside grid
cells.forEach(function(cell){
    cell.addEventListener('click', function() {
        cell.style.background = 'red';
        cell.style.color = '#fff';
    });
});


// toggle effect with dblclick to make the cell back to normal
cells.forEach(function(cell) {
    cell.addEventListener('dblclick', function() {
        cell.style.background = 'linear-gradient(rgba(64, 236, 73, 0.973), rgba(39, 197, 86, 0.966))';
        cell.style.color = 'rgb(15, 15, 15)';
    });
});

// console.log(`Array from NODELIST ${DivArray}`);
