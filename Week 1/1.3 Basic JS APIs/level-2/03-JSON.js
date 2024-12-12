//JSON stands for Javascript Object notation

function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);



//javascript object

const users = {
  name: "balkishan",
  age: 24,
  gender: "male",
} 
console.log(users["name"])

//how to send this data(above object) to someone, we'll convert it into string
const user2 = '{"name": "harkirat", "age": 24, "gender": "male"}'  //now this is no longer an object, it's a javascript string now we can't do like this console.log(user2["name"]) because user2 is now a string so we can't do now string["name"] 

//JSON.parse  -> converts a string into object
//JSON.stringify   -> converts an object into string

const user = JSON.parse(users)
console.log(user["gender"]);


const user1 = {
  name: "balkishan",
  gender: "male",
}
const finalString = JSON.stringify(user1);
console.log(finalString);
