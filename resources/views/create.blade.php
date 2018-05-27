<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Polls</title>
</head>
<body>
    <h1>Home</h1>

    @if ($errors->any())
        <ul>
            @foreach ($errors->all() as $error)
                <li style="color:red">{{ $error }}</li>
            @endforeach
        </ul>
    @endif

    <form action="/" method="post">
        @csrf

        <input type="text" name="title" placeholder="Title" required>
        <input type="text" name="options[]" placeholder="Opt">
        <input type="text" name="options[]" placeholder="Opt">
        <input type="text" name="options[]" placeholder="Opt">
        <input type="submit" value="Create Poll">
    </form>
</body>
</html>
