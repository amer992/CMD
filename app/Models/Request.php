<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Request extends Model
{
    use HasFactory;
    use SoftDeletes;
   public function owner(){
        return $this->belongsTo(Otp::class,"owner_id");
    }
    public function department(){
        return $this->belongsTo(Department::class,"department_id");
    }

}
