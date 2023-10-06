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