<?php
$redirect_url = $_SERVER['DOCUMENT_ROOT'] . '/api/src/views/lr1/template.html';
echo file_get_contents($redirect_url);
exit;