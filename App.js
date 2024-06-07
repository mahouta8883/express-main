const express = require('express')
const app = express()
const port = 8000
// appel au dossier views
app.set('view engine', 'ejs')
// appel au dossier public
app.use(express.static('public'))

// The web application is only available during working hours (Monday to Friday,  from 9 to 17)
app.use((req,res,next)=>{
    let hours=new Date().getHours()
    let dates=new Date().toString()
    // console.log(hours)
    // console.log(dates)
    if((hours<00 || hours>17) && (dates <'Monday' || dates >'Friday' )) {
        return res.render('close')
    }
    else next()
})


// ouvrir direct dans la page index
app.get('/',(req,res)=>{
    res.redirect('/index')
})

// page index
app.get('/index',(req,res)=>{
    res.render("index")
})


// go to servise page with EJS and use render
app.get('/contact', (req,res)=>{
    res.render("contact")
})

app.get('/home', (req,res)=>{
    res.render("home")
})

app.get('/services', (req,res)=>{
    res.render("services")
})

// si la page n'existe pas
app.use((req,res)=>{
    res.status(404).send("sorry con't find that")
})
app.listen(port,()=> console.log(`application excute on port ${port}`) )