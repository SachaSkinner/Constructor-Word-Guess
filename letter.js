function Letter(char){
    this.char = char;
    this.ifGuessed = false;
    this.letterOrBlank = function(){
        return this.ifGuessed ? this.char : "_";

    };
    this.updateBoolean = function(userGuess){
        if(userGuess.toLowerCase() === this.char.toLowerCase()){
            this.ifGuessed === true;
        }


    }

}
module.exports = Letter;