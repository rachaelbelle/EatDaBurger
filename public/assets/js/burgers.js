// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#name").val().trim(),
      // devoured: $("#devoured").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".burgerButton").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var newDev = $(this).data("newdev");

    var newDevState = {
      devoured: newDev
    };

    console.log(id)
    console.log(newDevState)


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevState
    }).then(
      function() {
        console.log("changed devoured to", newDev);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


})

  // console.log("burgers js is connected and working")
