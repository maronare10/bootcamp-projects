let salir = false;

const HAMBURGUESAS = {
  sencilla: 20,
  doble: 25,
  triple: 28
}

while (salir === false) {
  const numeroDeHamburguesas = Number(prompt("Ingrese el número de hamburguesas que desea"));
  
  // Validaciones
  if (!numeroDeHamburguesas) {
    // FALSE: 0, null, undefined, false, ""
    // TRUE: >0, "hola"
    alert('El número de hamburguesas es incorrecto. Ingresalo nuevamente.');
    continue;
  }

  const tipoDeHamburguesa = prompt("Ingrese el tipo de hamburguesas que desea, sencilla, doble o triple:");
  const tipoDeHamburguesaSeleccionada = tipoDeHamburguesa.toLowerCase();

  if (
    tipoDeHamburguesaSeleccionada !== 'sencilla' &&
    tipoDeHamburguesaSeleccionada !== 'doble' &&
    tipoDeHamburguesaSeleccionada !== 'triple'
  ) {
    alert('El tipo de hamburguesas es incorrecto. Ingresalo nuevamente.');
    continue;
  }

  const pagaConTarjeta = confirm("¿Desea pagar con tarjeta?");

  const precioDeHamburguesa = HAMBURGUESAS[tipoDeHamburguesaSeleccionada];
  let cargoPorUsoDeTarjeta = 0;
  const totalSinCargo = numeroDeHamburguesas * precioDeHamburguesa;

  if (pagaConTarjeta) {
    cargoPorUsoDeTarjeta = totalSinCargo * 0.05;
  }

  const totalConCargo = totalSinCargo + cargoPorUsoDeTarjeta;

  alert(`Usted debe pagar S/ ${totalConCargo} por ${numeroDeHamburguesas} hamburguesas ${tipoDeHamburguesaSeleccionada}s.`);

  salir = confirm('¿Desea salir?');
}
