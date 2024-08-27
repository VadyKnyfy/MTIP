<?php
header('Content-Type: application/json');

$data = $_POST;

if (isset($data['action']) && isset($data['data'])) {
    $result = [];

    switch ($data['action']) {
        case 'z1':
            $val1 = $data['data']['val1'];
            $val2 = $data['data']['val2'];

            $meanOfSquares = (($val1 ** 2) + ($val2 ** 2)) / 2;
            $meanOfAbs = ((abs($val1) + abs($val2)) / 2);

            $result['mOs'] = $meanOfSquares;
            $result['meanOAV'] = $meanOfAbs;
            break;

        case 'z2':
            // Обчислення значення y
            $x = $data['data']['x'];

            $y = (((($x + 1) ** 2) + 2 * ($x + 1)) / 4);

            $result['y'] = $y;
            break;

        case 'z3':
            // Перевірка, чи точка всередині прямокутника
            $x = $data['data']['x'];
            $y = $data['data']['y'];
            $x1 = $data['data']['x1'];
            $y1 = $data['data']['y1'];
            $x2 = $data['data']['x2'];
            $y2 = $data['data']['y2'];

            $isInside = (($x >= $x1 && $x <= $x2) && ($y >= $y2 && $y <= $y1));


            $result['answer'] = $isInside;
            break;

        default:
            $result['error'] = 'Невірна дія';
            break;
    }

    echo json_encode($result);
} else {
    echo json_encode(['error' => 'Немає даних']);
}
