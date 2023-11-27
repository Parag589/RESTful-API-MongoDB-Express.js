const mongoose = require('mongoose');

// Mongo DB                                                                         | Database name
const URL = 'mongodb+srv://todo-app:reBXeqQvFXD8BjXh@cluster0.f2l08lr.mongodb.net/olympics?retryWrites=true&w=majority';
mongoose.connect(URL).then(() => {
console.log("Database is Connected ")
}).catch((e)=>{
console.log("Database Not Connected ")
console.error( `Error: ${e}`)
})