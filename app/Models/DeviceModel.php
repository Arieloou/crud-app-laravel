<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DeviceModel extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'manufacture_date'
    ];

    protected $casts = [
        'manufacure_date' => 'date'
    ];

    public function devices() : HasMany
    {
        return $this->hasMany(Device::class);
    }
}
