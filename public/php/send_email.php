<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'mohrhobbil@gmail.com';
    $subject = 'Pesan Baru dari Form Kontak';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/html\r\n";

    $body = "<h2>Pesan Baru dari Form Kontak</h2>
             <p><strong>Nama:</strong> $name</p>
             <p><strong>Email:</strong> $email</p>
             <p><strong>Pesan:</strong><br>$message</p>";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Pesan berhasil dikirim.';
    } else {
        echo 'Pesan gagal dikirim.';
    }
}
?>