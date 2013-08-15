<?php 
include "conexion.php";

if($_POST['id']!=null&&$_POST['nombre']!=null){
	$id=$_POST['id'];
	$nombre=$_POST['nombre'];
	$consulta=mysql_query("select nombre_paciente,respuesta from repuesta where id_paciente='".$id."'");
	if($id = mysql_fetch_array($consulta)){
		echo "<div class='alert alert-success'>";
		echo "Hola ".$id['nombre_paciente']." el resultado de tu estudio es: ".$id['respuesta'];
		echo "</div>";
	}else{
		echo "<div class='alert alert-danger'>";
		echo "El id o usuario que ingresaste no existen, por favor intenta de nuevo";
		echo "</div>";
	}
}else{
	echo "<div class='alert alert-danger'>";
	echo "Upps! Parece que no enviaste los datos requeridos por favor intentalo de nuevo";
	echo "</div>";
}
?>