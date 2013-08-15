<?php 
include "conexion.php";

if(isset($_POST['id'])){
	$id=$_POST['id'];
	$nombre=$_POST['nombre'];
	echo $nombre;
	echo $id;
	echo "lalala";
	//$consulta=mysql_query("select * from respuesta where id_paciente='".$id."'");
//	echo $consulta;
//	if($id = mysql_fetch_array($consulta)){
//		echo "<div class='alert alert-success'>";
//		echo "existe su nombre es ".$id['nombre_paciente']." y su resultado es ".$id['respuesta'];
//		echo "</div>";
//	}else{
//		echo "<div class='alert alert-danger'>";
//		echo "noexiste";
//		echo "</div>";
//	}
//}else{
//	echo "<div class='alert alert-danger'>";
//	echo "Parece que no enviaste los datos intentalo de nuevo";
//	echo "</div>";
}
?>