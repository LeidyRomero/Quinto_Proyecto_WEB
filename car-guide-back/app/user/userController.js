const express = require('express'),
      router  = express.Router(),
      User = require('./userModel');

//TODO: Activar auth middleware

router.post('/signup', async (req, res) => {
    // Create a new user
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        const token = await user.generateAuthToken();
        
        res.status(201).send({ user, token });
        
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/login', async(req, res) => {
    //Login a registered user
    try {
        console.log(req.body);
        var email = req.body.email, password = req.body.password;
        
        const user = await User.findByCredentials(email, password)
        console.log(user);
        if (!user) {
            return res.status(401).send({error: 'Login failed! Check authentication credentials'})
        }
        const token = await user.generateAuthToken()
    
        res.send({ user, token })
    } catch (error) {
        res.status(400).send(error)
    }

})


router.get('/', async(req, res) => {
    //Login a registered user
    try {
        User.find({}, (err, all) => {
            if(err) return next(err);
            res.send(all);
        });
    } catch (error) {
        res.status(400).send(error)
    }

})

module.exports = router;