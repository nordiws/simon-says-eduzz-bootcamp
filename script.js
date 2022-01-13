let order = []
let clickedOrder = []
let score = 0

//0 = green
//1 = yellow
//2 = red
//3 = blue

const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')
const red = document.querySelector('.red')
const blue = document.querySelector('.blue')

// generates random colors
const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []
    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

//lights up next color
const lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    })
    setTimeout(() => {
        element.classList.remove('selected')
    }, number - 250)
}

//verify if the clicked order is the same as the generated order
const checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver()
            break
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível`)
        nextLevel()
    }
}

//user clicked input
const click = (color) => {
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')
    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)
}

//returns a color
const createColorElement = (color) => {
    switch (color) {
        case 0:
            return green
        case 1:
            return yellow
        case 2:
            return red
        case 3:
            return blue
    }
}

//start next level
const nextLevel = () => {
    score++
    shuffleOrder()
}

//loose game
const gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`)
    order = []
    clickedOrder = []
    playGame()
}

//start the game
const playGame = () => {
    alert('Bem-vindo ao "Simon Says"! Iniciando um novo jogo!')
    score = 0
    nextLevel()
}

green.onclick = () => (click(0))
yellow.onclick = () => (click(1))
red.onclick = () => (click(2))
blue.onclick = () => (click(3))

playGame()