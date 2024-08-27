<?php
// Перевірка, чи надійшли дані з форми
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $answers = $_POST['answers'];

    // Питання тесту
    $questions = [
        ["correct" => [1]],
        ["correct" => [0]],
        ["correct" => [1]],
        ["correct" => [0]],
        ["correct" => [1]],
        ["correct" => [0]],
        ["correct" => [2]],
        ["correct" => [2]],
        ["correct" => [0]],
        ["correct" => [1]],
    ];

    $score = 0;
    $totalQuestions = count($questions);
    $results = [];

    foreach ($questions as $index => $q) {
        $correctAnswers = $q['correct'];
        $userAnswers = isset($answers[$index]) ? $answers[$index] : [];
        if (empty(array_diff($correctAnswers, $userAnswers)) && empty(array_diff($userAnswers, $correctAnswers))) {
            $score++;
        }
    }

    $dateTime = date('Y-m-d H:i:s');
    $results['score'] = $score;
    $results['total'] = $totalQuestions;
    $results['date'] = $dateTime;

    // Збереження результатів у файл
    $filename = 'results_' . time() . '.txt';
    $fileContent = "Дата і час: $dateTime\nРезультат: $score з $totalQuestions\n";
    file_put_contents($filename, $fileContent);

    // Виведення результатів на сторінку
    echo "<h1>Результати тесту</h1>";
    echo "<p>Дата і час проходження тесту: $dateTime</p>";
    echo "<p>Ваша оцінка: $score з $totalQuestions</p>";
    echo "<p>Ваші результати збережено у файлі: <a href=\"$filename\">$filename</a></p>";
} else {
    echo "Немає даних для обробки.";
}
?>
