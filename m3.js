// Получаем кнопку по её ID
const button = document.getElementById('88f8ded8-52e8-2e04-5e14-1f15a41083c8_bc331c7d-62c0-706e-e91c-a4cbe9ab1cc3_TextBox');

// Добавляем обработчик события наведения мыши
button.addEventListener('mouseenter', () => {
    // Получаем значение текстового поля
    const textFieldValue = button.value.trim();

    // Проверяем, пустое ли значение текстового поля
    if (textFieldValue === '') {
        // Выводим alert, если значение пустое
        alert('Поле пустое!');
    }
});
