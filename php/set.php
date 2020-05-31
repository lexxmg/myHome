<?php
$arr = array('timer' => $_GET['timer'], 'ip' => $_GET['ip']);
		echo json_encode($arr);
		file_put_contents('/lexx/myHome/settings.json', json_encode($arr));

//$json = json_decode(file_get_contents('set.json'), true);

echo file_get_contents('/lexx/myHome/settings.json');
$set = $json['set'];
$ip = $json['ip'];		
?>