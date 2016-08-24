//处理页面的初始化和返回
exports.index=function(req,res,next){
    res.render('./Include/index.jade',{
        title:'Coauthor'
    });
};


