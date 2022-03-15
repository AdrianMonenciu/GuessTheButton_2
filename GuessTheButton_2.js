<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Guess the button 1</title>
  </head>
  <body>
    <div class="container">
      <div class="card" style="width: 40rem;">
        <div class="card-body">
          <h5 class="card-title">Guess the button 2</h5>
          <p class="card-text">This application will add on the screen the number of buttons introduced by the user. One of the buttons is the winner and will be randomly picked. The application will display if the winning button was picked.</p>
          <input type="text" id="buttonsNr"><br><br>
          <button type="submit" class="btn btn-primary" id="submitButton" onclick="return addButtons()">Submit</button>
          <button type="submit" class="btn btn-primary" id="restartButton" onclick="window.location.reload()">Restart</button>
        </div>
      </div>
      <div class="card" style="width: 40rem;">
        <div class="card-body">
          <div class="btn-group-vertical" role="group" aria-label="Basic outlined example" id="buttonsGroup">
          </div>
        </div>
      </div>
    </div> 
    <script src="myscripts.js"></script>
    <script>
      var randomNr
      function luckyButton(clicked_id) {
        if (clicked_id == randomNr) {
          alert("You clicked the lucky button!")
        } else {
          alert("You didn't click the lucky button! The lucky button is: " + randomNr)
        }
      }
      function addButtons() {
        //var buttonsNr = $('#buttonsNr').val()
        var buttonsNr = document.getElementById("buttonsNr").value
        randomNr = Math.floor((Math.random() * buttonsNr) + 1)
        submitButton.disabled = true
        for (let i = 1; i <= buttonsNr; i++) {
        //document.getElementById("buttonsGroup").append    innerHTML   <div> \    </div> \
          buttonsGroup.innerHTML += ('\
            <button type="button" class="btn btn-outline-primary" id="' + i + '" onclick="luckyButton(this.id)">Button ' + i + '</button>\
          ');
        }
        return false;
      }
    </script>
  </body>
</html>