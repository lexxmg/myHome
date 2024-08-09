#! /bin/bash


dat=$(date '+%s') # nекущее время в формате linux
logTime=$(date -d "23:00" '+%s') # конвертация времени в linux формате
log=/tmp/logJson # путь до лог файла

if [ $dat -ge $logTime ]; then  # удаляет лог файл в 23:00
  rm $log
fi

if [ ! -f "$log" ]; then echo -e "[\n]" > $log; fi # если нету, то создает файл и записывает в него [\n]

countStr=$(sed -n '$=' $log) # Выводит колличество строк
countStr=$((( $countStr - 1 )))
time=$(date +"%Y-%m-%d %H:%M")
sed -i "$countStr a \{ dat: \"$time\", temp: $1, ppm: $2, BMEt: $3, BMEp: $4, BMEh: $5}," $log  # формирует строку JSON
  #sed -i "$countStr a \{ dat: \"$time\", snup: $1, sndown: $temp2, sncentre: $temp0, win: $win1, hot: $hot1 }," $log



exit 0
