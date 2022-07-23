 
const container = document.getElementById('container');
const rows = document.getElementsByClassName('rows');

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
        }
    }
}
console.log(container);
makeGrid();