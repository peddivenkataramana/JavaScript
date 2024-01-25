function cal() {
  var input = document.getElementById("date").value;

  var dob = new Date(input);
  if (input == null || input == "") {
    document.getElementById("message").innerHTML = "**Choose a date please!";
    return false;
  } else {
    var today = new Date();

    var ageYears = today.getFullYear() - dob.getFullYear();
    var ageMonths = today.getMonth() - dob.getMonth();
    var ageDays = today.getDate() - dob.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += 30;
    }
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    document.getElementsByTagName("p")[0].innerHTML =
      "Age is: " +
      ageYears +
      " years, " +
      ageMonths +
      " months, and " +
      ageDays +
      " days.";
  }
}
