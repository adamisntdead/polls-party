<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>polls.party - Easy Polls And Voting For Snapchat 👻</title>

    <link rel="stylesheet" href="{{ url('/css/app.css') }}">
</head>
<body>
    <form class="container" action="/" method="post" autocomplete="off" onsubmit="return inputErrors()">
        @csrf
        <textarea id="question-input" maxlength="60" rows="3" name="title" placeholder="Enter Your Question..."></textarea>
        <div class="options-container" id="options-container"></div>

        <button type="submit">create the poll</button>
    </form>

    <script src="{{ url('/js/create.js') }}"></script>
</body>
</html>
