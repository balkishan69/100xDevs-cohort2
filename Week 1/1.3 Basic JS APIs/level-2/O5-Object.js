// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);    // returns keys of object in the form of the array

  let values = Object.values(obj);
  console.log("After Object.values():", values);    // returns values of object in the form of the array

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);     // returns true if the object has that property 

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });   // adds a key-value pair to the existing object
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);
