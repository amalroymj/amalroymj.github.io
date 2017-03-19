function check(FirstName)
{
  var a=/^[A-Z0-9]+$/;


  if(FirstName.value.match(a))
  {
    alert("success");

  }

  if (LastName.value.match(a))
  {
      alert("success");
  }
  else {
    alert("Invalid LastName");
  }
}
