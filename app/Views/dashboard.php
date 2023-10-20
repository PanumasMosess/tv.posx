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
    <script>
        var serverUrl = '<?php echo base_url(); ?>'
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
                        <div class="parallax bg-bottom bg-soft-6" data-anchor-target="#home" data-bottom-top="transform:translate3d(0, -200px, 0px);" data-top-bottom="transform:translate3d(0px, 200px, 0px);" data-bg="<?php echo 'https://app.posx.co/uploads/tv_background/' . $picture_data->picture_src; ?>"></div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>
            <!-- <div class="slide has-parallax">
                <div class="parallax bg-bottom bg-soft-6 bg-soft-black" data-anchor-target="#home" data-bottom-top="transform:translate3d(0, -200px, 0px);" data-top-bottom="transform:translate3d(0px, 200px, 0px);" data-bg="images/background_07.jpg"></div>
            </div>
            <div class="slide has-parallax">
                <div class="parallax bg-bottom bg-soft-6 bg-soft-black" data-anchor-target="#home" data-bottom-top="transform:translate3d(0, -200px, 0px);" data-top-bottom="transform:translate3d(0px, 200px, 0px);" data-bg="images/background_08.jpg"></div>
            </div>
            <div class="slide has-parallax">
                <div class="parallax bg-bottom bg-soft-6 bg-soft-black bg-pattern" data-anchor-target="#home" data-bottom-top="transform:translate3d(0, -200px, 0px);" data-top-bottom="transform:translate3d(0px, 200px, 0px);" data-bg="images/background_09.jpg"></div>
            </div> -->
        </div>
        <div class="fai hidden-xs d-flex zi-10 justify-content-between align-items-center"><button type="button" class="icon-md width-45 width-25-sm height-65 height-50-sm bg-soft-0 bg-soft-4-item bg-soft-dark3 bg-dark3-hover gray4 fs-25 fs-15-sm slow pointer-events-all" data-slider-control="#home-background-slider" data-slider-dir="prev"><i class="ti-angle-left"></i></button><button type="button" class="icon-md width-45 width-25-sm height-65 height-50-sm ml-auto bg-soft-0 bg-soft-4-item bg-soft-dark3 bg-dark3-hover gray4 fs-25 fs-15-sm slow pointer-events-all" data-slider-control="#home-background-slider" data-slider-dir="next"><i class="ti-angle-right"></i></button></div>
        <div class="fai d-flex align-items-center justify-content-center zi-5">
            <!-- <div class="container pointer-events-all">
                <div class="row t-center">
                    <div class="col-12">
                        <div id="home-title-slider" class="custom-slider" data-slick='{"autoplay": true, "autoplaySpeed": 3000, "speed":700}'>
                            <div class="slide">
                                <h1 class="font-tertiary semibold uppercase fs-60 fs-30-sm lh-60 lh-35-sm">WE CREATE AWESOME THEMES!</h1>
                            </div>
                            <div class="slide">
                                <h1 class="font-tertiary semibold uppercase fs-60 fs-30-sm lh-60 lh-35-sm">WE ARE CREATIVE DESIGNERS</h1>
                            </div>
                            <div class="slide">
                                <h1 class="font-tertiary semibold uppercase fs-60 fs-30-sm lh-60 lh-35-sm">WE LOVE TO DESIGN</h1>
                            </div>
                        </div>
                        <h3 class="gray2 fs-22 fs-17-sm lh-30 lh-25-sm mt-10">Welcome to<span class="gray5">North!</span>We love to design. We are happy with<span class="gray5">you are!</span></h3>
                        <div class="d-flex justify-content-center mt-15"><button type="button" class="icon-md width-40 height-40 mx-5 circle bg-dark9 white opacity-3 opacity-10-hover fs-21 slow" data-slider-control="#home-title-slider" data-slider-dir="prev"><i class="ti-angle-left"></i></button><button type="button" class="icon-md width-40 height-40 mx-5 circle bg-dark9 white opacity-3 opacity-10-hover fs-21 slow" data-slider-control="#home-title-slider" data-slider-dir="next"><i class="ti-angle-right"></i></button></div>
                        <div class="mt-15"><a href="https://themeforest.net/item/north-one-page-parallax-theme/7943169" target="_blank" class="btn-sm gray3 fs-15 lh-12 bg-soft-5 mx-10 bg-soft-0-hover bg-soft-dark7 b-1 b-soft-white1 b-colored-hover uppercase medium font-secondary bg-colored-hover white slow"><span>Purchase</span></a><a href="#fashion" target="_blank" class="btn-sm gray3 fs-15 lh-12 bg-soft-5 mx-10 bg-soft-0-hover bg-soft-dark7 b-1 b-soft-white1 b-colored-hover uppercase medium font-secondary bg-colored-hover white slow"><span>Read More</span></a></div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
    <!-- <section id="testimonials-1512324" class="has-parallax pt-120 pb-110 bg-soft-85 bg-soft-dark3">
        <div data-video-id="mSLAF_DjiDU" data-startat="22" data-endat="220" id="youtubeVideo" class="youtube-video zi-0 pointer-events-none"></div>
        <div class="absolute fai zi-2 d-flex justify-content-center">
            <svg width="70px" height="35px" viewBox="0 0 70 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <polygon fill="#212121" transform="translate(35.000000, 17.500000) rotate(-180.000000) translate(-35.000000, -17.500000) " points="35 1.13686838e-13 70 35 -6.82121026e-13 35"></polygon>
                </g>
            </svg>
        </div>
        <div class="container-md t-center">
            <div class="fullwidth d-flex justify-content-center">
                <svg width="35px" height="28px" viewBox="0 0 35 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.703170422">
                        <path d="M2.96932021,4.00973937 C5.42379854,1.34882594 9.13788086,0 14.0066002,0 L15.7560502,0 L15.7560502,4.93169951 L14.3494924,5.21336096 C11.9527459,5.69271025 10.28552,6.6356638 9.39330056,8.01947874 C8.9277587,8.76497112 8.66372707,9.61855284 8.62704146,10.4966999 L14.0066002,10.4966999 C14.9727947,10.4966999 15.7560502,11.2799554 15.7560502,12.2461499 L15.7560502,24.4922998 C15.7560502,26.4219431 14.1867935,27.9911998 12.2571502,27.9911998 L1.76045027,27.9911998 C0.79425572,27.9911998 0.0110002824,27.2079443 0.0110002824,26.2417498 L0.0110002824,17.4944999 L0.0162486323,12.3878554 C0.000503582436,12.1936664 -0.331891915,7.59261294 2.96932021,4.00973937 Z M31.5011,27.9911998 L21.0044001,27.9911998 C20.0382056,27.9911998 19.2549501,27.2079443 19.2549501,26.2417498 L19.2549501,17.4944999 L19.2601985,12.3878554 C19.2444534,12.1936664 18.9120579,7.59261294 22.2132701,4.00973937 C24.6677484,1.34882594 28.3818307,0 33.25055,0 L35,0 L35,4.93169951 L33.5934422,5.21336096 C31.1966957,5.69271025 29.5294699,6.6356638 28.6372504,8.01947874 C28.1717085,8.76497112 27.9076769,9.61855284 27.8709913,10.4966999 L33.25055,10.4966999 C34.2167446,10.4966999 35,11.2799554 35,12.2461499 L35,24.4922998 C35,26.4219431 33.4307434,27.9911998 31.5011,27.9911998 Z" id="quote_testimonials" fill="#FFFFFF" fill-rule="nonzero"></path>
                    </g>
                </svg>
            </div>
            <div id="testimonials-slider-1512324" class="custom-slider fullwidth c-default mt-40" data-slick='{"dots": false, "speed":600, "arrows": false, "fade": true, "draggable":false, "slidesToShow": 1, "slidesToScroll": 1, "responsive":[{"breakpoint": 1350,"settings":{"slidesToShow": 1}},{"breakpoint": 1024,"settings":{"slidesToShow": 1}},{"breakpoint": 768,"settings":{"slidesToShow": 1}}]}'>
                <div class="px-30 pt-25 relative">
                    <q cite="http://quadra.goldeyestheme.com/" class="white fs-30 fs-24-sm medium lh-40">
                        Informed decision-making comes from a long tradition of guessing and then blaming<span class="colored">others </span>
                        for inadequate results.
                    </q>
                    <h5 class="fs-14 gray3 uppercase mt-25">SCOTT ADAMS</h5>
                </div>
                <div class="px-30 pt-25 relative">
                    <q cite="http://quadra.goldeyestheme.com/" class="white fs-30 fs-24-sm medium lh-40">
                        Engineers like to solve problems. If there are<span class="colored">no problems</span>
                        handily available, they will create their own problems.
                    </q>
                    <h5 class="fs-14 gray3 uppercase mt-25">SCOTT ADAMS</h5>
                </div>
                <div class="px-30 pt-25 relative">
                    <q cite="http://quadra.goldeyestheme.com/" class="white fs-30 fs-24-sm medium lh-40">
                        Remind people that profit is the difference between<span class="colored">revenue and expense.</span>
                        This makes you look smart.
                    </q>
                    <h5 class="fs-14 gray3 uppercase mt-25">SCOTT ADAMS</h5>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center mt-40">
                <button type="button" class="icon-md mx-5 bg-dark1 circle white bg-colored-hover" data-slider-control="#testimonials-slider-1512324" data-slider-dir="prev">
                    <i class="ti-angle-left"></i>
                </button>
                <button type="button" class="icon-md mx-5 bg-dark1 circle white bg-colored-hover" data-slider-control="#testimonials-slider-1512324" data-slider-dir="next">
                    <i class="ti-angle-right"></i>
                </button>
            </div>
        </div>
    </section> -->
    <script src="js/bs.js?v=<?= time(); ?>"></script>
    <script src="js/plugins.min.js?v=<?= time(); ?>"></script>
    <script src="js/functions.js?v=<?= time(); ?>"></script>
    <script>
        function onLoadFunction(e) {
            (document.getElementById("youtubeVideo") || !1) && youtubeVideo()

            console.log(window.location.host);
            console.log(location.hostname);
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
    </script>
</body>
</html>