const express = require ('express');
const app = express ();
const port = 5000;
const {workingTime} = require ('./middelware')


app.use(express.static(__dirname+'/public'))



app.get('/',workingTime, (req,res) => {
    res.sendFile(__dirname+'/public/home.html')
});
app.get('/our_services', workingTime, (req,res) => {
    res.sendFile(__dirname+'/public/our_services.html')
});
app.get('/contact_us', workingTime, (req,res) => {
    res.sendFile(__dirname+'/public/contact_us.html')
});




app.listen (port, (err) => {
    if (err) {
        console.log (err)
    } else {
        console.log (`Go to localhost port : ${port}`)
    }
})