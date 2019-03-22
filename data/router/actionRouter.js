const express = require('express');

const Action = require('../helpers/actionModel.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const action = await Action.get(req.params.query);
        res.status(200).json(action);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error getting action'
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const action = await Action.get(req.params.id);

        if(action){
            res.status(200).json(action);
        }else{
            res.status(404).json({message: 'Action not found'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error getting action'
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const action = await Action.insert(req.params.body);
            res.status(201).json(action);
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:'Error posting action'
        });
    }
});





module.exports = router;
