<?php
$statsFile = 'os_stats.json';

function detectOS($userAgent) {
    $osList = [
        'Windows' => 'Windows',
        'Mac OS' => '(Mac_PowerPC)|(Macintosh)|(MacIntel)',
        'Linux' => 'Linux',
        'iOS' => '(iPhone)|(iPad)|(iPod)',
        'Android' => 'Android',
        'UNIX' => 'UNIX',
        'Other' => 'Other'
    ];

    foreach ($osList as $os => $regex) {
        if (preg_match("/$regex/i", $userAgent)) {
            return $os;
        }
    }
    return 'Unknown';
}
$userOS = detectOS($_SERVER['HTTP_USER_AGENT']);

$stats = [];
if (file_exists($statsFile)) {
    $stats = json_decode(file_get_contents($statsFile), true);
}

if (isset($stats[$userOS])) {
    $stats[$userOS]++;
} else {
    $stats[$userOS] = 1;
}

file_put_contents($statsFile, json_encode($stats));

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Статистика по операційним системам</title>
    <style>
        table {
            width: 50%;
            margin: 20px auto;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
        }
        th {
            background-color: #f4f4f4;
        }
    </style>
</head>
<body>

<h1 style="text-align: center;">Статистика по операційним системам відвідувачів</h1>

<table>
    <thead>
    <tr>
        <th>Операційна система</th>
        <th>Кількість відвідувачів</th>
    </tr>
    </thead>
    <tbody>
    <?php
    arsort($stats);
    foreach ($stats as $os => $count) {
        echo "<tr>";
        echo "<td>" . htmlspecialchars($os) . "</td>";
        echo "<td>" . htmlspecialchars($count) . "</td>";
        echo "</tr>";
    }
    ?>
    </tbody>
</table>

</body>
</html>
