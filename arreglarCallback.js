function suma(numero_uno,numero_dos){
    setTimeout(function(){
       var resultado = numero_uno + numero_dos;
       console.log(resultado)    
       //    return resultado;
    }, 1000);
}
 
 
function sumaBien(numero_uno, numero_dos, callback){
    setTimeout(function(){
        var resultado = numero_uno + numero_dos;
        callback(resultado)
        //    return resultado;
     }, 1000);
    // var y = suma(x,y)

    // completar...
}

sumaBien(2,5, function(resultado){
    console.log(resultado)
})

// Descomentá esta parte para probar la función sumaBien
// sumaBien(2,5,function(resultado){
//     y = 
//     suma(2,5)
//     console.log(resultado);
// })


