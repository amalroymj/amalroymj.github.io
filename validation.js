
function registrationValidation()
{
  var fname=document.signin.FirstName;
  var lname=document.signin.LastName;
  var uname=document.signin.username;
  var email=document.signin.email;
if(username_validation(uname))
{
if(email_validation(email))
{
if(fname_validation(fname))
{
if(lname_validation(lname))
{

}
}
}
}
return false;
}
function fname_validation(fname)
{
  var letters=/^[A-Z][a-zA-Z0-9]+$/;
  if(fname.value.match(letters) )
  {
    return true;
  }
  else {
    {
      alert("First name can only A-Z 0-9");
      fname.focus();
    }
  }
}
function lname_validation(lname)
{
 var letters=/^[A-Z][a-zA-Z0-9]+$/;
  if(lname.value.match(letters))
  {
    return true;
  }
  else {
    {
      alert("First name can only A-Z 0-9");
      lname.focus();
    }
  }
}
function username_validation(uname)
{
var letters = new RegExp("[a-zA-Z0-9_-]");
var username_length=uname.value.length;
if(uname.value.match(letters) && username_length>=5)
{
return true;
}
else
{
alert("Username must have alphabet characters only");
uname.focus();
return false;
}
}
function email_validation(email)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}
