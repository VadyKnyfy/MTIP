<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Новини</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .news-item {
            background-color: #fff;
            padding: 15px;
            margin-bottom: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .news-item h2 {
            margin: 0;
            font-size: 1.5em;
            color: #333;
        }
        .news-item p {
            margin: 5px 0 0;
            color: #666;
        }
        .news-item a {
            text-decoration: none;
            color: #1e90ff;
        }
        .news-item a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<?php
$xml_parser = xml_parser_create();

$currentElement = '';
$title = '';
$description = '';
$link = '';

function startElement($parser, $name, $attrs) {
    global $currentElement;
    $currentElement = $name;
}

function endElement($parser, $name) {
    global $currentElement, $title, $description, $link;

    if ($name == 'ITEM') {
        echo "<div class='news-item'>";
        echo "<h2><a href='$link' target='_blank'>" . htmlspecialchars($title) . "</a></h2>";
        echo "<p>" . htmlspecialchars($description) . "</p>";
        echo "</div>";

        // Очищення змінних для наступного елементу
        $title = '';
        $description = '';
        $link = '';
    }

    $currentElement = '';
}

function characterData($parser, $data) {
    global $currentElement, $title, $description, $link;

    if ($currentElement == 'TITLE') {
        $title .= $data;
    } elseif ($currentElement == 'DESCRIPTION') {
        $description .= $data;
    } elseif ($currentElement == 'LINK') {
        $link .= $data;
    }
}

xml_set_element_handler($xml_parser, "startElement", "endElement");
xml_set_character_data_handler($xml_parser, "characterData");

$rss_feed = file_get_contents($_GET['rssUrl']);
if ($rss_feed === FALSE) {
    echo "Помилка при отриманні даних.";
    exit;
}

if (!xml_parse($xml_parser, $rss_feed, true)) {
    die(sprintf("XML error: %s at line %d",
        xml_error_string(xml_get_error_code($xml_parser)),
        xml_get_current_line_number($xml_parser)));
}

xml_parser_free($xml_parser);
?>

</body>
</html>
