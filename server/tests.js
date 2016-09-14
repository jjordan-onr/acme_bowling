var assert = require('assert');
var expect = require('chai').expect;
var bowling = require('./bowling.js');
var sinon = require('sinon');

describe('Bowling Stats Tests', function(){
    var testData1 = {
        userId: 'user999',
        gameId: 'game123',
        score: 200,
        turkeys: 1,
        beers: 73
    };
    var testData2 = {
        userId: 'user999',
        gameId: 'game456',
        score: 300,
        turkeys: 2,
        beers: 2
    };
    var Bowling = null;
    beforeEach(function(){
        console.log('Instantiating new testDB...');
        Bowling = new bowling('testDB');
    });
    it('should store game data to lowdb', function(){
        expect(Bowling.storeGame(testData1)).to.be.a('Array');
        expect(Bowling.storeGame(testData2)).to.be.a('Array');        
    });
    it('should retrieve game data from lowdb', function(){
        expect(Bowling.getGameData('user999')).to.be.a('Array');
    });
    it('should calculate the average score', function(){
        assert(Bowling.getAverageScore('user999') === 250);
    });
    it('should calculate the total number of games', function(){
        assert(Bowling.getTotalGames('user999') === 2);
    });
    it('should calculate the total number of beers', function(){
        assert(Bowling.getTotalBeers('user999') === 75);
    });
    it('should calculate the total number of turkeys', function(){
        assert(Bowling.getTotalTurkeys('user999') === 3);
    });
    it('should return stats (stub test)', function(){
        var Bowling = new bowling('testDB');
        sinon.stub(Bowling, 'getStats')
            .withArgs('testBowler')
            .returns({
                average: 200,
                totalTurkeys: 3,
                totalBeers: 98,
                totalGames: 4
            });
        var stats = Bowling.getStats('testBowler');
        assert.equal(stats.average, 200);
    });
    it('should store game info (mock test)', function(){
        var Bowling = new bowling('testDB');
        var expectation = sinon.mock(Bowling)
            .expects('storeGame')
            .withArgs(testData1);
        Bowling.storeGame(testData1);
        expectation.verify();
    });
});