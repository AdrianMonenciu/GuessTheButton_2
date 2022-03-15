var randomNr
function luckyButton(clicked_id) {
  if (clicked_id == randomNr) {
    alert("You clicked the lucky button!")
  } else {
    alert("You didn't click the lucky button! The lucky button is: " + randomNr)
  }
}


function addButtons() {
  var buttonsNr = document.getElementById("buttonsNr").value
  if (buttonsNr < 2) {
    alert("Minimum buttons nr is 2, the game will restart.")
    restartTheGame();
  } else {
    randomNr = Math.floor((Math.random() * buttonsNr) + 1)
    submitButton.disabled = true
    for (let i = 1; i <= buttonsNr; i++) {
      buttonsGroup.innerHTML += ('\
        <button type="button" class="btn btn-outline-primary" id="' + i + '" onclick="luckyButton(this.id)">Button ' + i + '</button>\
      ')
    }
  }
  return false;
}

function restartTheGame() {
  window.location.reload()
}