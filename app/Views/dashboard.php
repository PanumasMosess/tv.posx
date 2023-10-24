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
    <link rel="shortcut icon" type="image/png" href="/img/icon.png">
    <!-- <link rel="apple-touch-icon" href="images/apple-touch-icon.png"> -->
    <link rel="stylesheet" href="css/plugins.min.css">
    <link rel="stylesheet" href="css/style.css?v=2.0">
    <link rel="stylesheet" href="css/styletv.css">
    <script>
        var serverUrl = '<?php echo base_url(); ?>'
        var companies_id = '<?php echo $_GET['compa'] ?? '0'; ?>';
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
    <div id="home" class="relative white height-100vh bg-dark4 has-parallax mnh-600 align-items-center d-flex hover-container">
        <div id="home-background-slider" class="bg-slider custom-slider zi-1" data-slick='{"speed": 900, "autoplaySpeed": 9000, "autoplay": true }'>
            <?php if ($picture_datas) : ?>
                <?php $i = 0 ?>
                <?php foreach ($picture_datas as $picture_data) : ?>
                    <?php $i++ ?>
                    <div class="slide has-parallax">
                        <div class="parallax bg-bottom bg-soft-6" data-anchor-target="#home" data-bottom-top="transform:translate3d(0, -200px, 0px);" data-top-bottom="transform:translate3d(0px, 200px, 0px);" data-bg="<?php
                                                                                                                                                                                                                            $new_link = base_url();
                                                                                                                                                                                                                            $new_link2 = "";
                                                                                                                                                                                                                            if (base_url() != 'http://localhost:8080/') {
                                                                                                                                                                                                                                $new_link1 = explode("https://tv.", $new_link);
                                                                                                                                                                                                                                $new_link2 =  "https://app." . $new_link1[1];
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                $new_link2 = base_url();
                                                                                                                                                                                                                            }

                                                                                                                                                                                                                            echo $new_link2 . 'uploads/tv_background/' . $picture_data->picture_src; ?>">
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
        <div class="fai hidden-xs d-flex zi-10 justify-content-between align-items-center"><button type="button" class="icon-md width-45 width-25-sm height-65 height-50-sm bg-soft-0 bg-soft-4-item bg-soft-dark3 bg-dark3-hover gray4 fs-25 fs-15-sm slow pointer-events-all" data-slider-control="#home-background-slider" data-slider-dir="prev"><i class="ti-angle-left"></i></button><button type="button" class="icon-md width-45 width-25-sm height-65 height-50-sm ml-auto bg-soft-0 bg-soft-4-item bg-soft-dark3 bg-dark3-hover gray4 fs-25 fs-15-sm slow pointer-events-all" data-slider-control="#home-background-slider" data-slider-dir="next"><i class="ti-angle-right"></i></button></div>
        <div class="fai d-flex align-items-center justify-content-center zi-5">
            <div class="row" id="img_ig">

            </div>
        </div>
    </div>
    </div>
    <script src="js/bs.js?v=<?= time(); ?>"></script>
    <script src="js/plugins.min.js?v=<?= time(); ?>"></script>
    <script src="js/functions.js?v=<?= time(); ?>"></script>
    <script>
        function onLoadFunction(e) {
            (document.getElementById("youtubeVideo") || !1) && youtubeVideo()
        }

        function youtubeVideo() {
            var e = document.getElementById("youtubeVideo") || !1;
            if (e) {
                var t = document.createElement("script");
                t.src = "https://www.youtube.com/iframe_api";
                var n, a = document.getElementsByTagName("script")[0];
                a.parentNode.insertBefore(t, a);
                var d = e.dataset.videoId,
                    i = e.getAttribute("data-startAt"),
                    u = e.getAttribute("data-endAt");
                onYouTubeIframeAPIReady = function() {
                    n = new YT.Player("youtubeVideo", {
                        videoId: d,
                        playerVars: {
                            autoplay: 1,
                            autohide: 1,
                            disablekb: 1,
                            controls: 0,
                            showinfo: 0,
                            modestbranding: 1,
                            loop: 1,
                            fs: 0,
                            rel: 0,
                            modestbranding: 0,
                            playsinline: 1,
                            enablejsapi: 1,
                            start: i,
                            end: u
                        },
                        events: {
                            onReady: function(e) {
                                e.target.mute(), e.target.playVideo(), e.target.setPlaybackQuality("highres"), setTimeout(function() {
                                    document.body.classList.add("youtube-video-ready")
                                }, 1200)
                            },
                            onStateChange: function(e) {
                                e.data === YT.PlayerState.PLAYING && document.getElementById("youtubeVideo").classList.add("loaded"), e.data === YT.PlayerState.ENDED && n.seekTo(i), e.data == YT.PlayerState.BUFFERING && e.target.setPlaybackQuality("highres")
                            }
                        }
                    });
                    var e = document.querySelector(".muteToggle") || !1;
                    e && e.addEventListener("click", function() {
                        n.isMuted() ? (n.unMute(), e.classList.add("active")) : (n.mute(), e.classList.remove("active"))
                    });
                    var t = document.querySelector(".playToggle") || !1;

                    function a() {
                        n.pauseVideo(), t && t.classList.add("active")
                    }

                    function o() {
                        n.playVideo(), t && t.classList.remove("active")
                    }
                    t && t.addEventListener("click", function() {
                        var e = n.getPlayerState();
                        1 == e && a(), 2 == e && o()
                    }), window.addEventListener("blur", a), window.addEventListener("focus", o)
                }
            }
        }
        window.addEventListener("load", onLoadFunction)
    </script>
    <script>
        // window.addEventListener("load", function() {
        //     const panelDev = document.createElement("div");
        //     panelDev.setAttribute("id", "panel-keeper");
        //     panelDev.innerHTML = '<div id="theme-panel" class="panel panel-get-ready hiding-panel font-secondary"><a href="https://www.templatemonster.com/authors/goldeyes/" class="panel-button"><i class="ti-shopping-cart"></i><div>Get a copy</div></a><a href="#" class="panel-button theme-options"><i class="ti-settings"></i><div>Theme Options</div></a><a href="#support" class="panel-button"><i class="ti-email"></i><div>Get support</div></a></div><div class="panel-backdrop panel-get-ready"></div><div id="panel-switcher" class="panel-switcher panel-get-ready"><div class="loader-circle"></div><div class="loader-line-mask"><div class="loader-line"></div></div></div><style type="text/css">.panel:not(.ready),.panel-switcher:not(.ready),.panel-backdrop:not(.ready){ visibility: hidden; }</style>'
        //     setTimeout(function() {
        //         document.body.appendChild(panelDev);
        //     }, 650);
        //     setTimeout(function() {
        //         const script = document.createElement('script');
        //         script.src = 'theme-panel/theme-panel.js';
        //         document.body.appendChild(script);
        //         const link = document.createElement('link');
        //         link.href = 'theme-panel/theme-panel.css';
        //         link.rel = 'stylesheet';
        //         document.head.appendChild(link);
        //     }, 700);
        //     setTimeout(function() {
        //         const getReadyItems = document.querySelectorAll('.panel-get-ready');
        //         for (const getReadyItem of getReadyItems) {
        //             getReadyItem.classList.add('ready');
        //             getReadyItem.classList.remove('panel-get-ready');
        //         }
        //     }, 1000);
        // });
        // const queryString = window.location.search;
        // const urlParams = new URLSearchParams(queryString);
        // const companies_id = urlParams.get('compa')
        // console.log(companies_id);
    </script>
    <script>
        var time_delay_ig;
        var IntervalTimer;

        $(document).ready(function() {
            localStorage.setItem("load_ig", "yes");
            loadTime();
            loadIG();

        });

        function loadTime() { 
            clearInterval();           
            $.ajax({
                url: serverUrl + "time_get/" + companies_id,
                method: "get",
                success: function(response) {
                    time_delay_ig = 0;
                    time_delay_ig = parseInt(response.data.tv_time);             
                   setInterval(loadIG, time_delay_ig  * 1000);
                }
            });
        }

        

        function loadIG() {
            if (localStorage.getItem("load_ig") == "yes") {
                $.ajax({
                    url: serverUrl + "ig_get/" + companies_id,
                    method: "get",
                    success: function(response) {
                        localStorage.setItem("load_ig", "no");
                        if ((response.data != null)) {
                            $('#img_ig').html("<div class='col'>" +
                                "<div class='box'>" +
                                "<h2>โต๊ะ " + response.data.table_name + "</h2>" +
                                "<img src='/uploads/customer_img/" + response.data.src_img + "' >" +
                                "</div></div>" +
                                "<div class='col'>" +
                                "<img src='/img/instragramicon.png'>" +
                                "<h1> IG : " + response.data.ig + "</h1>" +
                                "<p>" + response.data.message + "</p>" +
                                "</div>");

                            $.ajax({
                                url: serverUrl + "ig_status/" + response.data.id_ig,
                                method: "get",
                                success: function(response_update) {
                                    if (response_update.message = 'success') {
                                        localStorage.setItem("load_ig", "yes");
                                    }
                                },
                            });

                        } else {
                            localStorage.setItem("load_ig", "yes");                           
                            $('#img_ig').html("");
                        }
                    },
                });
            }

        }
    </script>
</body>

</html>