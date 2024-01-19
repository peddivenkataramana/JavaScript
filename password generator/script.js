function generatePass() {
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }
  console.log(pass);
  document.getElementById("inpu").value = pass;
  return pass;
}

var icon = document.getElementById("i");

icon.addEventListener("click", function () {
  var data = document.getElementById("inpu");
  data.select();
  navigator.clipboard.writeText(data.value);
  icon.style.cursor = "pointer";
});
