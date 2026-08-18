// q4_script.js

function calculateGrade() {
  let sub1 = Number(document.getElementById("sub1").value);
  let sub2 = Number(document.getElementById("sub2").value);
  let sub3 = Number(document.getElementById("sub3").value);
  let sub4 = Number(document.getElementById("sub4").value);
  let sub5 = Number(document.getElementById("sub5").value);

  if (sub1 < 0 || sub1 > 100 || sub2 < 0 || sub2 > 100 || sub3 < 0 || sub3 > 100 ||
      sub4 < 0 || sub4 > 100 || sub5 < 0 || sub5 > 100) {
    alert("Please enter valid marks between 0 and 100 for all subjects.");
    return;
  }

  let total = sub1 + sub2 + sub3 + sub4 + sub5;
  let average = total / 5;

  let grade = "";
  if (average >= 90) grade = "A+";
  else if (average >= 80) grade = "A";
  else if (average >= 70) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 40) grade = "D";
  else grade = "F";

  let status = "PASS";
  let subjects = [sub1, sub2, sub3, sub4, sub5];
  for (let i = 0; i < subjects.length; i++) {
    if (subjects[i] < 40) { status = "FAIL"; break; }
  }
  if (average < 40) status = "FAIL";

  let resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <table class="marksheet-table">
      <tr><th>Subject</th><th>Marks Obtained</th></tr>
      <tr><td>Subject 1</td><td>${sub1} / 100</td></tr>
      <tr><td>Subject 2</td><td>${sub2} / 100</td></tr>
      <tr><td>Subject 3</td><td>${sub3} / 100</td></tr>
      <tr><td>Subject 4</td><td>${sub4} / 100</td></tr>
      <tr><td>Subject 5</td><td>${sub5} / 100</td></tr>
      <tr><td><b>Total</b></td><td><b>${total} / 500</b></td></tr>
      <tr><td><b>Average</b></td><td><b>${average.toFixed(2)}%</b></td></tr>
    </table>
    <div class="stamp-row">
      <div class="grade-final">${grade}</div>
      <div class="stamp ${status === 'PASS' ? 'pass' : 'fail'}">${status}<br>VERIFIED</div>
    </div>
  `;
}