 /*  #################################################################################
   #                           Author by: Sokun NORN                                 #
   #                                      Hany SRENG                                 #
   #                                      Rothana SUOS                               #
   ###################################################################################
 */


function addPriceToTable(price, type) {

  var table=document.getElementById('myTable');
  var total = 0;

  // ######## Add value into table ########
  var someDate = new Date(); 
         var D = someDate.getDate();
         var M = someDate.getMonth()+1;
         var Y = someDate.getFullYear();    
      var Datetody = D + '-'+ M + '-'+ Y;

    var table=document.getElementById('myTable'),
    newRow=table.insertRow(1);
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        

    cell1.innerHTML = type;
    cell2.innerHTML = price ;
    cell3.innerHTML = Datetody;
    cell4.innerHTML = "<button id='buttonDelete'>Delete</button>";

    // ########## Sum price in table ###########
  for (let i = 1; i < table.rows.length - 1; i++) {
    total += parseInt(table.rows[i].cells[1].innerHTML);
  }
  console.log(total);
  document.getElementById('totalPrice').innerHTML = total + '$';


    // ############ This is for delete table #############
  var index, deleteTable = document.getElementById('myTable');
  for (let i = 1; i < deleteTable.rows.length - 1; i++) {
    deleteTable.rows[i].cells[3].onclick = function() {    
      index = this.parentElement.rowIndex;
      deleteTable.deleteRow(index); 
      total = 0;
      for (let i = 1; i < table.rows.length - 1; i++) {
        total += parseInt(table.rows[i].cells[1].innerHTML);
      }
      document.getElementById('totalPrice').innerHTML = total + '$';
    }  
  } 
}

