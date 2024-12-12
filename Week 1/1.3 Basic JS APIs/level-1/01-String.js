// String handbook
var name = "ballu";
// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.


// Length (str.length)
const s="balkishan mandal";
console.log(s.length);


// indexOf -> returns the index at which target is present in the string firstly, if not present then returns -1
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");


// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");


// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);  // from index 0 to 4 not including 5

let ans = "balkishan mandal".slice(0,5);
console.log(ans)


// slice -> internal working must be something like that
function cutIt(str, startIndex, endIndex){
  let newStr="";
  for(let i=0;i<str.length;i++){
    if(i>=startIndex && i<endIndex){
      newStr=newStr+str[i];
    }
  }
  return newStr;
}
const value="harkirat singh";
console.log(cutIt(value, 2, 5));


// substring
function getSubstring(str, startingIndex, substringlength) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));    // str.substr(2,5) -> starting from index 2 and upto length 5
}
getSubstring("Hello World", 0, 5);  // starting index if 0 and gives the substring of length 5


// replace -> if target not present in the string then returns the same string
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

const str = "hello world";
console.log(str.replace("he", "balkishan"))


// split -> splits the string based on the delimiter(or separator) and returns the words in the form of array
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

/*
const myName = "hi my name is balkishan";
const words = myName.split(" ");
console.log(words)

const myName = "hi my name is balkishan";
const words = myName.split(",");
console.log(words)

const myName = "hi my name is balkishan";
const words = myName.split("h");
console.log(words)

const myName = "hi,my,name,is,balkishan";
const words = myName.split(",");
console.log(words)
*/


// trim - removes the extra spaces only from the beginning and the end
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

const myName1 = "      balkishan           mandal             ";
console.log(myName1.trim())


// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

const myName2 = "      balkishan           mandal             ";
console.log(myName2.toUpperCase())


// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");

const myName3 = "      balkishan           mandal             ";
console.log(myName3.toLowerCase())
