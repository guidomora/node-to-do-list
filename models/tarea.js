const {v4: uuidv4} = require("uuid")

class Tarea {
    // propiedades
    id = '';
    desc = ''; //descripcion de la tarea
    completedAt = null

    // el constructor es lo que se va a ejecutar cuando creemos una nueva instancia de la tarea
    // solo vamos a pedir la descripcion de la tarea
    constructor(desc) {
        this.id = uuidv4()
        this.desc = desc // this es igual a la instancia de la clase que se este usando, en este caso es igual al argumento que recibimos
        this.completedAt = null
    }
}

module.exports = Tarea