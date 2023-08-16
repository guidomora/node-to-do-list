const {
  inquireMenu,
  pause,
  leerInput,
  listadoTareasABorrar,
  confirmar,
  mostrarListadoCheckList,
} = require("./helpers/inquirer");
const { saveFile, readFile } = require("./helpers/saveFile");
const Tareas = require("./models/tareas");
require("colors");

console.clear();

const main = async () => {
  let opt = ""; // inicializamos la variable
  const tareas = new Tareas();

  const tareadDB = readFile();

  if (tareadDB) {
    // cargamos las tareas
    tareas.setTasksFromArray(tareadDB);
  }

  do {
    opt = await inquireMenu(); // lo que sea que resuelva, va a caer en opt
    console.log({ opt });

    switch (opt) {
      case "1":
        const desc = await leerInput("Description: ");
        tareas.crearTarea(desc); // se crea la tarea
        break;

      case "2":
        tareas.listadoCompleto();
        break;
      case "3":
        tareas.listarPendientesCompletadas(true);
        break;
      case "4":
        tareas.listarPendientesCompletadas(false);
        break;
        case "5":
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.toggleCoompletadas(ids)
        break;
      case "6": //borrar
        const id = await listadoTareasABorrar(tareas.listadoArr);
        if (id !== "0") { // si no es 0 se ejecuta todo
          const ok = await confirmar("Are you sure?"); //confirmacion
          if (ok) {
            tareas.borrarTarea(id); // se borra la tarea
            console.log("Task successfully deleted!".yellow);
          }
        }

        break;
    }

    saveFile(tareas.listadoArr);

    await pause(); // ahora si ingresamos 0 directamente termina la ejecucion
  } while (opt !== "0");
};

main();
