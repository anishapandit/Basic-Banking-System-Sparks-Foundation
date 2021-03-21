const columnDefs = [
      { headerName: "S.NO", field: "sNO", cellClass: "grid-cell-centered" },
      { field: "Name" },
      {field: "Balance"}
    ];
    // specify the data
    const rowData = [
      { sNO: "1", Name: "Arjun Verma", Balance: 45000 },
      { sNO: "2", Name: "Ram Gupta",Balance: 24000 },
      { sNO: "3", Name: "Sia Singh",Balance: 34000 },
      { sNO: "4", Name: "Ramesh Jain",Balance: 40000 },
      { sNO: "5", Name: "Harsh Rao",Balance: 63000 },
      { sNO: "6", Name: "Venky Sharma",Balance: 10030 },
      { sNO: "7", Name: "Shriya Sapre",Balance: 56000 },
      { sNO: "8", Name: "Anisha Pandit",Balance: 35600 },
      { sNO: "9", Name: "Mahesh Patni",Balance: 85000 },
      { sNO: "10", Name: "Raghav Rao",Balance: 13500 },
    ];

    // let the grid know which columns and what data to use
    var gridOptions = {
      columnDefs: columnDefs,
      rowData: rowData,
      defaultColDef: {
        resizable: true,
        //enablePivot: true,
    },
    animateRows: true,
    };

    document.addEventListener("DOMContentLoaded", function () {
        // lookup the container we want the Grid to use
        var eGridDiv = document.querySelector('#myGrid');
        // create the grid passing in the div to use together with the columns & data we want to use
        new agGrid.Grid(eGridDiv, gridOptions);
    });

function modalDisplay(){
  console.log("I am here")
  $('#sendmoney').modal('show');
}
function updateRecord(){
  let entername = $("#entername").val();
  let enteramount = $("#enteramount").val();
  let senderName = $("#sendersName").val();
  var re = new RegExp("^[0-9]+$");
  console.log("entername =  " + entername );
  console.log("enteramount = " + enteramount);
    console.log("senderName = " + senderName);

  if(senderName == '' && entername == '' && enteramount === ''){
    alert("Please Provide Name and Amount to proceed");
  }
  for(let i = 0; i < rowData.length; i++){
    if(rowData[i].Name == entername){
      let balance = parseInt(rowData[i].Balance, 10);
      rowData[i].Balance = parseInt(enteramount,10) + balance;
      console.log(rowData[i].Balance);
    }
      if(rowData[i].Name == senderName){
      let balance = parseInt(rowData[i].Balance, 10);
      rowData[i].Balance = balance - parseInt(enteramount,10) ;
      console.log(rowData[i].Balance);
    }
  }
alert("Transaction Successful !! " )//$(#enterAmount) is sent to $(#enterName)".")
 gridOptions.api.redrawRows();
}

