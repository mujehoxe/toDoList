const toDoList = [
  { name: "study front", isChecked: null },
  { name: "study back", isChecked: null },
  { name: "study design", isChecked: null },
  { name: "read books", isChecked: null },
];
console.log("hey");
console.log("hey");
console.log("hey");
console.log("hey");
const wrapper = document.querySelector(".card");
const body = document.querySelector(".body");

const createCard = () => {
  toDoList.forEach((listItem) => {
    const div = document.createElement("div");
    div.className = "body";
    wrapper.appendChild(div);
    const name = document.createElement("div");
    name.className = "name";
    div.appendChild(name);
    const check = document.createElement("div");
    check.className = "check";
    name.appendChild(check);
    const title = document.createElement("div");
    title.className = "title";
    name.appendChild(title);
    const titleText = document.createElement("h3");
    title.appendChild(titleText);
    titleText.textContent = listItem.name;
    const operations = document.createElement("div");
    operations.className = "operations";
    div.appendChild(operations);
    const remove = document.createElement("div");
    remove.className = "remove";
    operations.appendChild(remove);
    removeText = document.createElement("i");
    removeText.className = "fa-solid fa-trash";
    remove.appendChild(removeText);
    console.log(div);

    const checkIcon = document.createElement("i");
    checkIcon.className = "fa-solid fa-check";

    check.addEventListener("click", function () {
      if (listItem.isChecked === false || listItem.isChecked === null) {
        listItem.isChecked = true;
        check.classList.add("checked");
        check.appendChild(checkIcon);
      } else {
        listItem.isChecked = false;
        check.classList.remove("checked");
        checkIcon.remove();
      }
    });
    remove.addEventListener("click", function () {
      const itemToRemove = toDoList.indexOf(listItem);

      if (itemToRemove !== -1) {
        toDoList.splice(itemToRemove, 1);
        div.remove();
      }
    });
  });
  console.log(toDoList);
};

createCard();
