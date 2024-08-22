document.getElementById('aquielresultado').style.display = 'none';
document.getElementById('botonmostrar').style.display = 'none';

function limpiarTexto() {
    document.getElementById('texto').value = "";
}

function mostrarResultado() {
    document.getElementById('aquielresultado').style.display = 'block';
    document.getElementById('botonmostrar').style.display = 'block';
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('inicio1').style.display = 'none';
    document.getElementById('inicio2').style.display = 'none';
}

function cambiarTexto(textoResultado) {
    let texto = document.getElementById('aquielresultado');
    texto.innerHTML = textoResultado;
}

function copiarTexto() {
    let texto = document.getElementById("aquielresultado").textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}

function obtenerIntento() {
    let encriptar = document.getElementById('texto').value;
    let encriptarDivido = encriptar.split("");

    let posicionA = [];
    let posicionE = [];
    let posicionI = [];
    let posicionO = [];
    let posicionU = [];

    function cambiarVocales(vocal, cambio, posicion) {

        encriptarDivido.forEach(function (elemento, indice) {
            if (elemento === vocal) {
                posicion.push(indice);
            }
        });
        posicion.forEach(function (indice) {
            encriptarDivido[indice] = cambio;
        });

    }

    cambiarVocales("e", "enter", posicionE);
    cambiarVocales("a", "ai", posicionA);
    cambiarVocales("i", "imes", posicionI);
    cambiarVocales("o", "ober", posicionO);
    cambiarVocales("u", "ufat", posicionU);
    cambiarTexto(encriptarDivido.join(""));

    mostrarResultado();
    limpiarTexto();
}


//desencriptar

function desencriptar() {
    let textoEncriptado = document.getElementById('texto').value;

    let filtroE = textoEncriptado.replaceAll("enter", "e");
    let filtroA = filtroE.replaceAll("ai", "a");
    let filtroI = filtroA.replaceAll("imes", "i");
    let filtroO = filtroI.replaceAll("ober", "o");
    let filtroU = filtroO.replaceAll("ufat", "u");

    cambiarTexto(filtroU);
    mostrarResultado();
    limpiarTexto();
}




