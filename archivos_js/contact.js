function verificar() {
  var variable1 = document.getElementById('asunto').value;
  var variable2 = document.getElementById('email').value;
  var variable3 = document.getElementById('txarea').value;
  if (variable1 == "" || variable2 == "" || variable3 == "") {
    alert("Todo los campos son obligatorios rellenar");
  } else {
    alert("Gracias por escribirnos!!!")
  }
}
