<?php
include "connect.php";

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO data (name, phone, email, password)
        VALUES ('$name', '$phone', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>