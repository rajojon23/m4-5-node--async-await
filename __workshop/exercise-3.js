// Exercise 3
// ----------

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num

  return new Promise((resolve, reject) => {
    setTimeout(() => {

      let doubled = num * 2;

      console.log("doubled", doubled); 
      
      resolve (num * 2);
    }, 2000);
  });
};

// 3. handleSum function (async/await)
const handleSum = async(num) => {
  let result = num;

  try{
    result = await doublesLater(result);
    result = await doublesLater(result);
    result = await doublesLater(result);

    return result;

  }catch(e){
    console.log(e);
  }
};
// 4. verification
handleSum(10).then((ans) => console.log(ans));
