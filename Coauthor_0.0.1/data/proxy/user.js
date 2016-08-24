//2016.08.23
//user类查询方法封装
var models = require('../models');
var User = models.User;

exports.getUserByLoginName = function(loginName,callback){
	User.findOne({'loginname':loginName},callback);
};

exports.getUserByMail = function(email,callback){
	User.findOne({'email':email},callback);
};

exports.newAndSace = function (name,loginname,pass,email,profile,callback){
	var user = new User();
	user.name = name;
	user.loginname = loginname;
	user.pass = pass;
	user.email = email ;
	user.profile = profile;

	user.save(callback);
};