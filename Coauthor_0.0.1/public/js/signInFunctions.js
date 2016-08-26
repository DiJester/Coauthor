// JavaScript Document

function setCookies(name,password,days){
	var date=new Date();
	date.setDate(date.getDate()+days);
	document.cookie=name+"="+escape(password)+";expires="+date;
	}
	
	
function getCookies(name){
	
	if(document.cookie.length!=0){
		if(document.cookie.indexOf(name)!=-1){
			var c_start=document.cookie.indexOf(name)+name.length+1;
				
			var c_end=document.cookie.indexOf(";",c_start);
			if(c_end==-1)
				c_end=document.cookie.length;
				
			var value=unescape(document.cookie.substring(c_start,c_end));
			return value;
			}
		}
	
	
	
	}
	
	
function check(){
	var name=document.getElementById('inputName');
	var pwd=document.getElementById('inputPassword');
	var email=document.getElementById('inputEmail');
	
	if(name.value==""||pwd.value==""||email.value==""){
		
		alert("请输入完整信息");
		return false;
		}
	else
		return true;
	
	}