const saudacao = "E aí, pequeno Cesão!"

console.log(saudacao)

function exec() {
    const saudacao = "Oi!"
    return saudacao
}

console.log(saudacao)
console.log(exec())

// Chave, dois pontos, valor; ex: nome: "Cesinha"

const cliente = {
    nome: "Cesinha",
    idade: 19,
    peso: 74,
    endereco: {
        logradouro: "Rua Ambrosina",
        numero: 779
    }
}

console.log(cliente)