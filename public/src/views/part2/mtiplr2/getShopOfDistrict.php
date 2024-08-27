<?php
$res = array();
switch ($_GET['neighborhood']){
    case 'metal': {
        $res = [
            ['name' => 'вулиця Соборності, 87г', 'timel' => '10'],
            ['name' => 'вулиця Соборності, 49В', 'timel' => '18'],
            ['name' => 'вулиця Степана Тільги, 20', 'timel' => '8'],
            ['name' => 'проспект Металургів, 36', 'timel' => '23'],
        ];
        break;
    }
    case 'saksagan': {
        $res = [
            ['name' => 'вулиця Володимира Великого, 24б', 'timel' => '13'],
            ['name' => 'вулиця Космонавтів, 13', 'timel' => '17'],
            ['name' => 'вулиця Івана Авраменка, 21', 'timel' => '14'],
        ];
        break;
    }
    case 'pokrov': {
        $res = [
            ['name' => 'вулиця Ватутіна, 32', 'timel' => '25'],
            ['name' => 'вулиця Мусоргського, 6', 'timel' => '28'],
        ];
        break;
    }
    case 'dovgun': {
        $res = [
            ['name' => 'вулиця Магістральна, 17Б', 'timel' => '12'],
            ['name' => 'Вечірньокутська вулиця, 1', 'timel' => '18'],
        ];
        break;
    }
    default :{
        exit(404);
    }
}
echo json_encode($res);
exit(200);