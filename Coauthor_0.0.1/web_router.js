var express=require('express');
var router=express.Router();
var site=require('./Controllers/site');
var sign=require('./Controllers/sign');


router.get('/',site.index);//home page
router.get('/signup',sign.showSignUp);//跳转到注册界面
router.post('/signup',sign.signUp);//提交注册信息

/*TypeError: Router.use() requires middleware function but got a Object
 *You can fix this by adding module.exports = router; to the end of each of your route files.
 */
module.exports = router;




