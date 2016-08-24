var express=require('express');
var router=express.Router();
var site=require('./Controllers/site');

//home page
router.get('/',site.index);

/*TypeError: Router.use() requires middleware function but got a Object
 *You can fix this by adding module.exports = router; to the end of each of your route files.
 */
module.exports = router;




