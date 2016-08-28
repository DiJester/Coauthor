// JavaScript Document
// Edit by LiuChang,Liudi/Coauthor 2016/8/28 
function init(){
	//界面与服务器交互，进行车实话，获取信息

	//查看是否存在所需更新信息，所需更新信息：更新时间，姓名，角色，项目名，头像，版本号，概述,包含在for循环中
	
	
	//list.appendChild(ele);	
	var responseNum=6;
	//responseNum用于储存用户的仓库数目
	document.getElementById('myBadge').innerHTML=responseNum;
	//myBadge显示用户仓库数目
	}
function ldRtLst(){
	//加载右边list-group中用户各种类型仓库(repositories)的信息；
	init();
	
	var tab=document.getElementById('rightTab');
	var list=document.getElementById('rightList');
	for(var i=0;i<tab.children.length;i++){
		
			tab.children[i].onclick=function(){
				    
				for(var j=0;j<tab.children.length;j++){
					tab.children[j].index=j;
					tab.children[j].className="";
					list.children[j].className="tab-pane";
					}
				
				this.className="active";
				list.children[this.index].className="tab-pane active";
				
				
				
				};
		
		
		}
	
	//点击“skip”按钮，使巨幕消失
	$('#cancel').click(function(){
		document.getElementById('studyPart').style.display="none";
		
		});
	
	
	};