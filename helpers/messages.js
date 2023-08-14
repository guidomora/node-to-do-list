require("colors");


// Interfaz

const showMenu = () => {
  return new Promise((resolve) => {
    //cuerpo de la promise
    console.clear();
    console.log("=================================".green);
    console.log("        Select an option       ".yellow);
    console.log("=================================\n".green);

    console.log(`${"1.".green} Create task`);
    console.log(`${"2.".green} List tasks`);
    console.log(`${"3.".green} List completed tasks`);
    console.log(`${"4.".green} List pending tasks`);
    console.log(`${"5.".green} Complete task(s)`);
    console.log(`${"6.".green} Delete task`);
    console.log(`${"0.".green} Exit \n`);

    const readline = require("readline").createInterface({
      // paquete propio de node que permite crear una interfaz para leer datos
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select an option: ", (opt) => {
      // el callback es el answer = la rta
      readline.close(); // hay que cerrarlo pq sino se va a quedar esperando info del usuario
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const readline = require("readline").createInterface({
      // paquete propio de node que permite crear una interfaz para leer datos
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${"ENTER".green} to continue\n`, (opt) => {
      // con el doble \n \n se pausa la app
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
