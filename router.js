const express = require("express");
const router = express.Router();
// const middleware = require("../middleware/middlewares");

router
    .get("/home", (req,res)=>{
        res.send("hello")
    })

    // .post("/addProduct",(middleware.addProduct))

    // .get("*", (req, res) => {
    //     res.render('404')
    // })

    // .post("*", (req, res) => {
    //     res.render('404')
    // });

module.exports = router;