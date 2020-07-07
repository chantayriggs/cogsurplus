const express = require('express')
const userRouter = express.Router()
const passport = require('passport')
const passportConfig = require('../passport')
const JWT = require('jsonwebtoken')
const User = require('../models/User')
const Todo = require('../models/Todo')
const { reset } = require('nodemon')
const { response } = require('express')


const signToken = userID =>{
    return JWT.sign({
        iss : "taytay",
        sub : userID
    },"taytay",{expiresIn : "1h"})
}


// bring back all users
userRouter.get("/users", (req, res) => {
    User.find((error, users) => {
        if (error) console.log(error)
        else res.json(users)
    })
})

// delete a user
userRouter.delete("/delete/:id", (req, res) => {
    let id = req.params.id
    User.findByIdAndRemove(id, (error, user) => {
        if (error) {
            res.json("Unable to delete user", error)
        } else {
            res.json("User deleted!")
        }
    })
})


// register a new user
userRouter.post('/register',(req,res)=>{
    const { username,password,role } = req.body
    User.findOne({username},(err,user)=>{
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}})
        if(user)
            res.status(400).json({message : {msgBody : "Username is already taken", msgError: true}})
        else{
            const newUser = new User({username,password,role})
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message : {msgBody : "Error has occured", msgError: true}})
                else
                    res.status(201).json({message : {msgBody : "Account successfully created", msgError: false}})
            })
        }
    })
})


// login a user
userRouter.post('/login',passport.authenticate('local',{session : false}),(req,res)=>{
    if(req.isAuthenticated()){
       const {_id,username,role} = req.user
       const token = signToken(_id)
       res.cookie('access_token',token,{httpOnly: true, sameSite:true}) 
       res.status(200).json({isAuthenticated : true,user : {username,role}})
    }
})


// logout a user
userRouter.get('/logout', passport.authenticate('jwt',{ session : false }),(req,res) => {
    res.clearCookie('access_token')
    res.json({user:{username : "", role : ""},success : true})
})


// user posts a todo
userRouter.post('/todo', passport.authenticate('jwt',{ session : false }),(req,res) => {
    const todo = new Todo(req.body)
    todo.save(err => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}})
        else {
            req.user.todos.push(todo)
            req.user.save(err => {
                if(err)
                    res.status(500).json({ message : {msgBody : "Error has occured", msgError: true }})
                else    
                    res.status(200).json({ message: {msgBody: "Successfully created todo", msgError: false }})
            })
        }
    })
})

// delete a todo
userRouter.delete('/delete-todo/:id',passport.authenticate('jwt',{ session : false }),(req,res)=> {
    let id = req.params.id
    Todo.findByIdAndRemove( id, (err, todo) => {
        if (err) {
            res.json("Unable to delete todo", error)
        } else {
            res.json("Todo deleted!")
        }
    })
})


// edit a todo
userRouter.post('/update-todo/:id',passport.authenticate('jwt',{ session : false }),(req,res)=> {
    Todo.findById(req.params.id, (err, todo) => {
        if (!todo)
            res.status(404).send("Data is not found")
        else
            todo.name = req.body.name

            todo.save().then(todo => {
                res.json('Todo updated!')
            })
            .catch(err => {
                res.status(400).send("Update not possible")
            })
    })
})


// retrieve existing todos
userRouter.get('/todos',passport.authenticate('jwt',{ session : false }),(req,res)=>{
    User.findById({_id : req.user._id}).populate('todos').exec((err, document) => {
        if(err)
            res.status(500).json({message : {msgBody : "Error has occured", msgError: true}})
        else{
            res.status(200).json({todos : document.todos, authenticated : true})
        }
    })
})


// tells you if a user is an admin or not
userRouter.get('/admin',passport.authenticate('jwt',{ session : false }),(req,res)=>{
    if(req.user.role == "admin") 
        res.status(200).json({ message: { msgBody: "You are an admin", msgError: false }})
    else    
        res.status(403).json({ message: { msgBody: "You are not an admin", msgError: true }})
})


// used for persistence, so if a user closes out of the page, they can still access later on
userRouter.get('/authenticated',passport.authenticate('jwt',{ session : false }),(req,res)=>{
    const { username, role } = req.user
    res.status(200).json({ isAuthenticated: true, user: { username, role }})
})


module.exports = userRouter