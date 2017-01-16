$(document).ready(function() {

  $("button").hover(
    function() {
      $(this).css("background-color", "green");
    },
    function() {
      $(this).css("background-color", "white");
    }
  );

  $("button").click(function() {

    var input = document.querySelector('.calculator-screen');
    var userInput = input.innerHTML;
    var buttonClick = this.innerHTML;

    input.innerHTML += buttonClick;

    if (buttonClick == "=") {
      input.innerHTML = eval(userInput);

    }

    if (buttonClick == "C") {
      input.innerHTML = " ";

    }

  });

});
