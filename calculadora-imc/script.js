function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;

    if (peso === "" || altura === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    var imc = peso / (altura * altura);
    var resultado = document.getElementById("resultado");
    resultado.textContent = "Seu IMC é: " + imc.toFixed(2);
}
