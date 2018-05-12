<<<<<<< HEAD
var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 


const Schema = mongoose.Schema

const add = new Schema({
    carname: String,
    cbody: String,
    phonenum:{ type: String,unique: true },
    rating: Number,
    zonetabel:{
        masterzone:String,
        FMZ:String,
        subzone:String,
    },
    fromto:{
        tomainzone:String,
        TMZ:String,
        tosubzone:String
    },
    fromtime:String,
    totime:String,
    carditels:String,
    cartype:String,
    gender:String,
    age:String,
    status:Number,
    createdetaandtime:String,
    viewsconts:String,
})


module.exports = mongoose.model('items',add)
=======
var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 


const Schema = mongoose.Schema

const add = new Schema({
    carname: String,
    cbody: String,
    phonenum:{ type: String,unique: true },
    rating: Number,
    zonetabel:{
        masterzone:String,
        FMZ:String,
        subzone:String,
    },
    fromto:{
        tomainzone:String,
        TMZ:String,
        tosubzone:String
    },
    fromtime:String,
    totime:String,
    carditels:String,
    cartype:String,
    gender:String,
    status:String,
    createdetaandtime:String,
    viewsconts:String,
})


module.exports = mongoose.model('items',add)
>>>>>>> 579ef09a10a1399df2da4ef70e64ebd980a25ae0
