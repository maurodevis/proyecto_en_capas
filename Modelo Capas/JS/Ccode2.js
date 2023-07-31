// Capa de negocio - lógica.
//llamada de Id's.
function calcular(){
    const num1= parseFloat(document.getElementById('num1').value);
    const num2= parseFloat(document.getElementById('num2').value);
    const num3= parseFloat(document.getElementById('num3').value);
    const num4= parseFloat(document.getElementById('num4').value);
    const num5= parseFloat(document.getElementById('num5').value);
    const num6= parseFloat(document.getElementById('num6').value);
    let mensaje= document.getElementById('alerta')
    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || isNaN(num6)){
        mensaje.textContent= 'Para poder continuar debe ingresar valores.'
        mensaje.style.color= "red";
        return;
    } else{
        mensaje.textContent = "Datos válidos   ";
        mensaje.style.color = "blue";
    }

    const resultado = Sumar(num1, num2);
    mostrarresultado(resultado)

    const result= Restar(num3,num4);
    mostrarResult(result)

    const Resultado= Multi(num5, num6);
    mostrarResultado(Resultado)
}

//Mostrar los resultados.

function mostrarresultado(resultado_suma){
    document.getElementById('resultado_suma').innerText = `El resultado es: ${resultado_suma}`;
}

function mostrarResult(resultado_resta){
    document.getElementById('resultado_resta').innerText = `El resultado es: ${resultado_resta}`;
}

function mostrarResultado(Resultado_divi){
    document.getElementById('Resultado_divi').innerText = `El resultado es: ${Resultado_divi}`;
}

//Funciones de la calculadora.

function Sumar(num1, num2){
    return num1 + num2;
}

function Restar(num3, num4){
    return num3 - num4;
}

function Multi(num5, num6){
    return num5 * num6;
}