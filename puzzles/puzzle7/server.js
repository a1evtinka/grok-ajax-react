// Подключение библиотеки express
const express = require('express');

// Создание приложения express
const app = express();

// Роут, отвечающий на запрос GET /query-as-string
app.get('/query-as-string', (req, res) => {
  // Отправляем в ответ query-строку
  return res.send(req.url.replace(/.+(?=\?)/));
});

// Запуск сервера по порту 3000
app.listen(3000);
