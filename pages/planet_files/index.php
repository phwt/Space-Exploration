<html lang="en">
<?php
$json = file_get_contents("../data_poi.json");
$data = json_decode($json);
$cur_data = $data->{$_GET["c"]};
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="../jquery-3.4.1.min.js"></script>
    <script src="../elements.js"></script>
    <link rel="stylesheet" href="../bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script>
        $(document).ready(function () {
            $("body").hide();
            $("body").fadeIn();
        })
    </script>
</head>

<body>
    <button-back></button-back>

    <div class="h-custom row paper no-gutters pt-5">
        <div class="col-2 bg-file file-side p-4">
            <div class="related">
                <card-current
                    heading="<?php echo $cur_data->title ?>"
                    excerpt="<?php echo $cur_data->excerpt ?>"
                ></card-current>

                <?php
                foreach($cur_data->related as $relate){
                    $cur_relate = $data->$relate;
                    echo "<card-related
                        heading='$cur_relate->title'
                        excerpt='$cur_relate->excerpt'
                        link='$relate'
                    ></card-related>";
                }
                ?>
            </div>
        </div>

        <div class="col-1 text-center"></div>
        <div class="col-8 bg-file p-4 center-file">
            <h1 class="text-center"><?php echo $cur_data->title ?></h1><hr>
            <?php echo file_get_contents("subpage/" . $_GET["c"] . "/index.html") ?>
        </div>
        <div class="col-1"></div>
    </div>
</body>

</html>