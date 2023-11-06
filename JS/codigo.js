function sumar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 + num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function restar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 - num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = num1 * num2;
    document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
}

function dividir() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    if (num2 !== 0) {
        let resultado = num1 / num2;
        document.getElementById('resultado').textContent = 'Resultado: ' + resultado;
    } else {
        document.getElementById('resultado').textContent = 'No se puede dividir por cero';
    }
}
