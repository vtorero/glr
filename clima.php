<?php 

$file=file_get_contents("http://api.openweathermap.org/data/2.5/weather?q=Lima&appid=785f39fbaabcfaffc5554591c38998d9&units=metric&lang=sp");

$data=json_decode($file,true);

var_dump($data);

?>

<html>
    <head></head>
    <body>
<ul>
    <li>Temp. Max:<?php echo $data['main']['temp_max']?>º</li>
    <li>Temp. Min:<?php echo $data['main']['temp_min']?>º</li>
    <li>Humedad:<?php echo $data['main']['humidity']?>%</li>
    <li></li>
</ul>


    </body>
    </html>
