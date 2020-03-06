function miMap(arrayViejo, callback) {
    var nuevoArray = [];
    for (i=0 ; i++; arrayViejo.length) {
      callback(arrayNuevo[i], arrayViejo[i])
    }
    // Completar: acá se llena el array nuevo
    return nuevoArray;
  }
  

  

function porDos(nro) {
    return nro*2
}

// Probando miMap
arrayViejo = [1,2,3,4,5]
var arrayNuevo = miMap(arrayViejo, function callback(x,y){
  x = porDos(y)
})
console.log(arrayNuevo) // arrayNuevo = [2,4,6,8,10] 
