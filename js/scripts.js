$(document).ready(function(){
  $("#friends").submit(function(event){
    event.preventDefault();
    var friends = ["friend1", "friend2","friend3"];
    friends.forEach(function(friend){
      var userInput = $("input#" + friend).val();

      alert("Hi " + userInput + " I hope you are not sick today!");
    });

});

  });
