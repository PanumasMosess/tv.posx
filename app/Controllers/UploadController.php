<?php

namespace App\Controllers;

class UploadController extends BaseController
{
    public function index(): string
    {
        return view('upload_page/upload');
    }
}
