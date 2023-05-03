const express = require('express')
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;

const chefiesData = require('./data/chefiesData.json')

app.use(cors());

app.get('/',(req,res)=>{
res.send('chef is running')
})

app.get('/chefdatas',(req,res)=>{
res.send(chefiesData)
})

app.get('/chefdatas/:id',(req,res)=>{
const Id = req.params.id;
console.log(Id)
const selectShef = chefiesData.find(c=>c.id === Id)
res.send(selectShef) 
})

app.listen(port, ()=>{
console.log(`chef api is running on port: ${port}`)
})
