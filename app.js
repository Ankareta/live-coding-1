// Escribe tu código aquí.
console.log("Hola Mundo");
function bigWords(inputString, stringArray) {
    const result = [];
  
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i].length > inputString.length) {
        result.push(stringArray[i]);
      }
    }
  
    return result; 
  }

  //Mi retroalimentacion fue que siempre demuestre lo que se y me note con confianza, que confie en mi misma
  //este ejercicio se va a completar 