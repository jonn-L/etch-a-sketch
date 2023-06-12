const grid = document.querySelector('.grid');

function create_grid(user_input) {
    let grid_size = user_input*user_input;

    for (let i = 0; i < grid_size; i++) {
        const grid_square = document.createElement('div');
        grid_square.classList.add('grid-square');
        grid_square.setAttribute('style', `flex: 0 0 ${100/user_input}%;`);
        grid.appendChild(grid_square);
    }

    attachEventListeners();
}

function attachEventListeners() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => square.addEventListener('mouseover', function(e) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        e.target.setAttribute('style', `background-color:rgb(${r},${g}, ${b})`);
    }));
}

create_grid(16);

const button_change_size = document.querySelector('.button-change-size');
button_change_size.addEventListener('click', function() {
    let user_input = 0;
    while (true) {
        user_input = prompt("Please enter the size of the grid:", 16);
        if (user_input <= 100) {
            break;
        }
        else {
            alert("Please enter a value smaller or equal to 100");
        }
    }
    grid.replaceChildren();
    create_grid(user_input);
});