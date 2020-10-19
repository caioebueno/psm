//index.js
var http = require('http'); 
const express = require('express') 
const app = express() 
var cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var db = require("./models");

const secret = "meu-segredo";//esse segredo do JWT seria uma config

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cookieParser()); 

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//rota protegida
app.get('/clientes', verifyJWT, (req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.status(200).json([{id:1,nome:'luiz'}]);
}) 

app.get("/userinfo", verifyJWT, (req, res, next) => {

    let userId = req.userId;
    db.Users.findAll({where: {id: userId}})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            throw err
        });

});

//rota de login
app.post('/login', (req, res, next) => { 

    db.Users.findAll({where: {email: req.body.user, password: req.body.pwd}})
    .then(result => {
        if(result.length > 0){
            const id = result[0].id; //esse id viria do banco de dados 
            var token = jwt.sign({ id }, secret, { 
                expiresIn: 10000000 // 5min 
            }); 
        
            console.log("Fez login e gerou token!");
            return res.status(200).send({ auth: true, token: token }); 
        }
        else{
            return res.status(401).send('Login inválido!'); 
        }
    })

   
})    

//rota de logout
app.post('/logout', function(req, res) { 
    console.log("Fez logout e cancelou o token!");
    res.status(200).send({ auth: false, token: null }); 
});

app.post("/signup", function(req, res){
    db.Users.create(req.body)
        .then(result => {
            var id = result.id;
            var token = jwt.sign({ id }, secret, { 
                expiresIn: 10000000 // 5min 
            }); 
            console.log(token);
            res.json({status: 200, token: token});
        })
        .catch(err => {
            throw err;
        })
})

//função que verifica se o JWT é ok
function verifyJWT(req, res, next){ 
    var token = req.headers['x-access-token']; 
    if (!token) 
        return res.status(401).send({ auth: false, message: 'Token não informado.' }); 
    
    jwt.verify(token, secret, function(err, decoded) { 
        if (err) 
            return res.status(500).send({ auth: false, message: 'Token inválido.' }); 
        
        req.userId = decoded.id; 
        console.log("User Id: " + decoded.id)
        next(); 
    }); 
}    

var server = http.createServer(app); 
db.sequelize.sync().then(function() {
    server.listen(process.env.PORT || 3000);
    console.log("Servidor escutando na porta 3000...")
  });
  
