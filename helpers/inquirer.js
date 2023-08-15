const inquirer = require("inquirer");
require("colors");

const questions = [
  // como se crean las opciones de la interfaz con inquirer
  {
    type: "list",
    name: "option",
    message: "what do you want to do?",
    choices: [
      // las opciones y su valor
      {
        value: "1",
        name: `${"1.".green} Create task`,
      },
      {
        value: "2",
        name: `${"2.".green} List tasks`,
      },
      {
        value: "3",
        name: `${"3.".green} List completed tasks`,
      },
      {
        value: "4",
        name: `${"4.".green} List pending tasks`,
      },
      {
        value: "5",
        name: `${"5.".green} Complete task(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Delete task`,
      },
      {
        value: "0",
        name: `${"0.".green} Exit`,
      },
    ],
  },
];

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Press ${"ENTER".green} to continue`,
    },
  ];
  console.log("\n"); // oara dejar un espacio entre el mensaje y la linea de arriba
  await inquirer.prompt(question);
};

const inquireMenu = async () => {
  console.clear();
  console.log("=================================".green);
  console.log("        Select an option       ".yellow);
  console.log("=================================\n".green);

  const { option } = await inquirer.prompt(questions); // desestructuramos la question para que no retorne un objeto
  // y solo traiga el value

  return option;
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) { // validaciond el mensaje
        if (value.length === 0 ) {
            return "Please enter a value"
        }
        return true
      }
    },
  ];

  const {desc} = await inquirer.prompt(question)
  return desc
};

module.exports = {
  inquireMenu,
  pause,
  leerInput
};
