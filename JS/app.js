    let operador = prompt(" que operacion deseas haccer : 1 - Sumar || 2 - Restar || 3 - multiplicar || 4 - dividir");
    let numero1 = Number(prompt(" ingrese la primera operacion"));
    let numero2 = Number(prompt("ingrese la segunda oepracion"));
    let total;

if (operador == 1){
    total = numero1 + numero2;
    alert("el resultado de la suma es de"+ total);
}else if(operador == 2){
    total = numero1 - numero2;
    alert("el tresultado de la resta es de"+total);
}else if(operador == 3){
    total = numero1 * numero2;
    alert("el resultado de la multiplicacion es de"+total);
}else if(operador == 4){
    total = numero1 / numero2;
    alert("el resultado de la division es de"+total);
}else{
    alert("operacion incorrecta")
}

