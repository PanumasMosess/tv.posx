<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AlterTableTAVPOS3 extends Migration
{
    public function up()
    {
        $db = \Config\Database::connect();
        $sql = "ALTER TABLE `posx_tv` 
        CHANGE COLUMN `table_name` `table_code` TEXT NULL";
        $db->query($sql);
    }

    public function down()
    {
        //
    }
}
