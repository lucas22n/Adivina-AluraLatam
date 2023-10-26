const adivina = () => {
  let aleatorio = Math.round(Math.random() * 11);
  let ingreso = 99999999;
  let contador = parseInt(0);
  alert("En caso de querer salir ingrese el numero -1");

  while (ingreso != aleatorio) {
    contador += 1;
    // En caso de querer mostrar el numero correcto o realizar "TRAMPA", eliminar el comentario de la siguiente linea.
    // alert(`El aleatorio es ${aleatorio}`);
    ingreso = parseInt(
      prompt("Ingrese un numero entre 1 y 10 para adivinar si es el correcto!")
    );
    alert(`Usted ingresó ${ingreso}`);

    if (ingreso == -1) {
      alert("Exit...");
      break;
    } else if (contador == 10) {
      alert("Usted ha alcanzado el numero de intentos disponibles");
      break;
    } else if (ingreso < aleatorio) {
      alert("Lo siento, prueba nuevamente con un numero mas grande! :(");
      alert(`Numero de intentos:  ${parseInt(contador)}`);
    } else if (ingreso > aleatorio) {
      alert("Lo siento, prueba nuevamente con un numero mas chico! :(");
      alert(`Numero de intentos:  ${parseInt(contador)}`);
    } else if (ingreso == aleatorio) {
      alert("Has acertado, Felicitaciones!");
      break;
    }
  }
};
