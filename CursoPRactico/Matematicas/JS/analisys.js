//Analisis personal

function encontrarPersona(personaEnBusqueda){ 
    return salarios.find(persona=>
        persona.name == personaEnBusqueda 
    );
}

function medianaPorPersona(nombrePersona){
    const trabajos= encontrarPersona(nombrePersona).trabajos;
    const salarios =trabajos.map(trabajos=>trabajos.salario)
    return PlatziMath.calculateHalf(salarios);
}

function proyeccionPorPersona(nombrePersona){
    const trabajos= encontrarPersona(nombrePersona).trabajos;
    let porcentajeCrecimiento=[];
    for(let i =1;i < trabajos.length; i++){
        let crecimiento=(trabajos[i].salario-trabajos[i-1].salario)
        let porcentaje=crecimiento/trabajos[i-1].salario;
        porcentajeCrecimiento.push(porcentaje)
    }
    let aumento= (PlatziMath.calculateHalf(porcentajeCrecimiento)*trabajos[trabajos.length-1].salario) + trabajos[trabajos.length-1].salario ;
    return aumento;
}


//Analisis Empresarial

function salariosPorAnoEmpresa(){ 
    const empresas = {};

    for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
        empresas[trabajo.empresa] = {};
        }

        if (!empresas[trabajo.empresa][trabajo.year]) {
        empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
    }
    return empresas;
}

function medianaSalariosPorAnoEmpresa(){
    const medianaSalarios={}
    const empresas=salariosPorAnoEmpresa();
    for(const[key,value] of Object.entries(empresas)){
        medianaSalarios[key]={};
        for(const[keys,values] of Object.entries(value)){
            medianaSalarios[key][keys]=PlatziMath.calculateHalf(values);
        }
    }
    return medianaSalarios;
}

function medianaEmpresaAno(empresa,ano) {
    const empresas=salariosPorAnoEmpresa();
    if(empresas[empresa][ano]){
        return PlatziMath.calculateHalf(empresas[empresa][ano]);
    }
    else{
        return "No existe"
    }
}
let y =medianaSalariosPorAnoEmpresa();
let x = salariosPorAnoEmpresa();
let z=medianaEmpresaAno("MarketerosCOL","2018")

console.log(y,x,z);

function proyeccionEmpresa(nombre){
    const empresas=salariosPorAnoEmpresa();
    if (!empresas[nombre]) {
        console.warn("La empresa no existe")
    }
    else{
        const empresaYear=Object.keys(empresas[nombre])
        const ListaMedianaYears=empresaYear.map((year)=>{
            return medianaEmpresaAno(nombre,year);
        })
        const medianaEmpresaORdenada=PlatziMath.sortArray(ListaMedianaYears);
        let porcentajeCrecimiento=[];
        for(let i =1;i < medianaEmpresaORdenada.length; i++){
            let crecimiento=(medianaEmpresaORdenada[i]-medianaEmpresaORdenada[i-1])
            let porcentaje=crecimiento/medianaEmpresaORdenada[i-1];
            porcentajeCrecimiento.push(porcentaje)
        }
        let aumento= (PlatziMath.calculateHalf(porcentajeCrecimiento)*medianaEmpresaORdenada[medianaEmpresaORdenada.length-1]) + medianaEmpresaORdenada[medianaEmpresaORdenada.length-1] ;
        return aumento;
    }
    
}
console.log(proyeccionEmpresa("MarketerosCOL"));

function medianaGeneral(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const mediana = PlatziMath.calculateHalf(listaMedianas);
    return mediana;
}

function medianaTop10(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name));
    const medianasOrdenadas= PlatziMath.sortArray(listaMedianas);
    const cantidad = listaMedianas.length/10;
    const limite =listaMedianas.length-cantidad;
    const top10=medianasOrdenadas.slice(limite, medianasOrdenadas.length);
    const medianaTop10=PlatziMath.calculateHalf(top10);
    return medianaTop10;
}
