const Tarea = require("./tarea");


class Tareas {
    _listado = {};

    constructor() {
        this._listado = {}
    }

    // metodo
    crearTarea(desc = '') {
        const tarea =  new Tarea(desc) // mandamos la descripcion que recibimos como arg

        // almacenar la tarea en el listado
        this._listado[tarea.id] = tarea

    }
}

module.exports = Tareas