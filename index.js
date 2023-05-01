const express = require('express')
const app = express();
const port =process.env.PORT || 5000;

const chefiesData = require('./data/chefiesData.json')

app.get('/',(req,res)=>{
res.send('chef is running')
})

app.get('/chefiesData',(req,res)=>{
res.send(chefiesData)
})


app.listen(port, ()=>{
console.log(`chef api is runnig on port: ${port}`)
})
