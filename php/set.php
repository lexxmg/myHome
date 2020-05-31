<?php
$path = '../settings.json';

if(!isset($_GET)){
	$arr = array('timer' => $_GET['timer'], 'ip' => $_GET['ip']);
	file_put_contents($path, json_encode($arr));
} else {
	echo file_get_contents($path);
}

	
//echo json_encode($arr);
//file_put_contents('settings.json', json_encode($arr));

//$json = json_decode(file_get_contents('set.json'), true);

//echo file_get_contents('settings.json');
//$set = $json['set'];
//$ip = $json['ip'];		
?>