// Functions

const createItemElement = (text) => {
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('item-component');
  const title = document.createElement('h2');
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('buttons');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => containerDiv.remove());

  title.textContent = text;

  containerDiv.append(title);
  buttonContainer.append(deleteButton);
  containerDiv.append(buttonContainer);

  return containerDiv;
};

// Consts
const addItemButton = document.querySelector('.input button');
const groceryItemsContainer = document.querySelector('.grocery-items');

// Event Listeners

addItemButton.addEventListener('click', () => {
  const text = document.querySelector('.input input').value;
  document.querySelector('.input input').value = '';
  const divToAdd = createItemElement(text);
  groceryItemsContainer.append(divToAdd);
});
