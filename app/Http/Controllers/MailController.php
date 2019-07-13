<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendMail(Request $request)
    {
        $email = $request->input('email');
        $message = "Кто-то заказал шпаргалку почта: $email";
        Mail::send(['text' => "ordered"], ['name' => 'Приветики'], function ($message) use ($email) {
            $message->to('rgaev@mail.ru')->subject("Кто-то заказал шпаргалку почта: $email");
            $message->from('think-about-eat@mail.ru', 'Школа осознанного питания');
        });
        Mail::send(['text' => 'mail'], ['name' => 'Приветики'], function ($message) use ($email) {
            $message->to($email)->subject('Шпаргалка "Почему я не худею?"');
            $message->from('think-about-eat@mail.ru', 'Школа осознанного питания');
            $message->attach(public_path('../data/whynotfit.pdf'));
        });
        if (empty(Mail::failures())) {
            return [
              'has_send' => true,
              'callbackMessage' => 'Файл успешно отправлен вам на почту, если не пришло проверьте папку спам',
              'error' => false,
            ];
        }
        else {
            return [
                'has_send' => false,
                'callbackMessage' => 'Не удалось отправить сообщение, попробуйте ещё раз',
                'error' => true,
            ];
        }

    }
}
