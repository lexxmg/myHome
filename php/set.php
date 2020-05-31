<?php
$arr = array('timer' => $_GET['timer'], 'ip' => $_GET['ip']);
		echo json_encode($arr);
		file_put_contents('settings.json', json_encode($arr));

//$json = json_decode(file_get_contents('set.json'), true);

$j = file_get_contents('log.txt');

echo $j;
//$set = $json['set'];
//$ip = $json['ip'];		
?>