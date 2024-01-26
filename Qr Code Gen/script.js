let box = document.getElementById("qrcode");
let img = document.getElementById("qimg");
var input = document.getElementById("in");

function qsr() {
  img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    input.value;
}
