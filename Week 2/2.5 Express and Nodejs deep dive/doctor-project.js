// see the harkirat notes of 2.5 lecture and see what u have to do with different methods

const express = require("express");
const app = express();

const users = [{   // Anytime u restart the process/server, this users array get reset that's why we need databases like mongodb and sql
    name : "John",
    kidneys: [{
        healthy: false   // unhealthy kidney
    }]
}];


// *** GET -> ur task is that user can check how many kidneys they have and their health

// input type for get() request is 'query parameters' -> e.g. localhost:3000?n=7
app.get("/", function(req,res){
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    // throw new Error("djkdkd");  -> to throw some error if anything bad happens
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    
    const numberOUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOUnhealthyKidneys
    })
})


// *** POST -> ur task is that user can add a new kidney  (use postman and send request)

// To be able to pass and get json body on the server
app.use(express.json());

// in post request, u send data in the body as an input - this will be done in POSTMAN 
app.post("/", function(req, res){   // pushes some data
    // console.log(req.body);   -> returns undefined until u write the above line : app.use(express.json())
    const isHealthy = req.body.isHealthy;  // -> returns undefined even though we put some body in the postman, write the line : app.use(express.json()) , run in POSTMAN if u send post request again and again in the postman then the no. of kidneys will get updated
     users[0].kidneys.push({    // updated, now if someone sends the get request then updated data will be shown
        healthy: isHealthy
     })     
     res.json({
        msg: "Done!"
     })
})


// *** PUT  -> ur task is that user can replace a kidney, make it healthy  (use postman and send put request, first send some post request then put request since data gets lost after server is restarted)

app.put("/", function(req,res){
    for(let i = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});   // don't forget to write this, otherwise your request will be hunged
})


// *** DELETE -> ur task is that user can remove a kidney   (use postman and send the delete request and start server)

//removing all the unhealthy kidneys
app.delete("/", function(req,res){
    // u should return a 411 (i.e. wrong input) when there are no unhealthy kidneys
    // only if atleast one unhealthy kidney is there, do this, else return 411 , similarly for other requests like PUT
    let atleastOneUnhealthyKidney = false;   // we can also make a function for this check
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    if(atleastOneUnhealthyKidney){
        const newKidneys = [];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "done"})
    }
    else{
        res.sendStatus(411).json({
            msg: "You have no bad kidneys"
        })
    }

    
})

/*
// function to check whether there is atleast one unhealthy kidney while deleting kidneys

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;   // we can also make a function for this check
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

*/

app.listen(3000);


/*
// filesystem exposure -> how to get the data of a file on server

const express = require("express");
const fs = require("fs");

const app = express();

app.get("/files/:fileName", function(req, res){         //    "/files/:fileName"  -> anything after /files/
    const name = req.params.fileName;
    console.log(name);
    fs.readFile(name, "utf-8", function (err, data){
        res.json({
            data
        });
    })
});

app.listen(3000);
*/