const express = require("express");
const app = express();
const path = require("path");
const data2 = require('./data.json')
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/r',(req,res)=>{
    res.send('Hi there')
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


app.listen(8080,()=>{
    console.log('server is on')
})

