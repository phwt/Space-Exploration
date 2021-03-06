<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Space Exploration</title>
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="style.css">

    <script>this.customElements||document.write('<script src="https://unpkg.com/document-register-element@1.14.3/build/document-register-element.js"><\x2fscript>');</script>
    <script src="https://unpkg.com/@ungap/custom-elements-builtin@0.2.7/min.js"></script>

    <script src="jquery-3.4.1.min.js"></script>
    <script src="elements.js"></script>
    <script src="script.js"></script>

    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">

    <?php if (isset($_GET["s"])) : ?>
        <script>
            const whereTo = window.innerHeight * (parseInt(<?php echo $_GET["s"] ?>) + 1)
            let checkInt = setInterval(() => {
                if (window.success) {
                    clearInterval(checkInt)
                    $(document).scrollTop(whereTo);
                }
            }, 100);
        </script>
    <?php endif; ?>

</head>

<body>
    <div class="h-100 text-center text-white">
        <div class="center-me">
            <img class="mb-5" id="top-logo" src="img/front_logo.png" alt="">
            <br><br><br><br>
            <div class="blink-me slide-down" style="font-weight: 200; font-size: 25px;">เริ่มการสำรวจ !</div>
            <img class="slide-down" style="width: 32px;" src="img/down-chevron.png" alt="">
        </div>
    </div>

    <span id="content-area text-white">
        <?php
        $json = file_get_contents("data.json");
        $data = json_decode($json);
        foreach ($data as $value) {
            if (isset($value->no_hover)) {
                if ($value->no_hover) {
                    echo "<celestial-bodies id='$value->link' size='$value->size' src='$value->img' no_hover='true'></celestial-bodies>";
                    continue;
                }
            }
            echo "<celestial-bodies id='$value->link' size='$value->size' src='$value->img'></celestial-bodies>";
        }
        ?></span>

    <overlay-info id="overlay-info"></overlay-info>
    <overlay-au id="overlay-au"></overlay-au>

    <div id="bottom-cover" style="display: none;">
        <span class="text-center">
            <h2 class="text-nowrap">ยังมีอีกมากมายให้เราค้นหาในจักรวาลอันกว้างใหญ่นี้</h2>
            <br><br><br>
            <h4>กลุ่ม 13 - Space Exploration การสำรวจอวกาศ</h4>
            <ul style="list-style-position:inside;">
                <li>นายภูวทิตต์ สัมมาวิวัฒน์ รหัสนักศึกษา 61070173</li>
                <li>นายวีรพงศ์ ทันจันทึก รหัสนักศึกษา 61070213</li>
                <li>นางสาวศุภิสรา ชีวนันทพร รหัสนักศึกษา 61070230</li>
                <li>นายสหัสวรรษ หิรัญเพชร รหัสนักศึกษา 61070239</li>
                <li>นายอริญชย์ อวยเจริญ รหัสนักศึกษา 61070350</li>
            </ul>
            <br>
            <a target="_blank" href="https://github.com/phwt/Space-Exploration"><h4>ดูโครงงานนี้บน GitHub!</h4></a>
        </span>
    </div>
</body>

</html>