var options = document.querySelectorAll(".a");
var score = 0;

document.getElementById("btn").style.display = "none";

function select(selectedOption) {
  options.forEach(function (option) {
    option.disabled = true;

    if (option.id === selectedOption) {
      if (option.id === "b") {
        option.style.backgroundColor = "green";
        score++;
      } else {
        option.style.backgroundColor = "red";
        document.getElementById("b").style.backgroundColor = "green";
      }
    } else if (option.id === "b") {
      option.style.backgroundColor = "green";
    } else {
      option.style.display = "none";
    }
  });

  document.getElementById("btn").style.display = "block";
}

function showScore() {
  var qsElement = document.getElementById("qs");
  if (qsElement) {
    qsElement.textContent = "Your Score: " + score;
  }

  document.getElementById("btn").style.display = "none";
}
