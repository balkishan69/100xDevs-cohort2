// Creating an HTTP server using Express
//First, install the library in terminal by writing "npm install express" after cd <this folder name>

const express = require("express");
const app = express();

function sum(n){
    let ans = 0;
    for(let i=1;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}

app.get("/", function(req, res){
    const n = req.query.n;    // query parameter input -> whatever someone will give input after final route(/) in the brower "?n=10" that input will get stored here
    const ans = sum(n);
    res.send("hi your ans is "+ ans);      // to get your response in the browser, type "localhost:3000/?n=15"
})

app.listen(3000);