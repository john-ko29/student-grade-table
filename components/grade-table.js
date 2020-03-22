class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    var tbodyElement = this.tableElement.querySelector("tbody");
    tbodyElement.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      tbodyElement.appendChild(this.renderGradeRow(grades[i], this.deleteGrade));

    }
    if(!grades.length) {
      this.noGradesElement.classList.remove("d-none");
    } else {
      this.noGradesElement.classList.add("d-none");
    }
    console.log(grades);
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var trElement = document.createElement("tr");

    var tdNameElement = document.createElement("td");
    var tdCourseElement = document.createElement("td");
    var tdGradeElement = document.createElement("td");
    var tdDeleteElement = document.createElement("td");
    var buttonDeleteElement = document.createElement("button");

    tdNameElement.textContent = data.name;
    tdCourseElement.textContent = data.course;
    tdGradeElement.textContent = data.grade;

    buttonDeleteElement.classList.add("btn");
    buttonDeleteElement.classList.add("btn-danger");
    buttonDeleteElement.textContent = "DELETE";

    buttonDeleteElement.addEventListener("click", function() {
      deleteGrade(data.id);
    });

    tdDeleteElement.appendChild(buttonDeleteElement);

    trElement.appendChild(tdNameElement);
    trElement.appendChild(tdCourseElement);
    trElement.appendChild(tdGradeElement);
    trElement.appendChild(tdDeleteElement);

    return trElement;
  }
}
