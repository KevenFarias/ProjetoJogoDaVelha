document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".quadrado");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;

    if (move(position)) {
        
       setTimeout(() => {
        alert(" O Jogo Acabou - O Vencedor foi " + playerTime)
       }, 10);

    };
    updateSquares();

}

function updateSquares() {
    let squares = document.querySelectorAll(".quadrado");

    squares.forEach((square) => {
        let position = square.id;
        let simbolo = board[position];

        if (simbolo != '') {
            square.innerHTML = `<div class='${simbolo}'></div>`
        }
    })
}