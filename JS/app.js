// alert();
let loginform = document.getElementById("loginform")

let username = document.getElementById('username');
let username_error = document.getElementById('error1')

let email = document.getElementById('email');
let email_error = document.getElementById('error2')

let pwrd = document.getElementById('pwrd');
let pwrd_error = document.getElementById('error3')

let cpwd = document.getElementById('cpwd');
let cpwd_error = document.getElementById('error4')

let phn = document.getElementById('phone');
let phn_error = document.getElementById('error5')

//for submission

let no_err_name = true;
let no_err_mail = true;
let no_err_pwrd = true;
let no_err_cpwd = true;
let no_err_phn = true;



username.addEventListener('input', usernameCheck)
function usernameCheck(){
    let data = username.value;
    let validName = RegExp('^[A-Z]{1}[A-Za-z ]{1,19}$')
    // console.log('username_data');

    if(data == '') {
        username_error.innerHTML = '**Required field';
        no_err_name = false;
    }
    else if(!validName.test(data)){
        username_error.innerHTML = '**First letter capital, min 2 characters, max 20'
        no_err_name = false;
    }
    else{
        username_error.innerHTML = ' ';
        no_err_name = true;
    }
    return no_err_name;
}



email.addEventListener('input',emailCheck)
function emailCheck()
{
    let data2=email.value ;
    // alert('email'+email.value)
    let validEmail=RegExp("^([a-z0-9.-_]+)@([a-z{2,15}).([a-z.]{2,20})$");
    // console.log(data);
    if (data2 == '')
    {
        email_error.innerHTML= ' **Required Field'
       no_err_mail = false;
    }
    else if(!validEmail.test(data2))
    {
        email_error.innerHTML='ex-abc@gmail.com'
        no_err_mail = false;
    }
    else{
        email_error.innerHTML=' '
        no_err_mail=true;
    }
    return no_err_mail;
}

pwrd.addEventListener('input',passwordCheck)
function passwordCheck()
{
    let data3=pwrd.value;
    // alert('pwrd'+pwrd.value)
    let validpwrd=RegExp("^(?=.*[A-Z])(?=.*[!@#$*])(?=.*[0-9])(?=.*[a-z]).{8,15}$");
    // console.log(data2);)
    if (data3 =='')
    {
        pwrd_error.innerHTML="**Required field"
        no_err_pwrd= false;

    }
    else if(!validpwrd.test(data3))
    {
        pwrd_error.innerHTML= "Atleat 1 small, 1 capital, 1 specail and 1 number,min length-8"
        no_err_pwrd= false;
    }
    else{
        pwrd_error.innerHTML =''
        no_err_pwrd= true;
    }
    return no_err_pwrd;
}



cpwd.addEventListener('input',cpwdCheck)
function cpwdCheck()
{
    let data3=pwrd.value;
    let data4=cpwd.value;
    // console.log(data3,data4);
    if (data4 == '')
    {
        cpwd_error.innerHTML='**Required field'
        no_err_cpwd=false;
    }
    else if(data3 !== data4)
    {
        cpwd_error.innerHTML='Password mismatched'
        no_err_cpwd=false;
    }
    else 
    {
        cpwd_error.innerHTML=''
        no_err_cpwd=true;
    }
    return no_err_cpwd;

}
phn.addEventListener('input' , phnCheck)
function phnCheck(){
    let phn_data = phn.value;
    let validphn = RegExp('^[6-9]{1}[0-9]{9}$')

    if (phn_data == "") {
        phn_error.innerHTML = '**Required field';
        no_err_phn = false;
    }
    else if(!validphn.test(phn_data)) {
        phn_error.innerHTML = '**Invalid phone number, 10 digit is must';
        no_err_phn = false;
    }
    else{
        phn_error.innerHTML = '';
        no_err_phn = true;
    }
}

loginform.addEventListener("submit", (e) => {
    e.preventDefault();


if (username.value == "" || email.value =="" || pwrd.value == "" || cpwd.value == "" || phn.value == ""){
    alert("Ensure you input value in all the fields!");
}
else{
    alert("This form has been successfully submitted!");
    console.log('this form has a username');

    username.value = "";
    email.value = "";
    pwrd.value == "";
    cpwd.value == "";
    phn.value == "";

}
});

// $("submitBtn").click(function () 
    
// {
//     let err_name = usernameCheck();
//     let err_phn = phnCheck();
//     let err_mail = emailCheck();
//     let err_pwd = passwordCheck();
//     let err_cpwd = cpwdCheck();
// })


// if(err_name===false || err_mail===false || err_pwd===false || err_cpwd===false || err_phn===false)
// {
//     alert('Validation failed');
//     return false;

// }
// else{
//     alert("Data Submitted sucessfully");
//     return true;
// }
// }


// $ ('.sumbitBtn').click(function(){
//     alert("Your data have been successfully submitted")
//  }
//  )

