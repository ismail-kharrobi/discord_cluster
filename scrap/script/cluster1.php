<?php 


function get_new_token()
{
	$SECRET = getenv('SECRET');
	$UID = getenv('UID');
	$url = "https://api.intra.42.fr/oauth/token";

	$data = "grant_type=client_credentials&client_id=$UID&client_secret=$SECRET";

	$curl = curl_init($url);
	curl_setopt($curl, CURLOPT_URL, $url);
	curl_setopt($curl, CURLOPT_POST, true);
	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

	$headers = array(
	"Content-Type: application/x-www-form-urlencoded",
	);
	curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);


	curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

	$resp = curl_exec($curl);
	curl_close($curl);

	$access = explode(':',$resp);
	$token = explode(',',$access[1]);

	// echo $token[0];


	$token = trim($token[0],"\"");
	return $token;
}
function cube($n)
{
    return ($n->login);
}
function data()
{
		$token = get_new_token();
		$header = [
			"Authorization: Bearer $token"
		];
		$p = 1;
		$all = [];


		// return ;
		while (true):

				$newurl = "https://api.intra.42.fr/v2/campus/21/locations?per_page=100&page=$p&sort=-end_at";
				$crawl = curl_init();
				curl_setopt($crawl, CURLOPT_URL, $newurl);
				curl_setopt($crawl, CURLOPT_HTTPHEADER, $header);
				curl_setopt($crawl, CURLOPT_RETURNTRANSFER, TRUE);
				$user = json_decode(curl_exec($crawl));
				// print_r($user);
				// return ; 
				foreach ($user as $u) :
					if  (!is_null($u->end_at))
					{
						break 2;
					}
					else
					{
						array_push($all , $u);
					}
					
				endforeach;
				// sleep(1);
			
			$p++;

		endwhile;
        return $all;
}

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
            <div class="flex-item">
                
                <div class="tab-content">
                    <div class="tab-pane active" data-floor="e1" id="cluster-36" role="tabpanel">
                        <div class="map-container" data-floor="e1" data-image="https://cdn.intra.42.fr/cluster/image/36/bg_e1.svg"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 651 920" style="enable-background:new 0 0 651 907;" xml:space="preserve">
                            <style type="text/css">
                                .st0{fill:#CCCCCC;}
                                .st1{font-family:'Helvetica-Bold';}
                                .st2{font-size:40px;}
                                .st3{fill:none;stroke:#CCCCCC;}
                                .st4{fill:none;stroke:#000000;stroke-miterlimit:10;}
                                .st5{fill:none;stroke:#231F20;stroke-miterlimit:10;}
                                .st6{font-size:20.8176px;}
                                </style>
       
        <text transform="matrix(1 0 0 1 5 50)" class="st0 st1 st2">E1</text>
        <g>
        <?php 
        $all = data();
        $img = "";
        $pairkey = array();
        foreach ($all as $u):
            
            $pairkey["$u->host"] = $u->user->image->versions->small;
            
        endforeach;

            $y = 30;
            for ($i = 13; $i >= 1 ; $i--)
            {
                $x = 82;
                echo "<g>";
                for ($j = 12 ; $j >= 7; $j--)
                {
                    if ($i == 7)
                    {
                        continue;
                    }
                    $img = $pairkey["e1r".$i."p".$j];
                    echo '<rect id="e1r'.$i.'p'.$j.'" x="'.$x.'" y="'.$y.'" height="45" width="34"></rect><image preserveAspectRatio="xMidYMid slice" id="e1r13p12" x="'.$x.'" y="'.$y.'" height="45" width="34" xlink:href="'.$img.'"></image>';
                    if ($y % 2 == 0)
                    {
                        $y -= 15;
                    }
                    else
                    {
                        $y += 15;
                    }
                    $x += 35;
                }
                echo "</g>";

                $y+= 70;
            }
            ?>
        <g>
            <?php 
             $y = 30;
             for ($i = 13; $i >= 1 ; $i--)
             {
                 $x = 377;
                 echo "<g>";
                 for ($j = 6 ; $j >= 1; $j--)
                 {
                     
                     $img = $pairkey["e1r".$i."p".$j];
                     echo '<rect id="e1r'.$i.'p'.$j.'" x="'.$x.'" y="'.$y.'" height="45" width="34"></rect><image preserveAspectRatio="xMidYMid slice" id="e1r13p12" x="'.$x.'" y="'.$y.'" height="45" width="34" xlink:href="'.$img.'"></image>';
                     if ($y % 2 == 0)
                     {
                         $y -= 15;
                     }
                     else
                     {
                         $y += 15;
                     }
                     $x += 35;
                 }
                 echo "</g>";
 
                 $y+= 70;
             }
             ?>
           
        </g>
        <text transform="matrix(1 0 0 1 602 825)" class="st3 st1 st6">R2</text>
        <text transform="matrix(1 0 0 1 602 755)" class="st3 st1 st6">R3</text>
        <text transform="matrix(1 0 0 1 602 685)" class="st3 st1 st6">R4</text>
        <text transform="matrix(1 0 0 1 602 615)" class="st3 st1 st6">R5</text>
        <text transform="matrix(1 0 0 1 602 545)" class="st3 st1 st6">R6</text>
        <text transform="matrix(1 0 0 1 602 475)" class="st3 st1 st6">R7</text>
        <text transform="matrix(1 0 0 1 602 405)" class="st3 st1 st6">R8</text>
        <text transform="matrix(1 0 0 1 602 335)" class="st3 st1 st6">R9</text>
        <text transform="matrix(1 0 0 1 602 265)" class="st3 st1 st6">R10</text>
        <text transform="matrix(1 0 0 1 602 195)" class="st3 st1 st6">R11</text>
        <text transform="matrix(1 0 0 1 602 125)" class="st3 st1 st6">R12</text>
        <text transform="matrix(1 0 0 1 602 55)" class="st3 st1 st6">R13</text>
        <text transform="matrix(1 0 0 1 602 895)" class="st3 st1 st6">R1</text>
        </svg></div>
        </div>
       
        </div>
        </div>
        </div>
</body>
</html>
