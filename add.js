function formValidation()
{
  var description=document.addtransaction.description;
  var amount=document.addtransaction.amount;

  if(desc_validation(description))
  {
  if(amount_validation(amount))
  {

  }
  }
  return false;
}
function desc_validation(description)
{
  var desc_length=description.value.length;
  var letters=new RegExp("[a-zA-Z0-9_-]");
  if(description.value.match(letters) && desc_length>7)
  {
    return true;
  }
  else
    {
      alert("description can only A-Z 0-9/minimum length should be 10");
      description.focus();
    }
}
function amount_validation(amount)
{
var reg=/^[+-]?[0-9]{1,9}(?:\.[0-9]{1,2})?$/;
 if(amount.value.match(reg) &&amount.value<=10000 &&amount.value>-10000  )
 {
   return true;
 }

 else
   {
     alert("amount should be ");
     amount.focus();
   }



}
