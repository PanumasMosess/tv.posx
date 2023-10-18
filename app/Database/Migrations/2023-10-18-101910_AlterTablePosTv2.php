<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AlterTablePosTv2 extends Migration
{
    public function up()
    {
        $db = \Config\Database::connect();
        $sql = "ALTER TABLE `posx_tv` 
        CHANGE COLUMN `companie_id` `companies_id` int(11) NULL";
        $db->query($sql);
    }

    public function down()
    {
        //
    }
}
