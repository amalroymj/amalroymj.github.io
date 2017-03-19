window.onload=function transa()
{
    var mainObj = [
        {
         summary: "A debit card payment of $23.00 to DEUTSCHE CD 5619 was taken from account",
         type: "Debit Card (DEB)",
         retailer:"DEUTSCHE",
         business:"Finanicial Institutions-Auto Cash",
         location:"Berlin",
         cardnumber:5619,
         authorisation:"Card Swipe",
         value:"-23.00"
        },
        {
         summary: "A debit card payment of $40.00 to DOMINOS CD 5319 was taken from account",
         type: "Debit Card (DEB)",
         retailer:"DOMINOS",
         business:"Food Business-Auto Cash",
         location:"Toronto",
         cardnumber:5319,
         authorisation:"Card Swipe",
         value:"-40.00"
        },
        {
         summary: "A debit card payment of $50.00 to DRUG STORE CD 5419 was taken from account",
         type: "Debit Card (DEB)",
         retailer:"DRUG STORE",
         business:"Pharmacy Sector-Auto Cash",
         location:"london",
         cardnumber:5419,
         authorisation:"Card Swipe",
         value:"-50.00"
        },
        {
         summary: "A credit card payment of $100.00 from Bank CD 5419 was taken from account",
         type: "Credit Card (CRED)",
         retailer:"Bank",
         business:"Banking Sector-Auto Cash",
         location:"Kingston",
         cardnumber:5619,
         authorisation:"Card Swipe",
         value:"100.00"
        },
    ];
    var k = '<tbody>'
    for(i = 0;i < mainObj.length; i++){
        k+= '<tr>';
        k+= '<td>' + mainObj[i].summary+ '</td>';
        k+= '<td>' + mainObj[i].type + '</td>';
        k+= '<td>' + mainObj[i].retailer + '</td>';
        k+= '<td>' + mainObj[i].business + '</td>';
        k+= '<td>' + mainObj[i].location + '</td>';
        k+= '<td>' + mainObj[i].cardnumber + '</td>';
        k+= '<td>' + mainObj[i].authorisation + '</td>';
        k+='<td>' +mainObj[i].value+ '</td>';
        k+= '</tr>';
    }
    k+='</tbody>';
    document.getElementById('tableData').innerHTML = k;
  }
