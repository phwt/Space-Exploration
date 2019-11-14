<html lang="en">
<?php
$json = file_get_contents("../data_poi.json");
$data = json_decode($json);
?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php
    if (isset($_GET["c"])){
        echo $data->{$_GET["c"]}->title;
    } else {
        echo "Planet Files";
    }
    ?></title>
    <script>this.customElements||document.write('<script src="https://unpkg.com/document-register-element@1.14.3/build/document-register-element.js"><\x2fscript>');</script>
    <script src="https://unpkg.com/@ungap/custom-elements-builtin@0.2.7/min.js"></script>
    <script src="../jquery-3.4.1.min.js"></script>
    <script src="../elements.js"></script>
    <link rel="stylesheet" href="../bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
    <script>
        // $(document).ready(function() {
        //     $("body").hide();
        //     $("body").fadeIn();
        // })
    </script>
</head>

<body>
    <button-back-spc where='<?php
        if (isset($_GET["c"])){
            echo $data->{$_GET["c"]}->parent;
        }else if (isset($_GET["v"])){
            echo explode(",", $_GET["v"])[0];
        }
    ?>'></button-back-spc>

    <div class="h-custom row paper no-gutters pt-5 h-100">
        <div class="d-none d-md-block col-2 bg-file no-left file-side p-4">
            <div class="related">

                <?php
                if (isset($_GET["c"])) :
                    $cur_data = $data->{$_GET["c"]};
                    ?>

                    <card-current heading="<?php echo $cur_data->title ?>" excerpt="<?php echo $cur_data->excerpt ?>"></card-current>

                    <h5 class="mt-4" style="font-weight: 300 !important">หัวข้อที่เกี่ยวข้อง</h5><hr>

                    <?php
                        foreach ($cur_data->related as $relate) {
                            $cur_relate = $data->$relate;
                            echo "<card-related
                                heading='$cur_relate->title'
                                excerpt='$cur_relate->excerpt'
                                link='$relate'
                            ></card-related>";
                        }
                    ?>

                <?php elseif (isset($_GET["v"])) :
                    $topic_list = explode(",", $_GET["v"]);
                    $start = false;
                    foreach ($topic_list as $topic) {
                        if(!$start){
                            $start = true;
                            continue;
                        }
                        $cur_topic = $data->$topic;
                        echo "<card-related
                                heading='$cur_topic->title'
                                excerpt='$cur_topic->excerpt'
                                link='$topic'
                        ></card-related>";
                    }

                endif; ?>
            </div>
        </div>

        <div class="col-1 text-center"></div>
        <div class="col-md-8 col-10 bg-file p-4 center-file">
            <?php if (isset($_GET["c"])) : ?>

                <h1 class="text-center"><?php echo $cur_data->title ?></h1>
                <hr>
                <?php echo file_get_contents("subpage/" . $_GET["c"] . "/index.html") ?>

            <?php elseif (isset($_GET["v"])) : ?>

                <div class="text-center mt-5">
                    <h2>เลือกหัวข้อที่สนใจจากด้านซ้ายมือได้เลย!</h2>
                </div>

            <?php endif; ?>
        </div>
        <div class="col-1"></div>
    </div>
</body>

</html>