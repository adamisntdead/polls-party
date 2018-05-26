<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
   public function poll()
   {
       return $this->belongsTo('App\Poll');
   }
}
