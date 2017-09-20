let express =require('express');
let router = express.Router();
let userDetail =require('../model/User');
var passport = require('passport');
require('../auth/passport')(passport);


router.post('/',passport.authenticate('jwt', { session: false}),(req,res)=>{
	userDetail.find({email:req.body.email,password:req.body.password})
	.exec((err,result)=>{
		if(err)
			console.log('Error occured');
		else
			res.json(result);
	});
})

module.exports = router;