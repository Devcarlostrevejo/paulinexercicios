function soma() {
    let num1 = document.getElementById("pago").value;
    let num2 = document.getElementById("preço").value;
    let res = document.getElementById("res");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let resultado = num1 - num2;
    if (resultado < 0) {
        res.innerHTML = "O valor pago é negativo, digite novamente";
    }
    else { res.innerHTML = "O troco é: " + resultado; }
}   