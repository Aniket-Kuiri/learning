const mongoose = require('mongoose')
mongoose.pluralize(null);
const User = require('./user')


mongoose.connect("mongodb://localhost/testdb")
.then(success => console.log("success"))
.catch(failure => console.log(failure))
  
const newUser = new  User({ name: "Babai", age: 25})
newUser.save().then(() => console.log("User saved"))

