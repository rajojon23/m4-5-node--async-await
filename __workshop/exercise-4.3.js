const request = require('request-promise');

const getGeekJoke = async () => {
  try {
    const geekJoke = await request({
        uri: 'https://geek-jokes.sameerkumar.website/api?format=json',  
        headers: {
            Accept: 'application/json'
        }
    });

    return JSON.parse(geekJoke)["joke"];

  } catch (err) {
    console.log('Error: ', err);
  }
};


// getGeekJoke().then((data) => console.log(data));

module.exports = {getGeekJoke};