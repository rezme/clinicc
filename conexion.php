<!doctype html>
<html>
<head>
<meta charset="utf-8">
</head>
<?php
// crear conexion
$conexion=mysql_connect(localhost,"intermed_super","clinica") or die("error en la conexion".mysql_error());
//conectar BD
$base=mysql_select_db("intermed_clinica",$conexion) or die("errrrrror en la bd".mysql_error());
//$datos=mysql_query("SELECT * FROM usuario") or die ("error en la consulta".mysql_error());
//o
//while($row = mysql_fetch_array($datos))
//  {
//  echo $row['nombre']. " ". $row['pass']. " " .$row['idusuario']. $row['avatar'];
//  echo "<br>";
//  }
?>
<body>
</body>
</html>