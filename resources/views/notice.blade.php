<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>
<div id="notice"></div>
<div>
    <ul>
        <?php foreach ($users as $user): ?>
            <li><?= $user; ?></li>
        <?php endforeach ?>
    </ul>
</div>
<script src="/js/app.js"></script>
</body>
</html>
