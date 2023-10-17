<!DOCTYPE html>
<html lang="en">

<head>
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=UA-107208144-1"></script> -->
    <script>
        // function gtag() {
        //     dataLayer.push(arguments)
        // }
        // window.dataLayer = window.dataLayer || [], gtag("js", new Date), gtag("config", "UA-107208144-1")
    </script>
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
    <style>
        .page {
            margin: 1em auto;
            max-width: 768px;
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
            height: 100%;
        }

        .box {
            padding: 0.5em;
            width: 100%;
            margin: 0.5em;
        }

        .box-2 {
            padding: 0.5em;
            width: 100%;
            margin: 0.5em;
            text-align: center;
            /* width: calc(100%/2 - 1em); */
        }

        .options label,
        .options input {
            width: 4em;
            padding: 0.5em 1em;
        }

        .btn {
            background: white;
            color: black;
            border: 1px solid black;
            padding: 0.5em 1em;
            text-decoration: none;
            margin: 0.8em 0.3em;
            display: inline-block;
            cursor: pointer;
        }

        .hide {
            display: none;
        }

        img {
            max-width: 100%;
        }

        input#text_ig {
            background-image: url('img/ig-icon.png');
            background-position: 20px 10px;
            background-repeat: no-repeat;
            background-size: 50px 50px;
        }

        input#text_ig:focus {
            background-image: none;
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
    <section id="contact" class="py-100">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-column align-items-center t-center">
                    <h1 class="fs-60 fs-40-sm uppercase white font-secondary">เพิ่มรูป / ข้อความ</h1>
                    <div class="width-70 height-1 my-20 bg-gray4"></div>
                </div>
                <div id="contact-form-container" class="col-12 mt-10 d-flex fullwidth flex-column align-items-center slow-cubic">
                    <div class="contact-form-wrapper o-hidden fullwidth slow-cubic">
                        <form id="tv_form" class="contact-form validate-me" novalidate="" name="tv_form" method="post">
                            <div class="container-fluid px-0">
                                <div class="col-lg-12 col-12 relative">
                                    <main class="page">
                                        <!-- <h2>Upload Image</h2> -->
                                        <!-- input file -->
                                        <div class="box">
                                            <input class="py-25 px-25 b-dark fs-18 bg-dark2 white gray-placeholder mt-30" type="file" id="file-input" placeholder="เลือกรูปภาพ">
                                        </div>
                                        <!-- leftbox -->
                                        <div class="box-2">
                                            <div class="result"></div>
                                        </div>
                                        <!--rightbox-->
                                        <div class="box-2 img-result hide">
                                            <!-- result of crop -->
                                            <img class="cropped" src="" alt="">
                                        </div>
                                </div>
                                <!-- input file -->
                                <div class="box">
                                    <div class="options hide">
                                        <label> Width</label>
                                        <input type="number" class="img-w" value="400" min="100" max="1200" />
                                    </div>
                                    <!-- save btn -->
                                    <button class="btn save hide">บันทึกขนาดรูป</button>
                                    <!-- download btn -->
                                    <!-- <a href="" class="btn download hide">Download</a> -->
                                </div>
                                </main>
                            </div>
                            <div class="row row-eq-height">
                                <div class="col-lg-12 col-12 relative">
                                    <div class="bg"></div>
                                    <input type="text" name="text_ig" id="text_ig" placeholder="         ชื่อ IG ของคุณ" required="" class="py-25 px-25 b-dark fs-18 bg-dark2 white gray-placeholder mt-30 img-ig" />
                                    <div class="invalid-tooltip top-3 mt-0 bg-transparent p-0 text-danger fs-16 font-main">กรุณาเพิ่มไอจีของคุณ.</div>
                                </div>
                                <div class="col-lg-12 col-12 relative pt-30"><textarea name="message" id="message" placeholder="เพิ่มข้อความ" class="py-25 px-25 b-dark fs-18 bg-dark2 white gray-placeholder mnh-150 fullheight"></textarea>
                                    <div class="invalid-tooltip top-3 mt-0 bg-transparent p-0 text-danger fs-16 font-main"></div>
                                </div>
                                <div class="col-12 mt-30 d-flex justify-content-lg-end justify-content-center"><button type="submit" id="submit" class="xl-btn block b-1 b-dark fullwidth font-secondary uppercase bg-dark2 bg-colored-hover py-25 gray5 white-hover fs-17 slow">ส่งขึ้นจอ</button></div>
                            </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </section>

    <script src="<?php echo base_url('js/bs.js'); ?>"></script>
    <script src="<?php echo base_url('js/plugins.min.js?v=' . time()); ?>"></script>
    <script src="<?php echo base_url('js/functions.js'); ?>"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/cropperjs/0.8.1/cropper.min.js'></script>
    <script src="<?php echo base_url('js/script_imge.js'); ?>"></script>
</body>

</html>