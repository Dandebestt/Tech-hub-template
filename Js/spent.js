// Portfolio isotope and filter
var portfolioIsotope = $(".portfolio-container").isotope({
  itemSelector: ".portfolio-item",
  layoutMode: "fitRows",
});
$("#portfolio-filter li").on("click", function () {
  $("#portfolio-filter li").removeClass("active");
  $(this).addClass("active");

  portfolioIsotope.isotope({ filter: $(this).data("filter") });
});

// JS code to display hidden form
let showform = document.getElementById("form");
function displayForm() {
    showform.classList.toggle("show-form");
}


// form Handling
var btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var body =
    "name:" + name + "<br/> email: " + email + "<br/> message:" + message;

  Email.send({
    SecureToken: "ENTER UR SAFE TOKEN",
    To: "example@gmail.com",
    From: "example@gmail.com",
    Subject: "SPENT MAIL",
    Body: body,
  }).then(
    message => {
      Swal.fire({
        title: "Success!",
        text: "Message sent sucessfully!",
        icon: "success",
      });
  });
}); 

// Jquery fucntion to clear form
$(document).ready(function(){
  $("#btn").click(function(){
    $(".form").empty();
  });
});









