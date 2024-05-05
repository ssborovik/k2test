// Получаем все элементы с классом .theme-entry
const buttons = document.querySelectorAll('.theme-entry');

// Проходимся по каждой кнопке и добавляем обработчик события наведения мыши
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        // Выводим alert при наведении мыши на кнопку
        alert('Вы навели мышь на кнопку!');
    });
});
