//declares important variables 
const container = document.getElementById('container');
const rows = document.getElementsByClassName('rows');
const cells = document.getElementsByClassName('cell');

//function to make the Grid
function makeGrid()
{
    makeRows(16);
    fillCells(16);
}

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
            rows[i].appendChild(cell);
            cell.className = 'cell';
            cell.addEventListener("mouseenter", ()=>
            cell.style.backgroundColor='black');
        }
    }
}

function resetGrid()
{
    allCells.forEach((allCells) =>{
        allCells.style.backgroundColor = "white";
    });
}


makeGrid();
const allCells = document.querySelectorAll('.cell');

const reset = document.getElementById('reset');
reset.addEventListener('click',resetGrid)








































// allCells.forEach((allCells)=>{
//     allCells.addEventListener('mouseenter',()=>{
//         allCells.style.backgroundColor = "black";
//     })
// })



