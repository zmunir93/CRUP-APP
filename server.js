const express = require('express');
const {MongoClient} = require('mongodb');
const mongoose = require('mongoose');
const ejs = require("ejs")
const bodyParser = require("body-parser")

const app=express();

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs')

mongoose.connect("mongodb+srv://zmunir93:Chicken12@crud-app.0e40d.mongodb.net/crud", { useNewUrlParser: true }, { useUnifiedTopology: true });

const todoSchema = {
    note: String
}

// third "todo" is to match the collection in db. so Mongoose.model(name, [Schema], [collection]). if no collection is passed, name will be used and pluralized.
const Note = mongoose.model("todo", todoSchema, "todo")

app.get("/", function(req, res) {
    Note.find({}, function(err, note){
        res.render('index', {
            newNote: note
        })
    })
})

app.post("/", function(req, res) {
    let newNote = new Note({
       note: req.body.note
    });
    newNote.save();
    res.redirect("/");
})

const port = 3000
app.listen(port, () => {
    console.log('Server started on localhost:3000');
})