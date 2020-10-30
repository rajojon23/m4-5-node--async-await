const request = require('request-promise');

const getTronaldDumpQuote = async () => {
  try {
    const theDumpQuote = await request({
        uri: 'https://api.tronalddump.io/random/quote',  
        headers: {
            Accept: 'application/json'
        }
    });

    return JSON.parse(theDumpQuote)["value"];

  } catch (err) {
    console.log('Error: ', err);
  }
};



// getTronaldDumpQuote().then((data) => console.log(data));


module.exports = {getTronaldDumpQuote};