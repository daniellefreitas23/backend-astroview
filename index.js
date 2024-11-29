const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql2')

const app = express();

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.use(express.static("public"))

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json)

//rotas
app.getMaxListeners("/", (requisicao, resposta) => {
    resposta.render("home")
})

//conexao com o MySQL
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@Dgr230407?",
    database: "astroview",
    port:3306
})

connection.connect((error) => {
    if (error){
        console.log(err)
    } 
    

    console.log("Conectado ao MySQL!")
})

app.listen(3000, ()=> {
    console.log("servidor rodando na porta 3000!")
})