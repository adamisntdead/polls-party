<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Poll;
use App\Option;

class PollController extends Controller
{
    public function index(Poll $poll)
    {
        $title = $poll->title;
        $options = $poll->options()->get();

        // $options[0]->vote();
        return view('poll', compact('title', 'options'));
    }

    public function create()
    {
        return view('create');
    }

    public function store(Request $request)
    {
        // Validate the data
        $request->validate([
            'title' => 'required|max:500',
            'options' => 'required'
        ]);

        $poll = new Poll;
        $poll->title = $request->input('title');

        $poll->save();

        foreach ($request->input('options') as $option)
        {
            if ($option != "") {
                $opt = new Option;
                $opt->name = $option;
                $opt->votes = 0;
                $opt->poll_id = $poll->id;
                $opt->save();
            }
        }

        return redirect('/' . $poll->id);
    }
}
