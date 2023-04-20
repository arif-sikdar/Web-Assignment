function regValidate(){
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var conpassword = document.getElementById("conpassword").value;

    var regName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/; 
    var regUsername = /^[a-z\d_-]{5,12}$/i;
    var regEmail = /^([a-z\d\.-]*)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var regPassword = /^[\d\w@-]{8,20}$/i;

    if(!regName.test(name)){
        alert("Enter a valid name!");
        document.getElementById("name").style.borderBottom = "0.1em solid #EB212E";
        return false;
    }
    if(!regUsername.test(username)){
        alert("Enter a valid username!");
        document.getElementById("username").style.borderBottom = "0.1em solid #EB212E";
        return false;
    }
    if(!regEmail.test(email)){
        alert("Enter a valid email!");
        document.getElementById("email").style.borderBottom = "0.1em solid #EB212E";
        return false;
    }
    if(!regPassword.test(password)){
        alert("Enter a valid password!");
        document.getElementById("password").style.borderBottom = "0.1em solid #EB212E";
        return false;
    }
    if(!conpassword.match(password)){
        alert("Please recheck your password!");
        document.getElementById("conpassword").style.borderBottom = "0.1em solid #EB212E";
        return false;
    }
    else{
        return true;
    }
}

function logValidate(){
    var username = document.getElementById("logUsername").value;
    var password = document.getElementById("logPassword").value;

    var fixedUser = "arif123"
    var fixedPass = "sikdar123"

    if(!fixedUser.match(username)){
        alert("Username not matched!");
        document.getElementById("logUsername").style.borderBottom = "0.1em solid #EB212E";
        return false;
    }
    if(!fixedPass.match(password)){
        alert("Password not matched!");
        document.getElementById("logPassword").style.borderBottom = "0.1em solid #EB212E";
        return false;
    }
    else{
        return true;
    }
}