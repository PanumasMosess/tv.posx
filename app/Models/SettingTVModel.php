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
        $sql = "SELECT *, posx_tv.id as id_ig FROM  posx_tv  LEFT JOIN table_dynamic  
        ON posx_tv.table_code = table_dynamic.table_code
        WHERE (posx_tv.companies_id = '$companies_id') AND posx_tv.status_on_tv = 'WAIT_ON' ORDER BY posx_tv.id ASC LIMIT 1";

        $builder = $this->db->query($sql);
        return $builder->getRow();
    }

    public function getTimeIg($companies_id)
    {
        $sql = "SELECT * FROM posx_tv_setting WHERE (companies_id = '$companies_id')";

        $builder = $this->db->query($sql);
        return $builder->getRow();
    }

    public function updateStatus($data, $id)
    {
        $builder = $this->db->table('posx_tv');

        return $builder->where('id', $id)->update($data);
    }
}
