<?php
    $destino="jvillalobos1794@gmail.com";
    $nombre=$_POST["name"];
    $correo=$_POST["email"];
    $telefono=$_POST["phone"];
    $contenido="Nombre: ". $nombre . "\nCorreo: ". $correo . "\n Telefono: " . $telefono ;
    mail($destino , "Contacto desde cursus", $contenido);
    header("location:index.html");
?>