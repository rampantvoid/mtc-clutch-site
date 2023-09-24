const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const jwtSecretKey = process.env.JWT_SECRET;

// Your User model or user data storage
const User = require('../models/User');

// Passport JWT strategy setup
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecretKey
};

passport.use(
    new JwtStrategy(jwtOptions, (payload, done) => {
        // Check if user exists in your database based on the JWT payload
        // This will vary depending on your user model and database setup
        User.findById(payload.sub, (err, user) => {
            if (err) {
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    })
);

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by username
        const user = await User.findOne({ username });

        // If the user doesn't exist, return an error
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ sub: user.id }, jwtSecretKey);

        // Send the token in the response
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Validate request parameters (you can add more validation as needed)
        if (!username || !password) {
            return res.status(400).json({ error: 'Please provide username and password' });
        }

        // Check if the username is already taken (you may want to refine this check)
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already taken' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10); 

        // Create a new user with the hashed password
        const newUser = new User({ username, password: hashedPassword });
        const savedUser = await newUser.save();

        // Generate JWT token for the registered user
        const token = jwt.sign({ sub: savedUser.id }, jwtSecretKey);

        // Send the token and user data in the response
        res.json({ token, user: { id: savedUser._id, username: savedUser.username } });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
