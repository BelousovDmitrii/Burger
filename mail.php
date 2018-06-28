<?php

header('Content-Type:aplication/json');


$name = $_POST["name"];
$phonemasc = $_POST["phonemasc"];
$street = $_POST["street"];
$home = $_POST["home"];
$korpus = $_POST["korpus"];
$room = $_POST["room"];
$etag = $_POST["etag"];
$comments = $_POST["comments"];
$message="Сообщение от пользователя: $name Телефон: $phonemasc  Улица: $street
Дом: $home Корпус: Квартира: $room Этаж: $etag Комментарий: $comments";

$result = mail("dmitriilir2697@gmail.com","Тема письма", $message);

echo json_encode(array(
        "status" => $result
    ));