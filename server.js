import express from 'express';
import router from './src/routes/gameRoutes.js';

const app = express();

app.use(express.json());
app.use('/games', router);

const serverPort = process.env.PORT || 3000;

app.listen(serverPort, () => {
    console.log(`Servidor iniciado e rodando na porta ${serverPort}`);
});