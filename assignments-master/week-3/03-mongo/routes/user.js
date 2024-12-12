const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        msg: "User created successfully"
    })

});

router.get('/courses', async (req, res) => {   // this endpoint doesn't have the usermiddleware because it's open to the world, anyone can see all the present courses on the app
    // Implement listing all courses logic
    // implement fetching all courses logic
    const response = await Course.find({});    // in real world, in courses database there will be one more field "is_published" which has value true or false and here the user can get all the courses which are published- isPublished: true

    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username;

    try{
        await User.updateOne({
            username: username
        }, {
            "$push": {
                purchasedCourses: courseId
            }
        });

        /*
            we can also use $addToSet instead of $push to avoid purchasing the same course
            User.updateOne({ 
                username 
            },{ 
                $addToSet: { 
                    purchasedCourses: courseId 
                } 
            }
            );
        */

    } catch(e){
        console.log(e)
    }

    res.json({
        msg: "Course purchased successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: { 
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })

});

module.exports = router