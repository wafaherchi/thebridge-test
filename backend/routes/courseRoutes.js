const multer = require('multer')
const path = require('path')
const express = require('express')
const router = express.Router()
const courseModel = require('../models/Course')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../frontend/public/courses/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

let upload = multer({ storage, fileFilter });



router.post(
    "/add",
    upload.single("course_image"),
    async (req, res) => {
        console.log(req.body)
        let newCourse = new courseModel({ ...req.body, course_image: req.file.filename })
        await newCourse.save()
        res.send('course added ! ')
    }
);

router.get(
    "/get_all_courses",
    async (req, res) => {
        let data = await courseModel.find({})
        res.json(data)
    })

router.get('/get_course/:id', (req, res) => {
    courseModel.findOne({ _id: req.params.id }).then(doc => {
        res.json(doc)
    })
})


router.delete('/delete_course/:id', (req, res) => {
    courseModel.findOneAndDelete({ _id: req.params.id }).then(() => {
        res.json("course deleted ! ")
    })
})   


router.put('/update_course/:id', (req, res) => {
    console.log(req.body)
    courseModel.findByIdAndUpdate(req.params.id, req.body).then(() => {
        res.json('Course updated!');
    });
})





module.exports = router;