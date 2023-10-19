<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AlterTablePosTv3 extends Migration
{
    public function up()
    {
        $db = \Config\Database::connect();
        $sql_iupload2 = "ALTER TABLE `posx_tv` ADD `status_on_tv` TEXT NULL AFTER `message`";
        $db->query($sql_iupload2);
    }

    public function down()
    {
        //
    }
}
