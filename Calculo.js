let porc = document.querySelector("#porc")

let num = document.querySelector("#num")

const cal = document.querySelector("#cal")

let resul = document.querySelector("#resultado")

function calcularPorcentagem(){

    let porcentagem = porc.value
    let numero = num.value

    if(porcentagem == '' || numero == ''){

        resul.innerText = `Preencha os dois campos acima`

    }else{
        let calculo = Number(porcentagem) * Number(numero) / 100

        resul.style.fontWeight  = 800
        resul.style.boxShadow = "0px 0px 10px #0000002c"
        resul.innerText = `Resultado: ${porcentagem}% de ${numero} é ${calculo}`
    }
    
}