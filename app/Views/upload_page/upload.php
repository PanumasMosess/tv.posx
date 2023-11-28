<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>TV POSX</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    <link rel="shortcut icon" type="image/png" href="<?php echo base_url('img/icon.png'); ?>">
    <!-- <link rel="apple-touch-icon" href="images/apple-touch-icon.png"> -->
    <link rel="stylesheet" href="<?php echo base_url('css/plugins.min.css'); ?>">
    <link rel="stylesheet" href="<?php echo base_url('css/style.css?v=2.0'); ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/cropper/2.3.4/cropper.min.css'>
    <link rel="stylesheet" href="<?php echo base_url('css/img_crop.css?v=1.0'); ?>">
    <script>
        var serverUrl = '<?php echo base_url(); ?>';
    </script>
    <style>
        .row>* {
            padding-right: 0;
        }

        .card {
            --bs-card-bg: rgb(255 255 255 / 5%);
            /* สีจางที่ความเข้มลงเหลือ 5% */
        }
    </style>
</head>

<body class="bg-dark4">
    <div class="page-loader loader-wrapper bg-dark4">
        <div class="loader">
            <div class="outter b-colored">
                <div class="mid b-colored"></div>
            </div>
        </div>
    </div>
    <section id="contact" class="py-70">
        <div class="container">
            <div class="row">
                <div class="row" style="margin-bottom: 10px;justify-content: center;">
                    <div class="col-md-4 col-6">
                        <a href="<?php echo 'https://mobile-posx.posx.co/home/'.service('uri')->getSegment(2).'_'.service('uri')->getSegment(3); ?>">
                            <div class="card mb-3 widget-chart" style="height: auto;">
                                <img src="<?php echo base_url('img/menu.png'); ?>" alt="รูปภาพ" style="width: 80%; height: 80%;align-self: center;">
                                <span style="text-align: center;color: white; font-size: 24px;padding-top: 5px;padding-bottom: 10px;">เมนู</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="row" style="justify-content: center;">
                    <div class="col-md-4 col-6">
                        <a href="<?php echo base_url('/upload_img/'.service('uri')->getSegment(2).'/'.service('uri')->getSegment(3)); ?>">
                            <div class="card mb-3 widget-chart" style="height: auto;">
                                <img src="<?php echo base_url('img/img.png'); ?>" alt="รูปภาพ" style="width: 80%; height: 80%;align-self: center;">
                                <span style="text-align: center;color: white; font-size: 24px;padding-top: 5px;padding-bottom: 10px;">ส่งรูปขึ้นจอ</span>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-4 col-6">
                        <a href="<?php echo base_url('/upload_video/'.service('uri')->getSegment(2).'/'.service('uri')->getSegment(3)); ?>">
                            <div class="card mb-3 widget-chart" style="height: auto;">
                                <img src="<?php echo base_url('img/video.png'); ?>" alt="รูปภาพ" style="width: 80%; height: 80%;align-self: center;">
                                <span style="text-align: center;color: white; font-size: 24px;padding-top: 5px;padding-bottom: 10px;">ส่งวีดีโอขึ้นจอ</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="<?php echo base_url('js/bs.js?v=' . time()); ?>"></script>
    <script src="<?php echo base_url('js/plugins.min.js?v=' . time()); ?>"></script>
    <script src="<?php echo base_url('js/functions.js?v=' . time()); ?>"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/0.8.1/cropper.min.js'></script>
    <script src="<?php echo base_url('js/script_imge.js?v=' . time()); ?>"></script>
</body>

</html>