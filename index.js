const express = require('express')
const app = express();
const cors = require('cors');
const port =process.env.PORT || 5000;

const chefiesData = require('./data/chefiesData.json')

app.use(cors());

// app.get('/',(req,res)=>{
// res.send('chef is running')
// })

app.get('/',(req,res)=>{
res.send(chefiesData)
})

app.get('/chefiesData/:id',(req,res)=>{
const id = req.params.id;
console.log(id)
const selectShef =chefiesData.find(c=>c.id === id)
res.send(selectShef) 
})

app.listen(port, ()=>{
console.log(`chef api is runnig on port: ${port}`)
})
