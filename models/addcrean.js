<<<<<<< HEAD
var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 

const Schema = mongoose.Schema
const userSchema= new Schema({
        drivername:String,
        driverphonenum:{ type: String,unique: true },
        wight:String,
        cartype:String,
        location:String,
        createdtime:String

})


module.exports = mongoose.model('creans',userSchema)
=======
var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 

const Schema = mongoose.Schema
const userSchema= new Schema({
        drivername:String,
        driverphonenum:{ type: String,unique: true },
        wight:String,
        cartype:String,
        location:String,
        createdtime:String

})


module.exports = mongoose.model('creans',userSchema)
>>>>>>> 579ef09a10a1399df2da4ef70e64ebd980a25ae0
