<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
   public function poll()
   {
       return $this->belongsTo('App\Poll');
   }

   // Vote up once
   public function vote()
   {
       $this->increment('votes');
       return $this->votes;
   }
}
