const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io'); // Импортируем Socket.IO

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

let rubrics = [
    { name: "Шапка", component: 'Header', news: [{id: 'safsecce', info: {headerImgLink: {content: 'https://pic.mos.ru/srv/images/Digest25/digest-header-placeholder.png',},},}]},
    { name: "Внешние новости", component: "Mos", news: [{id: 'dsndmsndms', info: {title: {content: 'Заголовок новости', characters: 168}, externalLink: {content: 'Внешняя ссылка'}},}]},
    { name: "Внутренние новости", component: "Live", news: [] },
    { name: "Достижения", component: "Achievements", news: [], isTheme: false },
    { name: "Спецматериал", component: "Spec", news: [], isTheme: false },
    { name: "Разработки", component: "Services", news: [], isTheme: false },
    { name: "Комьюнити Баннер", component: "CommunityBanner", news: [{id: 'sdafdcff', info: {appLink: {content:'https://t.me/DITCommunityBot'}, portalLink: {content: 'https://t.me/DITCommunityBot'}}}] },
    { name: "Новости комьюнити", component: "Community", news: [] },
    { name: "Вакансии Баннер", component: "VacancyBanner", news: [{id: 'sdaffasf', info: {appLink: {content:'https://staff.mos.ru/mira/#&id=0&type=rootinternaljoblist'}, portalLink: {content:'https://staff.mos.ru/mira/#&id=0&type=rootinternaljoblist'}}}] },
    { name: "Таланты", component: "Talants", news: [], isTheme: false },
    { name: "Мероприятия", component: "Events", news: [], isTheme: false },
    { name: "Новые продукты и назначения", component: "Appointments", news: [], isTheme: false },
    { name: "Городские мероприятия", component: "CityEvents", news: [] },
    { name: "Объявления", component: "Advert", news: [] }
];

// Установка директории для статических файлов на путь client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// Простой маршрут
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Функция для отправки обновленных данных всем клиентам
const sendUpdate = () => {
    const jsonData = JSON.stringify(rubrics);
    io.emit('rubricsUpdate', jsonData);
};

io.on('connection', (socket) => {
    console.log('Новый клиент подключен');

    socket.emit('rubricsUpdate', JSON.stringify(rubrics));

    // Обработчик получения сообщения от клиента
    socket.on('rubricsUpdate', (message) => {
        console.log(`Получено сообщение: ${message}`);

        const newRubrics = JSON.parse(message);

        // Сравниваем с текущими рубриками перед обновлением
        if (JSON.stringify(newRubrics) !== JSON.stringify(rubrics)) {
            rubrics = newRubrics;

            // Отправляем обновление всем клиентам
            sendUpdate();
        }
    });

    socket.on('disconnect', () => {
        console.log('Клиент отключился');
    });
});

// Установка порта и запуск сервера
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running`);
});