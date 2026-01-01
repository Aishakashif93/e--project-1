 $(document).ready(function () {

  $("#rejestration-form").on("submit", function (e) {
    e.preventDefault();
    $(".thankyou-popup").addClass("active");
    this.reset();
  });

  $(".close-popup").click(function () {
    $(".thankyou-popup").removeClass("active");
  });

});