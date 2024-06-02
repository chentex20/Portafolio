<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Validar datos
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "Todos los campos son requeridos.";
        exit;
    }

    // Configurar el correo electrónico
    $to = "vicentecode@portafolio.website"; // Reemplaza con tu dirección de correo
    $email_subject = "Nuevo mensaje de contacto: $subject";
    $headers = "From: $email";

    // Componer el cuerpo del mensaje
    $body = "Nombre: $name\n";
    $body .= "Correo electrónico: $email\n";
    $body .= "Asunto: $subject\n";
    $body .= "Mensaje:\n$message\n";

   // Enviar el correo
    if (mail($to, $email_subject, $body, $headers)) {
        header("Location: index.html?status=success");
    } else {
        header("Location: index.html?status=error");
    }
} else {
    echo "Método de solicitud no permitido.";
}
?>
