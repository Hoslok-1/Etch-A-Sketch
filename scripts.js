//declares important variables 
const container = document.getElementById('container');
const rows = document.getElementsByClassName('rows');
const cells = document.getElementsByClassName('cell');
const resize = document.getElementById('resize')
const reset = document.getElementById('reset');

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
            cell.style.width = '30px';
            cell.style.height = '30px';
            rows[i].appendChild(cell);
            cell.className = 'cell';
            cell.addEventListener("mouseenter", ()=>
            cell.style.backgroundColor='black');
        }
    }
}

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

//reseizes the grid by asking for a number and making a grid with
//that many variables by using makeGrid();
function resizeGrid()
{
    removeGrid();
    let m = prompt("Enter the size of the array");
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



