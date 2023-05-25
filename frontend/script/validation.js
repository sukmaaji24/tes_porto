// $(document).ready(function () {
//   $("#registration").validate();
// });

// VALIDATION REGIST
$(document).ready(function () {
  jQuery.validator.addMethod("noSpace", function (value, element) {
    return value.indexOf(" ") < 0 && value != "";
  });

  jQuery.validator.addMethod("validate_email", function (value, element) {

    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {
      return true;
    } else {
      return false;
    }
  }, "Please enter a valid Email.");

  $("#registration").validate({
    rules: {
      username: {
        minlength: 3,
        maxlength: 20,
        required: true,
        noSpace: true,
      },
      email: {
        required: true,
        email: true,
        validate_email: true,
      },
      password: {
        minlength: 6,
        required: true,
      },
      confirmPassword: {
        required: true,
        equalTo: "#password", //for checking both passwords are same or not
      },
      agree: "required",
    },
    //'messages' user have to specify message as per rules
    messages: {
      username: {
        minlength: "Your username must consist of at least 3 characters",
        maxlength: "max 20",
        required: "Please enter a username",
        noSpace: "Please enter a username without space",
      },
      password: {
        required: " Please enter a password",
        minlength: " Your password must be consist of at least 6 characters",
      },
      confirmPassword: {
        required: " Please enter a password",
        equalTo: " Please enter the same password as above",
      },
      agree: "Please accept our policy",
    },

    submitHandler: function (form) {
      form.submit();
    },

    //
    // highlight: function (element) {
    //   $(element)
    //     .closest(".control-group")
    //     .removeClass("success")
    //     .addClass("error");
    // },
    // success: function (element) {
    //   element
    //     .text("Good!")
    //     .addClass("valid")
    //     .closest(".control-group")
    //     .removeClass("error")
    //     .addClass("success");
    // },
  });
});

// VALIDATION CHANGE PASSWORD
$(document).ready(function () {
  $("#changePass").validate({
    rules: {
      currentPassword: {
        minlength: 6,
        required: true,
      },
      newPassword: {
        minlength: 6,
        required: true,
      },
      confirmPassword: {
        required: true,
        equalTo: "#newPassword", //for checking both passwords are same or not
      },
    },

    //'messages' user have to specify message as per rules
    messages: {
      currentPassword: {
        required: " Please enter a password",
        minlength: " Your password must be consist of at least 6 characters",
      },
      newPassword: {
        required: " Please enter a password",
        minlength: " Your password must be consist of at least 6 characters",
      },
      confirmPassword: {
        required: " Please enter a password",
        equalTo: " Please enter the same password as above",
      },
    },
  });
});

// VALIDATION USER PROFIL
$(document).ready(function () {
  jQuery.validator.addMethod("noSpace", function (value, element) {
    return value.indexOf(" ") < 0 && value != "";
  });

  $("#dataUser").validate({
    rules: {
      username: {
        minlength: 3,
        required: true,
        noSpace: true,
      },
      fisrtName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      noTelp: {
        required: true,
      },
      radioGender: {
        required: true,
      },
      selectDate: {

        required: true,
      },
      selectMonth: {
        required: true,
      },
      selectYear: {
        required: true,
      },
      selectProvinsi: {
        required: true,
      },
      selectKota: {
        required: true,
      },
      selectKecamatan: {
        required: true,
      },
      selectKelurahan: {
        required: true,
      },
      kodePos: {
        required: true,
      },
      alamat: {
        required: true,
      },
    },
    //'messages' user have to specify message as per rules
    messages: {
      username: {
        minlength: "Your username must consist of at least 3 characters",
        required: "Please enter a username",
        noSpace: "Please enter a username without space",
      },
      fisrtName: {
        required: " Please enter a fisrt name",
      },
      lastName: {
        required: " Please enter a last name",
      },
      email: {
        required: "Please enter a email",
      },
      noTelp: {
        required: " Please enter a phone number",
      },
      radioGender: {
        required: "Please select a gender",
      },
      selectDate: {
        required: "",
      },
      selectMonth: {
        required: "",
      },
      selectYear: {
        required: "",
      },
      selectProvinsi: {
        required: " Please select provinsi",
      },
      selectKota: {
        required: " Please select kota",
      },
      selectKecamatan: {
        required: " Please select kecamatan",
      },
      selectKelurahan: {
        required: " Please select kelurahan",
      },
      kodePos: {
        required: " Please enter a kode pos",
      },
      alamat: {
        required: " Please enter a alamat",
      },
    },

    //
    // highlight: function (element) {
    //   $(element)
    //     .closest(".control-group")
    //     .removeClass("success")
    //     .addClass("error");
    // },
    // success: function (element) {
    //   element
    //     .text("Good!")
    //     .addClass("valid")
    //     .closest(".control-group")
    //     .removeClass("error")
    //     .addClass("success");
    // },
  });
});

// VALIDATE FORM LOGIN
$(document).ready(function () {
  jQuery.validator.addMethod("noSpace", function (value, element) {
    return value.indexOf(" ") < 0 && value != "";
  });

  $("#formLogin").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        minlength: 6,
        required: true,
      },
    },
    //'messages' user have to specify message as per rules
    messages: {
      email: {
        required: "Please enter a email",
      },
      password: {
        required: " Please enter a password",
        minlength: " Your password must be consist of at least 6 characters",
      },
    },

    submitHandler: function (form) {
      form.submit();
    },
  });
});

// VALIDATE FORM REDEEM
$(document).ready(function () {
  $("#dataUserRedeem").validate({
    rules: {
      fisrtName: {
        required: true,
      },
      lastName: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      noTelp: {
        required: true,
      },
      selectProvinsi: {
        required: true,
      },
      selectKota: {
        required: true,
      },
      selectKecamatan: {
        required: true,
      },
      selectKelurahan: {
        required: true,
      },
      kodePos: {
        required: true,
      },
      alamat: {
        required: true,
      },
    },
    //'messages' user have to specify message as per rules
    messages: {
      fisrtName: {
        required: " Please enter a fisrt name",
      },
      lastName: {
        required: " Please enter a last name",
      },
      email: {
        required: "Please enter a email",
      },
      noTelp: {
        required: " Please enter a phone number",
      },
      selectProvinsi: {
        required: " Please select provinsi",
      },
      selectKota: {
        required: " Please select kota",
      },
      selectKecamatan: {
        required: " Please select kecamatan",
      },
      selectKelurahan: {
        required: " Please select kelurahan",
      },
      kodePos: {
        required: " Please enter a kode pos",
      },
      alamat: {
        required: " Please enter a alamat",
      },
    },
  });
});

// VALIDATE FORM CREATE ARTIKEL USER
$(document).ready(function () {
  // $.validator.addMethod(
  //   "ck_editor",
  //   function () {
  //     var content_length = editorTextarea.getData().trim().length;
  //     return content_length > 0;
  //   },
  //   "Please insert content for the page."
  // );

  // VALIDATION SIZE
  $.validator.addMethod('filesize', function (value, element, param) {
    return this.optional(element) || (element.files[0].size <= param * 1000000)
  }, 'Image size max 1 MB');

  // VALIDATION WIDTH AND HEIGHT COVER
  $.validator.addMethod('dimention', function (value, element, param) {
    if (element.files.length == 0) {
      return true; // check here if file not added than return true for not check file dimention
    }
    var width = $(element).data('imageWidth');
    var height = $(element).data('imageHeight');
    if (width >= 720 && height >= 240) {
      return true;
    } else {
      return false;
    }
  }, 'Image dimention Min 720 x 240 pixels');

  $('#file-upload').change(function () {
    $('#file-upload').removeData('imageWidth');
    $('#file-upload').removeData('imageHeight');
    var file = this.files[0];
    var tmpImg = new Image();
    tmpImg.src = window.URL.createObjectURL(file);
    tmpImg.onload = function () {
      width = tmpImg.naturalWidth,
        height = tmpImg.naturalHeight;
      $('#file-upload').data('imageWidth', width);
      $('#file-upload').data('imageHeight', height);
    }
  });

  // VALIDATION WIDTH AND HEIGHT COVER
  $.validator.addMethod('dimentionThumbnail', function (value, element, param) {
    if (element.files.length == 0) {
      return true; // check here if file not added than return true for not check file dimention
    }
    var width = $(element).data('imageWidth');
    var height = $(element).data('imageHeight');
    if (width >= 424 && height >= 500) {
      return true;
    } else {
      return false;
    }
  }, 'Image dimention Min 424 x 500 pixels');

  $('#file-upload-thumbnail').change(function () {
    $('#file-upload-thumbnail').removeData('imageWidth');
    $('#file-upload-thumbnail').removeData('imageHeight');
    var file = this.files[0];
    var tmpImg = new Image();
    tmpImg.src = window.URL.createObjectURL(file);
    tmpImg.onload = function () {
      width = tmpImg.naturalWidth,
        height = tmpImg.naturalHeight;
      $('#file-upload-thumbnail').data('imageWidth', width);
      $('#file-upload-thumbnail').data('imageHeight', height);
    }
  });


  $("#createArtikelUser").validate({
    errorElement: "div",
    errorPlacement: function (error, element) {
      error.insertAfter(element.parent());
    },
    rules: {
      imageCover: {
        required: true,
        filesize: 1,
        extension: "jpg|jpeg|png",
        // minImageSize: [720, 240],
        dimention: [720, 240],

      },
      imageThumbnail: {
        required: true,
        filesize: 1,
        extension: "jpg|jpeg|png",
        dimentionThumbnail: [424, 500],
      },
      textInputArtikel: {
        required: true,
      },
      category: {
        required: true,
      },
      subcategory: {
        required: true,
      },
      // editor1: {
      //   required: function (textarea) {
      //     CKEDITOR.instances[textarea.id].updateElement();
      //     var editorcontent = textarea.value.replace(/<[^>]*>/gi, "");
      //     return editorcontent.length === 0;
      //   },
      // },
      // imageArtikelUser: {
      //   required: true,
      // },
    },
    //'messages' user have to specify message as per rules
    messages: {
      imageCover: {
        required: " Please insert cover image",
        // filesize: "Maximum size of image 1 MB",
        extension: "You're only allowed to upload jpg or png images.",
      },
      imageThumbnail: {
        required: " Please insert thumbnail image",
        extension: "You're only allowed to upload jpg or png images.",
      },
      textInputArtikel: {
        required: " Please enter a title",
      },
      category: {
        required: " Please enter a category",
      },
      subcategory: {
        required: " Please enter a subcategory",
      },
      editor1: {
        required: " Please enter artikel",
      },
      // imageArtikelUser: {
      //   required: "Please enter a email",
      // },
    },
  });
});

// VALIDATE FORM CREATE VIDEO USER
$(document).ready(function () {
  $("#formInputVideo").validate({
    errorElement: "div",
    errorPlacement: function (error, element) {
      error.insertAfter(element.parent());
    },
    rules: {
      inputImageLandscape: {
        required: true,
        extension: "jpg|jpeg|png",
      },
      landscapeVideoButton: {
        required: true,
        extension: "mp4|mkv",
      },
      textInputArtikel: {
        required: true,
      },
      editor: {
        required: true,
      },
      category: {
        required: true,
      },
      subcategory: {
        required: true,
      },
    },

    //'messages' user have to specify message as per rules
    messages: {
      inputImageLandscape: {
        required: " Please insert thumbnail image",
        extension: "You're only allowed to upload jpg or png images.",
      },
      landscapeVideoButton: {
        required: " Please insert a video",
        extension: "You're only allowed to upload mp4 video.",
      },
      textInputArtikel: {
        required: " Please enter a title",
      },
      category: {
        required: " Please enter a category",
      },
      subcategory: {
        required: " Please enter a subcategory",
      },
      editor: {
        required: " Please enter artikel",
      },
      // imageArtikelUser: {
      //   required: "Please enter a email",
      // },
    },
  });
});

// VALIDATE FORM CREATE VIDEO POTRAIT USER
$(document).ready(function () {
  $("#formInputVideoPotrait").validate({
    errorElement: "div",
    errorPlacement: function (error, element) {
      error.insertAfter(element.parent());
    },
    rules: {
      inputImagePotrait: {
        required: true,
        extension: "jpg|jpeg|png",
      },
      inputVideoPotrait: {
        required: true,
        extension: "mp4|mkv",
      },
      textInputArtikel: {
        required: true,
      },
      editor: {
        required: true,
      },
      category: {
        required: true,
      },
      subcategory: {
        required: true,
      },
    },

    //'messages' user have to specify message as per rules
    messages: {
      inputImagePotrait: {
        required: " Please insert thumbnail image",
        extension: "You're only allowed to upload jpg or png images.",
      },
      inputVideoPotrait: {
        required: " Please insert a video",
        extension: "You're only allowed to upload mp4 video.",
      },
      textInputArtikel: {
        required: " Please enter a title",
      },
      category: {
        required: " Please enter a category",
      },
      subcategory: {
        required: " Please enter a subcategory",
      },
      editor: {
        required: " Please enter artikel",
      },
      // imageArtikelUser: {
      //   required: "Please enter a email",
      // },
    },
  });
});


// VALIDATE FORM CONNECTOR

$(document).ready(function () {
  // jQuery.validator.addMethod("custom_number", function (value, element) {
  //   return this.optional(element) || value === "NA" ||
  //     value.match(/^[0-9,.\+-]*$/);
  // }, "Please enter a valid number, or 'NA'");

  // $.validator.addMethod('decimal', function (value, element) {
  //   return this.optional(element) || /^((\d+(\\.\d{0,2})?)|((\d*(\.\d{1,8}))))$/.test(value);
  // }, "Please enter a correct number, format 0.00");

  // jQuery.validator.addMethod("alphanumeric", function (value, element) {
  //   return this.optional(element) || /^\w+$/i.test(value);
  // }, "please input only numeric without symbol");

  // function formatNpwp(value) {
  //   if (typeof value === 'string') {
  //     return value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})(\d{3})(\d{3})/, '$1.$2.$3.$4-$5.$6');
  //   }
  // }

  $("#dataUserConnector").validate({
    errorPlacement: function (error, element) {
      if ($(element).is(":hidden")) {
        return false; // no message shown
      } else {
        error.insertAfter(element); // default message placement
      }
    },
    rules: {
      namaUSer: {
        required: true,
      },
      cardDetails: {
        required: true,
      },
      expDate: {
        required: true,
      },
      securityCode: {
        required: true,
      },
      noKtp: {
        minlength: 16,
        maxlength: 16,
        required: true,
      },
      noNpwp: {
        required: true,
        // formatNpw: true,
        alphanumeric: true,
      },
      bukutabpoto: {
        required: true,
        extension: "jpg|jpeg|png",
      },
      ktpPoto: {
        required: true,
        extension: "jpg|jpeg|png",
      },
      npwpPoto: {
        required: true,
        extension: "jpg|jpeg|png",
      },
      checkAgreement: "required",
    },
    //'messages' user have to specify message as per rules
    messages: {
      namaUSer: {
        required: "Please enter your name",
      },
      cardDetails: {
        required: "Please enter account number",
      },
      expDate: {
        required: "Please enter expiry date",
      },
      securityCode: {
        required: "Please enter a security code",
      },
      noKtp: {
        minlength: "Minimal 16 number",
        maxlength: "Maximal 16 number",
        required: " Please insert number of KTP",
      },
      noNpwp: {
        required: " Please insert number of NPWP",
        alphanumeric: "please input only numeric without symbol",
      },
      bukutabpoto: {
        required: " Please insert image Cover Buku Tabungan",
        extension: "You're only allowed to upload jpg or png images.",
      },
      ktpPoto: {
        required: " Please insert image KTP",
        extension: "You're only allowed to upload jpg or png images.",
      },
      npwpPoto: {
        required: " Please insert image NPWP",
        extension: "You're only allowed to upload jpg or png images.",
      },
      checkAgreement: "Please checklist the agreement",
    },
  });
});
