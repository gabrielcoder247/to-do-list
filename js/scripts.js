function Todolist(item, date) {
  this.item = item;
  this.date = date ;

}
$(document).ready(function() {
  $("form#new-to-do-list").submit(function(event) {
    event.preventDefault();
    var newItem = $("input#new-item").val();
    var newDate = $("input#new-date").val();
    var newToDoList = new Todolist(newItem, newDate);

    $("ul#things-to-do").append("<li><span>" + newToDoList.item + "</li></span>");
    $("ul#things-to-do").append("<li><span>" + newToDoList.date + "</li></span>");
    $("input#new-item").val('');
    $("input#new-date").val('');
  });
});
