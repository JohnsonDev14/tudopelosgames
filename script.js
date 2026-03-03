function mostraAlerta()
{
    alert("ACHOU QUE EU TAVA BRINCANDO");
}

window.onload=function(){
    let botaoAlerta = document.getElementById("ola");

    botaoAlerta.onclick = function () {
        mostraAlerta() ;
    };
}