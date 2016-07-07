<?php

require '../PHPMailer/class.phpmailer.php';
require '../PHPMailer/class.smtp.php';

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$genero = $_POST['genero'];
$estudios = $_POST['estudios'];
$estado_civil = $_POST['estado_civil'];
$mailC = $_POST['mail'];
$telefonoFijo = $_POST['tel_fijo'];
$telefonoCel = $_POST['tel_cel'];
$comentarios = $_POST['comentarios'];

$mailTo = "cpavon@connectcenter.mx";

$mensajeInput = stripcslashes(nl2br(htmlentities($comentarios, ENT_QUOTES, "UTF-8")));
$mensaje = "<font face='century ghotic' size='3'><b>".$mensajeInput."</b></font><br><br>";
$mensaje .= "<table WIDTH='80%'><b>"
        . "<tr>"
            . "<td WIDTH='50%'>Nombre</td>"
            . "<td WIDTH='50%'>".$nombre."</td>"
        . "</tr>"
        . "<tr>"
            . "<td WIDTH='50%'>Apellidos</td>"
            . "<td WIDTH='50%'>".$apellidos."</td>"
        . "</tr>"
        . "<tr>"
            . "<td WIDTH='50%'>Genero</td>"
            . "<td WIDTH='50%'>".$genero."</td>"
        . "</tr>"
        . "<tr>"
            . "<td WIDTH='50%'>Fecha Nacimiento</td>"
            . "<td WIDTH='50%'>".$fecha_nacimiento."</td>"
        . "</tr>"
        . "<tr>"
            . "<td WIDTH='50%'>Escolaridad</td>"
            . "<td WIDTH='50%'>".$estudios."</td>"
        . "</tr>"
        . "<tr>"
            . "<td WIDTH='50%'>Estado Civil</td>"
            . "<td WIDTH='50%'>".$estado_civil."</td>"
        . "</tr>"
        . "<tr>"
            . "<td WIDTH='50%'>Email</td>"
            . "<td WIDTH='50%'>".$mailC."</td>"
        . "</tr>"
        . "<tr>"
            . "<td WIDTH='50%'>Telefono Fijo</td>"
            . "<td WIDTH='50%'>".$telefonoFijo."</td>"
        . "</tr>"
        . "<tr>"
            . "<td WIDTH='50%'>Telefono Calular</td>"
            . "<td WIDTH='50%'>".$telefonoCel."</td>"
        . "</tr>"
        . "<tr>"
            . "<td WIDTH='50%'>Centro Trabajo</td>"
            . "<td WIDTH='50%'>Roma</td>"
        . "</tr>";
$mensaje .= "</b></table><br><br>";
$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "gator3096.hostgator.com";
$mail->Username   = "penafiel@connectcenter.mx";   
$mail->Password   = "P3n@f13l";            
$mail->Port = 465;
$mail->IsHTML(true);
$mail->From = "";
$mail->FromName = "Web Mail";
$mail->AddAddress("reclutamientofb@connectcenter.mx");
$to = explode(";", $mailTo);
for($i=0; $i<count($to); $i++)
{
    $mail->addBCC($to[$i]);
}
$mail->Subject = "Solicitud Vacante Web";
$mail->Body = $mensaje;
$mail->MsgHTML($mensaje);
$mail->CharSet = 'UTF-8';
if($mail->Send()){
    echo 'Enviado';
}else{
    $mail->ErrorInfo;
}


