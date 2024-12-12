function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt -> it's a global function which converts the string to int
explainParseInt("42");
explainParseInt("42px");  //returns 42, ignores the shit after 42
explainParseInt("jgkgk42jgkjkg");  // if shit/gibbish is before 42 then it doesn't return something correct (NaN), gives garbage
explainParseInt("3.14");   // returns 3



function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");
