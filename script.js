// Functions

const createItemElement = (text) => {
  const containerDiv = document.createElement('div');
  const title = document.createElement('h2');
  const buttonContainer = document.createElement('div');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  title.textContent = text;

  containerDiv.append(title);
  buttonContainer.append(editButton, deleteButton);
  containerDiv.append(buttonContainer);

  return containerDiv;
};
