$(document).ready(function() {
  $("#formLetter form").submit(function(event) {
    var nameInputLetter = $("#nameInput").val();
    $("#nameDisplay").text(nameInputLetter);

    event.preventDefault();
  });
});
