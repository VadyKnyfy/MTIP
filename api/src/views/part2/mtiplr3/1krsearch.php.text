<?php
// Отримання пошукового рядка з GET-параметра
$searchQuery = isset($_GET['query']) ? $_GET['query'] : '';

// Очищення пошукового рядка для уникнення проблем з безпекою
$searchQuery = urlencode($searchQuery);

// Формування URL для запиту
$url = "https://1kr.ua/ua/search?query=" . $searchQuery;

// Виконання запиту до сервера
$response = file_get_contents($url);

// Перевірка, чи отримано відповідь
if ($response === FALSE) {
    echo "Помилка при отриманні даних.";
    exit;
}

$patterns = [
    '/<script.*?>.*?<\/script>/is',
    '/<title.*?>.*?<\/title>/is',
    '/<div\s+class="wrapper_header".*?<\/div>/is',
    '/<div\s+class="wrapper".*?<\/div>/is',
    '/<nav\s+class="crumbs".*?<\/nav>/is',
    '/<div\s+class="menu_wrapper".*?<\/div>/is',
    '/<div\s+class="box_search".*?<\/div>/is',
    '/<div\s+class="global_sidebar".*?<\/div>/is',
    '/<div\s+class="global_inners".*?<\/div>/is',
    '/<link\s+[^>]*>/is',
    '/<div\s+class="container".*?<\/div>/is',
    '/<div\s+class="calendar_block".*?<\/div>/is',
    '/<div\s+class="wrapper_footer".*?<\/div>/is',
    '/<div\s+class="footer_menu_inners".*?<\/div>/is',
    '/<div\s+class="footer_menu".*?<\/div>/is',
    '/<div\s+class="mob".*?<\/div>/is',
    '/<div\s+class="footer_info".*?<\/div>/is',
    '/<div\s+class="footer_links_wrapper".*?<\/div>/is',
    '/<div\s+class="materials_item_media".*?<\/div>/is',
    '/<div\s+class="materials_item_box".*?<\/div>/is',
    '/<p\s+class="materials_item_text".*?<\/p>/is',
];

$cleanedHtml = preg_replace($patterns, '', $response);

$pattern = '/<a\s+[^>]*class=["\']all_materials_item["\'][^>]*>.*?<\/a>/is';

preg_match_all($pattern, $cleanedHtml, $matches);

echo implode("\n", $matches[0]);

exit(200);
?>