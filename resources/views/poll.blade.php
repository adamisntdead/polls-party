<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Polls</title>
</head>
<body>
    <h1>{{ $title }}</h1>

    <ul id="options">
        @foreach($options as $option)
            <li id="{{ $option->id }}">{{ $option->name }} - {{ $option->votes }}</li>
        @endforeach
    </ul>

    <script>
        function vote(id) {
            const request = new XMLHttpRequest();
            request.open('POST', `/vote/${id}`, true);
            request.setRequestHeader('X-CSRF-Token', '{{ csrf_token() }}')
            request.send()
        }

        function ready(fn) {
            if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
                fn();
            } else {
                document.addEventListener('DOMContentLoaded', fn);
            }
        }

        function getEventTarget(e) {
            e = e || window.event;
            return e.target || e.srcElement;
        }


        ready(() => {
            const optionsList = document.getElementById('options')
            optionsList.onclick = (event) => {
                const target = getEventTarget(event)
                vote(target.id)
            }
        })

    </script>
</body>
</html>
