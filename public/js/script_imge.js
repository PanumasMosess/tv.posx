// vars
let result = document.querySelector(".result"),
  img_result = document.querySelector(".img-result"),
  img_w = document.querySelector(".img-w"),
  img_h = document.querySelector(".img-h"),
  options = document.querySelector(".options"),
  save = document.querySelector(".save"),
  cropped = document.querySelector(".cropped"),
  dwn = document.querySelector(".download"),
  upload = document.querySelector("#file-input"),
  form_upload = document.querySelector("#tv_form"),
  cropper = "",
  imgSrc = "";

// on change show image with crop options
upload.addEventListener("change", (e) => {
  result.classList.remove("hide");
  if (e.target.files.length) {
    // start file reader
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target.result) {
        // create new image
        let img = document.createElement("img");
        img.id = "image";
        img.src = e.target.result;
        // clean result before
        result.innerHTML = "";
        // append new image
        result.appendChild(img);
        // show save btn and options
        save.classList.remove("hide");
        // options.classList.remove('hide');
        // init cropper
        cropper = new Cropper(img);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

// save on click
save.addEventListener("click", (e) => {
  e.preventDefault();
  // get result to data uri
  imgSrc = cropper
    .getCroppedCanvas({
      width: img_w.value, // input value
    })
    .toDataURL();
  // remove hide class of img
  cropped.classList.remove("hide");
  result.classList.add("hide");
  img_result.classList.remove("hide");
  // show image cropped
  cropped.src = imgSrc;
  //   console.log(imgSrc);
  //   dwn.classList.remove('hide');
  //   dwn.download = 'imagename.png';
  //   dwn.setAttribute('href', imgSrc);
});

$("#tv_form").submit(function (e) {
  e.preventDefault();
  arr_send = [];
  var ig_ = $("#text_ig").val();
  var img_64bit = imgSrc;
  var message_ = $("#message").val();

  if (ig_ != "" && img_64bit != "") {
    arr_send = [
      {
        ig: ig_,
        img_64bit: img_64bit,
        message: message_,
        table: "",
        id_companies: "",
      },
    ];

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
        } else {
        }
      },
    });
  } else {
    alert("กรุณากรอกข้อมูล");
  }
});

function resetForm() {
  img_result.classList.add("hide");
  form_upload.classList.remove("was-validated");
  $("#tv_form")[0].reset();
}
