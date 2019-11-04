<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="bootstrap.min.css">
    <link rel="stylesheet" href="style.css">

    <script src="jquery-3.4.1.min.js"></script>
    <script src="elements.js"></script>
    <script src="script.js"></script>
</head>

<body>
    <div class="h-100 text-center">
        <div class="center-me">
            <img class="mb-5" id="top-logo" src="https://via.placeholder.com/400x300?text=Logo" alt=""><br>
            <button class="mt-5 btn-space" id="btn-open-section">Let's Go!</button>
        </div>
    </div>

    <span id="content-area text-white">
        <?php
        $json = file_get_contents("data.json");
        $data = json_decode($json);
        foreach ($data as $value) {
            echo "<celestial-bodies id='$value->link' size='$value->size' src='$value->img'></celestial-bodies>";
        }
        ?></span>

    <overlay-info id="overlay-info"></overlay-info>

    <overlay-au id="overlay-au"></overlay-au>
</body>

</html>