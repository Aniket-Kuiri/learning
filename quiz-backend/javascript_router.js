const express = require('express')
const javascript_ques_model = require('./javascript_model')
const javascript_router=express.Router()

javascript_router.get('/', async (req, res) =>
    {
        let ques_list;
        try{
            ques_list = await javascript_ques_model.find()
        }
        catch (err) {
            console.log('error')
        }
        console.log(ques_list)
        res.json({ques_list})
    }
)
module.exports=javascript_router