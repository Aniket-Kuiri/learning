const mongoose = require('mongoose')
mongoose.pluralize(null);

const connectDB = async () => {
    mongoose.connect('mongodb://localhost/quiz')
    .then(success => console.log("success"))
    .catch(error => console.log(error))
}

module.exports = connectDB