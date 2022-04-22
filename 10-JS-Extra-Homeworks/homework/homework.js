// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const matriz = function convertirAMatriz(){
    const array = [];
    for (const key in objeto) {
      array.push([key,objeto[key]]);
    }
    return array;
  }
  return matriz();
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const claveValor = {};
  const array = Array.from(string);
  array.forEach(element => claveValor[element]=claveValor[element]+1 || 1);
  return claveValor;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  function moverMayusculas(){
    let cadenaMayusculas="";
    let cadenaMinusculas="";
    const array = Array.from(s);

    array.forEach(element=> {
      if(element == element.toUpperCase()){
        cadenaMayusculas += element;
      }else{
        cadenaMinusculas += element;
      }
    });

    return cadenaMayusculas+cadenaMinusculas;
  }
  return moverMayusculas();
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function invertirPalabras(){
    const array =str.split(' ');
    const arrayInvertida =[];
    let cadenaInvertida="";
    array.forEach(element => {
      arrayInvertida.push(element.split('').reverse());
    });
    array.length = 0;
    arrayInvertida.forEach(el => {
      array.push(el.toString());
    });
    arrayInvertida.length=0;
    array.forEach(element => {
      arrayInvertida.push(element.replace(/,/ig,''));
    });
    cadenaInvertida = arrayInvertida.toString();
    cadenaInvertida = cadenaInvertida.replace(/,/ig,' ');
    return cadenaInvertida;
  }
  return invertirPalabras();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  function isCapicua(num){
    const numeroString= ""+num;
    const arrayCapicua = Array.from(numeroString);
    const invertida = arrayCapicua.reverse();
    let capicua = invertida.toString();
    capicua = capicua.replace(/,/ig,'');
    if (numeroString === capicua) {
      return "Es capicua";
    }else{
      return "No es capicua";
    }
  }
  return isCapicua(numero);
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  function eliminaABC(){
    const array = Array.from(cadena);

    const cadenaArray = array.filter(filtrar);

    function filtrar(letra){
      return letra != 'a' && letra != 'b' && letra != 'c';
    }

    let cadenaModificada = cadenaArray.toString();
    cadenaModificada = cadenaModificada.replace(/,/ig,'');

    return cadenaModificada;
  }
  return eliminaABC();
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(comparar);

  function comparar(a,b){
    return a.length-b.length;
  }
    
  return arr;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  function union(){
    const nuevoArray = []; 
     arreglo1.forEach(element => {
      if(arreglo2.includes(element)){
        nuevoArray.push(element);
      }
    });
    return nuevoArray;
  }
  return union();
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

