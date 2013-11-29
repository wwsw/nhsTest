$(document).on('click', '#save_db', function () {

    var server = $('#server_address').val();
    var username = $('#username').val();
    var password = $('#password_input').val()

    $.ajax({
        type: "POST",
        url: 'http://nhs.broken-cookies.com/PHP/connect_database.php',
        data: {
            server: server,
            username: username,
            password: password
        },
        success: function (response) {
            alert(response);
        }
    });

});