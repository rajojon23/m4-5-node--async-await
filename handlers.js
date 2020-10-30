const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getGeekJoke } = require("./__workshop/exercise-4.3");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");


const handleJoke = async (jokeType) => {

    let joke;

    switch(jokeType){
        case "dad":
            joke = await getDadJoke();
            return joke;
        case "geek":
            joke = await getGeekJoke();
            return joke;   
        case "tronald":
            joke = await getTronaldDumpQuote();
            return joke;  
        default:
            throw "Invalid joke request!" 
    }



}


module.exports = {handleJoke};