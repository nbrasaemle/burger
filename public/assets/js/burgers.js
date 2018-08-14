$(document).ready(function () {
    $(".create-form").submit(function (event) {
        console.log("something");
        event.preventDefault();

        //     $.post("/api/burgers",
        //     {
        //         burger_name: $("#newBurger").val().trim()
        //     },
        //     function(data, status){
        //         // alert("Data: " + data + "\nStatus: " + status);
        //         location.reload();
        //     });
        //   });

        $.ajax({
            url: "/api/burgers",
            type: "post",
            data: {
                burger_name: $("#newBurger").val().trim()
            },
            success: function (response) {
                // you will get response from your php page (what you echo or print)                 
                console.log(response);
                location.reload();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    });
});