class GradeForm {
  constructor(formElement) {
    this.isEditing = false;
    this.gradeID = null;
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editingGrade = this.editingGrade.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
    this.formElement.addEventListener("reset", this.handleCancel);
  }

  onSubmit(createGrade, editGrade) {
    this.createGrade = createGrade;
    this.editGrade = editGrade;
  }

  handleSubmit(event) {
    event.preventDefault();

    var formData = new FormData(event.target);
    var name = formData.get("name");
    var course = formData.get("course");
    var grade = formData.get("grade");
    if (!this.isEditing) {
      this.createGrade(name, course, grade);
    } else {
      this.editGrade(this.gradeID, name, course, grade);
    }
    this.resetForm(event);
    console.log("testing handleSubmit");
  }

  editingGrade(data) {
    this.gradeID = data.id;
    this.isEditing = true;

    document.getElementById("form-title").textContent = "Update a Grade"
    document.getElementById("name").value = data.name;
    document.getElementById("course").value = data.course;
    document.getElementById("grade").value = data.grade;
    document.getElementById("submit").textContent = "Update"
  }

  handleCancel(event) {
    this.resetForm(event);
  }

  resetForm(event) {
    this.isEditing = false;
    document.getElementById("form-title").textContent = "Add a Grade";
    document.getElementById("submit").textContent = "Add";
    event.target.reset();
  }
}
