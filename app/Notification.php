<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    public function currentUser () {
        $currentUser = Notification::where('email', $email)->firstOrFail();
    }
}
