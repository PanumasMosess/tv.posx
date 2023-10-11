<?php

namespace App\Controllers;

class DashBoardController extends BaseController
{
    public function index(): string
    {
        return view('dashboard');
    }
}
