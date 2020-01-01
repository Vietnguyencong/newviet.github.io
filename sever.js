
const express = require('express')
const app = express()
const path= require('path')
const fs = require('fs')
const ejs = require('ejs')
// FOR POST REQ TO RECEIVE string or array 
app.use(express.urlencoded({ extended: false }))
// PUBLIC all the files
app.use(express.static(__dirname))
app.use(express.static('public'))
 
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

//GET json rate data from sever file

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'practice code'))
app.get('/viet', (req,res) => {
    res.render("html", rates_data)
})

// POST DATA

var data = fs.readFileSync('./public/data.json')
data = JSON.parse(data)
app.post('/viet',  (req,res)=>{
    
    try{ 
        // console.log('the score req is : ',req.body.score)
        // console.log('the que_num req is : ',req.body.que_num)
        var num 
        for(i=0; i<data.length; i++){
            
            if (data[i].number == parseInt(req.body.que_num)){
                data[i].tol_point+=parseInt(req.body.score)
                data[i].times++ 
                console.log('SUBMITTED')
                num = i
                break
                }
            }
            var run = false
            data = JSON.stringify(data, null, 4)
            fs.writeFile('./public/data.json', data, (err) => {
                if (err) console.log(err)
                else console.log('Write file successfully')
                // res.redirect(`/viet#q${num+1}`)
                // window.location.load() // reload the sever after writting data to file
                run = true
            })
            if (run) res.redirect(`/viet#box${num+3}`)
            
            
    }catch {
        console.log('ERROR')
        res.redirect('/viet')
    }
})
rates_data = require('./public/data.json')

app.listen(3000,(req,res) => {
    console.log('listening on port: 3000')
})
