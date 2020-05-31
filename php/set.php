<?php
$arr = array('timer' => $_GET['timer'], 'ip' => $_GET['ip']);
		echo json_encode($arr);
		file_put_contents('/home/www/lexx/myHome/setting.json', json_encode($arr));

//$json = json_decode(file_get_contents('set.json'), true);

echo json_decode(file_get_contents('/home/www/lexx/myHome/setting.json'));
$set = $json['set'];
$ip = $json['ip'];		
?>