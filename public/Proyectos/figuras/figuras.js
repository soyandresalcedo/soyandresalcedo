// Código Cuadrado
//console.group("Cuadrado")
//const ladoCuadrado= 5;
//console.log("el lado del cuadrado mide: " + ladoCuadrado)

//const perimetroCuadrado= ladoCuadrado * 4;
//console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm")

//const areaCuadrado= ladoCuadrado * ladoCuadrado;
// console.log("el área del cuadrado es: " + areaCuadrado + "cm^2")

function perimetroCuadrado (lado){

    return lado * 4
}

function areaCuadrado (lado){

    return lado * lado;
}

//perimetroCuadrado();



console.groupEnd();

// Código Triangulo
/*console.group("Triangulo")

const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const baseTriangulo= 4;
const alturaTriangulo= 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm")


console.log("el lado del triangulo mide: " + ladoTriangulo1 + "cm " + ladoTriangulo2 + "cm " + baseTriangulo + "cm")

const perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro del triangulo mide: " + perimetroTriangulo)

const areaTriangulo= (baseTriangulo * alturaTriangulo) / 2;
console.log("el área del triangulo mide: " + areaTriangulo)*/

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){

    return (base * altura)/ 2;

}


console.groupEnd()

console.group("Circulo")

/* const Circulo;


const radioCirculo= 4;

//diametro

const diametroCirculo= radioCirculo * 2;

console.log(" el diametro del circulo es: " + diametroCirculo)

//Pi

const PI= Math.PI;


//Perimetro Circulo

const perimetroCirculo= diametroCirculo * PI;
console.log(" el perimetro del circulo es: " + perimetroCirculo)

//Area Circulo

const areaCirculo= (radioCirculo * radioCirculo) * PI;
console.log(" el área del circulo es: " + areaCirculo)*/

function diametroCirculo(radio){

    return radio * 2;

}

function perimetroCirculo(radio){

    const diametro= diametroCirculo(radio);
    return diametro * Math.PI;

}

function areaCirculo(radio){

    return (radio * radio) * Math.PI;

}

console.groupEnd()

//Funciones embebidas desde el HTML

function calcularPerimetroCuadrado(){

   const input = document.getElementById("inputCuadrado");
   const value = input.value;

   const perimetro = perimetroCuadrado(value);
   alert(perimetro);

    
}

function calcularAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
 
    const area = areaCuadrado(value);
    alert(area);
 
     
 }