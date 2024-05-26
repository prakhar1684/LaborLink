
const express=require('express');
const { Newuser, Userlogin } = require('../controller/Newuser');
const Router=express.Router();

Router.route("/sign-up").post(Newuser);
Router.route("/sign-in").post(Userlogin)

module.exports=Router;