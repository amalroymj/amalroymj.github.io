window.onload=function trans()
{
  
    var mainObj = [
        {
            date: "19 Feb 17",
            retailer: "Deustche CD 5619",
            transaction: "DEB",
            value:"-23.00",
            location:"Berlin"
        },
        {
          date: "18 Feb 17",
          retailer: "Dominos CD 5319",
          transaction: "DEB",
          value:"-40.00",
          location:"Toronto"
        },
        {
          date: "17 Feb 17",
          retailer: "Drug Store CD 5419",
          transaction: "DEB",
          value:"-50.00",
          location:"London"
        },
        {
          date: "16 Feb 17",
          retailer: "Bank CD 5619",
          transaction: "CRED",
          value:"100.00",
          location:"Kingston"
        }
    ];
    var k = '<tbody>'
    for(i = 0;i < mainObj.length; i++){
        k+= '<tr>';
        k+= '<td>' + mainObj[i].date + '</td>';
        k+= '<td>' + mainObj[i].retailer + '</td>';
        k+= '<td>' + mainObj[i].transaction + '</td>';
        k+= '<td>' + mainObj[i].value + '</td>';
        k+='<td>' + mainObj[i].location+'</td>';
        k+= '</tr>';
    }
    k+='</tbody>';
    document.getElementById('tableData').innerHTML = k;
  }
