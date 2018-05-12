<<<<<<< HEAD
var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 

const Schema = mongoose.Schema
const userSchema= new Schema({
    phonenum:String,
    password:String,
})


module.exports = mongoose.model('users',userSchema)
=======
var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 

const Schema = mongoose.Schema
const userSchema= new Schema({
    email:String,
    password:String,
    token:String
})


module.exports = mongoose.model('user',userSchema,'users')
>>>>>>> 579ef09a10a1399df2da4ef70e64ebd980a25ae0
