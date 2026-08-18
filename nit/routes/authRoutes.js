const express = require("express");

const router = express.Router();

const auth = require("../controllers/authController");

router.post("/sendotp", auth.sendOtp);

router.post("/verify", auth.verifyOtp);

router.post("/signin", auth.signin);

router.post("/signup", auth.signup);

router.get("/logout", auth.logout);

router.get("/", (req, res) => {

    res.render("Home");

});

router.get("/otp", (req, res) => {

    res.render("otp");

});
router.get("/signuppage",(req,res)=>{
    const email=req.query.email;
    res.render("signup.ejs",{email});
})

router.get("/loginpage", (req, res) => {

    res.render("login", {

        email: req.query.email

    });

});
router.get("/dashboard",(req,res)=>{
    const name=req.session.user;
    res.render("Dashboard",{name});
})
router.get("/profile", auth.profile);

module.exports = router;
