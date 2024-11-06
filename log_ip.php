<?php
// Retrieve the JSON data sent from the HTML page
$data = json_decode(file_get_contents("php://input"));
$ip = $data->ip;

// Append the IP address to the log file
file_put_contents("ips.txt", "IP Address: $ip\n", FILE_APPEND);
?>
