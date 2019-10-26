<html lang="en">
<?php
$cur_page = $_GET["p"];
// Todo - eliminate this php to js usage
echo "<script>let current_page = $cur_page;</script>";

$json = file_get_contents("../data.json");
$data = json_decode($json)[$cur_page];

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- <script src="popper.min.js"></script> -->
    <!-- <script src="tooltip.min.js"></script> -->
    <link rel="stylesheet" href="../bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script> -->
    <script src="../data.js"></script>
    <script src="elements.js"></script>
    <script src="script.js"></script>
</head>

<body>
    <div class="container-fluid h-100">

        <div class="mock-moon text-center">Moon</div>

        <div class="shadow">
            <div class="img-wrapper" id="marker-here">
                <img class="logo" src="planet_isolate/2-venus.png"/>
                <?php
                foreach($data->poi as $poi){
                    echo "<div class='poi-point' style='left:$poi->x%;top:$poi->y%;' poi-id='$poi->id'></div>";
                }
                ?>
            </div>
        </div>

        <button-back></button-back>

        <div class="files">
            <div class="wrapper">
                <h2>แฟ้มข้อมูล</h2>
            </div>
        </div>

        <heading-box
            maintitle="<?php echo $data->name ?>"
            subtitle="<?php echo $data->name_en ?>"
        ></heading-box>

        <overlay-planet-info></overlay-planet-info>
    </div>
</body>
</html>