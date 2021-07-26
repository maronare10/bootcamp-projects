const LITRO_POR_GALON = 3.785;

let salir = false;

// // WHILE CON FUNCIONES

function obtenerGanancia (litros, precioPorGalon, litroPorGalon) {
  const cantidadDeGalonesQueProduce = litros / litroPorGalon;
  const ganancia = precioPorGalon * cantidadDeGalonesQueProduce;
  return ganancia;
}

while (salir === false) {
  const litros = prompt("Ingrese los litros que produce por día");
  const precioPorGalon = prompt("Ingrese el precio por galón");

  const resultado = obtenerGanancia(litros, precioPorGalon, LITRO_POR_GALON);

  alert(`La ganancia por la producción de ${litros} litros a S/ ${precioPorGalon} es ${resultado}`);

  salir = confirm('¿Desea salir?');
}

// // WHILE CON VARIABLES

// while (salir === false) {
//   const litros = prompt("Ingrese los litros que produce por día");
//   const precioPorGalon = prompt("Ingrese el precio por galón");

//   const cantidadDeGalonesQueProduce = litros / LITRO_POR_GALON;
//   const ganancia = precioPorGalon * cantidadDeGalonesQueProduce;

//   alert(`La ganancia por la producción de ${litros} litros a S/ ${precioPorGalon} es ${ganancia}`);

//   salir = confirm('¿Desea salir?');
// }


// let numero = 1

// while (numero <= 5) {
//   console.log(numero);
//   numero = numero + 1;
//   // numero += 1;
//   // numero++;
//   // ++numero;
// }

// do {
//   console.log(numero);
//   numero = numero + 1;
// } while (numero <=5)


// const LITRO_POR_GALON = 3.785;
// const litros = prompt ("Ingrese los litros que produce por día");
// const precioPorGalon = prompt ("Ingrese el precio por galón");

// // USANDO SOLO VARIABLES

// const cantidadDeGalonesQueProduce = litros / LITRO_POR_GALON;

// const ganancia = precioPorGalon * cantidadDeGalonesQueProduce;

// alert(`La ganancia por la producción de ${litros} litros a S/ ${precioPorGalon} es ${ganancia}`);

// USANDO FUNCIONES

// function obtenerGanancia (litros, precioPorGalon, litroPorGalon) {
//   const cantidadDeGalonesQueProduce = litros / litroPorGalon;
//   const ganancia = precioPorGalon * cantidadDeGalonesQueProduce;
//   return ganancia;
// }

// const resultado = obtenerGanancia(litros, precioPorGalon, LITRO_POR_GALON);

// alert(`La ganancia por la producción de ${litros} litros a S/ ${precioPorGalon} es ${resultado}`);


// // CON FUNCTION
// const obtenerGanancia = function (litros, precioPorGalon, litroPorGalon) {
//   const cantidadDeGalonesQueProduce = litros / litroPorGalon;
//   const ganancia = precioPorGalon * cantidadDeGalonesQueProduce;
//   return ganancia;
// }

// const resultado = obtenerGanancia(litros, precioPorGalon, LITRO_POR_GALON);

// alert(`La ganancia por la producción de ${litros} litros a S/ ${precioPorGalon} es ${resultado}`);


// // CON ARROW FUNCTION

// const obtenerGanancia = (litros, precioPorGalon, litroPorGalon) => {
//   const cantidadDeGalonesQueProduce = litros / litroPorGalon;
//   const ganancia = precioPorGalon * cantidadDeGalonesQueProduce;
//   return ganancia;
// }

// const resultado = obtenerGanancia(litros, precioPorGalon, LITRO_POR_GALON);

// alert(`La ganancia por la producción de ${litros} litros a S/ ${precioPorGalon} es ${resultado}`);