const { inquireMenu, pause, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
require("colors");


console.clear();

const main = async () => {
  

  let opt = ""; // inicializamos la variable
  const tareas = new Tareas()

  do {
    opt = await inquireMenu() // lo que sea que resuelva, va a caer en opt
    console.log({ opt });

    switch (opt) {
      case '1':
          const desc = await leerInput("Description: ")
          tareas.crearTarea(desc)
        break;
    
        case '2':
          console.log(tareas._listado);
        break;
    }

     await pause(); // ahora si ingresamos 0 direcatmente termina la ejecucion
    
  } while (opt !== "0");
};

main();
