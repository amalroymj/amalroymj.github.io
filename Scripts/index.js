function formValidate()
{
 var usrname = document.forms["formLogin"]["username"].value;
 var passworde = document.forms["formLogin"]["passwd"].value;

 if(usrname.length < 5)
 {
  window.alert("Please enter user name which is atleast 5 character long or more.");
  return false;
 }
 else if(passworde.length < 4)
 {
  window.alert("Please enter password which is atleast 4 digit long or more.");
  return false;
 }
 else
 {
  return true;
 }
}
