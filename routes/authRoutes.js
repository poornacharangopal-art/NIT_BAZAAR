const express = require("express");

const router = express.Router();

const auth = require("../controllers/authController");

router.post("/sendotp", auth.sendOtp);

router.post("/verify", auth.verifyOtp);

router.post("/login", auth.signin);

router.post("/signup", auth.signup);

router.get("/logout", auth.logout);

router.get("/", (req, res) => {

    res.render("Home");

});

router.get("/otp", (req, res) => {

    res.render("otp");

});
router.get("/signuppage",(req,res)=>{
    res.render("signup",{
        email:req.query.email
    });
});
router.get("/loginpage", (req, res) => {

    res.render("login", {

        email: req.query.email

    });

});
router.get("/dashboard", auth.dashboard);
router.get("/profile", auth.profile);

module.exports = router;
