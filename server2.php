<?php

if (isset($_GET['id'])):
    $id = $_GET['id'];
    $url = 'http://'.getenv('CND_IP').':'.getenv('CDN_PORT').'/'.$id; 
    $save_as = $id; 

    $contents = file_get_contents($url);
    file_put_contents($save_as, $contents);
endif;
?>