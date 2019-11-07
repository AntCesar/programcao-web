{
    {
        {
            {
                var sera = "Será???"
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 1234
    console.log(local)
}

teste()
// console.log(local)



// Obs1: Escopo do VAR é apenas na função
// Obs2: Escopo do LET é no bloco e na função


let numero = 1

{
    let numero = 2
    console.log("dentro = ", numero)
}

console.log("fora = ", numero)