<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'tbl_product'; // Ensure this is the correct table name

    public $timestamps = false;

    protected $fillable = [
        'name',
        'price',
        'desc',
        'status'
    ];
}
