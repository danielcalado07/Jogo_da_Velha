
const arrayPosicoes = [];
var vez = "x";
var cont = 0;
var podeJogar = true;
function jogarXouO(event) {

    if (arrayPosicoes[event - 1] == null && podeJogar == true) {
        if (vez == "x") {
            var jogadorX = document.getElementById(event);
            jogadorX.style.backgroundImage = "url(imagens/x.png)";
            jogadorX.style.backgroundPosition = "center";
            jogadorX.style.backgroundSize = "80px"
            jogadorX.style.backgroundRepeat = "no-repeat";
            arrayPosicoes[event - 1] = vez;
            vez = "o";
            cont++;
            verificaVencedor();
        } else {
            var jogadorX = document.getElementById(event);
            jogadorX.style.backgroundImage = "url(imagens/o.png)";
            jogadorX.style.backgroundPosition = "center";
            jogadorX.style.backgroundSize = "80px"
            jogadorX.style.backgroundRepeat = "no-repeat";
            arrayPosicoes[event - 1] = vez;
            vez = "x";
            cont++;
            verificaVencedor();
        }
    }
}

var empate = true;
function verificaVencedor() {
    if (arrayPosicoes[0] == "x" && arrayPosicoes[1] == "x" && arrayPosicoes[2] == "x" ||
        arrayPosicoes[3] == "x" && arrayPosicoes[4] == "x" && arrayPosicoes[5] == "x" ||
        arrayPosicoes[6] == "x" && arrayPosicoes[7] == "x" && arrayPosicoes[8] == "x" ||
        arrayPosicoes[0] == "x" && arrayPosicoes[3] == "x" && arrayPosicoes[6] == "x" ||
        arrayPosicoes[1] == "x" && arrayPosicoes[4] == "x" && arrayPosicoes[7] == "x" ||
        arrayPosicoes[2] == "x" && arrayPosicoes[5] == "x" && arrayPosicoes[8] == "x" ||
        arrayPosicoes[0] == "x" && arrayPosicoes[4] == "x" && arrayPosicoes[8] == "x" ||
        arrayPosicoes[2] == "x" && arrayPosicoes[4] == "x" && arrayPosicoes[6] == "x") {
        var textVenc = document.getElementById("textVencedor");
        textVenc.innerHTML = "JOGADOR ''X'' FOI O VENCEDOR!";
        empate = false;
        podeJogar = false;
    }
    else if (arrayPosicoes[0] == "o" && arrayPosicoes[1] == "o" && arrayPosicoes[2] == "o" ||
        arrayPosicoes[3] == "o" && arrayPosicoes[4] == "o" && arrayPosicoes[5] == "o" ||
        arrayPosicoes[6] == "o" && arrayPosicoes[7] == "o" && arrayPosicoes[8] == "o" ||
        arrayPosicoes[0] == "o" && arrayPosicoes[3] == "o" && arrayPosicoes[6] == "o" ||
        arrayPosicoes[1] == "o" && arrayPosicoes[4] == "o" && arrayPosicoes[7] == "o" ||
        arrayPosicoes[2] == "o" && arrayPosicoes[5] == "o" && arrayPosicoes[8] == "o" ||
        arrayPosicoes[0] == "o" && arrayPosicoes[4] == "o" && arrayPosicoes[8] == "o" ||
        arrayPosicoes[2] == "o" && arrayPosicoes[4] == "o" && arrayPosicoes[6] == "o") {
        var textVenc = document.getElementById("textVencedor");
        textVenc.innerHTML = "JOGADOR ''O'' FOI O VENCEDOR!";
        empate = false;
        podeJogar = false;
    }
    else if (cont == 9 && empate == true) {
        var textVenc = document.getElementById("textVencedor");
        textVenc.innerHTML = "DEU VELHA!!!";
    }
}
function reiniciar() {
    location.reload()
}