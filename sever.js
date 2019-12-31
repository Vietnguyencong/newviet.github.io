
const express = require('express')
const app = express()
const path= require('path')
const fs = require('fs')
const ejs = require('ejs')
// FOR POST REQ TO RECEIVE string or array 
app.use(express.urlencoded({ extended: false }))
// PUBLIC all the files
app.use(express.static(__dirname))
// 


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/index', (req,res) => {
    res.sendFile(path.join(__dirname + '/practice code/html.html'))
    res.sendFile(path.join(__dirname, '/practice code/js.js'))
    res.sendFile(path.join(__dirname, '/practice code/style.css'))  
})
app.get('/rate', (req,res) => {
    res.sendFile(path.join( __dirname+'/practice code/html.html'))
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'practice code'))
app.get('/practice%20code/html.html', (req,res) => {
    res.render("html")
})

// POST DATA

var data = fs.readFileSync('./practice code/data.json')
data = JSON.parse(data)
app.post('/practice%20code/html.html',  (req,res)=>{
    
    try{ 
        console.log('the score req is : ',req.body.score)
        console.log('the que_num req is : ',req.body.que_num)

        for(i=0; i<data.length; i++){
            
            if (data[i].number == parseInt(req.body.que_num)){
                data[i].tol_point+=parseInt(req.body.score)
                data[i].times++ 
                console.log('OKAY')
                }
            }
            data = JSON.stringify(data, null, 4)
            fs.writeFile('./practice code/data.json', data, (err) => {
                if (err) console.log(err)
                console.log('write file successfully')
            })
            // res.end('yes')
            // res.redirect('/practice%20code/html.html')
            
            res.status(204).send()
        
    
    }catch {
        console.log('ERROR')
        res.redirect('/index.html')
    }
})
app.locals.vn = 123

app.locals.rates_data = require('./practice code/data.json')
// function submit(){
//     rates = fs.readFileSync('./practice code/data.json')
//     return rates
//     }

// console.log(submit())

// var rates = 
// console.log('viet: ' , app.locals.rates_data = require('./practice code/data.json'))
// rates = JSON.parse(rates)

app.listen(3000,(req,res) => {
    console.log('listening on port: 3000')
})
