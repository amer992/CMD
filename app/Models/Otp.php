<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Otp extends Model
{
    use HasFactory; 
    public $timestamps = false;
    
    public function user(){
        return $this->belongsTo(User::class,"user_id");
    }
    public function token(){
        return $this->belongsTo(OtpToken::class,"toekn");
    }
}
