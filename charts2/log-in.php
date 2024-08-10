
<?php
  date_default_timezone_set('Europe/Moscow');

  $hour = date('H', time());
  $minute = date('i', time());

  if ( $hour === '00' && ($minute >= '00' && $minute <= '20') ) {
    file_put_contents('logJson', '');
  } 
 
  $date = date('m-d-Y H:i:s', time());

  $data = file_get_contents('logJson');
  $dataArr = json_decode($data);
  
  $dataArr[] = [
     "dat" => $date, 
     "temp" => $_GET['temp'], 
     "ppm" => $_GET['ppm'], 
     "BMEt" => $_GET['BMEt'], 
     "BMEp" => $_GET['BMEp'], 
     "BMEh" => $_GET['BMEh'] 
  ];

  $json = json_encode($dataArr, JSON_UNESCAPED_UNICODE);
  file_put_contents('logJson', $json);
  