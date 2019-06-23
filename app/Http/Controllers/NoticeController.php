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
    $name = $request->input('name');
    $emailExist = empty($notice::where('email', 'LIKE', $email)->get()->toArray());
    if (!$emailExist) {
      return array(
          'message' => 'Мы уже отправляли файл на эту почту, пожалуйста проверьте в своих сообщениях',
          'user_exist' => true,
      );
    }
    $notice->email = $email;
    $notice->name = $name;
    $result = $notice->save();
    if ($result == 1) {
        return array(
            'message' => "Файл успешно отправлен вам на почту, если не пришло проверьте папку спам",
            'userExist' => false,
        );
    } else {
      return "Что-то пошло не так";
    }

  }
}
