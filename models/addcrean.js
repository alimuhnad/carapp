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
