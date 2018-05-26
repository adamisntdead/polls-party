<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Polls</title>
</head>
<body>
    <h1>{{ $title }}</h1>

    <ul>
        @foreach($options as $option)
            <li>{{ $option->name }} - {{ $option->votes }}</li>
        @endforeach
    </ul>

</body>
</html>
