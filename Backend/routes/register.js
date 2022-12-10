import bcrypt from 'bcrypt'
import express from 'bcrypt'
import joi from 'joi'
import User from '../models/user'
import genAuthToken from '../utils/genAuthToken'
const router = express.Router();

router.get('/', async(req, res) =>{

     const schema = joi.object({
          name: joi.string().min(3).max(30).required(),
          email: joi.string().min(3).max(200).required().email(),
          password: joi.string().min(6).max(200).required()
     })
     
     const {error} = schema.validate(req.body);

     if(error) return res.status(400).send(error.details[0].message);

     const user = await User.findOne({ email: req.body.email });

     if(user) return res.status(400).send("user already exists..");

     user = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
     })

     const salt = await bcrypt.genSalt(10);

     user.password = await bcrypt.hash(user.password, salt);

     user = await user.save();

     const token = genAuthToken(user);
     console.log(`token from api: ${token}`)
     res.send(token);

})

export default router;