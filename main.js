var tableElement = document.getElementById("table-student-grade");
var headerElement = document.getElementById("header")

var pageHeader = new PageHeader(headerElement);
var gradeTable = new GradeTable(tableElement);
var app = new App(gradeTable, pageHeader);
app.start();
