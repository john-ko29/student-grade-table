class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    var tbodyElement = this.tableElement.querySelector("tbody");
    tbodyElement.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      var trElement = document.createElement("tr");

      var tdNameElement = document.createElement("td");
      var tdCourseElement = document.createElement("td");
      var tdGradeElement = document.createElement("td");

      tdNameElement.textContent = grades[i].name;
      tdCourseElement.textContent = grades[i].course;
      tdGradeElement.textContent = grades[i].grade;

      trElement.appendChild(tdNameElement);
      trElement.appendChild(tdCourseElement);
      trElement.appendChild(tdGradeElement);

      tbodyElement.appendChild(trElement);
    }
    console.log(grades);
  }
}
