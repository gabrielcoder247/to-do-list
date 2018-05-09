function Todolist(item, date) {
  this.items = "item";
  this.dates = "date";

}
$(document).ready(function() {
  $("form#new-to-do-list").submit(function(event) {
    event.preventDefault();
    var newItem = $("#new-item").val();
    var newDate = $("#new-date").val();
    var newToDoList = new Todolist(newItem, newDate);

    $("ul#things-to-do").append("<li><span>" + newToDoList.items + "</li></span>");
    $("#new-item").val();
    $("#new-date").val();
  });
});
