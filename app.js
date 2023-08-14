require("colors");
const { showMenu, pause } = require("./helpers/messages");

console.clear();

const main = async () => {
  console.log("Hola");

  let opt = ""; // inicializamos la variable

  do {
    opt = await showMenu(); // lo que sea que resuelva, va a caer en opt
    console.log({ opt });

    if (opt !== '0') await pause(); // ahora si ingresamos 0 direcatmente termina la ejecucion
    
  } while (opt !== "0");
};

main();
