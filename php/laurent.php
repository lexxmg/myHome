<?php
	if(count($_GET) == 1) {
		$res = file_get_contents("http://" . $_GET['ip'] . "/status.xml");
		$xml = simplexml_load_string($res);
		echo json_encode($xml);
	} 

	if(count($_GET) > 1) {
		echo "больше"
	}
	//echo $res;
	//print_r($res);
	//print_r($xml);
	//$json = json_encode($xml);
	
	//$array = json_decode($json,TRUE);
?>