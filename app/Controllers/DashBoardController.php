<?php

namespace App\Controllers;

class DashBoardController extends BaseController
{
    public function index(): string
    {
        $this->SettingTVModel = new \App\Models\SettingTVModel();
        $data['companies_id'] = $_GET['compa'] ?? '0';
        $data['picture_datas'] = $this->SettingTVModel->getPiture($data['companies_id']);
        
        return view('dashboard', $data);
    }
}
