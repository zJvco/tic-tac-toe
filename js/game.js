/* 
    TicTacToe feito por João Victor
    
    0 --> Player X
    1 --> Player Y
*/

const fields = document.querySelectorAll(".fieldBtn")
const player1 = document.querySelector(".player-1")
const player2 = document.querySelector(".player-2")

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
var be = false
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
                }

                calcPlayerWin()
                animationCurrentPlayer()
            }
        })
    })
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
        player1.animate([
            { opacity: "1" },
            { opacity: "1" }
        ], {
            duration: 1,
            iterations: Infinity,
            easing: "ease-in-out",
            direction: "alternate"
        })
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
        player2.animate([
            { opacity: "1" },
            { opacity: "1" }
        ], {
            duration: 1,
            iterations: Infinity,
            easing: "ease-in-out",
            direction: "alternate"
        })
    }
}

function calcPlayerWin() {
    const break_even = []

    for (let l = 0; l < fields.length; l++) {
        if (fields[l].innerHTML.length > 0) {
            break_even.push("ok")
        }
    }
    
    for (let i = 0; i < match_WIN_ALL.length; i++) {
        const mod = []
        const type = []

        for (let j = 0; j < match_WIN_ALL[i].length; j++) {
            if (fields[match_WIN_ALL[i][j]].innerHTML.length > 0) {
                mod.push("ok")
                type.push(fields[match_WIN_ALL[i][j]].innerHTML)

                if (mod.length === 3) {
                    for (let k = 0; k < type.length; k++) {
                        if (type[0] === "X" && type[1] === "X" && type[2] === "X") {
                            p1_score++
                            console.log("X Ganhou!")
                            stop_game = true
                            endGame()
                            break
                        }
                        else if (type[0] === "O" && type[1] === "O" && type[2] === "O") {
                            p2_score++
                            console.log("O Ganhou!")
                            stop_game = true
                            endGame()
                            break
                        }
                        else if (break_even.length === 9) {
                            be = true
                            stop_game = true
                            console.log("Empatou!")
                            endGame()
                            break
                        }
                        else continue
                    }
                }
            }
        }
    }
}

function endGame() {
    console.log("Acabou!")
}

function stopAnimationPlayer() {
    
}

window.onload = () => game()