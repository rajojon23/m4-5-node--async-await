const request = require("request-promise");

// getDadJoke

const getDadJoke = async() => {
try {
    const theDadJoke = await request({
        uri: 'https://icanhazdadjoke.com/',  
        headers: {
            Accept: 'application/json'
        }
    });

    return JSON.parse(theDadJoke).joke;

  } catch (err) {
    console.log('Error: ', err);
  }
}
// 4.1
// getDadJoke().then((data) => console.log(data));

module.exports = {getDadJoke};