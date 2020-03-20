class PageHeader{
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    var averageGradeElement = this.headerElement.querySelector("span");
    averageGradeElement.textContent = newAverage;
    console.log(newAverage);
  }
}
