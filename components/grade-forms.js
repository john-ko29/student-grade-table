class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit(createGrade) {

  }

  handleSubmit(event) {
    event.previousDefault();
    console.log("testing handleSubmit");
  }
}
