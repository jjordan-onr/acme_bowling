var BowlingGame = function() {
    this.rolls = [];
    this.currentFrame = 0;
    this.currentRoll = 0;
    this.turkeys = 0;
    this.total = 0;
};

BowlingGame.prototype.roll = function(pins) {
    this.rolls[this.currentRoll++] = pins;
};

BowlingGame.prototype.score = function() {
    var score = 0;
    var frameIndex = 0;
    var self = this;
    var strikes_in_row = 0;
    
    self.currentRoll = 0;
    
    function isStrike(currentRoll) {
        if (self.rolls[currentRoll] === 10) return true;
        else return false;
    }
    
    function isSpare(currentRoll) {
        if (self.rolls[currentRoll] + self.rolls[currentRoll+1] === 10) return true;
        else return false;
    }
    
    //for (var i=0; i<self.rolls.length; i++) {
    while (self.currentRoll < self.rolls.length && self.currentFrame < 10) {
        //handle strike
        if (isStrike(self.currentRoll)) {
            score += self.rolls[self.currentRoll] + self.rolls[self.currentRoll+1] + self.rolls[self.currentRoll+2]
            self.currentRoll++;
            strikes_in_row++;
        } else if(isSpare(self.currentRoll)) {
            score += self.rolls[self.currentRoll] + self.rolls[self.currentRoll+1] + self.rolls[self.currentRoll+2]
            self.currentRoll += 2;
            strikes_in_row = 0;
        } else {
            score += self.rolls[self.currentRoll] + self.rolls[self.currentRoll+1];
            self.currentRoll += 2;
            strikes_in_row = 0;
        }
        self.currentFrame++;
        if (strikes_in_row > 2) {
            self.turkeys++;
        }
    }
    
    self.total = score;
    
    return score;

};

