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
    let signA = readLineSync.question("enter sign: ")
    let player = createPlayer(signA)
    console.log(player)
    const signs = ["X", "O"]
    let signB
    for (let s of signs) {
        signB = s
        if (signB != signA) {
            break
        }
    }
    let AI = (createPlayer(signB))
    return [player,AI]
}

export function AImoving(board,AI,player){
   let rowCol = checkIf3(board,player,AI)
   if (rowCol.length>0){
    return rowCol
   }
   let row
   let col
   while (true){
    row = Math.floor(Math.random()*3)
    col = Math.floor(Math.random()*3)
    console.log(row,col);
    if (board[row][col] != "_"){
        continue
    }
    break
   }
   return [row,col]
}