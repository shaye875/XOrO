import readLineSync from "readline-sync"
import { createPlayer } from "./player.js"

export function checkIf3(board, player, AI) {
    let rowCol = []
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (j <= board[i].length - 3) {
                if (board[i][j] === player.sign && board[i][j] === board[i][j + 1]) {
                    rowCol.push(i, j + 2)
                }
            }
            if (j >= 2) {
                if (board[i][j] === player.sign && board[i][j] === board[i][j - 1]) {
                    rowCol.push(i, j - 2)
                }
            }
            if (i >= 2) {
                if (board[i][j] === player.sign && board[i][j] === board[i - 1][j]) {
                    rowCol.push(i - 2, j)
                }
            }
            if (i <= board.length - 3) {
                if (board[i][j] === player.sign && board[i][j] === board[i + 1][j]) {
                    rowCol.push(i + 2, j)
                }
            }
            if (j >= 2 && i >= 2) {
                if (board[i][j] === player.sign && board[i][j] === board[i - 1][j - 1]) {
                    rowCol.push(i - 2, j - 2)
                }
            }
            if (j >= 2 && i <= board.length - 3) {
                if (board[i][j] === player.sign && board[i][j] === board[i - 1][j + 1]) {
                    rowCol.push(i - 2, j + 2)
                }
            }
        }
    }
    return rowCol
}

export function playersAI(){
    let name = readLineSync.question("what is your name: ")
    let signA = readLineSync.question("enter sign: ")
    player = createPlayer(name,signA)
    const signs = ["X", "O"]
    let signB
    for (let s of signs) {
        signB = s
        if (signB != signA) {
            break
        }
    }
    let AI = (createPlayer("AI",signB))
    return [player,AI]
}

export function AImoving(board,AI,player){
   let rowCol = checkIf3(board,AI,player)
   if (rowCol){
    return rowCol
   }
   while (true){
    let row = Math.floor(Math.random()*3)
    let col = Math.floor(Math.random()*3)
    if (board[row][col] != "_"){
        continue
    }
    return [row,col]
   }
}