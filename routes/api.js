var express = require('express')
const jwt = require('jsonwebtoken')
var router = express.Router()
//اعدادات المنكوديبي و api كله
var mongoose = require('mongoose');
const User=require('../models/users')
const Items=require('../models/additems')
const Types=require('../models/gettypes')
const Zonez=require('../models/getzonz')
const addzone=require('../models/addMzone')
const addFMZ=require('../models/addFMZ')
const addSUBzone=require('../models/addSUBzone')
const addcrean=require('../models/addcrean')
const addhavecar=require('../models/addhavecar')
mongoose.connect('mongodb://a:a@ds161539.mlab.com:61539/a');
const app = express()

// //دالة التاكد من ان التوكن الي تم ارساله خلال الصفحة الي تم اختيارها صحيح ومسجل
// function vtokem(req,res,next){
//   if(!req.headers.authorization){
//     return res.status(401).send('n')
//   }
//   let token = req.headers.authorization.split(' ')[1]
//   if(token ==='null'){
//     return res.status(401).send('a')
//   }
//   let payload=jwt.verify(token,'secritkey')
//   if(!payload){
//     return res.status(401).send('m')
//   }
//   req._id=payload.subject
//   next();
// }


// router.post('/add',(req,res)=>{
//   let userDate =req.body;
//   let item = new Items(userDate)
//   item.save((err,itemee)=>{
//     res.status(200).send(itemee)
//   })

// })


router.post('/reviews', function(req, res) {
  Items.create({
      carname: req.body.carname,
      cbody: req.body.cbody,
      zonetabel:{
          masterzone:req.body.masterzone,
          FMZ:req.body.FMZ,
          subzone:req.body.subzone
      },
      fromto:{
          tomainzone:req.body.tomainzone,
          TMZ:req.body.TMZ,
          tosubzone:req.body.tosubzone
      },
      fromtime:req.body.fromtime,
      totime:req.body.totime,
      phonenum:req.body.phonenum,
      carditels:req.body.carditels,
      cartype:req.body.cartype,
      gender:req.body.gender,
      status:req.body.status,
      createdetaandtime:req.body.createdetaandtime,
      viewsconts:req.body.viewsconts
      
  }, function(err, review) {
      if (err)
          res.send(err);
          Items.find(function(err, review) {
          if (err)
              res.send(err)
          res.json(review);
      });
  });
});

router.post('/zonz', function(req, res) {   

    Zonez.create({

        
            masterzone:  req.body.masterzone,
            FMZ:  req.body.FMZ,
            subzone:  req.body.subzone

    }, function(err, review) {
        if (err)
            res.send(err);
            Zonez.find(function(err, review) {
            if (err)
                res.send(err)
            res.json(review);
        });
    });

  });

  router.post('/addcrean', function(req, res) {   

    addcrean.create({

        drivername:req.body.drivername,
        driverphonenum:req.body.driverphonenum,
        wight:req.body.wight,
        cartype:req.body.cartype,
        location:req.body.location,
        createdtime:req.body.createdtime

    }, function(err, review) {
        if (err)
            res.send(err);
            Zonez.find(function(err, review) {
            if (err)
                res.send(err)
            res.json(review);
        });
    });

  });


  router.post('/addhavecar', function(req, res) {   

    addhavecar.create({

        drivername:req.body.drivername,
        driverphonenum:req.body.driverphonenum,
        wight:req.body.wight,
        cartype:req.body.cartype,
        location:req.body.location,
        createdtime:req.body.createdtime

    }, function(err, review) {
        if (err)
            res.send(err);
            Zonez.find(function(err, review) {
            if (err)
                res.send(err)
            res.json(review);
        });
    });

  });


  //addzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzoneaddzonea
  router.post('/addMzone', function(req, res) {   

    addzone.create({

        
            masterzone:  req.body.masterzone,
        

    }, function(err, review) {
        if (err)
            res.send(err);
            Zonez.find(function(err, review) {
            if (err)
                res.send(err)
            res.json(review);
        });
    });

  });

  //addFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZaddFMZ
  router.post('/addFMZ', function(req, res) {   
    addzone.findOne({masterzone:  req.body.masterzone},(err,review)=>{
               if(err){
                 console.log(err);
          }else{
                 if(!review){
                  res.status(401).send('invalid')
                 }else{
                    addFMZ.create({

                        masterzone:  req.body.masterzone,
                        FMZ: req.body.FMZ
                
                    }, function(err, review) {
                        if (err)
                            res.send(err);
                            Zonez.find(function(err, review) {
                            if (err)
                                res.send(err)
                            res.json(review);
                        });
                    });
                 }
                }
            })
  });

//addSUBzoneaddSUBzoneaddSUBzoneaddSUBzoneaddSUBzoneaddSUBzoneaddSUBzoneaddSUBzoneaddSUBzoneaddSUBzoneaddSUBzoneaddSUBzone
router.post('/addSUBzone', function(req, res) {   
    addzone.findOne({masterzone:  req.body.masterzone},(err,review)=>{
               if(err){
                 console.log(err);
          }else{
                 if(!review){
                  res.status(401).send('invalid')
                 }else{
                    addFMZ.findOne({FMZ:  req.body.FMZ},(err,review)=>{
                        if(err){
                          console.log(err);
                   }else{
                          if(!review){
                           res.status(401).send('invalid')
                          }else{
                    addSUBzone.create({
                        masterzone:  req.body.masterzone,
                        FMZ: req.body.FMZ,
                        subzone:req.body.subzone
                    }, function(err, review) {
                        if (err)
                            res.send(err);
                            Zonez.find(function(err, review) {
                            if (err)
                                res.send(err)
                            res.json(review);
                        });
                    });
                 }
                }
                })
                }
            }
        })
  });


router.get('/zonz', function(req, res) {
    addzone.find(function(err, review) {
            if (err)
                res.send(err)
            res.json(review);
        });
  });


  router.post('/zonzz',function(req, res) {
      let n=req.body.masterzone;
      addFMZ.find({masterzone:n},function(err, review) {
    if (err)
        res.send(err)
    res.json(review);
});
});


router.post('/zonzzz',function(req, res) {
    let mc=req.body.masterzone;
    var n = []
        n=req.body.FMZ;

        addSUBzone.find({ masterzone: mc ,  FMZ:  n },function(err, review) {

    if (err)
        res.send(err)

    res.json(review);
    });
    
});

router.post('/types', function(req, res) {
    Types.create({
        cartype: req.body.cartype,
    }, function(err, review) {
        if (err)
            res.send(err);
          
    });
   
  });




  router.get('/types', function(req, res) {
    Types.find(function(err, review) {
        if (err)
            res.send(err)
        res.json(review);
    });
 });


router.get('/get', function(req, res) {

   Items.find(function(err, review) {
          if (err)
              res.send(err)
          res.json(review);
      });
});



router.get('/getcreans', function(req, res) {

    addcrean.find(function(err, addcrean1) {
           if (err)
               res.send(err)
           res.json(addcrean1);
       });
 });


 router.get('/gethavycars', function(req, res) {

    addhavecar.find(function(err, addhavecar1) {
           if (err)
               res.send(err)
           res.json(addhavecar1);
       });
 });








// //مسار الرجستريشن حتى يسجل الشخص
//   router.post('/reg',(req,res)=>{
//     let payload={subject : reg._id}
//     let token =jwt.sign(payload,'secritkey')
//     let userDate =req.body;
//     let user = new User(userDate)
//     user.save((err,reg)=>{
//       let payload={subject : reg._id}
//       let token =jwt.sign(payload,'secritkey')
//       res.status(200).send({token})
//     })
//   })

//   //داله الدخول مع التوكن
//   router.post('/log',(req,res)=>{
//     let userDate=req.body;
//     User.findOne({email:userDate.email},(err,User)=>{
//       if(err){
//         console.log(err);
//       }else{
//         if(!User){
//           res.status(401).send('invalid')
//         }else{
//           if(User.password !== userDate.password){
//             res.status(401).send('invalid')
//           }else{
//             let payload={subject : User._id}
//             let token =jwt.sign(payload,'secritkey')
//             res.status(200).send({token})
//           }
//         }
//       }
//     })
//   })



  module.exports = router;
