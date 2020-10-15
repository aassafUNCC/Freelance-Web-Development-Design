$(document).ready(function(){
    $.getJSON("teammembers.json", function(data) {
        $("#placeholder").html("");
        $.each(data, function() {
            $.each(this, function (key, value) {
                $("#placeholder").append(
                    "<ul>"
                    + "<li>" + value.Name + "</li>"
                    + "<li>" + value.Title + "</li>"
                    + "<li>" + value.Phone + "</li>"
                    + "<li>" + value.Email + "</li>"
                    + "</ul>"
                );
            });
        });
    });
});
