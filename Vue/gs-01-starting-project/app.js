const buttonEl = document.querySelector('button');
const inputEL = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEL.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEL.value = '';
}

buttonEl.addEventListener('click', addGoal);
