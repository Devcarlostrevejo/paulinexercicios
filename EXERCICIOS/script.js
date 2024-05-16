function soma(){
    let num1 = document.getElementById("n1").value;
    let num2 = document.getElementById("n2").value;
    let res = document.getElementById("res");
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let resultado = num1 + num2;
    res.innerHTML="O resultado da soma é: "+resultado;
}   