import express from "express";
import bodyParser from "body-parser";
import moment from "moment";
import fetch from 'node-fetch';


const app = express();
const PORT = 3000;

// set ejs as a template engine
app.set("view engine", "ejs");
// making public static
app.use(express.static("public"));

// parse incoming from data 
app.use(bodyParser.urlencoded({extended: true}));

//Home page route

app.get("/", (req, res) => {
res.render("index");
});

// birthday route

app.post("/wish", (req, res) => {
    const {name, birthday} = req.body;

    const today = moment().format("MM-DD");

    const userBirthday = moment(birthday).format("MM-DD");

    const isBirthday = today === userBirthday;
    res.render("birthday", {name, isBirthday});
    
})

setInterval(() => {
    fetch('https://birthday-wisher-project.onrender.com')
        .then(res => console.log('Pinged Render App!'))
        .catch(err => console.error('Error Pinging:', err));
}, 300000);


// start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    
})