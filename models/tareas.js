const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    //geter
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      // con keys obtenemos un array de todas las llaves y con el forEach obtenemos cada llave
      const tarea = this._listado[key]; // se busca cada tarea segun su key
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id = ''){
    if (this._listado[id]) { // si existe
        delete this._listado[id] //se borra
    }
  }

  setTasksFromArray(tareas = []) {
    // si no se proporcionan tareas se crea un array vacio
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  // metodo
  crearTarea(desc = "") {
    const tarea = new Tarea(desc); // mandamos la descripcion que recibimos como arg

    // almacenar la tarea en el listado
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log(); //genera como un espacio
    this.listadoArr.forEach((tarea, i) => {
      const indice = `${i + 1}`.green;
      const { desc, completedAt } = tarea;
      const estado = completedAt ? "Completed".green : "Pending".red;
      console.log(`${indice}. ${desc} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas = true) { // muestra las pendientes o completas
    let contador = 0;
    console.log(); //genera como un espacio
    this.listadoArr.forEach((tarea, i) => {
      const { desc, completedAt } = tarea;
      const estado = completedAt ? "Completed".green : "Pending".red;
      if (completadas) { //si completadas es true
        if (completedAt) {// completas
          contador += 1;
          console.log(`${contador.toString().green}. ${desc} :: ${estado}`);
        }
      } else { //si completadas es false
        if (!completedAt) { //pendientes
          contador += 1;
          console.log(`${contador.toString().green}. ${desc} :: ${estado}`);
        }
      }
    });
  }

  toggleCoompletadas(ids = []) { // reciobe el array de tareas completas y completa / descompleta las tareas
    ids.forEach(id => {
        const tarea = this._listado[id] // extraemos esa propiedad por el id
        if (!tarea.completedAt) { // si es null
            tarea.completedAt = new Date().toISOString() // en completedAt se asigna la fecha que se completo
        }
    })
    this.listadoArr.forEach( tarea =>{
        if (!ids.includes(tarea.id)) { //si no existe la tarea con ese id en el array 
           this._listado[tarea.id].completedAt = null; 
        }
    })
  } 
}

module.exports = Tareas;
