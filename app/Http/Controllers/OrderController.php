<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Order;

class OrderController extends Controller
{
  public function order(Request $request)
  {
    $order = new Order;
    $phone = $request->input('phone');
    $name = $request->input('name');
    $phoneExist = empty($order::where('phone', 'LIKE', $phone)->get()->toArray());
    if (!$phoneExist) {
      return array(
        'user_exist' => true,
        'without_save' => true,
      );
    }
    if ($phoneExist) {
      $order->phone = $phone;
      $order->name = $name;
      $result = $order->save();
      if ($result == 1) {
        return array(
          'user_exist' => false,
          'without_save' => false,
        );
      }
      return array(
        'message' => '',
        'user_exist' => true,
      );
    }
  }
}
