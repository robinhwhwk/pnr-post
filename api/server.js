import express from "express";
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from 'cors';
import bcrypt from 'bcrypt';
import User from './models/User.js';
import Jwt from "jsonwebtoken";

const secret = 'secret123';
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

await mongoose.connect('mongodb://127.0.0.1:27017/reddit');
const db = mongoose.connection;
db.on('error', console.log);

app.get('/', (req, res) => {
    res.send('ok');
});

app.post('/register', (req, res) => {
    const {email, username} = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = new User({email, username, password});
    user.save().then(user => {
        Jwt.sign(user._id, secret, (err, token) => {
            if (err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.status(201).json(token);
            }
        });
        res.sendStatus(201);
    }).catch(e => {
        console.log(e);
        res.sendStatus(500);
    })
}) 

app.listen(4000);