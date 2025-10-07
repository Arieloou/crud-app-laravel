<?php

use App\Http\Controllers\DeviceController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    // Route for CRUD of Devices
    Route::resource('devices', DeviceController::class);
});