<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendMail(Request $request)
    {
        $email = $request->input('email');
        Mail::send(['text' => 'mail'], ['name' => 'Приветики'], function ($message) use ($email) {
            $message->to($email)->subject('Шпаргалка "Почему я не худею?"');
            $message->from('think-about-eat@mail.ru', 'Школа осознанного питания');
            $message->attach(public_path('../data/whynotfit.pdf'));
        });
    }
}
