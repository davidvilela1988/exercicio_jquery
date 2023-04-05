$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();
    const newTask = $("#tasks").val();
    const newLineTask = $("<li></li>");
    $(`<p>${newTask}</p>`).appendTo(newLineTask);
    $(newLineTask).appendTo("ul");
    $("#tasks").val("");
  });
  $("ul").on("click", "li", function () {
    $("p").css("text-decoration", "line-through");
  });
});
