/* Стили для таблицы */
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
  background-color: #f9f9f9; /* заливка для четных строк */
}

tr:nth-child(odd) {
  background-color: #ffffff; /* заливка для нечетных строк */
}

/* Стили для ячеек */
td {
  padding: 8px;
  border: 1px solid #ddd; /* границы для ячеек */
}

/* Стили для ячеек с определенными значениями */
td[data-options*="Completed"] {
  color: green;
}

td[data-options*="st Error"] {
  color: red;
}
