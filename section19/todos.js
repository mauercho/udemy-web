let arr = [];
while (true) {
  let todo = prompt("What would you like to do?");
  if (todo === "new") {
    let newTodo = prompt("Enter new todo");
    arr.push(newTodo);
    console.log(`${newTodo} added to list`);
  } else if (todo === "list") {
    console.log("**********");
    for (let i = 0; i < arr.length; i++) {
      console.log(`${i}: ${arr[i]}`);
    }
    console.log("**********");
  } else if (todo === "delete") {
    let index = prompt("Enter index of todo to delete");
    arr.splice(index, 1);
  } else if (todo === "quit") {
    break;
  }
}
