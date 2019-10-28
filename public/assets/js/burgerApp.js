// Wait to attach handlers until the DOM is fully loaded.
$(document).ready(function () {
  $(".change-devour").on("click", function (event) {
    event.preventDefault();
    var id = $(this).children(".burger_id").val();
 
    // Send the PUT request.
    $.ajax({
      method: "PUT",
      url: "/api/burgers/update/" + id,
    }).then(function (data) {
      location.reload();
    }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".delete-burger").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});