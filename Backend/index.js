import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import products from './products.js'
import login from './routes/login'

const app = express();
app.use(express.json());
app.use(cors());

app.get('/product', (req, res) => {
  res.send(products);
})
const port = 8001
const uri = process.env.DB__URL ||"mongodb://localhost:27017/User"
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect(uri, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => console.log("connected to database")).catch((err) => console.log(err.message))