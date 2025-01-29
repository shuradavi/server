const express = require('express');
const path = require('path');
const fs = require('fs-extra');

// Создаем экземпляр Express приложения
const app = express();

// Определяем порт для прослушивания запросов
const PORT = process.env.PORT || 80;

// Обработчик GET-запросов к корню сайта
app.get('/file/:filename', (req, res) => {
    // Получаем имя файла из параметра запроса
    const filename = req.params.filename;

    // Путь до файла, который нужно отдать клиенту
    const filePath = path.join(__dirname, 'clients', filename);

     // Проверяем существование файла
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('Файл не найден.');
    }

    // Отправляем файл клиенту
    res.sendFile(filePath);

    // Отправляем файл клиенту
    // res.download(filePath);
});


// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://45.129.141.143:${PORT}`);
});