const mongoose=require('mongoose');
const { MONGO_URL } = require('../../config');

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
    console.log("connected to mongodb at",MONGO_URL);
}
module.exports=mongoConnect;
