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

    public function getPiture($companies_id)
    {
        // $companies_id = session()->get('companies_id');
        $sql = "SELECT * FROM  posx_tv_background WHERE (companies_id = '$companies_id')";

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

    public function getIG($companies_id)
    {
        $sql = "SELECT * FROM  posx_tv WHERE (companies_id = '$companies_id') AND status_on_tv = 'WAIT_ON' ORDER BY ID ASC LIMIT 1";

        $builder = $this->db->query($sql);
        return $builder->getRow();
    }
}
