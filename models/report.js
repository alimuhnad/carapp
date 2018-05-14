var mongoose = require('mongoose');
//يعرف اليوزر و الايميل 

const Schema = mongoose.Schema
const userSchema= new Schema({
id:String,
phone:String,
title:{title:String}
})


module.exports = mongoose.model('reports',userSchema)
