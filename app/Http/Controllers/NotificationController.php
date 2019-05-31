<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\NoticeUser;
use Illuminate\Support\Facades\Validator;
use App;

class NotificationController extends Controller
{
    public function allUsers () {
            $users = App\Notification::all();
            return view('notice', compact('users'));
    }

    /**
     * Вывод формы.
     *
     * @return Response
     */
    public function create()
    {
        return view('notice');
    }

    /**
     *
     * @param  NoticeUser  $request
     * @throws
     * @return Response
     */
    public function store(NoticeUser $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique|max:255',
            'name' => 'required'
        ]);
        if ($validator->fails()) {
            return redirect('post/create')
                ->withErrors($validator)
                ->withInput();
        }
    }
}
