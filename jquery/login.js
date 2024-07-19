
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
//lướt
signUpButton.addEventListener("click", () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
//đăng nhập
function login(e) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem("user")
    var data = JSON.parse(user);
    var rexname  = '/^[a-zA-Z0-9]{6,32}+$/';
    if ( email == "" || password == "")
        alert("Vui lòng nhập đầy đủ thông tin!!!");
    
    else if(email =="an@gmail.com" && password =="123456") {
        alert("Đăng nhập thành công ");
        window.location.href = "../index.html";
    }   
    else if (user == null)
        alert("Tài khoản này hiện chưa được đăng kí hãy đăng kí tài khoản!!");
    else if(password != data.password){
        alert("Mật khẩu không đúng!! ");
    }
    else if ((email == data.email && password == data.password)) {
        alert("Đăng nhập thành công ");
        window.location.href = "../index.html";
    } else
        alert("Tài khoản này hiện chưa được đăng kí hãy đăng kí tài khoản!!");
}
// đăng kí
function signup(e) {
    event.preventDefault();
    var username = document.getElementById("Name1").value;
    var email = document.getElementById("Email1").value;
    var rgexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //example@email.com/
    var password = document.getElementById("Password1").value;
    var rgexPass = /^.{6,}$/;
    // 12345678/;
   
    if (username == "" || email == "" || password == "" )
        alert("Vui lòng nhập đầy đủ thông tin!!!");
    if(username!=""){
        if(!isNaN(username)){
            alert("Tên tài khoản không được chỉ chứa số!!");
            return username;
        }
        
    }
    if(email!=""){
        if(!rgexEmail.test(email)){
            alert("Định dạng email không hợp lệ!!!") ;
        }
    }
   
    if(password != ""){
        if(!rgexPass.test(password)){
           
            alert("Mật khẩu không hợp lệ!!!Phải từ 6 số trở lên") ;
        }
    }
    
   
    if(rgexPass.test(password)&&rgexEmail.test(email)){
        var  user = {
            username: username,
            email: email,
            password: password
        }
        var json = JSON.stringify(user);
        var user1 = localStorage.getItem("user")
        var data = JSON.parse(user1);
        alert("Đăng kí thành công!! Hãy tiến hành đăng nhập");
        localStorage.setItem("user", json)
        window.location.href = "../html/login.html"; 
    }
    
}
// xem mật khẩu
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});