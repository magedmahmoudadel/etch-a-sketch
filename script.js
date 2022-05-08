const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const gridBtn = document.querySelector('.grid');
function createGrid(num){
    //Takes in a number and creates a grid of squares with dimensions num*num
    const gridDimensions = num*num;
    let divDimensions= num/gridDimensions*100;
    for(let i = 0; i<gridDimensions; i++){
        const div = document.createElement('div');
        div.className='etch';
        div.style.height=`${divDimensions}%`;
        div.style.width=`${divDimensions}%`;
        container.appendChild(div);
        
    }
}

function etchASketch(){
    const divs = document.querySelectorAll('.etch');
    for(let i = 0; i<divs.length; i++){
        divs[i].addEventListener('mouseover',()=>{
            divs[i].style.backgroundColor='black';
        })
    }
}

function resetGrid(){
    const divs = document.querySelectorAll('.etch');
    for (let i = 0; i<divs.length; i++){
        divs[i].style.backgroundColor='white';
    }
}


resetBtn.addEventListener('click',()=>{
    resetGrid();
})

createGrid(16);
etchASketch();



