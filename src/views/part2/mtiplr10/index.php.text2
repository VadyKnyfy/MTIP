<?php
$xml_parser = xml_parser_create();

function startElement($parser, $name, $attrs) {
    echo "Відкритий тег: $name\n";
    if (!empty($attrs)) {
        foreach ($attrs as $key => $value) {
            echo "Атрибут: $key = $value\n";
        }
    }
}

function endElement($parser, $name) {
    echo "Закритий тег: $name\n";
}

function characterData($parser, $data) {
    echo "Текст: $data\n";
}

xml_set_element_handler($xml_parser, "startElement", "endElement");
xml_set_character_data_handler($xml_parser, "characterData");

$rss_feed = file_get_contents('rss_feed.xml');

if (!xml_parse($xml_parser, $rss_feed, true)) {
    die(sprintf("XML error: %s at line %d",
        xml_error_string(xml_get_error_code($xml_parser)),
        xml_get_current_line_number($xml_parser)));
}

xml_parser_free($xml_parser);

