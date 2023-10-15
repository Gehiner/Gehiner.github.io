//Calculo de la altura de un triangulo escaleno

const lado1=parseFloat(document.querySelector("#Lado1").value);
const lado2=parseFloat(document.querySelector("#Lado2").value);
const lado3=parseFloat(document.querySelector("#Lado3").value);
const scaleneTriangleHeight=document.querySelector(".scaleneTriangleHeight");
const buttonScaleneTriangleHeight=document.querySelector(".butttonScaleneTriangleHeight");

buttonScaleneTriangleHeight.addEventListener("click", scaleneTriangleHeightCalculation);

function scaleneTriangleHeightCalculation(){
    const semiperimeter=(lado1+lado2+lado3)/2;
    const area= Math.sqrt((semiperimeter*((semiperimeter-lado1)*(semiperimeter-lado2)*(semiperimeter-lado3))));
    const altura=(2*area)/lado1;
    scaleneTriangleHeight.textContent= `Altura: ${altura}`;
}



