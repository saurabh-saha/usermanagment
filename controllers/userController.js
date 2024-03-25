const asyncHandler = require("express-async-handler");
const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { use } = require("../routes/contactRoutes");

//@desc Register User
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Mandatory fields missing");
    }
    const userAvailable = await Users.findOne({ username })
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({
        username,
        email,
        password : hashPassword
    })
    if (user) {
        res.status(200).json({
            _id : user.id,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("User data not valid");
    }
    res.json({ message: "Register the User"});
});

//@desc Login User
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are necessary");
    }
    const user = await Users.findOne({email});
    if(user && bcrypt.compare(user.password, password)) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            }, process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m"}
        );
        res.status(200).json({ accessToken });
    } else {
        res.status(401);
        throw new Error("Email or password is invalid");
    }
});

//@desc Current User
//@route POST /api/user/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser } ;