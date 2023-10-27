var videoMaxTime = "00:30"; //minutes:seconds //video
var uploadMax = 31457280; //bytes  //30MP
var base64Video = "";

var upload_input = document.querySelector("#file-input"),
  form_upload = document.querySelector("#tv_form");

var myVideos = [];

window.URL = window.URL || window.webkitURL;

document.getElementById("file-input").onchange = checkFileDuration;

function getBase64(file) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    base64Video = reader.result;
    // console.log(base64Video);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}

function updateInfos() {
  var infos = document.getElementById("infos");
  infos.textContent = "";
  for (var i = 0; i < myVideos.length; i++) {
    infos.textContent +=
      myVideos[i].name + " duration: " + myVideos[i].duration + "\n";
  }
}

function secondsToTime(in_seconds) {
  var time = "";
  in_seconds = parseFloat(in_seconds.toFixed(2));

  var hours = Math.floor(in_seconds / 3600);
  var minutes = Math.floor((in_seconds - hours * 3600) / 60);
  var seconds = in_seconds - hours * 3600 - minutes * 60;
  //seconds = Math.floor( seconds );
  seconds = seconds.toFixed(0);

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  var time = minutes + ":" + seconds;

  return time;
}

function checkFileDuration() {
  var files = this.files;
  var fileSize = files[0].size;

  $("#pross").show();

  if (fileSize > uploadMax) {
    alert("ขนาดวีดีโอใหญ่เกินไป");
    $("#file-input").val("");
    $("#pross").hide();
  } else {
    myVideos.push(files[0]);

    var video = document.createElement("video");
    video.preload = "metadata";

    video.onloadedmetadata = function () {
      window.URL.revokeObjectURL(video.src);
      var duration = video.duration;
      myVideos[myVideos.length - 1].duration = duration;

      getTime = secondsToTime(duration);
      //   console.log(getTime);
      if (getTime > videoMaxTime) {
        alert("เพิ่ม 30 วินาทีเท่านั้น");
        $("#file-input").val("");
        $("#pross").hide();
      } else {
        updateInfos();
        getBase64(files[0]);
        $("#infos").show();
        $("#file-input").val("");
        $("#pross").hide();
      }
    };

    video.src = URL.createObjectURL(files[0]);
    $("#pross").hide();
  }
}

$("#tv_form").submit(function (e) {
  e.preventDefault();
  arr_send = [];
  var ig_ = $("#text_ig").val();
  var img_64bit = base64Video;
  var message_ = $("#message").val();

  var main_host = window.location.pathname;
  let searchParams_ = main_host.split("/upload_video/");
  let arr_table_compa = searchParams_[1].split("/");

  if (ig_ != "" && img_64bit != "") {
    arr_send = [
      {
        ig: ig_,
        img_64bit: img_64bit,
        message: message_,
        table: arr_table_compa[0],
        id_companies: arr_table_compa[1],
      },
    ];
    $("#pross").show();
    $.ajax({
      url: serverUrl + "upload_customer",
      method: "post",
      data: {
        data: arr_send,
      },
      cache: false,
      success: function (response) {
       
        if ((response.message = "upload_success")) {
          resetForm();
          $("#pross").hide();
        } else {
          resetForm();
          $("#pross").hide();
        }
      },
    });
  } else {
    alert("กรุณากรอกข้อมูล");
  }
});

function resetForm() {
  $("#infos").hide();
  form_upload.classList.remove("was-validated");
  $("#tv_form")[0].reset();
}
