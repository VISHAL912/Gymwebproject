const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const { stringify } = require("querystring");
mongoose.connect('mongodb://localhost/contactgymweb', {useNewUrlParser: true, useUnifiedTopology: true});
const port =912;

//define mangoose
const contactSchema = new mongoose.Schema({
    
    name: String,
    age:String,
    gender: String,
    location: String,
    phone: String,
   
    
  });

  

  

  const Contact = mongoose.model(' Contact', contactSchema);  




app.use('/static', express.static('static')) 
app.use(express.urlencoded())


app.set('view engine', 'hbs') 
app.set('', path.join(__dirname, '')) 
 

app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('index.hbs', params);
})

app.get('/about', (req, res)=>{
    
    const params = {}
    res.status(200).render('index.hbs', params);
})
app.get('/trainer', (req, res)=>{
    
    const params = {}
    res.status(200).render('index.hbs', params);
})
app.get('/contact', (req, res)=>{
    
    const params = {}
    res.status(200).render('index.hbs', params);
})











app.get('/admission', (req, res)=>{
    
        const params = {}
        res.status(200).render('admission.hbs', params);
    })
    
app.post('/', (req, res)=>{
        var myData =  new Contact(req.body);
        myData.save().then((item)=>{
            res.send("This item has been saved to the database")
        }).catch((err)=>{
        res.status(400).send("Item was not saved to the database")
        })
       
       //res.status(200).render('contact.hbs', params);
    })    

      
   
   








// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
