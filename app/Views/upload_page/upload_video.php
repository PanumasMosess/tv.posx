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
</head>

<body class="bg-dark4">
    <div class="page-loader loader-wrapper bg-dark4">
        <div class="loader">
            <div class="outter b-colored">
                <div class="mid b-colored"></div>
            </div>
        </div>
    </div>
    <section id="contact" class="py-100">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-column align-items-center t-center">
                    <h2 class="fs-60 fs-40-sm uppercase white font-secondary">กรุณาเพิ่มข้อมูลเพื่อขึ้นจอให้กับคุณ</h2>
                    <div class="width-70 height-1 my-20 bg-gray4"></div>
                </div>
                <div id="contact-form-container" class="col-12 mt-10 d-flex fullwidth flex-column align-items-center slow-cubic">
                    <div class="contact-form-wrapper o-hidden fullwidth slow-cubic">
                        <form id="tv_form" class="contact-form validate-me" novalidate="" name="tv_form" >
                            <div class="container-fluid px-0">
                                <div class="col-lg-12 col-12 relative">
                                    <main class="page">
                                        <div class="box">
                                            <div class="col-12 mt-15 d-flex text-center justify-content-center bg-colored-hover-upload">
                                                <label for="file-input" class="block b-1 b-dark fullwidth font-secondary uppercase bg-dark2 bg-colored-hover-upload py-25 gray5 white-hover fs-17 slow"><i class="ti-upload"></i>&nbsp; &nbsp; เพิ่มวีดีโอไม่เกิน 30 วินาที (30 MB)</label>
                                            </div>
                                            <input type="file" class="file-input" id="file-input" accept="video/mp4, video/ogg, video/webm, video/quicktime" placeholder="เลือกรูปภาพ" style="display:none;" onchange="checkFileDuration()">
                                        </div>
                                        <div class="box-2">
                                            <pre id="infos" style="display:none"></pre>
                                            <div id="pross" style="display:none">
                                                <p>กำลังเพิ่ม</p>
                                                <img src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" width="50" />
                                            </div>
                                        </div>

                                    </main>
                                </div>
                            </div>
                            <div class="row row-eq-height">
                                <div class="col-lg-12 col-12 relative">
                                    <div class="bg"></div>
                                    <input type="text" name="text_ig" id="text_ig" placeholder="         ชื่อ IG ของคุณ" required class="py-25 px-25 b-dark fs-18 bg-dark2 white gray-placeholder mt-20 img-ig" />
                                    <div class="invalid-tooltip top-3 mt-0 bg-transparent p-0 text-danger fs-16 font-main">กรุณาเพิ่มไอจีของคุณ.</div>
                                </div>
                                <div class="col-lg-12 col-12 relative pt-30"><textarea name="message" id="message" placeholder="เพิ่มข้อความ" class="py-25 px-25 b-dark fs-18 bg-dark2 white gray-placeholder mnh-150 fullheight"></textarea>
                                    <div class="invalid-tooltip top-3 mt-0 bg-transparent p-0 text-danger fs-16 font-main"></div>
                                </div>
                                <div class="col-12 mt-30 d-flex justify-content-lg-end justify-content-center"><button type="submit" id="submit" class="xl-btn block b-1 b-dark fullwidth font-secondary uppercase bg-dark2 bg-colored-hover py-25 gray5 white-hover fs-17 slow">สร้างข้อความ</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script src="<?php echo base_url('js/bs.js?v=' . time()); ?>"></script>
    <script src="<?php echo base_url('js/plugins.min.js?v=' . time()); ?>"></script>
    <script src="<?php echo base_url('js/functions.js?v=' . time()); ?>"></script>
    <script src="<?php echo base_url('js/script_video.js?v=' . time()); ?>"></script>
</body>

</html>