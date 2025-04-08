import express from 'express';
import gameControllers from '../controller/gameController.js';

const router = express.Router();
// Mensagem de boas-vindas

// Retorna uma mensagem de boas-vindas
router.get('/', gameControllers.getWelcomeMessage);

// Definindo as rotas para listagem de todos os Jogos
router.get('/listar-jogos', gameControllers.getAllGames);

// Definindo as rotas para listagem de um Jogo por id
router.get('/listar-jogos/:id', gameControllers.getGameById);

//criação de um novo Joog
router.post('/', gameControllers.createGame);

//atualização de um Jogo
router.put('/:id', gameControllers.updateGame);

//deletar um Jogo
router.delete('/:id', gameControllers.deleteGame);

export default router;