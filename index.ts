#! usr/bin/env node

import inquirer from "inquirer";

let tasks: string[] = [];

let condition = true;

while (condition) {
  let choice = await inquirer.prompt([
    {
      name: "menu",
      type: "list",
      message: "Command Menu",
      choices: ["Add Task", "Display Task", "Delete Task", "Exit Task"],
    },
  ]);

  if (choice.menu === "Add Task") {
    let task = await inquirer.prompt([
      {
        name: "task",
        type: "input",
        message: "Enter the Task",
      },
    ]);
    tasks.push(task.task);
    console.log("Task added successfully!");
  } else if (choice.menu === "Display Task") {
    if (tasks.length === 0) {
      console.log("NO TASK TO DISPLAY");
    } else {
      console.log("TASKS:");
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task} `);
      });
    }
  } else if (choice.menu === "Delete Task") {
    if (tasks.length === 0) {
      console.log("NO TASK TO DELETE");
    } else {
      let indexNumber = await inquirer.prompt([
        {
          name: "index",
          type: "input",
          message: "Enter the task number to delete:",
        },
      ]);
      let taskIndexNumber = parseInt(indexNumber.index);
      if (taskIndexNumber >= 1 && taskIndexNumber <= tasks.length) {
        const deletedTask = tasks.splice(taskIndexNumber - 1, 1)[0];
        console.log(`Task '${deletedTask}' deleted successfully!`);
      } else {
        console.log("INVALID TASK INDEX");
      }
    }
  } else {
    console.log("EXITING....");
    condition = false; // Loop se bhair
  }
}
