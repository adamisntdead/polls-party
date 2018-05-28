<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }} - polls.party</title>

    <link rel="stylesheet" href="{{ url('/css/app.css') }}">
</head>
<body>
    <div class="container">
        <p id="question-input">{{ $title }}</p>

        <div class="options-container" id="options">
            @foreach($options as $option)
                @if (!$loop->first)
                    <hr>
                @endif
                <div class="option-item" id="{{ $option->id }}" onclick="optionClick(this)" votes="{{ $option->votes }}">
                    <span>{{ $option->name }}</span>
                </div>
            @endforeach
        </div>

        <button id="results-button">See The Results</button>
    </div>

    <script>
        window.CSRF_TOKEN = '{{ csrf_token() }}'
    </script>
    <script src="{{ url('/js/poll.js') }}"></script>
</body>
</html>
