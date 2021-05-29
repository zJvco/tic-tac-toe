/* 
    TicTacToe feito por João Victor
    
    0 --> Player X
    1 --> Player Y
*/

const fields = document.querySelectorAll(".fieldBtn")
const player1 = document.querySelector(".player-1")
const player2 = document.querySelector(".player-2")
const restart = document.getElementById("restart")

const matriz = [[null,null,null], [null,null,null], [null,null,null]]

const match_WIN_ALL = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]

var currentPlayer = 0
var p1_score = 0
var p2_score = 0
var rounds = 0
var stop_game = false

function game() {
    fields.forEach((f, i) => {
        f.addEventListener("click", () => {
            if (!stop_game) {
                switch (i) {
                    case 0:
                        player(f, i, 0)
                        break
                    case 1:
                        player(f, i, 1)
                        break
                    case 2:
                        player(f, i, 2)
                        break
                    case 3:
                        player(f, i, 0)
                        break
                    case 4:
                        player(f, i, 1)
                        break
                    case 5:
                        player(f, i, 2)
                        break
                    case 6:
                        player(f, i, 0)
                        break
                    case 7:
                        player(f, i, 1)
                        break
                    case 8:
                        player(f, i, 2)
                        break
                    default:
                        console.log("Algo deu errado!")
                        break
                }
                
                animationCurrentPlayer()
                calcPlayerWin()
            }
        })
    })

    roundsChoicePlayer()
}

function roundsChoicePlayer() {
    if (rounds % 2 === 0) {
        currentPlayer = 0
    }
    else {
        currentPlayer = 1
    }
}

function player(f, c, l) {
    if (c >= 0 && c < 3) {
        if (currentPlayer === 0) {
            if (f.innerHTML.length === 0) {
                f.innerHTML = "X"

                matriz[0][l] = 0
                currentPlayer = 1
            }
        }
        else {
            if (f.innerHTML.length === 0) {
                f.innerHTML = "O"

                matriz[0][l] = 1
                currentPlayer = 0
            }
        }
    }
    else if (c >= 3 && c < 6) {
        if (currentPlayer === 0) {
            if (f.innerHTML.length === 0) {
                f.innerHTML = "X"

                matriz[1][l] = 0
                currentPlayer = 1
            }
        }
        else {
            if (f.innerHTML.length === 0) {
                f.innerHTML = "O"

                matriz[1][l] = 1
                currentPlayer = 0
            }
        }
    }
    else {
        if (currentPlayer === 0) {
            if (f.innerHTML.length === 0) {
                f.innerHTML = "X"

                matriz[2][l] = 0
                currentPlayer = 1
            }
        }
        else {
            if (f.innerHTML.length === 0) {
                f.innerHTML = "O"

                matriz[2][l] = 1
                currentPlayer = 0
            }
        }
    }
}

function animationCurrentPlayer() {
    if (currentPlayer === 0) {
        player1.animate([
            { opacity: "0.4" },
            { opacity: "1" }
        ], {
            duration: 500,
            iterations: Infinity,
            easing: "ease-in-out",
            direction: "alternate"
        })
    }
    else {
        stopAnimationPlayer1()
    }

    if (currentPlayer === 1) {
        player2.animate([
            { opacity: "0.4" },
            { opacity: "1" }
        ], {
            duration: 500,
            iterations: Infinity,
            easing: "ease-in-out",
            direction: "alternate"
        })
    }
    else {
        stopAnimationPlayer2()
    }
}

function calcPlayerWin() {
    const break_even = []

    for (let i = 0; i < match_WIN_ALL.length; i++) {
        const type = []

        for (let j = 0; j < match_WIN_ALL[i].length; j++) {
            if (fields[match_WIN_ALL[i][j]].innerHTML.length > 0) {
                type.push(fields[match_WIN_ALL[i][j]].innerHTML)

                if (type[0] === "X" && type[1] === "X" && type[2] === "X") {
                    endGame("X")
                    return
                }
                else if (type[0] === "O" && type[1] === "O" && type[2] === "O") {
                    endGame("O")
                    return
                }
                else continue
            }
        }
    }

    for (let l = 0; l < fields.length; l++) {
        if (fields[l].innerHTML.length > 0) {
            break_even.push("ok")
        }
    }

    if (break_even.length === 9) {
        endGame("B")
        return
    }
}

function endGame(select) {
    const p1_point = document.getElementById("p1_score")
    const p2_point = document.getElementById("p2_score")

    switch (select) {
        case "X":
            p1_score++
            rounds++
            stop_game = true
            p1_point.innerText = p1_score
            break
        case "O":
            p2_score++
            rounds++
            stop_game = true
            p2_point.innerText = p2_score
            break
        case "B":
            rounds++
            stop_game = true
            break
        default:
            console.log("Algo deu errado!")
            break
    }

    resetGame()
}

function resetGame() {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            matriz[i][j] = null
        }
    }

    fields.forEach(f => {
        f.innerHTML = ""
    })

    stop_game = false

    stopAnimationPlayer1()
    stopAnimationPlayer2()
}

function stopAnimationPlayer1() {
    player1.animate([
        { opacity: "1" }
    ], {
        duration: 1,
        fill: "both"
    })
}

function stopAnimationPlayer2() {
    player2.animate([
        { opacity: "1" }
    ], {
        duration: 1,
        fill: "both"
    })
}

restart.addEventListener("click", () => {
    window.location.reload()
})

window.onload = () => game()