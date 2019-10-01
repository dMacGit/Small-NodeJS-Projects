const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/*app.engine('html', require('ejs').renderFile);
app.use(express.static('views'));*/


/*let ejs = require('ejs'),
    ,
    html = ejs.renderFile('main.html','Hello World!', );*/
data = JSON.parse('[{"name":"geddy", "age":"26"}, {"name":"neil", "age":"32"}, {"name":"alex", "age":"32"}]');
people = ['geddy', 'neil', 'alex'];
app.get('/', (req, res) => res.render('main',{users: data}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))