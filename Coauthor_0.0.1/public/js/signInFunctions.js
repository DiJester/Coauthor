// JavaScript Document
window.onload=function(){
	
	
	
	//初始化cookie
	
	
	
	$("#inputName").val(getCookies("userName"));
	$("#inputEmail").val(getCookies("Email"));
	$("#inputPassword").val(getCookies("passWord"));
	
	
	$("#subm").click()=function(){
		
		
		
		
	var rem=document.getElementById('remember');
	var name=$("#inputName").val();
	var email=$("#inputEmail").val();			
	var pwd=$("#inputPassword").val();
			
		if(check()){
			
			if(rem.checked){
			setCookies("userName",name,15);
			
			setCookies("Email",email,15);alert(getCookies("Email"));

			setCookies("passWord",pwd,15);alert(getCookies("password"));

			if($("#inputPassword").val().length<6){
				alert("密码不得少于六位");}
			//变换界面
			}
			else{
				if($("#inputPassword").val().length<6){
				alert("密码不得少于六位");}
				//变化界面
				
				}
			}
		};
}
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