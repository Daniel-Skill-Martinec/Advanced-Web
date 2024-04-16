const express = require('express');
const router = express.Router();


const ideas = [
    {
        id: 1,
        text: 'Technology newsletter for all your tech needs',
        tag: 'Technology',
        username: 'MysteryNerd',
        date: '2022-19-03'
    },
    {
        id: 2,
        text: 'Create a Gaming PC from Scratch',
        tag: 'Hardware',
        username: 'RandomDev',
        date: '2019-15-04'
    },
    {
        id: 3,
        text: 'Auto Pay Subscriptions',
        tag: 'Software',
        username: 'Dev01',
        date: '2023-08-11'
    }
]

//Get all ideas endpoint
router.get('/', (req, res) => {
    res.json({success: true, data: ideas})
});

// Get a Single Idea Based on ID
router.get('/:id', (req, res) => {
    //req.params.id
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if(!idea) {
        return res
        .status(404)
        .json({success: false, error: 'Resource Not Found'});
    } else {
        return res.json({success: true, data: idea});
    }
});



// Add an idea
router.post('/', (req, res) => {
   // res.send(req.body.text);
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10)
    }
    console.log(idea);

    ideas.push(idea);
    res.json({success: true, data: idea});
})

// Update a Idea -- put
router.put('/:id', (req, res) => {

    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if(!idea) {
        return res
        .status(404)
        .json({success: false, error: 'Resource Not Found'});
    } else {
        idea.text = req.body.text || idea.text;
        idea.tag = req.body.tag || idea.tag;

        res.json({success: true, data: idea});
    }
});

// Delete an Idea
router.delete('/:id', (req, res) => {
    //req.params.id
    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if(!idea) {
        return res
        .status(404)
        .json({success: false, error: 'Resource Not Found'});
    } else {
        const index = ideas.indexOf(idea);
        ideas.splice(index, 1);
        res.json({success: true, data: {}});
    }
});

module.exports = router;