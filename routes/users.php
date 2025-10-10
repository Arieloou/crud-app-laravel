<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    // Route for CRUD of Users
    Route::resource('users', UserController::class);
});