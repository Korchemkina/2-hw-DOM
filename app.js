 // Задание 1: Скрытие и показ текста
// Получаем ссылки на заголовок и кнопку
const title = document.querySelector('h1');
const toggleButton = document.querySelector('#toggleButton');

// Функция для переключения видимости заголовка
toggleButton.addEventListener('click', () => {
  // Проверяем состояние текущего отображения заголовка
  if (title.style.display === 'none' || title.style.display) {
    // Если заголовок скрыт или вообще не задан display,
    // делаем его видимым и меняем надпись на кнопке
    title.style.display = '';
    toggleButton.innerText = 'Скрыть';
  } else {
    // Иначе прячем заголовок и меняем надпись на кнопке
    title.style.display = 'none';
    toggleButton.innerText = 'Показать';
  }
});

  // Задание 2: Изменение цвета текста
  const paragraph = document.querySelector('p');
  const colorButton = document.querySelector('#colorChangeButton');

  colorButton.addEventListener('click', () => {
    paragraph.style.color = 'blue';
  });

  // Задание 3: Динамическое изменение текста
  const header = document.querySelector('h2');
  const changeButton = document.querySelector('#changeTextButton');

  changeButton.addEventListener('click', () => {
    header.textContent = 'Привет, мир!';
  });

  // Задание 4: Поиск и изменение элементов по классу
  const descriptions = document.querySelectorAll('.description');

  descriptions.forEach(descriptions => {
    descriptions.textContent = 'Измененный текст';
  });

  // Задание 5: Работа с querySelectorAll
// Получаем все элементы с классом block__element--modifier
const descriptions1 = document.querySelectorAll('.block__element--modifier');

// Меняем текст каждого элемента
descriptions1.forEach(description => {
  description.textContent = 'Новый текст';
});

  // Задание 6: Добавление нового элемента в DOM
  const addButton = document.querySelector('#addParagraphButton');

  addButton.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
  });

  // Задание 7: Удаление элемента
  const firstDescription = document.querySelector('.description_seven');
  const deleteButton = document.querySelector('#deleteButton');

  deleteButton.addEventListener('click', () => {
    if (firstDescription) {
      firstDescription.remove();
    }
  });