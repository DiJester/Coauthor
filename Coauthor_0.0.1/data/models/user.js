//2016.08.08
//用户账户的数据架构UserSchema
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;
var ObjectId=mongoose.Schema.Types.ObjectId;
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	//账户信息
	name:{type:String},
	loginname:{type:String},
	pass:{type:String},
	email:{type:String},
	profile:{type:String},//用户简介
	profile_image_url:{type:String},//头像img路径
	//关注仓库数量
	collect_count:{type:Number,default:0},
	//拥有的仓库数量
	own_count:{type:Number,default:0},
	//交互功能
	reply_count:{type:Number,default:0},
	is_vip:{type:Boolean,default:false},
	//时间信息
	create_at:{type:Date,default:Date.now},
});
//创建索引
UserSchema.index({loginname:1},{unique:true});
UserSchema.index({email:1},{unique:true});
//model function,save函数之前调用
UserSchema.pre('save',function(next){
	var user = this;
	//密码处理
	var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
	var hash = bcrypt.hashSync(user.password,salt);
	this.password = hash;
	next();
});
//virtual function

//到处UserSchema
module.exports = UserSchema;