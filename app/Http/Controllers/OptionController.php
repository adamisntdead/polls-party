<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Option;

class OptionController extends Controller
{
    public function vote(Option $option)
    {
        return $option->vote();
    }
}
