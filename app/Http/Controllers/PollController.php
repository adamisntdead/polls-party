<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Poll;

class PollController extends Controller
{
    public function index(Poll $poll)
    {
        $title = $poll->title;
        $options = $poll->options()->get();

        return view('poll', compact('title', 'options'));
    }

    public function create()
    {
        return view('create');
    }
}
