const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const {JWT_SECRET} = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists

    await Admin.create({
        username: username,
        password: password
    })   // ideally it should be a async call u should wait for this to resolve, make sure that the entry actually happened no network connection or something, hence .then() can also be called but i did it by async await syntax but let's assume it happened 

    res.json({
        msg: "Admin created successfully"
    });
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        
        res.json({
            token
        })
    } else{
        res.status(411).json({
            msg: "Invalid username or password"
        })
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // ideally u should use some library like zod here to do input validation because user can send anything they want

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })

    res.json({
        message: 'Course created successfully', courseId: newCourse._id
    })

});


router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

   const response = await Course.find({})
        
    res.json({
        courses: response
    })
    

});

module.exports = router;