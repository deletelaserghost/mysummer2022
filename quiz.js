var answers = ["B", "C", "C", "B", "A", "B", "D", "D", "C", "D"];
function getValues(radioName) {
var radios = document.getElementsByName(radioName);
for (var y = 0; y < radios.length; y++)
  if (radios[y].checked) return radios[y].value;
}
function calcGrade() {
var grade = 0;
for (var i = 0; i < 10; i++)
  if (getValues("question" + i) === answers[i]) grade +=1;
return grade;
}
function returnGrade() {
  document.getElementById("grade").innerHTML = calcGrade();
}
