const container = document.querySelector('.container');

function create_grid(user_input=16) {

    let grid_size = user_input*user_input;

    for (let i = 0; i < grid_size; i++) {
        const grid_square = document.createElement('div');
        grid_square.classList.add('grid-square');
        container.appendChild(grid_square);
    }
}

function handleMouseOver(e) {
    e.target.style.backgroundColor = 'red';
}

function handleButtonClick(e) {
    const pop_up = document.createElement('div');
    pop_up.classList.add('pop-up');

    container.appendChild(pop_up);
}

const change_size_button = document.querySelector('.change-size');
change_size_button.addEventListener('onclick', handleButtonClick);

const squares = document.querySelectorAll('.grid-square');
squares.forEach(square => square.addEventListener('mouseover', handleMouseOver));

create_grid();
