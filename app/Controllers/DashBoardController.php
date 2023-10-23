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

    public function IG()
    {
        $data_id = $_GET['compa'] ?? '0';
        $data = $this->SettingTVModel->getPiture($data_id);
       
        return $this->response->setJSON([
            'status' => 200,
            'error' => false,
            'data' => $data
        ]);
    }
}
