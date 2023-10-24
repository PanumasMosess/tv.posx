<?php

namespace App\Controllers;

class DashBoardController extends BaseController
{

    public function __construct()
    {
        // Model
        $this->SettingTVModel = new \App\Models\SettingTVModel();
    }

    public function index(): string
    {
        $data['companies_id'] = $_GET['compa'] ?? '0';
        $data['picture_datas'] = $this->SettingTVModel->getPiture($data['companies_id']);

        return view('dashboard', $data);
    }

    public function IG($id_com = null)
    {
        $data = $this->SettingTVModel->getIG($id_com);

        return $this->response->setJSON([
            'status' => 200,
            'error' => false,
            'data' => $data
        ]);
    }

    public function IG_TIME($id_com = null)
    {
        $data = $this->SettingTVModel->getTimeIg($id_com);

        return $this->response->setJSON([
            'status' => 200,
            'error' => false,
            'data' => $data
        ]);
    }

    public function ig_status_update($id = null)
    {
        $data = [
            'status_on_tv' => 'CLOSE'
        ];

        $check_update = $this->SettingTVModel->updateStatus($data, $id);
        if ($check_update) {
            return $this->response->setJSON([
                'status' => 200,
                'error' => false,
                'message' => 'success'
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 500,
                'error' => true,
                'message' => 'false'
            ]);
        }
    }
}
