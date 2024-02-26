let toDoList = [
  {name: 'study front', isChecked: false},
  {name: 'study back', isChecked: false},
  {name: 'study design', isChecked: false},
  {name: 'read books', isChecked: false},
];

if (localStorage.getItem('toDoList')) {
  console.log('***', JSON.parse(localStorage.getItem('toDoList'))[4]);
  toDoList = JSON.parse(localStorage.getItem('toDoList'));
}

const wrapper = document.querySelector('.card');
const body = document.querySelector('.body');

const createItemButton = document.getElementById('createItemButton');

createItemButton.addEventListener('click', () => {
  const createItemInput = document.getElementById('createItemInput');
  const newItem = {name: createItemInput.value, isChecked: false};
  toDoList.push(newItem);
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
  document.querySelectorAll('.body').forEach((element, index) => {
    element.remove();
  });
  createCard();
});

const createCard = () => {
  toDoList.forEach(listItem => {
    const div = document.createElement('div');
    div.className = 'body';
    wrapper.appendChild(div);
    const name = document.createElement('div');
    name.className = 'name';
    div.appendChild(name);
    const check = document.createElement('div');
    check.className = 'check';
    name.appendChild(check);
    const title = document.createElement('div');
    title.className = 'title';
    name.appendChild(title);
    const titleText = document.createElement('h3');
    title.appendChild(titleText);
    titleText.textContent = listItem.name;
    const operations = document.createElement('div');
    operations.className = 'operations';
    div.appendChild(operations);
    const remove = document.createElement('div');
    remove.className = 'remove';
    operations.appendChild(remove);
    removeText = document.createElement('i');
    removeText.className = 'fa-solid fa-trash';
    remove.appendChild(removeText);

    const checkIcon = document.createElement('i');
    checkIcon.className = 'fa-solid fa-check';

    if (listItem.isChecked) {
      check.classList.add('checked');
      check.appendChild(checkIcon);
    }

    check.addEventListener('click', function () {
      if (listItem.isChecked === false) {
        check.appendChild(checkIcon);
      } else {
        checkIcon.remove();
      }
      check.classList.toggle('checked');
      listItem.isChecked = !listItem.isChecked;
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
    });

    remove.addEventListener('click', function () {
      const itemToRemove = toDoList.indexOf(listItem);

      if (itemToRemove !== -1) {
        toDoList.splice(itemToRemove, 1);
        localStorage.setItem('toDoList', JSON.stringify(toDoList));
        div.remove();
      }
    });
  });
  console.log(toDoList);
};

createCard();
