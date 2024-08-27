<?php
$phonePattern = '/\+(\d{1,4})[\-\s]?(\d{7,10})|\((\d{1,4})\)[\-\s]?(\d{7,10})|(\d{1,4})[\-\s]?(\d{7,10})/';

$mobilePattern = '/\+(\d{1,4})[\-\s]?(\d{7,10})/';

$text = isset($_POST['text']) ? $_POST['text'] : '';

$text = preg_replace_callback($phonePattern, function($matches) use ($mobilePattern) {
    $phone = implode('', array_filter($matches));
    if (preg_match($mobilePattern, $phone)) {
        return "<span style='color: red; text-decoration: underline;'>$phone</span>";
    }
    return "<span style='color: red;'>$phone</span>";
}, $text);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Виділення телефонних номерів</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        .phone {
            color: red;
        }
        .phone.underline {
            text-decoration: underline;
        }
    </style>
</head>
<body>
<h1>Результат обробки тексту</h1>
<div>
    <p><strong>Оригінальний текст:</strong></p>
    <pre><?php echo htmlspecialchars($text); ?></pre>
    <p><strong>Текст з виділеними номерами телефонів:</strong></p>
    <div><?php echo $text; ?></div>
</div>
</body>
</html>
