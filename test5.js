/* Пример стилей для таблицы */
table {
  width: 100%;
  border-collapse: collapse;
}

/* Стили для заголовков столбцов */
th {
  background-color: #f2f2f2;
  text-align: left;
  padding: 8px;
}

/* Стили для строк */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:nth-child(odd) {
  background-color: #ffffff;
}

/* Стили для ячеек */
td {
  padding: 8px;
}

/* Стили для ячеек с определенными значениями */
td[data-options*="Completed"] {
  color: green;
}

td[data-options*="st Error"] {
  color: red;
}
