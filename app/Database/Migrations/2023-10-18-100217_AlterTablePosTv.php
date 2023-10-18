<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class AlterTablePosTv extends Migration
{
    public function up()
    {
        $db = \Config\Database::connect();
        $sql_iupload1 = "ALTER TABLE `posx_tv` ADD `src_img` TEXT NULL AFTER `ig`";
        $db->query($sql_iupload1);

        $sql_iupload2 = "ALTER TABLE `posx_tv` ADD `table_name` TEXT NULL AFTER `src_img`";
        $db->query($sql_iupload2);

        $sql_iupload3 = "ALTER TABLE `posx_tv` ADD `companie_id` int(11) NULL AFTER `table_name`";
        $db->query($sql_iupload3);
    }

    public function down()
    {
        //
    }
}
