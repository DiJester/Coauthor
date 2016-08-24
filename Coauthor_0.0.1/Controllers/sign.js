var User=require('../data/proxy').User;
var validator=require('validator');

exports.showSignUp=function(req,res){
    res.render('signUp');
}

exports.signUp=function(req,res,next) {
    var loginname = validator.trim(req.body.loginname).toLowerCase();
    var email = validator.trim(req.body.loginname).toLowerCase();
    var pass = validator.trim(req.body.pass);
    var repass = validator.trim(req.body.repass);


}