// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    var newDev = $(this).data("newdev");

    var newDevState = {
      devoured: newDev
    };

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

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#name").val().trim(),
      devoured: $("#devoured").val().trim()
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

  // console.log("burgers js is connected and working")


  // $(".delete-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();


  //   // Send the DELETE request.
  //   $.ajax("/api/cats", {
  //     type: "DELETE",
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

});
