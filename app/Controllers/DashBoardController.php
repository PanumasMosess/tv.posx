<?php

namespace App\Controllers;

class DashBoardController extends BaseController
{
    public function index(): string
    {
        $this->SettingTVModel = new \App\Models\SettingTVModel();
        $data['picture_datas'] = $this->SettingTVModel->getPiture();
        return view('dashboard', $data);
    }
}
