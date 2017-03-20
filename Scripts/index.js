function onsubmit()
{

}
function loginValidation()
{

  var uname=document.signin.username;
  var pw=document.signin.password;
if(username_validation(uname))
{
if(password_validation(pw))
{



}
}
return false;
}

function username_validation(uname)
{
 var username_length=uname.value.length;
  if(username_length>=5)
  {
    return true;
  }
  else {
    {
      alert("username must be 5 characters long");
      uname.focus();
    }
  }
}

function password_validation(pw)
{

var password_length=pw.value.length;
if(password_length>=4)
{
return true;
}
else
{
alert("Password must be four characters long");
pw.focus();
return false;
}
}
