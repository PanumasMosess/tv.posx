<?php

namespace App\Models;

use CodeIgniter\Database\ConnectionInterface;

class UploadModel
{
    protected $db;
    public function __construct()
    {
        $db = \Config\Database::connect();
        $this->db = &$db;
    }

    public function getCodeUpload()
    {
        $sql = "SELECT SUBSTRING(tv_code, 5,8) as substr_upload_code  FROM posx_tv_running order by id desc LIMIT 1";
        $builder = $this->db->query($sql);
        return $builder->getResult();
    }

    public function upload_customer($upload, $upload_running)
    {
        $builder_upload_tv = $this->db->table('posx_tv');
        $builder_upload_tv_status = $builder_upload_tv->insert($upload);

        $builder_running = $this->db->table('posx_tv_running');
        $builder_running_status = $builder_running->insert($upload_running);

        return ($builder_upload_tv_status && $builder_running_status) ? true : false;
    }
}
