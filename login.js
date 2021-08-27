
function Log(){
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	if(username==""||pwd==""){
		alert("输入不能为空!");
		return false;
	}
	if(localStorage.getItem("uname")){
		var uname=localStorage.getItem("uname").toString();
		var pass=localStorage.getItem("pwd").toString();
		if(username==uname){
			if(pwd==pass){
				alert("登陆成功!");
				sessionStorage.setItem("username",uname);
				window.event.returnValue=false;//使用表单时阻止表单提交
				window.location.href="index.html";
			}
			else{
				alert("输入的密码不正确!");
			}
