const fs = require('fs');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// Добавляем CORS middleware
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');

    // Обрабатываем preflight-запросы (OPTIONS)
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

// Искусственная задержка
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Middleware для парсинга JSON
server.use(jsonServer.bodyParser);

// Эндпоинт для логина
server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users } = db;

    const userFromBd = users.find(
        (user) => user.username === username && user.password === password
    );

    if (userFromBd) {
        return res.json(userFromBd);
    }

    return res.status(403).json({ message: "AUTH ERROR" });
});

// Middleware проверки авторизации (исключаем /login и OPTIONS-запросы)
server.use((req, res, next) => {
    if (req.path === '/login' || req.method === 'OPTIONS') {
        return next();
    }

    if (!req.headers.authorization) {
        return res.status(403).json({ message: "AUTH ERROR" });
    }

    next();
});

server.use(router);

server.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});