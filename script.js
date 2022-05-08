const container = document.querySelector('.container');

function createGrid(num){
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

createGrid(2);


