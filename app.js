//IMPORTAR
const express= require ('express');
//PATH
const path = require('path');
// INSTANCIARLO
const app = express();


const publicFolderPath = path.resolve(__dirname, './public');
//Defirnir la carpeta pública
app.use(express.static(publicFolderPath));

//Levantar el server
const APP_PORT = process.env.PORT || 3000
app.listen(   APP_PORT, () => {
    console.log('Servidor funcionando en puerto' + APP_PORT)
})




//Definir rutas que devuelvan HTML
app.get('/', (req, res) =>{
    //Devolver un documento HTML
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/views/home.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})

