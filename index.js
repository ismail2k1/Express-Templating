const express = require("express");
const app = express();
const path = require("path");
const data2 = require('./data.json')
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/',(req,res)=>{
//     res.send('welcome to Home')
// })


app.get('/',(req,res)=>{
    res.render('start')
})

app.get('/r/:pattern',(req,res)=>{
    console.log(req.params)
    const {pattern} = req.params
    const data1 = pattern
    const nums = 1
    // res.send(`Your search results for ${pattern}`)
    const data = data2[pattern]
    res.render('home',{...data})
})

app.get('/ran',(req,res)=>{
    const num = Math.floor(Math.random()*10 + 1)
    res.render('random',{num})
})
app.listen(8080,()=>{
    console.log('server is on')
})

