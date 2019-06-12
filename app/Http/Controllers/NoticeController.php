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
            return "Мы уже отправляли файл на эту почту, пожалуйста проверьте в своих сообщениях";
        }
        $notice->email = $email;
        $notice->name = $request->input('name');
        $result = $notice->save();

        if ($result == 1) {
            return "Файл успешно отправлен вам на почту, если не пришло проверьте папку спам";
        }
        else {
            return "Что-то пошло не так";
        }

    }
}
