$(document).ready(function(){
    $.getJSON("partners.json", function(data) {
        $("#placeholder2").html("<ul>");
        $.each(data, function() {
            $.each(this, function (key, value) {
                $("#placeholder2").append(
                    + "<li>" + value.Dealership + "</li>"
                );
            });
        });
        $("#placeholder2").append("</ul>");
    });
});
