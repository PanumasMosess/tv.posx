<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateTableUploadTv extends Migration
{
    public function up()
    {
        $db = \Config\Database::connect();
        $sql_tv_detail = "CREATE TABLE `posx_tv` (`id` INT NOT NULL AUTO_INCREMENT , `tv_code` varchar(64) NULL , `ig` TEXT NULL , `message` TEXT NULL  , `created_by` TEXT NULL ,`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`id`), INDEX (`id`), INDEX (`tv_code`)) ENGINE = InnoDB";
        $db->query($sql_tv_detail);

        $sql_tv_running = "CREATE TABLE `posx_tv_running` (`id` INT NOT NULL AUTO_INCREMENT , `tv_code` varchar(64) NULL , PRIMARY KEY (`id`), INDEX (`id`), INDEX (`tv_code`)) ENGINE = InnoDB";
        $db->query($sql_tv_running);
    }

    public function down()
    {
        //
    }
}
