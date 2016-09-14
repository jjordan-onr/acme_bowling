"use strict"
var low = require('lowdb');

class Bowling{
    constructor(dbName){
        this._db = low(`${dbName}.json`);
        this._db.defaults({games:[]}).value();
    }

    storeGame(gameData){
        return this._db.get('games').push(gameData).value();
    }

    getGameData(userId){
        return this._db.get('games').filter({userId:userId}).value();
    }

    getTotalGames(userId){
        var entries = this._db.get('games').filter({userId:userId}).value();
        return entries.length;
    }

    getAverageScore(userId){
        var entries = this.getGameData(userId);
        var totalGames = entries.length;
        var sumGames = 0;
        for(var i=0; i<totalGames; i++){
            sumGames += entries[i].score;
        }
        return sumGames / totalGames;
    }

    getTotalBeers(userId){
        var entries = this.getGameData(userId);
        var totalGames = entries.length;
        var sumBeers = 0;
        for(var i=0; i<totalGames; i++){
            sumBeers += entries[i].beers;
        }
        return sumBeers;
    }

    getTotalTurkeys(userId){
        var entries = this.getGameData(userId);
        var totalGames = entries.length;
        var sumTurkeys = 0;
        for(var i=0; i<totalGames; i++){
            sumTurkeys += entries[i].turkeys;
        }
        return sumTurkeys;
    }

    getStats(userId){
        return {
            totalGames: this.getTotalGames(userId),
            totalBeers: this.getTotalBeers(userId),
            totalTurkeys: this.getTotalTurkeys(userId),
            average: this.getAverageScore(userId)
        }
    }
}

module.exports = Bowling;