<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторна робота 8</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function () {
            $("#form").on("submit", function (event) {
                event.preventDefault();
                $.ajax({
                    url: "setcookies.php",
                    method: "POST",
                    data: {
                        cookie_name: $("#name").val(),
                        cookie_value: $("#value").val(),
                        cookie_expire: $("#expire").val(),
                    },
                    success: function (res) {
                        alert("Кукі встановлено, сторінка перезавантажиться")
                        location.reload();
                    },
                    error: function (xhr, status, error) {
                        console.log("Error: " + error);
                    }
                });
            });
        });
    </script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        form {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
        }
        input[type="text"], input[type="number"] {
            width: calc(100% - 22px);
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 10px;
        }
        input[type="submit"], input[type="button"] {
            background-color: #007bff;
            border: none;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            padding: 10px 15px;
            transition: background-color 0.3s ease;
        }
        input[type="submit"]:hover, input[type="button"]:hover {
            background-color: #0056b3;
        }
    </style>

</head>
<body>

<h1>Керування кукі</h1>

<form id="form">
    <h2>Встановити кукі</h2>
    <label for="name">Ім'я кукі:</label>
    <input type="text" id="name" name="cookie_name" required>
    <label for="value">Значення кукі:</label>
    <input type="text" id="value" name="cookie_value" required>
    <label for="expire">Термін дії (в годинах):</label>
    <input type="number" id="expire" name="cookie_expire" min="0" required>
    <input type="submit" name="set_cookie" value="Встановити кукі">
</form>
<div>

<?php
if (empty($_COOKIE)) {
    echo '<p>Немає встановлених кукі.</p>';
} else {
    echo '<ul>';
    foreach ($_COOKIE as $name => $value) {
        echo '<li>' . htmlspecialchars($name) . ': ' . htmlspecialchars($value) . '</li>';
    }
    echo '</ul>';
}
?>
</div>

</body>
</html>
