import readLineSync from "readline-sync"

export function createPlayer(sign) {
    const name = readLineSync.question("wat is your name: ")
    return {
        name: name,
        sign: sign
    }
}

export function createPlayers() {
    const signA = readLineSync.question("what sign player A: ")
    const playerA = createPlayer(signA.toUpperCase())
    const signs = ["X", "O"]
    let signB
    for (let s of signs) {
        signB = s
        if (signB != signA) {
            break
        }
    }
    console.log("now player B");
    const playerB = createPlayer(signB)
    return [playerA, playerB]
}

export function checkIsOver(board, players) {
    let sign
    let check = false
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (j <= board[i].length - 3) {
                if (board[i][j] != "_" && board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2]) {
                    console.log(1);
                    sign = board[i][j]
                    check = true
                }
            }

            if (j >= 2) {
                if (board[i][j] != "_" && board[i][j] === board[i][j - 1] && board[i][j] === board[i][j - 2]) {
                    console.log(2);
                    sign = board[i][j]
                    check = true
                }
            }
            if (i >= 2) {
                if (board[i][j] != "_" && board[i][j] === board[i - 1][j] && board[i][j] === board[i - 2][j]) {
                    console.log(3);
                    sign = board[i][j]
                    check = true
                }
            }
            if (i <= board.length - 3) {
                if (board[i][j] != "_" && board[i][j] === board[i+1][j] && board[i][j] === board[i+2][j]) {
                    console.log(4);
                    sign = board[i][j]
                    check = true
                }
            }
            if (i >= 2 && j <= board[i].length - 3) {
                if (board[i][j] != "_" && board[i][j] === board[i - 1][j+1] && board[i][j] === board[i - 2][j+2]) {
                    console.log(5);
                    sign = board[i][j]
                    check = true
                }
            }
            if (i >= 2 && j >= 2) {
                if (board[i][j] != "_" && board[i][j] === board[i - 1][j-1] && board[i][j] === board[i - 2][j-2]) {
                    console.log(6);
                    sign = board[i][j]
                    check = true
                }
            }
        }
        if (check === true) {
            for (let p of players) {
                if (p.sign === sign) {
                    console.log(p.name, "win");
                    return true
                }
            }
        }
       
    }
    return false
}

