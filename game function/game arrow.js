document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            console.log('Strzaka w gore!')
            break
        case 'ArrowDown':
            console.log('Strzaka w dol!')
            break
        case 'ArrowLeft':
            console.log('Strzaka w lewo!')
            break
        case 'ArrowRight':
            console.log('Strzaka w prawo!')
            break
        default:
    }
})



function makeGameBoard(container){
    var board = document.createElement('div')
    board.style.border = '1px solid black'

    board.style.width = '80vw'
    board.style.height = '80vw'

    board.style.position = 'fixed'
    board.style.left = '50%'
    board.style.top = '50%'

    board.style.transform = "translate(-50%, 50%)"

    ;(container = container || document.body)

    container.appendChild(board)

    return board
}


function makePlayer(){
    var player = document.createElement('div')
    board.style.backgroundColor = 'red'

    board.style.position = 'absolute'
    player.style.left = "0%"
    player.style.top = "0%"

    board.appendChild(player)

    return player

}

function movePlayerRight(player) {
    var currPlayerLeftPosition = Number(player.style.left.slice (0,-1))
    var nextPlayerLeftPosition = Number(player.style.left.slice (0,-1))

}var