const botonE = document.getElementById("botonE");
const botonD = document.getElementById("botonD");
const botonC = document.getElementById("botonC");
const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù'1-9]/g;

function limpiar() {
    document.getElementById("texto_resultado").value = "";
    document.getElementById("texto_area").value = "";
}

function encriptar() {
    let nuevoTexto = document.getElementById("texto_area").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    nuevoTexto;
    document.getElementById("texto_resultado").value = nuevoTexto;
}

function desencriptar() {
    let nuevoTexto = document.getElementById("texto_area").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    nuevoTexto;
    document.getElementById("texto_resultado").value = nuevoTexto;
}

function copiar() {
    document.getElementById("texto_area").placeholder = "";
    let textCopi = document.getElementById("texto_resultado");
    textCopi.select();
    document.execCommand("copy");
    document.getElementById("texto_area").value = "";
    document.getElementById("texto_resultado").value = "";

}

function validar() {
    let nuevomensaje = document.getElementById("texto_area").value;
    if (nuevomensaje.match(letras) != null) {
        limpiar();
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Solo letras minúsculas y sin acentos',
            showConfirmButton: true,
            background: '#f8ed8f',
            backdrop: `
            rgba(123, 8, 0, 0.4)
            url("./img/nyan-cat.gif")
            left top
            no-repeat
          `
           
          })
    }
}

botonE.addEventListener("click", validar);
botonE.addEventListener("click", encriptar);

botonD.addEventListener("click", validar);
botonD.addEventListener("click", desencriptar);

botonC.addEventListener("click", copiar);