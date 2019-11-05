<html lang="en">
<?php
if(!isset($_GET["p"])){
    header("Location: ../");
}
$cur_page = $_GET["p"];

// TODO - eliminate this php to js usage
echo "<script>let current_page = $cur_page;</script>";

$json = file_get_contents("../data.json");
$data = json_decode($json)[$cur_page];

$json = file_get_contents("../data_poi.json");
$data_poi = json_decode($json);

echo "<script>const data = JSON.parse(`" . $json . "`)</script>";

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="script.js"></script>
    <script src="../elements.js"></script>
</head>

<body>
    <div class="container-fluid h-100">

        <!-- <div class="mock-moon text-center">Moon</div> -->

        <div class="shadow">
            <div class="img-wrapper" id="marker-here">
                <img class="logo" src="<?php echo $data->img_png ?>"/>
                <?php
                $count = 0;
                foreach($data_poi as $key => $poi){
                    if($count > 4){ break; }
                    if($poi->parent == $cur_page){
                        // echo "<script>console.log(". print_r($poi) .")</script>";
                        // echo $key;
                        echo "<poi-point poi-id='$key' x='$poi->x' y='$poi->y'></poi-point>";
                        $count++;
                    }
                }
                // foreach($data->poi as $poi){
                //     echo "<poi-point poi-idx='$poi->idx' poi-id='$poi->id' x='$poi->x' y='$poi->y'></poi-point>";
                // }
                ?>
            </div>
        </div>

        <button-back where="<?php echo $cur_page; ?>"></button-back>

        <button-files topics='<?php
        $topics = $cur_page . ",";
        foreach($data->poi as $poi){
            $topics = $topics . $poi->id . ",";
        }
        echo rtrim($topics, ',');
        ?>'></button-files>

        <heading-box
            maintitle="<?php echo $data->name ?>"
            subtitle="<?php echo $data->name_en ?>"
        ></heading-box>

        <overlay-planet-info></overlay-planet-info>
    </div>
</body>
</html>