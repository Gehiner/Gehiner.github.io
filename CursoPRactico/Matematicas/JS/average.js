const PlatziMath={};

PlatziMath.isPairArray= function isPairArray(arrray){
    return arrray.length % 2 == 0 ? true : false; 
}

PlatziMath.calculateAverage= function calculateAverage(arrray){
    let calculatedAverage =arrray.reduce((a,b)=> a+b);
    return calculatedAverage/arrray.length;
}

PlatziMath.calculateNumberHalfArray= function calculateNumberHalfArray(arrray){
    return Math.floor(arrray.length / 2);
}

PlatziMath.sortArray= function sortArray(unorderedArrray){
    const arrayOrdered = unorderedArrray.sort((a,b)=> a-b);
    return arrayOrdered;
}

PlatziMath.calculateHalf= function calculateHalf(arrray){
    let listOrdered= PlatziMath.sortArray(arrray);
    let halfArray=PlatziMath.calculateNumberHalfArray(listOrdered)
    if(PlatziMath.isPairArray(listOrdered)){
        return PlatziMath.calculateAverage([listOrdered[halfArray-1], listOrdered[halfArray]])
    }
    else{
        return listOrdered[halfArray];
    }
}


PlatziMath.calculateMode= function calculateMode(array){
    let moda ={"modaItem":0,"repetitions":0};
    while(array.length >0){
        for(let x of array){
            let cont=0;
            let indexOfMode=indexOf(x,array);
            while(indexOfMode != -1){
                cont+=1;
                array.splice(indexOfMode, 1)
                indexOfMode=PlatziMath.indexOf(x,array)
            }
            if(moda.repetitions < cont){
                moda.modaItem=x;
                moda.repetitions=cont;
            }
        }
    } 
    return moda;
}

PlatziMath.indexOf= function indexOf(number, array){
    let index= array.indexOf(number);
    return index;
}

PlatziMath.sortArrayBidimensional= function sortArrayBidimensional(unorderedArrray){
    const arrayOrdered = unorderedArrray.sort((a,b)=> a[1]-b[1]);
    return arrayOrdered;
}


function solution(obj) {
    let array=[];
    for(const[key,value] of Object.entries(obj)){
        array.push({
            "id":key,
            "name":value
        })
    }
    return array;
}

PlatziMath.calculateHarmonicMean= function calculateHarmonicMean(array){
    let reverseOrdenado=PlatziMath.sortArray(array);
    let reverse= reverseOrdenado.map((x)=>1/x);
    let calculatedReverse= reverse.reduce((a,b)=> (a)+(b));
    let HarmonicMean = array.length/calculatedReverse;
    if(HarmonicMean > reverseOrdenado[0] && HarmonicMean < reverseOrdenado[reverseOrdenado.length-1]){
        return HarmonicMean.toFixed(2);
    }
    else{
        return "No se puede calcular la media armonica"
    }
}
