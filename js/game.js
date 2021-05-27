/* 
    TicTacToe feito por João Victor
    
    0 --> Player X
    1 --> Player Y

    Programação Funcional
*/

const fields = document.querySelectorAll(".fieldBtn")

const matriz = [[null,null,null], [null,null,null], [null,null,null]]

const match_WIN_ALL = [
    [[0,0,0], [0,0,0], [0,0,0]],
    [[0,1,1], [1,0,1], [1,1,0]],
    [[1,1,0], [1,0,1], [0,1,1]],
    [[0,0,0], [1,1,1], [1,1,1]],
    [[1,1,1], [0,0,0], [1,1,1]],
    [[1,1,1], [1,1,1], [0,0,0]],
    [[0,1,1], [0,1,1], [0,1,1]],
    [[1,1,0], [1,1,0], [1,1,0]],
    [[1,0,1], [1,0,1], [1,0,1]],

    [[1,1,1], [1,1,1], [1,1,1]],
    [[1,0,0], [0,1,0], [0,0,1]],
    [[0,0,1], [0,1,0], [1,0,0]],
    [[1,1,1], [0,0,0], [0,0,0]],
    [[0,0,0], [1,1,1], [0,0,0]],
    [[0,0,0], [0,0,0], [1,1,1]],
    [[1,0,0], [1,0,0], [1,0,0]],
    [[0,0,1], [0,0,1], [0,0,1]],
    [[0,1,0], [0,1,0], [0,1,0]]
]

var currentPlayer = 0
var p1_score = 0
var p2_score = 0

fields.forEach((f, i) => {
    f.addEventListener("click", () => {
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

        //console.log(matriz)

        animationCurrentPlayer()
        calcPlayerWind()
    })
})

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
    const player1 = document.querySelector(".player-1")
    const player2 = document.querySelector(".player-2")

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

function calcPlayerWind() {
    
}