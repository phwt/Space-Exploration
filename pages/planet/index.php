<html lang="en">
<?php
$cur_page = $_GET["p"];
echo "<script>let current_page = $cur_page;</script>"
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
    <script src="script.js"></script>
</head>

<body>
    <div class="container-fluid h-100">

        <div class="mock-moon text-center">Moon</div>

        <span id="marker-here"></span>

        <!-- <div class="poi-point mock-pos-0" poi-id="0"></div>
        <div class="poi-point mock-pos-1" poi-id="1"></div>
        <div class="poi-point mock-pos-2" poi-id="2"></div> -->

        <img src="../img/3-earth.svg" style="height: 50%" class="planet-img">

        <div class="back">
            <h2><span class="triangle">◀&#xFE0E;</span> กลับ</h2>
        </div>

        <div class="files">
            <div class="wrapper">
                <h2>แฟ้มข้อมูล</h2>
            </div>
        </div>

        <div class="info text-right">
            <span id="heading-th">โลก</span>
            <span id="heading-en">Earth</span>
        </div>

        <div class="row text-white" id="overlay">
            <div class="col-12 text-center overlay-box" id="box-detail">
                <h2 class="mb-0" id="overlay-name"></h2>
                <span id="overlay-name-en"></span>
                <div class="spacing line"></div>
                <img id="overlay-img" src="" alt="">
                <div class="spacing line"></div>

                <div id="overlay-info"></div>
            </div>
            <div class="col-12 overlay-box readmore text-center"> อ่านเพิ่มเติม &gt; </div>
        </div>

    </div>
</body>
</html>