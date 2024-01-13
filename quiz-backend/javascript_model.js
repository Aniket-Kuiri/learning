const mongoose = require('mongoose')
mongoose.pluralize(null);
const QuesSchema = new mongoose.Schema({
    ques: String,
    ans1: String,
    ans2: String,
    ans3: String,
    ans4: String,
    ans:  String
})


const QuesModel = mongoose.model("javascriptquiz", QuesSchema)

module.exports = QuesModel