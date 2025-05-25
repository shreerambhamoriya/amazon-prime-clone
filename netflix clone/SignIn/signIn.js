function signupPage() {
    window.location.href ="../Signup/signup.html";
}



//  login validation

var loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || [];

document.querySelector(".loginBtn").addEventListener("click" , function(){
    
    var errorBox = document.querySelector(".errorBox");
    var emailErr = document.querySelector(".emailErr");
    var passErr = document.querySelector(".passErr");
    var wrongCredentials = document.querySelector(".wrongCredentials");
    
    
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#password").value;

if (email.length && pass.length) {
    var check = true;
    var flag = 0;

    loginInfo.map(function(elem) {
        if(elem.email === email && elem.password ===pass) {
            errorBox.style.display = "none";
            emailErr.style.display = "none";
            passErr.style.display = "none";
            flag=1;
            check= true;
            alert("Signed in successfully");
            localStorage.setItem("userName" , JSON.stringify(elem.name));
            window.location.href = "/AfterSignIn/afterSignIn.html";
        }else {
            if (flag !== 1) {
                check= false;
            }
        }
    });
    if (!check) {
         errorBox.style.display = "block";
            emailErr.style.display = "none";
            passErr.style.display = "none";
            wrongCredentials.style.display = "block";
        }
    }else{
        if (!email.length && !pass.length){
            // alert(please enter all the fields)
            
            errorBox.style.display="block";
            emailErr.style.display = "block";
            passErr.style.display = "block";

        } else if(!email.length){
        // alert(please enter your name)
        errorBox.style.display="block";
        emailErr.style.display = "block";
        passErr.style.display = "none";
        
    }else{
        // alert(please enter your password)
         errorBox.style.display="block";
        emailErr.style.display = "none";
        passErr.style.display = "block";


    }

}


});