//declares important variables 
const container = document.getElementById('container');
const rows = document.getElementsByClassName('rows');
const cells = document.getElementsByClassName('cell');
const resize = document.getElementById('resize')
const reset = document.getElementById('reset');
const black = document.getElementById('makeItBlack')
let size = document.getElementsByName('size');

let myColor;
let value = document.getElementById('makeItBlack');
value.addEventListener('click', () => myColor = "black");

let colorPicker = document.getElementById('colorpicker');
colorPicker.addEventListener('click', () => myColor = colorPicker.value)

//function to make the Grid
function makeGrid(m)
{
    makeRows(m);
    fillCells(m);
}
//makes numR amout of rows
function makeRows(numR)
{
    for(i = 0;i<numR;i++)
    {
        let row = document.createElement('div');
        container.appendChild(row);
        row.className = 'rows';
    }
}

function fillCells(numC)
{
    for(i = 0;i<rows.length;i++)
    {
        for(j = 0; j<numC;j++)
        {
            let cell = document.createElement('div');
            cell.style.width = size + "px";
            cell.style.height = size + "px" ;
            rows[i].appendChild(cell);
            cell.className = 'cell';
            cell.addEventListener("mouseenter", ()=>
            cell.style.backgroundColor= myColor);
        }
    }
}

value.addEventListener('click', () => myColor = "black");
reset.addEventListener('click',resetGrid);

//resets the colors on the grid by applying white background to all the cells
function resetGrid()
{
    allCells = document.querySelectorAll('.cell');
    allCells.forEach((allCells) =>{
        allCells.style.backgroundColor = "white";
    });
}

resize.addEventListener('click',resizeGrid);

//resizes the grid by asking for a number and making a grid with
//that many variables by using makeGrid();
function resizeGrid()
{
    removeGrid();
    let m = prompt("Enter the size of the array");
    size = 600/m 
    makeGrid(m);
    allCells = document.querySelectorAll('.cell');
}


let allCells = document.querySelectorAll('.cell');


makeGrid(16);

function removeGrid()
{
    allRows = document.querySelectorAll('.rows');
    allRows.forEach((allRows) =>{
        allRows.remove();
    });
}































// allCells.forEach((allCells)=>{
//     allCells.addEventListener('mouseenter',()=>{
//         allCells.style.backgroundColor = "black";
//     })
// })



