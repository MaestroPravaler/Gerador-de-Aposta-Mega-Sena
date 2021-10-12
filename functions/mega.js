export function Mega(qtde = 6, numeros = []){
    qtde = +qtde // + convert para valor numérico.

    if (qtde < 6 && qtde > 60){
        throw "Quantidade Inválida"
    }

    if (numeros.length === qtde) {
        // arrow function (n1, n2) => n1 - n2) ordena de forma crescente
        // (n1, n2) => n2 - n1) ordena de forma decrescente
        return numeros.sort((n1, n2) => n1 - n2); 
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    
    if (!numeros.includes(numeroAleatorio)){
        return Mega(qtde, [...numeros, numeroAleatorio])
    } else {
        return Mega(qtde, numeros)
    }
}
console.log(Mega(30))