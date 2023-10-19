<?php

namespace App\Controllers;

date_default_timezone_set('Asia/Jakarta');

use App\Controllers\BaseController;

class UploadController extends BaseController
{


    public function __construct()
    {
        // Model
        $this->UploadModel = new \App\Models\UploadModel();
    }

    public function index(): string
    {
        return view('upload_page/upload');
    }

    public function inert_message()
    {
        $buffer_datetime = date("Y-m-d H:i:s");
        $datas = $_POST["data"];
        $count_cycle = 0;

        // var_dump($datas);
        // exit;

        $check_arr_count = count($datas);

        foreach ($datas as $data) {
            // var_dump($data[0]['productname']. "->" . $data[0]['category']. "->" . $data[0]['price']);    
            $upload_running_code = '';
            $buffer_upload_code = 0;
            $new_running_codes = $this->UploadModel->getCodeUpload();

            foreach ($new_running_codes as $running_code) {

                $buffer_upload_code = (int)$running_code->substr_upload_code;
            }

            $sum_upload_code = $buffer_upload_code + 1;
            $sprintf_upload_code = sprintf("%08d", $sum_upload_code);
            $upload_running_code = "POXU" . $sprintf_upload_code;


            $file = $data['img_64bit'];
            $file_name  = '';
            if ($file != null) {
                $new_file = explode(";", $file);
                $new_file_move = explode(",", $file);
                $type = $new_file[0];
                $type_real = explode("/", $type);

                // var_dump($new_file_move[1]);
                // exit;

                $file_name = $upload_running_code . '.' . $type_real[1];

                file_put_contents('uploads/customer_img/' . $upload_running_code . '.' . $type_real[1], base64_decode($new_file_move[1]));
            }


            //data stock table
            $data_upload = [
                'tv_code' => $upload_running_code,
                'ig' => $data['ig'],
                'src_img' => $file_name,
                'table_name' => $data['table'],
                'message' => $data['message'],
                'status_on_tv' => 'WAIT_ON',
                'created_by' => $data['table'],
                'companies_id' =>  $data['id_companies']
            ];

            $data_upload_runing = [
                'tv_code' => $upload_running_code
            ];

            $create_new = $this->UploadModel->upload_customer($data_upload, $data_upload_runing);

            if ($create_new) {
                $count_cycle++;
            } else {
                return $this->response->setJSON([
                    'status' => 200,
                    'error' => true,
                    'message' => 'Faild'
                ]);
            }
        }

        if ($check_arr_count == $count_cycle) {
            return $this->response->setJSON([
                'status' => 200,
                'error' => false,
                'message' => 'upload_success'
            ]);
        } else {
            //  ว่าง
        }
    }
}
