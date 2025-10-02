<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Device extends Model
{
    use HasFactory;

    protected $fillable = [
        'serial_number',
        'device_model_id',
        'category_id',
        'state',
        'purchase_date'
    ];

    protected $casts = [
        'purchase_date' => 'date'
    ];

    public function category() : BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    
    public function deviceModel() : BelongsTo
    {
        return $this->belongsTo(DeviceModel::class);
    }
}