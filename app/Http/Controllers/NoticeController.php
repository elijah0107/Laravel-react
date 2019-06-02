<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Notice;

class NoticeController extends Controller
{

    public function insert(Request $request)
    {
        $notice = new Notice;
        $email = $request->input('email');
        $emailExist = empty($notice::where('email', 'LIKE', $email)->get()->toArray());
        if(!$emailExist) {
            return "Пользователь с таким email уже существует";
        }
        $notice->email = $email;
        $notice->name = $request->input('name');
        $result = $notice->save();

        if ($result == 1) {
            return "Данные записались";
        }
        else {
            return "Что-то пошло не так";
        }

    }
}
