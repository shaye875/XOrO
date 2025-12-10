import { createBoard, printboard, addToBoard } from "./board/board.js";
import { createPlayers, checkIsOver } from "./game/player.js";
import { playersAI, AImoving } from "./game/AI.js";
import readLineSync from "readline-sync"
function playUman() {
    const board = createBoard()
    const players = createPlayers()
    let flag = true
    while (flag) {
        console.log(`mow is turn of ${players[0].name}`);
        printboard(board)
        let row = Number(readLineSync.question("enter row: "))
        let col = Number(readLineSync.question("enter col: "))
        if (board[row][col] != "_") {
            console.log("is not vacant");
            continue
        }
        board[row][col] = players[0].sign
        let check = checkIsOver(board, players)
        if (check === true) {
            printboard(board)
            break
        }
        while (true) {
            console.log(`mow is turn of ${players[1].name}`);
            printboard(board)
            row = readLineSync.question("enter row: ")
            col = readLineSync.question("enter col: ")
            if (board[row][col] != "_") {
                console.log("is not vacant");
                continue
            }
            break
        }
        board[row][col] = players[1].sign
        check = checkIsOver(board, players)
        if (check === true) {
            printboard(board)
            break
        }

    }

}
function playAI(){
    const board = createBoard()
    const players = playersAI()
    console.log(players);
    let flag = true
    while (flag) {
        console.log(`mow is turn of ${players[0].name}`);
        printboard(board)
        let row = Number(readLineSync.question("enter row: "))
        let col = Number(readLineSync.question("enter col: "))
        if (board[row][col] != "_") {
            console.log("is not vacant");
            continue
        }
        board[row][col] = players[0].sign
        let check = checkIsOver(board, players)
        if (check === true) {
            printboard(board)
            break
        }
        console.log("now the turn of AI");
        let mov = AImoving(board,players[1],players[0])
        console.log(mov);
        board[mov[mov.length-2]][mov[mov.length-1]] = players[1].sign
        printboard(board)
         check = checkIsOver(board, players)
        if (check === true) {
            printboard(board)
            break
        }
    }
}
function play(){
    let choise = readLineSync.question("if you wont ai enter 'AI'")
    if (choise === "AI"){
        playAI()
        return
    }
    playUman()
}

