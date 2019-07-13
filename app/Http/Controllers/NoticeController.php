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
    if ($email === 'rgaev@mail.ru') {
        return array(
            'callbackMessage' => "Привет, Роман.",
            'userExist' => false,
            'error' => false
        );
    }
    if (!$email || !$name) {
        return [
            'callbackMessage' => 'Значение поля e-mail или name не может быть пустым',
            'error' => true
        ];
    }
    $emailExist = empty($notice::where('email', 'LIKE', $email)->get()->toArray());
    if (!$emailExist) {
      return array(
          'callbackMessage' => 'Мы уже отправляли файл на эту почту, пожалуйста проверьте в своих сообщениях',
          'user_exist' => true,
          'error' => false
      );
    }
    $notice->email = $email;
    $notice->name = $name;
    $result = $notice->save();
    if ($result == 1) {
        return array(
            'callbackMessage' => "Файл успешно отправлен вам на почту, если не пришло проверьте папку спам",
            'userExist' => false,
            'error' => false
        );
    } else {
      return "Что-то пошло не так";
    }

  }
}
