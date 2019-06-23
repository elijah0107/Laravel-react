<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Order;

class OrderController extends Controller
{
    public function order(Request $request)
    {
        $notice = new Order;
        $phone = $request->input('phone');
        $name = $request->input('name');
        $phoneExist = empty($notice::where('phone', 'LIKE', $phone)->get()->toArray());
        if (!$phoneExist) {
            return array(
                'message' => 'Мы уже отправляли файл на эту почту, пожалуйста проверьте в своих сообщениях',
                'user_exist' => true,
            );
        }
        $notice->phone = $phone;
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
