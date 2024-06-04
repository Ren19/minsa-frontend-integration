  // Función para obtener los objetos que no están presentes en el segundo arreglo
  export const obtenerObjetosFaltantes = (arregloA, arregloB) => {
    return arregloA.filter(objA =>
        !arregloB.some(objB => JSON.stringify(objA) === JSON.stringify(objB))
    );
  }
