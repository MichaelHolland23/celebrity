$(document).ready(function() {
    $("form#form").submit(function(event) {
      $("#kyle").hide();
      $("#kyle").hide();
      $("#thicke").hide();
      $("#thicke").hide();
      
      var hair = $("#hair").val();
      var eyes = $("#eyes").val();


      if (hair === "long" && eyes === "light") {
         $("#kyle").toggle();
       } else if (hair === "short" && eyes === "light") {
         $("#kyle").toggle();
       } else if (hair === "short" && eyes === "dark") {
         $("#thicke").toggle();
       } else {
         $("#thicke").toggle();
       }
       event.preventDefault();
     });
    });
