function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date:", currentDate);

  // Getting various components of the date
  console.log("Date:", currentDate.getDate());
  console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
  console.log("Year:", currentDate.getFullYear());   // gives the current year
  console.log("Hours:", currentDate.getHours());
  console.log("Minutes:", currentDate.getMinutes());
  console.log("Seconds:", currentDate.getSeconds());

  // Setting components of the date
  currentDate.setFullYear(2022);
  console.log("After setFullYear:", currentDate);

  currentDate.setMonth(5); // Setting month to June (zero-indexed)
  console.log("After setMonth:", currentDate);

  // Getting and setting time in milliseconds since 1970
  console.log("Time in milliseconds since 1970:", currentDate.getTime());   //epoch time

  const newDate = new Date(2023, 8, 15); // Creating a new date
  console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();


//Calculating how much time function calculateSum() took to execute
function calculatSum(){
  let a=0;
  for(let i=0;i<10000000;i++){
    a=a+i;
  }
  return a;
}
const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();
calculatSum();
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);


//Printing current Time 
function currentTimePrint(){
  console.log(new Date().getTime());   // prints epoc time
}
setInterval(currentTimePrint, 1*1000);   // setInterval() is calling the function currentTimePrint() after every 1 sec interval
