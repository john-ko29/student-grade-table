class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    var tbodyElement = this.tableElement.querySelector("tbody");
    tbodyElement.innerHTML = "";
    for (var i = 0; i < grades.length; i++) {
      tbodyElement.appendChild(this.renderGradeRow(grades[i], this.deleteGrade, this.editingGrade));

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

  onEditClick(editingGrade) {
    this.editingGrade = editingGrade;
  }

  renderGradeRow(data, deleteGrade, editingGrade) {
    var trElement = document.createElement("tr");

    var tdNameElement = document.createElement("td");
    var tdCourseElement = document.createElement("td");
    var tdGradeElement = document.createElement("td");
    var tdDeleteElement = document.createElement("td");
    var buttonDeleteElement = document.createElement("i");
    var buttonUpdateElement = document.createElement("i");

    tdNameElement.textContent = data.name;
    tdCourseElement.textContent = data.course;
    tdGradeElement.textContent = data.grade;

    buttonUpdateElement.classList.add("fas");
    buttonUpdateElement.classList.add("fa-edit");
    buttonUpdateElement.style.color = "cornflowerblue";

    buttonDeleteElement.classList.add("fa");
    buttonDeleteElement.classList.add("fa-trash")
    buttonDeleteElement.style.color = "red";

    tdDeleteElement.classList.add("justify-content-around");

    buttonDeleteElement.addEventListener("click", function() {
      deleteGrade(data.id);
    });

    buttonUpdateElement.addEventListener("click", function () {
      editingGrade(data);
    });

    tdDeleteElement.appendChild(buttonUpdateElement);
    tdDeleteElement.appendChild(buttonDeleteElement);

    trElement.appendChild(tdNameElement);
    trElement.appendChild(tdCourseElement);
    trElement.appendChild(tdGradeElement);
    trElement.appendChild(tdDeleteElement);

    return trElement;
  }
}
