function createGrid(){
    const gridContainer = document.getElementById('sketch-wrapper');
    gridContainer.innerHTML = '';
    for (let i = 0; i < 16*16; i++) {
        const gridDiv = document.createElement('div');
        //gridDiv.classList.add('grid-element');
        //gridContainer.classList.remove('grid-10x10', 'grid-20x20', 'grid-30x30');
        //gridContainer.classList.add(className);
        gridContainer.appendChild(gridDiv);
      }
}

createGrid()