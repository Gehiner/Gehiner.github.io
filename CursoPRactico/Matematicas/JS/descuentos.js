//Calculo de un descuento

const price=document.querySelector("#price");
const discount=document.querySelector("#discount");
const butttonDiscount =document.querySelector(".butttonDiscount");
const resultPrice =document.querySelector(".resultPrice");
const coupon = document.querySelector("#coupon");

butttonDiscount.addEventListener("click", calculateDiscount);

const cupones={
    "PLATZI2020":20,
    "COLOMBIA2023":50,
    "NUNCAPARESDEAPRENDER":60
}

function calculateDiscount(){
    const precio=parseInt(price.value);
    let descuento =parseInt(discount.value);
    if(!precio || !descuento){
        resultPrice.innerText= "Datos faltantes";
        discount.setAttribute("placeholder", "Ingresar descuento menor que 100");
    }
    else if(descuento> 100){
        resultPrice.innerText= "El descuento debe ser menor que 100";
    }
    else{
        if(coupon.value != ""){
            if(cupones[coupon.value]){
                descuento+=cupones[coupon.value];
            }
            else{
                return resultPrice.innerText= "Cupon invalido";
            }
        }
        const result= precio *(100-descuento)/100;
        resultPrice.innerText=`El precio con descuento es de: ${result}`;
    }
}
console.log(calculateDiscount());  