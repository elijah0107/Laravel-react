<?php

namespace App;

use Illuminate\Http\Request;

class NotificationController extends Http\Controllers\Controller
{
    public function allUsers () {
            $users = Notification::all();
            return view('notice', compact('users'));
    }
}
