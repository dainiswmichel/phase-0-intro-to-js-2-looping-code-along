
function writeCards(names) {
    return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
  }
  
  function countDown(startingNumber) { 
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  module.exports = {
    writeCards,
    countDown,
  };
  