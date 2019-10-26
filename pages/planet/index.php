<html lang="en">
<?php
$cur_page = $_GET["p"];
// Todo - eliminate this php to js usage
echo "<script>let current_page = $cur_page;</script>";

$json = file_get_contents("../data.json");
$data = json_decode($json);

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

        <span id="marker-here"></span>

        <!-- <div class="poi-point mock-pos-0" poi-id="0"></div>
        <div class="poi-point mock-pos-1" poi-id="1"></div>
        <div class="poi-point mock-pos-2" poi-id="2"></div> -->

        <img src="<?php echo $data[$cur_page]->img ?>" style="height: 50%" class="planet-img">

        <button-back></button-back>

        <div class="files">
            <div class="wrapper">
                <h2>แฟ้มข้อมูล</h2>
            </div>
        </div>

        <heading-box
            maintitle="<?php echo $data[$cur_page]->name ?>"
            subtitle="<?php echo $data[$cur_page]->name_en ?>"
        ></heading-box>

        <overlay-planet-info></overlay-planet-info>
    </div>
</body>
</html>