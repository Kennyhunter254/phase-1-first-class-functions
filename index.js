// Define the receivesAFunction function
function receivesAFunction(callback) {
    callback();
  }

  
  // Define the returnsANamedFunction function
  function returnsANamedFunction() {
    return function namedFunction()
     {
      console.log("I am a named function");
    };
  }
  

  // Define the returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function() {

      console.log("I am an anonymous function");
    };
  }

  
  // Exporting the functions for testing
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,

    returnsAnAnonymousFunction

  };
  