export function createBoard(){
    const matrix = []
    for (let i = 0;i<3;i++){
        matrix.push([])
        for (let j = 1;j<=3;j++){

         matrix[i].push("_")
        }
    }
    return matrix
}

export function printboard(board){
console.table(board)
}

export function addToBoard(board,row,col,add){
board[row][col] = add
}

