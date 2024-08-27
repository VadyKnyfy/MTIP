<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Лабораторна робота 5</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
        }

        form {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            padding: 20px;
            margin-bottom: 20px;
        }

        p {
            font-weight: bold;
            margin: 0 0 10px;
        }

        .question {
            margin-bottom: 15px;
        }

        input[type="submit"] {
            background-color: #007bff;
            border: none;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
            font-size: 16px;
            padding: 10px 15px;
            transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
            background-color: #0056b3;
        }

        .result {
            font-weight: bold;
        }
    </style>
</head>
<body>
<form action="api/submit.php" method="post">
    <h1>Тест на знання таблиці множення</h1>

    <?php
    $questions = [
        ["question" => "2 x 3 =", "answers" => ["5", "6", "7"], "correct" => [1]],
    ["question" => "4 x 5 =", "answers" => ["20", "21", "22"], "correct" => [0]],
    ["question" => "7 x 8 =", "answers" => ["54", "56", "58"], "correct" => [1]],
    ["question" => "9 x 6 =", "answers" => ["54", "55", "56"], "correct" => [0]],
    ["question" => "3 x 7 =", "answers" => ["20", "21", "22"], "correct" => [1]],
    ["question" => "11 x 12 =", "answers" => ["132", "133", "134"], "correct" => [0]],
    ["question" => "13 x 14 =", "answers" => ["186", "184", "182"], "correct" => [2]],
    ["question" => "15 x 16 =", "answers" => ["236", "244", "240"], "correct" => [2]],
    ["question" => "17 x 18 =", "answers" => ["306", "358", "318"], "correct" => [0]],
    ["question" => "19 x 20 =", "answers" => ["388", "380", "390"], "correct" => [1]],
    ];

    foreach ($questions as $index => $q) {
    echo '<div class="question">';
    echo '<p>' . ($index + 1) . '. ' . $q['question'] . '</p>';
    foreach ($q['answers'] as $i => $answer) {
    echo '<label><input type="checkbox" name="answers[' . $index . '][]" value="' . $i . '">' . $answer . '</label><br>';
    }
    echo '</div>';
    }
    ?>

    <input type="submit" value="Перевірити">
</form>
</body>
</html>
