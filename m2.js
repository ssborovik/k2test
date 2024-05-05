// Получаем все элементы с классом .SFC SourceCode-Forms-Controls-Web-Button
const buttons = document.querySelectorAll('.SFC.SourceCode-Forms-Controls-Web-Button');

// Проходимся по каждой кнопке и добавляем обработчик события наведения мыши
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        // Выводим alert при наведении мыши на кнопку
        alert('Вы навели мышь на кнопку!');
    });
});
