import fs from 'fs';
import path from 'path';

class GameModel {
    static games = [];

    static loadGames() {
        const dataPath = path.resolve('src/data/games.json');
        const data = fs.readFileSync(dataPath, 'utf-8');
        this.games = JSON.parse(data);
    }

    static getAll() {
        return this.games;
    }

    static getById(id) {
        return this.games.find(game => game.id === id);
    }

    static create(title, author) {
        const newGame = { id: this.games.length + 1, title, console };
        this.games.push(newGame);
        return newGame;
    }

    static update(id, title, author) {
        const gameIndex = this.games.findIndex(game => game.id === id);
        if (gameIndex === -1) {
            return null;
        }
        this.games[gameIndex] = { id, title, console };
        return this.games[gameIndex];
    }

    static delete(id) {
        const gameIndex = this.games.findIndex(game => game.id === id);
        if (gameIndex === -1) {
            return false;
        }
        this.games.splice(gameIndex, 1);
        return true;
    }
}

// Carregar os jogos ao iniciar o servidor
GameModel.loadGames();

export default GameModel;