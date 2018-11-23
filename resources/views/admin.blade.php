<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Vue') }}</title>
</head>
<body>
<div id="app">
</div>

{{-- Vue --}}
<script src="{{ mix('/client/js/manifest.js') }}" type="text/javascript" charset="utf-8"></script>
<script src="{{ mix('/client/js/vendor.js') }}" type="text/javascript" charset="utf-8"></script>
<script src="{{ mix('/client/js/app.js') }}" type="text/javascript" charset="utf-8"></script>
</body>
</html>
