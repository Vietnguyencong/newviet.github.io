
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
app.get('/viet*', (req,res, next) => {
    rates_data = fs.readFileSync('./public/data.json')
    rates_data = JSON.parse(rates_data)
    res.render("html", rates_data)
    console.log('page reload')
    next()
})

// app.get('/viet/:id', (req,res) => {
//     res.redirect( `/viet#box${parseInt(req.params.id)+3}`)
// })



// POST DATA



app.use('/viet*', (req,res, next) => {
    rates_data = fs.readFileSync('./public/data.json')
    rates_data = JSON.parse(rates_data)
    next()
})

app.post('/viet*',  (req,res, next) => {
    
    try{ 
        // console.log('the score req is : ',req.body.score)
        // console.log('the que_num req is : ',req.body.que_num)
        var num = 1 
        for(i=0; i<rates_data.length; i++){
            
            if (rates_data[i].number == parseInt(req.body.que_num)){
                rates_data[i].tol_point+=parseInt(req.body.score)
                rates_data[i].times++ 
                console.log('form SUBMITTED')
                num = i
                break
            }else { console.log('no que num')}
                
            }
            var run = false
            rates_data = JSON.stringify(rates_data, null, 4)
            fs.writeFile('./public/data.json', rates_data, (err) => {
                if (err) console.log(err, 'write is not done')
                else console.log('Write file successfully')
                // res.redirect(`/viet#q${num+1}`)
                // window.location.load() // reload the sever after writting data to file
                run = true
            })
            res.redirect(`/viet#box${num+3}`)
            next()
            
    }catch {
        console.log('sever error')
        res.redirect('/viet')
    }
})


app.listen(3000,(req,res) => {
    console.log('listening on port: 3000')
})
