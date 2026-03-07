function media(){

    var nota1 = parseFloat(document.getElementById("valor1").value)
    var nota2 = parseFloat(document.getElementById("valor2").value)

    var media = (nota1 + nota2) / 2

    if(media >= 7){
        alert(`Parabens ${media} é o suficiente pra passar`)
    }
    else{
        alert(`vish ${media} não é o suficiente para passar`)
    }
}

