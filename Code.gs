function clearCell(){ // this function clears cell A2 before appending it with fresh data.
  
  var app = SpreadsheetApp;
  var activeSheet = app.getActiveSpreadsheet().getSheetByName("Sales report");
  activeSheet.getRange("A2:B2").clearContent();
}

function sumOfAllSales() {
  
  var app = SpreadsheetApp;
  
  var activeSheet = app.getActiveSpreadsheet().getSheetByName("Form Responses"); // selects spreadsheet 'Form Responses' by name
  
  var sum =  activeSheet.getRange("H2").getValue();// selects value of sales total from form responses
  
  var targetSheet = app.getActiveSpreadsheet().getSheetByName("Sales report"); // selects 'Sales report' as active sheet

  targetSheet.getRange("A2").setValue(sum); // appends value of sales total to new sheet in cell A2
  
}

function differenceOfSales(){
    var app = SpreadsheetApp;
  
  var activeSheet = app.getActiveSpreadsheet().getSheetByName("Form Responses"); // selects spreadsheet 'Form Responses' by name
  
  var sum =  activeSheet.getRange("J2").getValue();// selects value of sales total from form responses
  
  var targetSheet = app.getActiveSpreadsheet().getSheetByName("Sales report"); // selects 'Sales report' as active sheet

  targetSheet.getRange("C2").setValue(sum);// appends value of difference vs target to new sheet in cell C2
}

function differenceOfSalesPercent(){
    var app = SpreadsheetApp;
  
  var activeSheet = app.getActiveSpreadsheet().getSheetByName("Form Responses"); // selects spreadsheet 'Form Responses' by name
  
  var sum =  activeSheet.getRange("K2").getValue();// selects value of the difference as a percentage from form responses
  
  var targetSheet = app.getActiveSpreadsheet().getSheetByName("Sales report"); // selects 'Sales report' as active sheet

  targetSheet.getRange("D2").setValue(sum);// appends value of difference vs target as a percentage to new sheet in cell D2
}


function timestamp(){ // This function automatically dates the cell adjacent to the 'total sales' cell on the 'Sales report' sheet
  
  var app = SpreadsheetApp;
  
  var targetSheet = app.getActiveSpreadsheet().getSheetByName("Sales report");
  var targetCell = targetSheet.getRange("A2").offset(0,1);
  
  var formattedDate = Utilities.formatDate(new Date(), "GMT", "MM/dd/yyyy");
  
  targetCell.setValue(formattedDate);
  
  
  
}

  /* function sheetAsPdf(){
   var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sales report"); // This code block was still being worked on.
   var newSpreadsheet = SpreadsheetApp.create('Spreadsheet to export');
   var tempSheet = ss.insertSheet();
   dataSheet.getRange( firstRow, 1, lastRow - firstRow + 1 ).copyTo(tempSheet.getRange( sheet.getFrozenRows() + 1, 1 ))
   var pdf = DocsList.getFileById(newSpreadsheet.getId()).getAs('application/pdf').getBytes();
   var attach = {fileName:'Sales report.pdf',content:pdf, mimeType:'application/pdf'}; 
} */

function sendMail() {

  var originalSpreadsheet = SpreadsheetApp.getActive();  // Gets the current spreadsheet
  var now = new Date(); // Time stamp information for the email
  MailApp.sendEmail("doomboy212@gmail.com",
                    "Sales report",
                    "Daily sales report for day of " + now,
                    {attachments:[originalSpreadsheet]}); //attachment field; sending out google spreadsheet
}