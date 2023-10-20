<?php
namespace App\Models;

use CodeIgniter\Database\ConnectionInterface;

class SettingTVModel
{

    protected $db;

    public function __construct()
    {
        $db = \Config\Database::connect();
        $this->db = &$db;
    }

    public function getPiture()
    {
        // $companies_id = session()->get('companies_id');
        $sql = "SELECT * FROM  posx_tv_background WHERE (companies_id = '1')";

        $builder = $this->db->query($sql);
        return $builder->getResult();
    }

    public function getTVSetting()
    {
        $companies_id = session()->get('companies_id');
        $sql = "SELECT * FROM posx_tv_setting WHERE (companies_id = $companies_id);";
        $builder = $this->db->query($sql);
        return $builder->getRow();
    }
}