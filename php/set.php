<?php
$path = '../settings.json';

if(count($_GET) > 1){
$ch;
	if(isset($_GET['check'])){
		$ch = on;
	} else {
		$ch = off;
	}	
	$arr = array('timer' => $_GET['timer'], 'ip' => $_GET['ip'], 'check' => $ch);
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
