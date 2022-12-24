const botonE = document.getElementById("botonE");
const botonD = document.getElementById("botonD");
const botonC = document.getElementById("botonC");
const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù'1-9]/g;

function limpiar() {
    document.getElementById("texto_resultado").value = "";
    document.getElementById("texto_area").value = "";
}

function encriptar() {
    var nuevoTexto = document.getElementById("texto_area").value;
    nuevoTexto = nuevoTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("texto_resultado").value = nuevoTexto;
}

function desencriptar() {
    var nuevoTexto = document.getElementById("texto_area").value;
    nuevoTexto = nuevoTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("texto_resultado").value = nuevoTexto;
}

function copiar() {
    document.getElementById("texto_area").placeholder = "";
    var textCopia = document.getElementById("texto_resultado");
    textCopia.select();
    document.execCommand("copy");
    limpiar();

}

botonE.addEventListener("click", encriptar);
botonD.addEventListener("click", desencriptar);
botonC.addEventListener("click", copiar);