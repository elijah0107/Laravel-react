<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/', function () {
    return view('mainpage');
});
Route::get('/checkout', function () {
    return view('checkout');
});

Route::get('api/users', 'NotificationController@create');
Route::post('api', 'NotificationController@store');



