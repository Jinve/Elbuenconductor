<?php

   if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $nombre = $_POST["name"];
      $correo = $_POST["email"];
      $telefono = $_POST["phone"];
      $mensaje = $_POST["message"];

     if (empty($nombre) OR empty($mensaje) OR !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
         http_response_code(400);
         echo "¡Vaya! Hubo un problema con el envío. Complete el formulario e inténtelo de nuevo.";
         exit;
     }

      $header = 'From: ' . $correo . " \r\n";
      $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
      $header .= "Mime-Version: 1.0 \r\n";
      $header .= "Content-Type: text/plain charset=UTF-8";

      $mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
      $mensaje .= "Correo: " . $correo . " \r\n";
      $mensaje .= "Teléfono: " . $telefono . " \r\n";
      $mensaje .= "Mensaje: " . $mensaje . " \r\n";
      $mensaje .= "Enviado el " . date('d/m/Y', time());

      //$para = "contacto el buen conductor";
      $para = "jvillalobos1794@gmail.com";
      $asunto = "Mensaje enviado desde Sitio Web";

      if (mail($para, $asunto, utf8_decode($mensaje), $header)) {
         http_response_code(200);
         echo "¡Gracias! Tu mensaje ha sido enviado.";
      } else {
         http_response_code(500);
         echo "¡Vaya! Algo salió mal y no pudimos enviar su mensaje.";
      }

    } else {
        http_response_code(403);
        echo "Se ha producido un problema con tu envío. Inténtalo de nuevo.";
    }

?>
