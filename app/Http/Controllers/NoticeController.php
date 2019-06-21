<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Notice;

class NoticeController extends Controller
{

  public function insert(Request $request)
  {
    $token = '716231571:AAEnjjHaoAoNjZZTrhC75cIjCZE7tG03cQ0';
    $chat_id = '-375012688';
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
      $this->sendMessage($chat_id, 'Тест тест', $token);
      return "Файл успешно отправлен вам на почту, если не пришло проверьте папку спам";
    } else {
      return "Что-то пошло не так";
    }

  }

  function sendMessage($chatID, $messaggio, $token) {

    $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
    $url = $url . "&text=" . urlencode($messaggio);
    $ch = curl_init();
    $optArray = array(
      CURLOPT_URL => $url,
      CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
  }
}
