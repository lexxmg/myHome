<!DOCTYPE html>

<html>
  <head>
    <script src="jQuery.js"></script>
    <script src="morris.js-0.5.1/morris.min.js"></script>
    <script src="raphael.min.js"></script>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <meta charset="UTF-8">
  </head>
  
  <body>
    <div id="div1" class="chart-container">
      <div id="myfirstchartC" class="chart"></div>
    </div>

    <div id="div2" class="chart-container">
      <div id="myfirstchartPPM" class="chart"></div>
    </div>

    <div id="div3" class="chart-container">
      <div id="myfirstchartBMEt" class="chart"></div>
    </div>

    <div id="div4" class="chart-container">
      <div id="myfirstchartBMEp" class="chart"></div>
    </div>

    <div id="div5" class="chart-container">
      <div id="myfirstchartBMEh" class="chart"></div>
    </div>

    <script>
      //_________________________________График_______________________________________
      var tempR = <?php echo file_get_contents('logJson');?>;


      var divWidth = 0;
      //$(".prokrutka").width(divWidth); // меняет значение width в стиле .prokrutka



      var arrCo = tempR.length;  // получает колличество строк массива logPHP минус 2
      divWidth = arrCo * 15;
      if (divWidth < 300){
        divWidth = 300;
      }

      $('.chart').width(divWidth); // меняет значение width в стиле .chart
      $('.chart').scrollLeft(divWidth); // Прокручивает график в конец

      

    //temp.push({ dat: dat, snup: tup, sndown: tdown, sncentre: tc })

    Morris.Line({
      //Контейнер для вывода графика
      element: 'myfirstchartC',
      //Данные для графика
      //data: temp,
      data: tempR,

      //Массив занчений для оси X
      xkey: 'dat',

      // минимальное значение по оси y
      ymax: 40,
      ymin: 10,

      //Префикс в конце для оси Y
      postUnits:' Cº',

      //Коридор цены за 1 доллар
      goals:[20.0, 30.0],
      goalStrokeWidth:2,
      goalLineColors:['#d9534f'],

      gridTextWeight: ['40'],

      //Событийные линии по оси X
      //  events: ['0', '10'],
      //  eventStrokeWidth:2,
      //  eventLineColors:['#428bca'],

      //Цвет линий
      lineColors:['#FF0000'],
      //pointSize: ['2'],	           //Диаметр точек в пикселях.
      //Выводимые линии
      ykeys: ['temp'],
      //Названия линий
      labels: ['tº ']
    });

    Morris.Line({
      //Контейнер для вывода графика
      element: 'myfirstchartPPM',
      //Данные для графика
      //data: temp,
      data: tempR,
    
      //Массив занчений для оси X
      xkey: 'dat',

      // минимальное значение по оси y
      ymax: 1500,
      ymin: 350,

      //Префикс в конце для оси Y
      postUnits:' PPM',

      //Коридор цены за 1 доллар
      goals:[400, 800],
      goalStrokeWidth:2,
      goalLineColors:['#d9534f'],

      gridTextWeight: ['40'],
    
      //Событийные линии по оси X
      //  events: ['0', '10'],
      //  eventStrokeWidth:2,
      //  eventLineColors:['#428bca'],

      //Цвет линий
      lineColors:['#1E90FF'],
      //Выводимые линии
      ykeys: ['ppm'],
      //Названия линий
      labels: ['CO2']
    });

    Morris.Line({
      //Контейнер для вывода графика
      element: 'myfirstchartBMEt',
      //Данные для графика
      //data: temp,
      data: tempR,

      //Массив занчений для оси X
      xkey: 'dat',

      // минимальное значение по оси y
      ymax: 40,
      ymin: 10,

      //Префикс в конце для оси Y
      postUnits:' Cº',

      //Коридор цены за 1 доллар
      goals:[20.0, 30.0],
      goalStrokeWidth:2,
      goalLineColors:['#d9534f'],
    
      gridTextWeight: ['40'],

      //Событийные линии по оси X
      //  events: ['0', '10'],
      //  eventStrokeWidth:2,
      //  eventLineColors:['#428bca'],

      //Цвет линий
      lineColors:['#FF0000'],
      //pointSize: ['2'],	           //Диаметр точек в пикселях.
      //Выводимые линии
      ykeys: ['BMEt'],
      //Названия линий
      labels: ['tº ']
    });

    Morris.Line({
    //Контейнер для вывода графика
    element: 'myfirstchartBMEp',
    //Данные для графика
    //data: temp,
    data: tempR,
  
    //Массив занчений для оси X
    xkey: 'dat',

    // минимальное значение по оси y
    ymax: 770,
    ymin: 720,

    //Префикс в конце для оси Y
    postUnits:' мм рт. ст.',

    //Коридор цены за 1 доллар
    goals:[730.0, 755.0],
    goalStrokeWidth:2,
    goalLineColors:['#d9534f'],
  
    gridTextWeight: ['40'],

    //Событийные линии по оси X
    //  events: ['0', '10'],
    //  eventStrokeWidth:2,
    //  eventLineColors:['#428bca'],

    //Цвет линий
    lineColors:['#FFA500'],
    //pointSize: ['2'],	           //Диаметр точек в пикселях.
    //Выводимые линии
    ykeys: ['BMEp'],
    //Названия линий
    labels: ['Давление']
   });

   Morris.Line({
     //Контейнер для вывода графика
     element: 'myfirstchartBMEh',
     //Данные для графика
     //data: temp,
     data: tempR,

     //Массив занчений для оси X
     xkey: 'dat',

     // минимальное значение по оси y
     ymax: 100,
     ymin: 0,

     //Префикс в конце для оси Y
     postUnits:' %',

     //Коридор цены за 1 доллар
     goals:[30.0, 60.0],
     goalStrokeWidth:2,
     goalLineColors:['#d9534f'],
   
     gridTextWeight: ['40'],

     //Событийные линии по оси X
     //  events: ['0', '10'],
     //  eventStrokeWidth:2,
     //  eventLineColors:['#428bca'],

     //Цвет линий
     lineColors:['#0000FF'],
     //pointSize: ['2'],	           //Диаметр точек в пикселях.
     //Выводимые линии
     ykeys: ['BMEh'],
     //Названия линий
     labels: ['Влажность']
   });
    </script>
  </body>
</html>
