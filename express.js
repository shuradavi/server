const express = require('express');
const path = require('path');
const fs = require('fs-extra');

// Создаем экземпляр Express приложения
const app = express();

// Определяем порт для прослушивания запросов
const PORT = process.env.PORT || 3000;

// Обработчик GET-запросов к корню сайта
app.get('/', (req, res) => {
    // Путь до файла, который нужно отдать клиенту
    const filePath = path.join(__dirname, 'clients', 'wg0-client-admin2.conf');

    // Проверяем существование файла
    if (!fs.existsSync(filePath)) {
        return res.status(404).send('Файл не найден.');
    }

    // Отправляем файл клиенту
    res.sendFile(filePath);
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});