import GameModel from '../models/gameModel.js';

class GameController {
    getWelcomeMessage = (req, res) => {
        res.json({message: "Bem-vindo à minha API! O tema escolhido foi 🎮 JOGOS 🎮  "})
    }
    getAllGames = (req, res) => {
        const games = GameModel.getAll();
        res.json(games);
    };

    getGameById = (req, res) => {
        const { id } = req.params;
        const game = GameModel.getById(id);
        if (!game) {
            return res.status(404).json({ erro: "Jogo não encontrado" });
        }
        res.json(game);
    };

    createGame = ({ body: { title, console } }, res) => {
        if (!title) {
            res.status(400).json({ message: 'Por favor, insira um título para o jogo.' });
        } else if (!console) {
            res.status(400).json({ message: 'Por favor, insira um console para o jogo.' });
        }
        const newGame = GameModel.create(title, console);
        res.status(201).json(newGame);
    };

    updateGame = ({ params: { id }, body: { title, console } }, res) => {
        const gameUpdate = GameModel.update(id, title, console);
        if (!gameUpdate) {
            return res.status(404).json({ erro: "Jogo não encontrado" });
        }
        res.json(gameUpdate);
    };

    deleteGame = (req, res) => {
        const { id } = req.params;
        const success = GameModel.delete(id);
        if (!success) {
            return res.status(404).json({ erro: "Jogo não encontrado" });
        }
        res.status(201).send({ message: "Jogo deletado com sucesso" });
    };
}

export default new GameController();