var tableElement = document.getElementById("table-student-grade");
var headerElement = document.getElementById("header")
var formElement = document.getElementById("grade-form");
var noGradeElement = document.getElementById("noGradeElement");

var pageHeader = new PageHeader(headerElement);
var gradeTable = new GradeTable(tableElement, noGradeElement);
var gradeForm = new GradeForm(formElement);
var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
