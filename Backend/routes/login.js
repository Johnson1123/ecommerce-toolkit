import express from 'express'
import joi from 'joi'
import User from '../models/user'
import genAuthToken from '../utils/genAuthToken'


const router = express.Router();

router.post('/', async(req, res) => {

     const schema = joi.object({
          email: joi.string().min(3).max(255).required().email(),
          password: joi.string().min(6).max(1025).required()
     })

     const {error} = schema.validate(req.body)

     if(error) return res.status(400).send(error.details[0].message);

     const user = await User.findOne({email: req.body.email})

     if(!user) return res.status(400).send("Invalid email or password..");

     if(!isvalid) return res.status(400).send("Invalid email or password..");

     const token = genAuthToken(user);

     res.send(token)
})

export default router;
