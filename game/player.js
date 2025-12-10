import readLineSync from "readline-sync"

export function createPlayer(sign) {
    const name = readLineSync.question("wat is your name: ")
    return {
        name: name,
        sign: sign
    }
}

export function createPlayers(){
    const signA = readLineSync.question("what sign player A: ")
    const playerA = createPlayer(signA.toUpperCase())
    const signs = ["X","O"]
    let signB
    for (let s of signs){
        signB = s
        if (signB != signA){
            break
        }
    }
    console.log("now player B");
    const playerB = createPlayer(signB)
    return [playerA,playerB]
}

