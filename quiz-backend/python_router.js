const express = require('express')
const python_ques_model = require('./python_model')
const python_router=express.Router()

python_router.get('/', async (req, res) =>
    {
        let ques_list;
        try{
            ques_list = await python_ques_model.find()
        }
        catch (err) {
            console.log('error')
        }
        console.log(ques_list)
        res.json({ques: ques_list})
    }
)
module.exports=python_router