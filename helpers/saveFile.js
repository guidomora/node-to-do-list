const fs = require('fs')
const file = './db/data.json'

const saveFile = (data) => {

    fs.writeFileSync(file, JSON.stringify(data)) // lo tenemos que pasar a string
}

const readFile = () => {
    if (!fs.existsSync(file)) { // si no existe el archivo
        return null;
    }

    const info = fs.readFileSync(file, {encoding:"utf-8"}) // hay que aclarar el encoding para que se lea todo bien
    const data = JSON.parse(info)

    return data;
}

module.exports = {
    saveFile,
    readFile
}