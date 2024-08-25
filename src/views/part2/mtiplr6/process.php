<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['index'])) {
        $index = trim($_POST['index']);

        if (!is_numeric($index)) {
            echo "Помилка: Індекс має бути числом.";
            exit;
        }

        $index = (int)$index;

        $filename = 'index.txt';
        if (!file_exists($filename)) {
            echo "Помилка: Файл не знайдено.";
            exit;
        }

        $fileContent = file_get_contents($filename);
        $array = explode(',', $fileContent);

        if ($index < 0 || $index >= count($array)) {
            echo "Помилка: Індекс поза межами масиву.";
            exit;
        }
        $element = $array[$index];
        echo "<h1>Результат</h1>";
        echo "<p>Елемент масиву з індексом $index: $element</p>";
    } else {
        echo "Помилка: Індекс не надійшов.";
    }
} else {
    echo "Неправильний запит.";
}

