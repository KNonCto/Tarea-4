function changeImage() {
  var buho = document.getElementById("img-buho");
  buho.src = "./images/gato.png";
}

function changeDescription() {
  document.getElementById("description-sunset").innerHTML =
    "Cuando el sol se esconde.";
}

function changeStyle() {
  var card = document.getElementById("card-cat");
  card.style = "background-color: black";
}

function printFormAnswers() {
  var answers = {
    email: document.getElementById("email").value,
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    city: document.getElementById("city").value,
    checkbox1: document.getElementById("checkbox1").checked,
    checkbox2: document.getElementById("checkbox2").checked,
    checkbox3: document.getElementById("checkbox3").checked,
  };

  console.log(answers);
}
