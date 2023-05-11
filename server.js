require('dotenv').config();
const express=require('express');
const mongoConnect = require('./app/startup/dbStartUp');
const { PORT } = require('./config');
const router = require('./app/routes/router');
const app=express();
app.use(router);
async function startupServices(){
    await mongoConnect();
    app.use(express.json());
}
startupServices().then(()=>{
    app.listen(PORT,()=>{
        console.log('server running');
    })
});
