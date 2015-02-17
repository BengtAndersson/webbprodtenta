<?php

include_once("autoloader.php");

$cq = New ContentQueries("127.0.0.1","mayo","root","mysql");


  //get all menu_links for a specific menu_name
  echo(json_encode($cq->getMenuLinks()));