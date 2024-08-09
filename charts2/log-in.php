
<?php
  date_default_timezone_set('Europe/Moscow');

  $day = date('d', time());
  if (false) {
    file_put_contents('logJson', '');
  } 

  /*
    $date = date('m/d/Y H:i:s', time());
    file_put_contents ('log.txt', "| temp = {$_GET['temp']} | $date |\n", FILE_APPEND);
  */
  $date = date('m-d-Y H:i:s', time());

  $data = file_get_contents('logJson');
  $dataArr = json_decode($data);
  $dataArr[] = [ "dat" => $date, "temp" => $_GET['temp'], "ppm" => $_GET['ppm'], "BMEt" => $_GET['BMEt'], "BMEp" => $_GET['BMEp'], "BMEh" => $_GET['BMEh'] ];
  $json = json_encode($dataArr, JSON_UNESCAPED_UNICODE);
  file_put_contents('logJson', $json);
  // $json = json_encode($dataArr, JSON_UNESCAPED_UNICODE);
  // echo $json;

  $array = [
    [ "dat" => "2024-08-08 18:37", "temp" => 34, "ppm" => 34, "BMEt" => 34, "BMEp" => 643, "BMEh" => 34 ],
    [ "dat" => "2024-08-08 18:51", "temp" => 78, "ppm" => 87, "BMEt" => 87, "BMEp" => 987, "BMEh" => 87 ],
    [ "dat" => "2024-08-08 18:37", "temp" => 34, "ppm" => 34, "BMEt" => 34, "BMEp" => 643, "BMEh" => 34 ],
    [ "dat" => "2024-08-08 18:51", "temp" => 78, "ppm" => 87, "BMEt" => 87, "BMEp" => 987, "BMEh" => 87 ]
  ];

  //$json = json_encode($array, JSON_UNESCAPED_UNICODE);
  //file_put_contents('logJson', $json);
  //echo file_get_contents('logJson');

  //shell_exec("sudo /var/www/html/chart/temp_log.sh {$_GET['temp']} {$_GET['ppm']} {$_GET['BMEt']} {$_GET['BMEp']} {$_GET['BMEh']}"); // выполняет скрипт temp_log.sh и передает в него {$_GET['temp']}

  //shell_exec("sudo /var/www/html/chart/temp_log.sh 234 532 235 23 35");

  //echo "<pre>" . file_get_contents("/tmp/logJson") . "</pre>";
  /*
  <?php
    file_put_contents ('log.txt', "|name = {$_GET['name']} | id = {$_GET['id']} |\n", FILE_APPEND);
  ?>


  как записать get запрос в txt файл с новой строки ?

  например я захожу на сйт вида http://site.ru/index.php?name=123&id=123456
  как мне записать в txt файл всё что в "name" и id с новой строки ввида:

  | name = 123 | id = 123456 |
  */
