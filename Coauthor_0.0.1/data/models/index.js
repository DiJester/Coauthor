//2016.08.23
//Models的接口文件
var mongoose = require('mongoose');

//models
UserSchema = reuqire('./user');


exports.User = mongoose.model('User',UserSchema);
