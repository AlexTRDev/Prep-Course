// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  const copia = [];
  array.forEach(element => {
    copia.push(element+1);
  });
  return copia;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let cadena="";
  palabras.forEach(element => {
    if (palabras.indexOf(element)==0){
      cadena = palabras[0];
    } else if (palabras.length != 2 && palabras.indexOf(element)==palabras.length-1) {
      cadena +=" "+element;
    }else{
      cadena += " " + element;
    }
  });
  return cadena;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let total=0;
  numeros.forEach(element => {
    total+=element;
  });
  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let total = 0;
  resultadosTest.forEach(element => {
    total+=element;
  });
  return total/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor=0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]>= mayor) {
      mayor = numeros[i];
    }else{
      mayor = mayor;
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let total=1; 
  /*   const product = multiplicarArgumentos(5, 5);
  const product2 = multiplicarArgumentos();
  const product3 = multiplicarArgumentos(3, 3, 3, 3);
  const product4 = multiplicarArgumentos(1);
  const product5 = multiplicarArgumentos(10, 0, 10);*/
  
  if(arguments.length==0){
      return 0;
    }else if(arguments.length==1){
      return arguments[0];
    }else{
      for (let index = 0; index < arguments.length; index++) {
        total *=arguments[index];
      }
    }
  return total;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  function cantidad(){
    let mayores = 0;
    for (const iterator of arreglo) {
      if (iterator>18) {
        mayores+=1;
      }
    }
    return mayores;
  }
  return cantidad();
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  let dia = function esteDiaEs(){
    switch(numeroDeDia){
      case 1: return "Es fin de semana";
        break;
      case 2: return "Es dia Laboral";
        break;
      case 3: return "Es dia Laboral";
        break;
      case 4: return "Es dia Laboral";
        break;
      case 5: return "Es dia Laboral";
        break;
      case 6: return "Es dia Laboral";
        break;
      case 7: return "Es fin de semana";
        break;  
    }
  }
  return dia();
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  function empieza9(){
    return n.toString().charAt(0)=='9';
  }
  return empieza9();
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  function sonIguales(){
    let isIgual = false;
    for (let index = 0; index < arreglo.length; index++) {
      if (arreglo[0] == arreglo[index]) {
        isIgual = true;
      }else{
        isIgual= false;
        break;
      }
    }
    return isIgual;
  }
  return sonIguales();
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArray = []; 
  if (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre")) {
    array.forEach(element => {
      if(element == "Enero"){
        nuevoArray.push(element);
      }else if(element == "Marzo") {
        nuevoArray.push(element);
      }else if(element == "Noviembre"){
        nuevoArray.push(element);
      }
    });
    return nuevoArray;
  }else{
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevoArray=[];
  array.forEach(element => {
    if (element>100) {
      nuevoArray.push(element);
    }
  });
  return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevoArray = [];
  let mensaje="";
  for (let index = 1; index <= 10; index++) {
    numero +=2;
    nuevoArray.push(numero);
    if (nuevoArray[nuevoArray.length-1] == index) {
      mensaje = "Se interrumpió la ejecución";
      break;
    }
  }
  return mensaje!=""? mensaje : nuevoArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevoArray = [];
  for (let index = 0; index < 10; index++) {
    if (index == 5) {
      continue;
    }
    numero = numero+2;
    nuevoArray.push(numero);
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
