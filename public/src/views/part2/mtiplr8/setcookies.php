<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = isset($_POST['cookie_name']) ? $_POST['cookie_name'] : '';
    $value = isset($_POST['cookie_value']) ? $_POST['cookie_value'] : '';
    $expire = isset($_POST['cookie_expire']) ? (int)$_POST['cookie_expire'] * 3600 : 0; // Переводимо години в секунди

    if (!empty($name) && !empty($value) && $expire >= 0) {
        setcookie($name, $value, time() + $expire, "/"); // Встановлюємо кукі
        echo "Кукі '$name' встановлено.";
    } else {
        echo "Будь ласка, введіть коректні дані.";
    }
}