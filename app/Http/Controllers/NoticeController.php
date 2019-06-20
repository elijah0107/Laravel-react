<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Notice;

class NoticeController extends Controller
{

  public function insert(Request $request)
  {
    $token = '1232434';
    $chat_id = '2132142';
    $notice = new Notice;
    $email = $request->input('email');
    $name = $request->input('name');
    $emailExist = empty($notice::where('email', 'LIKE', $email)->get()->toArray());
    if (!$emailExist) {
      return "Мы уже отправляли файл на эту почту, пожалуйста проверьте в своих сообщениях";
    }
    $notice->email = $email;
    $notice->name = $request->input('name');
    $arr = array(
      'Имя' => $email,
      'Почта' => $name,
    );
    $result = $notice->save();
    $txt = "Кто-то заказал шпаргалку <br>%0A";
    foreach ($arr as $key => $value) {
      $txt .= "<b>".$key."</b> ".$value."%0A";
    }
    if ($result == 1) {
      $sendMessageToTelegram = fopen("https://api.telegram.org/bot($token)/sendMessage?chat_id=($chat_id)&parse_mode=html&text={$txt}", '');
      return "Файл успешно отправлен вам на почту, если не пришло проверьте папку спам";
    } else {
      return "Что-то пошло не так";
    }

  }
}
