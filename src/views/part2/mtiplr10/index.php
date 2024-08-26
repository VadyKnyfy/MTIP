<?php
$xml_parser = xml_parser_create();

function startElement($parser, $name, $attrs) {
    echo "<$name>";
    if (!empty($attrs)) {
        foreach ($attrs as $key => $value) {
            echo "$key = $value";
        }
    }
}

function endElement($parser, $name) {
    echo "</$name>";
}

function characterData($parser, $data) {
    echo "$data";
}

xml_set_element_handler($xml_parser, "startElement", "endElement");
xml_set_character_data_handler($xml_parser, "characterData");

$rss_feed = file_get_contents('https://www.pravda.com.ua/rss/view_news/');
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

