// disable right click

// $(document).bind("contextmenu", function (e) {
//   return false;
// });

// disable inspect with short cut
// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//     return false;
//   }
// };

$('a').click(function (e) {
  if (e.ctrlKey) {
    return false;
  }
});

$(document).ready(function () {
  var count = 0;
  var myInterval;

  // Active
  startTimer();
  window.addEventListener('focus', startTimer);
  // Inactive
  window.addEventListener('blur', stopTimer);

  function timerHandler() {
    count++;
    if (count == 10) {
      $("#myModalReward").modal("show");
    }

    // document.getElementById("seconds").innerHTML = count;
    // console.log(count);
  }


  // Start timer
  function startTimer() {
    myInterval = window.setInterval(timerHandler, 1000);
  };

  // Stop timer
  function stopTimer() {
    count = count;
    window.clearInterval(myInterval);
  }

  $(window).focusout(function () {
    count = 0;
    console.log("focusout");
  });

  $(window).blur(function (e) {
    // $(window).load();
    count = 0;
    window.clearInterval(myInterval);
  });

  // if ($(window).blur(function (e) {
  //   count = count;
  //   window.clearInterval(myInterval);
  // })) {
  //   count = count;
  //   window.clearInterval(myInterval);
  // }
  // else {
  //   count++;
  //   window.setInterval(timerHandler, 1000);
  // }



  // var sec = 0;
  // function addSec(sec) {
  //   sec = sec + 1;
  //   console.log(sec);
  // }

  // var modalCoin = setInterval(() => {
  //   $("#myModalReward").modal("show");
  // }, 1 * 10000);
  // window.setInterval(addSec(sec), 1000);

  // setInterval(() => {
  //   addSec(sec);
  //   if (sec == 10) {
  //     $("#myModalReward").modal("show");
  //   }
  //   console.log(sec);
  // }, 1 * 10000);

  // $(window).focus(function () {
  //   console.log("bind");
  // });

  // $(window).blur(function () {
  //   console.log("blur");
  // });


});


// for 1 slide show
$(".single-item").slick();
// $(document).ready(function () {
//   $(".single-item").slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: false,

//     // responsive: [
//     //   {
//     //     breakpoint: 768,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 576,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 480,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 320,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     // ],
//   });
// });

$("#modalProduct").on("shown.bs.modal", function (e) {
  $(".single-item").slick("setPosition");
  $(".single-item").addClass("display-on");
});

$("#productSingle").show(function () {
  $(".single-item").slick("setPosition");
  $(".single-item").addClass("display-on");
});

// for 3 slide show
$(".multiple-items").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // },
    // {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // }
  ],
});

// for 2 slide show
$(".two-items").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // },
    // {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // }
  ],
});

// for 4 slide show
$(".four-item").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // },
    // {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // }
  ],
});
$(".four-items").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // },
    // {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // }
  ],
});

// for variable slide
$(".variable-width").slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  // centerMode: true,
  variableWidth: true,
});

$(".variable-width-2").slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  // centerMode: true,
  variableWidth: true,
  // focusOnSelect: true,
});

$(".variable-width-3").slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  touchMove: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // centerMode: true,
  variableWidth: true,
  // focusOnSelect: true,
});

$(".variable-width-5").slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  touchMove: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  // centerMode: true,
  variableWidth: true,
  // focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".variable-width-7").slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  // centerMode: true,
  variableWidth: true,
  // focusOnSelect: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

// for variable slide
$(".variable-width-mobile").slick({
  dots: false,
  infinite: false,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  // centerMode: true,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
  ],
});

// for 6 slide show
$(".multiple-items6").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    // {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // }
  ],
});
$(".multiple-items7").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // },
    // {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // }
  ],
});

// for 3 slide show
$(".multiple-items-lives").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  variableWidth: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // {
    //     breakpoint: 600,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // },
    // {
    //     breakpoint: 480,
    //     settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 1
    //     }
    // }
  ],
});

// BUTTON TOOLTIPS CHALLENGE
$(document).ready(function () {
  $(".btn-tooltips-chal").click(function () {
    $("#boxChart").addClass("display-off");
    $("#boxTips").removeClass("display-off");
    $(".btn-tooltips-chal").addClass("display-off");
    $(".btn-close").removeClass("display-off");
    $("#dailyTitle").text(" Daily Challenges Information");
  });
  $(".btn-close").click(function () {
    $("#boxChart").removeClass("display-off");
    $("#boxTips").addClass("display-off");
    $(".btn-tooltips-chal").removeClass("display-off");
    $(".btn-close").addClass("display-off");
    $("#dailyTitle").text(" Daily Challenges");
  });
});

// BUTTON FLOAT CREATE ARTICLE
$(document).ready(function () {
  $(".btn-float-create-article").click(function () {
    $(".btn-float-create-article").toggleClass("btn-float-create-article-transform");
    $("#articleFloat").toggleClass("btn-article-float-on");
    $("#videoFloat").toggleClass("btn-video-float-on");
    $("#threadFloat").toggleClass("btn-thread-float-on");
  });

  // ARTIKEL
  $("#articleFloat").mouseenter(function () {
    $("#articleFloat").addClass("btn-article-float-mouseover");
    $("#articleFloat").addClass("btn-float-blue");
    $("#artikelTextbtn").fadeIn();
    $("#artikelTextbtn").removeClass("display-off");
    $("#artikelBlackIc").addClass("display-off");
    $("#artikelWhiteIc").removeClass("display-off");

  });
  $("#articleFloat").mouseleave(function () {
    $("#articleFloat").removeClass("btn-article-float-mouseover");
    $("#articleFloat").removeClass("btn-float-blue");
    $("#artikelTextbtn").addClass("display-off");
    $("#artikelTextbtn").fadeOut();
    $("#artikelBlackIc").removeClass("display-off");
    $("#artikelWhiteIc").addClass("display-off");
  });
  // END ARTIKEL

  // VIDEO
  $("#videoFloat").mouseenter(function () {
    $("#videoFloat").addClass("btn-video-float-mouseover");
    $("#videoFloat").addClass("btn-float-blue");
    $("#videoTextbtn").fadeIn();
    $("#videoTextbtn").removeClass("display-off");
    $("#videoBlackIc").addClass("display-off");
    $("#videoWhiteIc").removeClass("display-off");
  });
  $("#videoFloat").mouseleave(function () {
    $("#videoFloat").removeClass("btn-video-float-mouseover");
    $("#videoFloat").removeClass("btn-float-blue");
    $("#videoTextbtn").addClass("display-off");
    $("#videoTextbtn").fadeOut();
    $("#videoBlackIc").removeClass("display-off");
    $("#videoWhiteIc").addClass("display-off");
  });
  // END VIDEO

  // THREAD
  $("#threadFloat").mouseenter(function () {
    $("#threadFloat").addClass("btn-thread-float-mouseover");
    $("#threadFloat").addClass("btn-float-blue");
    $("#threadTextbtn").fadeIn();
    $("#threadTextbtn").removeClass("display-off");
    $("#threadBlackIc").addClass("display-off");
    $("#threadWhiteIc").removeClass("display-off");
  });
  $("#threadFloat").mouseleave(function () {
    $("#threadFloat").removeClass("btn-thread-float-mouseover");
    $("#threadFloat").removeClass("btn-float-blue");
    $("#threadTextbtn").addClass("display-off");
    $("#threadTextbtn").fadeOut();
    $("#threadBlackIc").removeClass("display-off");
    $("#threadWhiteIc").addClass("display-off");
  });
  // END THREAD
});
// END BUTTON FLOAT CREATE ARTICLE

// BUTTON ARROW NOTIF
$(document).ready(function () {
  setTimeout(() => {
    $('.notif-register-mobile').hide();
  }, 20000);
  $('.btn-arrow-reg').click(function () {
    $('#imgArrowReg').toggleClass('arrow-transform-notif');
    $('.text-notif-regsiter').toggleClass('display-off');
    // $('.btn-float-create-article').toggleClass('btn-float-create-article-notif');
    // $('.btn-article-float').toggleClass('btn-article-float-notif');
    // $('#articleFloat').toggleClass('btn-article-float-on-notif');
    // $('#videoFloat').toggleClass('btn-video-float-on-notif');
    // $('#threadFloat').toggleClass('btn-thread-float-on-notif');
  });
  $('#btnCloseNotif').click(function () {
    $('.notif-register-mobile').hide();
  });
  // $('.btn-float-create-article').click(function () {
  //   $('#articleFloat').toggleClass('btn-article-float-on-notif');
  //   $('#videoFloat').toggleClass('btn-video-float-on-notif');
  //   $('#threadFloat').toggleClass('btn-thread-float-on-notif');
  // });
});

// BUTTON NOTIF DESKTOP NEW
$(document).ready(function () {
  $("#btnCloseNotifNew").click(function () {
    $(".notif-register-desktop").hide();
  });
});

// BUTTON CLOSE NOTIF ATAS NAV
$(document).ready(function () {
  $(".nav-notif").show(function () {
    $("nav").addClass("nav-notif-active");
    $("body").css("margin-top", "93px");
    $(".bg-header-category").addClass("banner-article-nav-active");
    $(".bg-header-home").addClass("banner-article-nav-active");

  });
  $(".btn-close-notif-nav").click(function () {
    $(".nav-notif").hide();
    $("body").removeAttr("style");
    $(".bg-header-category").removeClass("banner-article-nav-active");
    $(".bg-header-home").removeClass("banner-article-nav-active");
    $("nav").removeClass("nav-notif-active");
  });
});

// button up scroll
const btn = $(".btn-up");
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "500");
});

// Button Up Float
const btnFloat = $(".btn-up-float");
btnFloat.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "500");
});

$(window).scroll(function () {
  if (
    $(window).scrollTop() >= 150
    // $("header").offset().top + $("header").outerHeight() - window.innerHeight
  ) {
    $(".btn-up-float").fadeIn();
  } else {
    $(".btn-up-float").fadeOut();
  }
});

// color reward
// $(window).bind("scroll", function () {
//   if (
//     $(window).scrollTop() >=
//     $("main").offset().top + $("main").outerHeight() - window.innerHeight
//   ) {
//     $("#btn-reward")
//       .removeClass("coin-artikel")
//       .addClass("coin-artikel coin-on");
//     // alert('test reward')
//     var btnClass = $("#btn-reward").prop("class");
//     if (btnClass == "coin-artikel coin-on") {
//       $("#myModal").modal("show");
//     }
//     return;
//   }
// });

// Delay Time Coin
var claimDelay = false;
setInterval(function () {
  claimDelay = true;
}, 10000);

// // SCREEEN TIME 10 MINUTES
// let date = new Date();
// let sec = date.getMinutes();
// // let sec = date.getMinutes();
// setTimeout(() => {
//   setInterval(() => {
//     $("#myModalReward").modal("show");
//   }, 1 * 60000);
// }, (1 - sec) * 60000);

// VIDEO STREAMING KOIN
// setTimeout(() => {
//  , (1 - sec) * 60000);

// setInterval(() => {
//   $("#myModalReward").modal("show");
// }, 1 * 60000);



// color reward new
$(window).bind("scroll", function () {
  var artread = $('#artikel-read');
  if (
    $(window).scrollTop() >=
    $("#artikel-read").offset().top +
    $("#artikel-read").outerHeight() -
    window.innerHeight &&
    claimDelay == true
  ) {
    $("#btn-reward")
      .removeClass("section-coin-artikel")
      .addClass("section-coin-artikel coin-on-next");
    // alert('test reward')
    var btnClass = $("#btn-reward").prop("class");
    if (btnClass == "section-coin-artikel coin-on-next") {
      $("#myModal").modal("show");
    }
    return;
  }
});

// view more
$(document).ready(function () {
  // hide all artikel
  $(".artikel-wrap .down-artikel").hide();

  //   menampilkan 3 data pertama
  $(".artikel-wrap").children(".down-artikel:lt(6)").show();

  //   menampilkan data dengan button
  $(".btn-view-more").click(function () {
    $(".artikel-wrap").children(".down-artikel:hidden:lt(6)").slideDown();

    if ($(".down-artikel:hidden").length == 0) {
      $(".btn-view-more").fadeOut();
    }
  });
  if ($(".down-artikel:hidden").length == 0) {
    $(".btn-view-more").fadeOut();
  }
});

// VIEW MORE KATALOG
$(document).ready(function () {
  // hide all artikel
  $(".content-wrap #contentInspiring").hide();
  //   menampilkan 3 data pertama
  $(".content-wrap").children("#contentInspiring:lt(3)").show();
});

$(document).ready(function () {
  // hide all artikel
  $(".content-wrap #contentPopular").hide();
  //   menampilkan 3 data pertama
  $(".content-wrap").children("#contentPopular:lt(3)").show();
});

$(document).ready(function () {
  // hide all artikel
  $(".content-wrap #contentWanted").hide();
  //   menampilkan 3 data pertama
  $(".content-wrap").children("#contentWanted:lt(3)").show();
});
// END VIEW MORE KATALOG

// VIEW MORE KATALOG PRODUK REDEEM
$(document).ready(function () {
  // hide all artikel
  $(".redeem-wrap .content-katalog").hide();

  //   menampilkan 3 data pertama
  $(".redeem-wrap").children(".content-katalog:lt(6)").show();

  //   menampilkan data dengan button
  $(".btn-view-more-redd").click(function () {
    $(".redeem-wrap").children(".content-katalog:hidden:lt(6)").slideDown();

    if ($(".content-katalog:hidden").length == 0) {
      $(".btn-view-more-redd").fadeOut();
    }
  });
  if ($(".content-katalog:hidden").length == 0) {
    $(".btn-view-more-redd").fadeOut();
  }
});
// END MORE KATALOG PRODUK REDEEM

// VIEW MORE VIDEO LIVE LITTLE
// content day1
$(document).ready(function () {
  // hide all artikel
  $(".live-wrap .live-little-video1").hide();

  //   menampilkan 3 data pertama
  $(".live-wrap").children(".live-little-video1:lt(3)").show();

  //   menampilkan data dengan button
  $("#viewDay1").click(function () {
    $(".live-wrap").children(".live-little-video1:hidden:lt(3)").slideDown();

    if ($(".live-little-video1:hidden").length == 0) {
      $("#viewDay1").fadeOut();
    }
  });
  if ($(".live-little-video1:hidden").length == 0) {
    $("#viewDay1").fadeOut();
  }
});
// content day2
$(document).ready(function () {
  // hide all artikel
  $(".live-wrap .live-little-video2").hide();

  //   menampilkan 3 data pertama
  $(".live-wrap").children(".live-little-video2:lt(3)").show();

  //   menampilkan data dengan button
  $("#viewDay2").click(function () {
    $(".live-wrap").children(".live-little-video2:hidden:lt(3)").slideDown();

    if ($(".live-little-video2:hidden").length == 0) {
      $("#viewDay2").fadeOut();
    }
  });
  if ($(".live-little-video2:hidden").length == 0) {
    $("#viewDay2").fadeOut();
  }
});
// content day3
$(document).ready(function () {
  // hide all artikel
  $(".live-wrap .live-little-video3").hide();

  //   menampilkan 3 data pertama
  $(".live-wrap").children(".live-little-video3:lt(3)").show();

  //   menampilkan data dengan button
  $("#viewDay3").click(function () {
    $(".live-wrap").children(".live-little-video3:hidden:lt(3)").slideDown();

    if ($(".live-little-video3:hidden").length == 0) {
      $("#viewDay3").fadeOut();
    }
  });
  if ($(".live-little-video3:hidden").length == 0) {
    $("#viewDay3").fadeOut();
  }
});
// content day4
$(document).ready(function () {
  // hide all artikel
  $(".live-wrap .live-little-video4").hide();

  //   menampilkan 3 data pertama
  $(".live-wrap").children(".live-little-video4:lt(3)").show();

  //   menampilkan data dengan button
  $("#viewDay4").click(function () {
    $(".live-wrap").children(".live-little-video4:hidden:lt(3)").slideDown();

    if ($(".live-little-video4:hidden").length == 0) {
      $("#viewDay4").fadeOut();
    }
  });
  if ($(".live-little-video4:hidden").length == 0) {
    $("#viewDay4").fadeOut();
  }
});
// content day5
$(document).ready(function () {
  // hide all artikel
  $(".live-wrap .live-little-video5").hide();

  //   menampilkan 3 data pertama
  $(".live-wrap").children(".live-little-video5:lt(3)").show();

  //   menampilkan data dengan button
  $("#viewDay5").click(function () {
    $(".live-wrap").children(".live-little-video5:hidden:lt(3)").slideDown();

    if ($(".live-little-video5:hidden").length == 0) {
      $("#viewDay5").fadeOut();
    }
  });
  if ($(".live-little-video5:hidden").length == 0) {
    $("#viewDay5").fadeOut();
  }
});
// content day6
$(document).ready(function () {
  // hide all artikel
  $(".live-wrap .live-little-video6").hide();

  //   menampilkan 3 data pertama
  $(".live-wrap").children(".live-little-video6:lt(3)").show();

  //   menampilkan data dengan button
  $("#viewDay6").click(function () {
    $(".live-wrap").children(".live-little-video6:hidden:lt(3)").slideDown();

    if ($(".live-little-video6:hidden").length == 0) {
      $("#viewDay6").fadeOut();
    }
  });
  if ($(".live-little-video6:hidden").length == 0) {
    $("#viewDay6").fadeOut();
  }
});
// content day7
$(document).ready(function () {
  // hide all artikel
  $(".live-wrap .live-little-video7").hide();

  //   menampilkan 3 data pertama
  $(".live-wrap").children(".live-little-video7:lt(3)").show();

  //   menampilkan data dengan button
  $("#viewDay7").click(function () {
    $(".live-wrap").children(".live-little-video7:hidden:lt(3)").slideDown();

    if ($(".live-little-video7:hidden").length == 0) {
      $("#viewDay7").fadeOut();
    }
  });
  if ($(".live-little-video7:hidden").length == 0) {
    $("#viewDay7").fadeOut();
  }
})
// END MORE VIDEO LIVE LITTLE


// REMOVE HEIGHT IMG ARTIKEL
$(document).ready(function () {
  $(".section-artikel p img").removeAttr("height");
  $(".section-artikel p img").removeAttr("width");
});

// VIEW MORE POTRAIT VIDEO
$(document).ready(function () {
  // hide all artikel
  $(".potrait-wrap .potrait-down").hide();
  //   menampilkan 6 data pertama
  $(".potrait-wrap").children(".potrait-down:lt(6)").show();
  //   menampilkan data dengan button
  $(".btn-view-more-potrait").click(function () {
    $(".potrait-wrap").children(".potrait-down:hidden:lt(6)").slideDown();
    if ($(".potrait-down:hidden").length == 0) {
      $(".btn-view-more-potrait").fadeOut();
    }
  });
  if ($(".potrait-down:hidden").length == 0) {
    $(".btn-view-more-potrait").fadeOut();
  }
});

// VIEW MORE LANDSCAPE VIDEO
$(document).ready(function () {
  // hide all artikel
  $(".potrait-wrap .potrait-down").hide();
  //   menampilkan 6 data pertama
  $(".potrait-wrap").children(".potrait-down:lt(6)").show();
  //   menampilkan data dengan button
  $(".btn-view-more-potrait").click(function () {
    $(".potrait-wrap").children(".potrait-down:hidden:lt(6)").slideDown();
    if ($(".potrait-down:hidden").length == 0) {
      $(".btn-view-more-potrait").fadeOut();
    }
  });
  if ($(".potrait-down:hidden").length == 0) {
    $(".btn-view-more-potrait").fadeOut();
  }
});

// VIEW MORE LANDSCAPE VIDEO
$(document).ready(function () {
  // hide all artikel
  $(".landscape-wrap .landscape-down").hide();
  //   menampilkan 6 data pertama
  $(".landscape-wrap").children(".landscape-down:lt(6)").show();
  //   menampilkan data dengan button
  $(".btn-view-more-landscape").click(function () {
    $(".landscape-wrap").children(".landscape-down:hidden:lt(6)").slideDown();
    if ($(".landscape-down:hidden").length == 0) {
      $(".btn-view-more-landscape").fadeOut();
    }
  });
  if ($(".landscape-down:hidden").length == 0) {
    $(".btn-view-more-landscape").fadeOut();
  }
});

// view more exchange table 
$(document).ready(function () {
  // hide all artikel
  $(".tbody-exchange .tr-exchange").hide();

  //   menampilkan 10 data pertama
  $(".tbody-exchange").children(".tr-exchange:lt(10)").show();

  //   menampilkan data dengan button
  $("#viewExch").click(function () {
    $(".tbody-exchange").children(".tr-exchange:hidden:lt(10)").slideDown();

    if ($(".tr-exchange:hidden").length == 0) {
      $("#viewExch").fadeOut();
    }
  });
  if ($(".tr-exchange:hidden").length == 0) {
    $("#viewExch").fadeOut();
  }
});

// view more earn table 
$(document).ready(function () {
  // hide all artikel
  $(".tbody-earn .tr-earn").hide();

  //   menampilkan 10 data pertama
  $(".tbody-earn").children(".tr-earn:lt(10)").show();

  //   menampilkan data dengan button
  $("#viewEarn").click(function () {
    $(".tbody-earn").children(".tr-earn:hidden:lt(10)").slideDown();

    if ($(".tr-earn:hidden").length == 0) {
      $("#viewEarn").fadeOut();
    }
  });
  if ($(".tr-earn:hidden").length == 0) {
    $("#viewEarn").fadeOut();
  }
});

// view more connector table 
$(document).ready(function () {
  // hide all artikel
  $(".connec-tbody .connec-tr").hide();

  //   menampilkan 10 data pertama
  $(".connec-tbody").children(".connec-tr:lt(10)").show();

  //   menampilkan data dengan button
  $("#viewConnc").click(function () {
    $(".connec-tbody").children(".connec-tr:hidden:lt(10)").slideDown();

    if ($(".connec-tr:hidden").length == 0) {
      $("#viewConnc").fadeOut();
    }
  });
  if ($(".connec-tr:hidden").length == 0) {
    $("#viewConnc").fadeOut();
  }
});

// view more leaderboard 
$(document).ready(function () {
  // hide all artikel
  $(".tbody-leader .tr-body").hide();

  //   menampilkan 10 data pertama
  $(".tbody-leader").children(".tr-body:lt(10)").show();

  //   menampilkan data dengan button
  $("#viewLeader").click(function () {
    $(".tbody-leader").children(".tr-body:hidden:lt(10)").slideDown();

    if ($(".tr-body:hidden").length == 0) {
      $("#viewLeader").fadeOut();
    }
  });
  if ($(".tr-body:hidden").length == 0) {
    $("#viewLeader").fadeOut();
  }
});



// Dropdown smooth
$(".drop-profile").click(function () {
  $(this).next(".dropdown-menu").slideToggle(500),
    jQuery(this).children(".dropdown-menu").stop().slideDown(200);
});

// SHOW HIDE COIN INFO
$(document).ready(function () {
  $("#btnCoin1").hover(function () {
    $(".section-info-coin").show();
    $(".section-info-coin3").hide();
    $(".section-info-coin4").hide();
  });
  $("body").click(function () {
    $(".section-info-coin").hide();
  });
  $("#btnClaim1").click(function () {
    $(".section-info-coin").show();
  });
});
$(document).ready(function () {
  $("#btnCoin2").hover(function () {
    $(".section-info-coin3").show();
    $(".section-info-coin").hide();
    $(".section-info-coin4").hide();
  });
  $("body").click(function () {
    $(".section-info-coin3").hide();
  });
  $("#btnClaim1").click(function () {
    $(".section-info-coin3").show();
  });
});
$(document).ready(function () {
  $("#btnCoin3").hover(function () {
    $(".section-info-coin4").show();
    $(".section-info-coin3").hide();
    $(".section-info-coin").hide();
  });
  $("body").click(function () {
    $(".section-info-coin4").hide();
  });
  $("#btnClaim1").click(function () {
    $(".section-info-coin4").show();
  });
});

// SHOW HIDE COIN INFO MOBILE
$(document).ready(function () {
  $("#btnCoinMobile1").click(function () {
    $(".section-info-coin-mobile").show();
    $(".section-info-coin-mobile2").hide();
    $(".section-info-coin-mobile3").hide();
  });
  $(".section-info-coin-mobile").click(function () {
    $(".section-info-coin-mobile").hide();
  });
  // $("#btnClaim1").click(function () {
  //   $(".section-info-coin-mobile").show();
  // });
});
$(document).ready(function () {
  $("#btnCoinMobile2").click(function () {
    $(".section-info-coin-mobile").hide();
    $(".section-info-coin-mobile2").show();
    $(".section-info-coin-mobile3").hide();
  });
  $(".section-info-coin-mobile2").click(function () {
    $(".section-info-coin-mobile2").hide();
  });
  // $("#btnClaim1").click(function () {
  //   $(".section-info-coin-mobile").show();
  // });
});
$(document).ready(function () {
  $("#btnCoinMobile3").click(function () {
    $(".section-info-coin-mobile").hide();
    $(".section-info-coin-mobile2").hide();
    $(".section-info-coin-mobile3").show();
  });
  $(".section-info-coin-mobile3").click(function () {
    $(".section-info-coin-mobile3").hide();
  });
  // $("#btnClaim1").click(function () {
  //   $(".section-info-coin-mobile").show();
  // });
});


// BUTTON TAB MEMBERSHIP
$(document).ready(function () {
  $("#basicButton").click(function () {
    $("#basicButton").addClass("basic-class")
    $("#silverButton").removeClass("silver-class")
    $("#blueButton").removeClass("blue-class")
    $("#goldButton").removeClass("gold-class")
  });
  $("#silverButton").click(function () {
    $("#silverButton").addClass("silver-class")
    $("#basicButton").removeClass("basic-class")
    $("#blueButton").removeClass("blue-class")
    $("#goldButton").removeClass("gold-class")
  });
  $("#blueButton").click(function () {
    $("#blueButton").addClass("blue-class")
    $("#basicButton").removeClass("basic-class")
    $("#silverButton").removeClass("silver-class")
    $("#goldButton").removeClass("gold-class")
  });
  $("#goldButton").click(function () {
    $("#goldButton").addClass("gold-class")
    $("#basicButton").removeClass("basic-class")
    $("#silverButton").removeClass("silver-class")
    $("#blueButton").removeClass("blue-class")
  });
});


// BUTTON TAB ABOUT COIN
$(document).ready(function () {
  $("#btnWhat").click(function () {
    $(".what-coin").show();
    $(".coin-for").hide();
    $(".get-coin").hide();
    $("#btnWhat").removeClass("bg-tab-off");
    $("#btnWhat").addClass("bg-tab");
    $("#btnWhat").removeClass("hide-bg");
    $("#btnFor").removeClass("bg-tab");
    $("#btnFor").addClass("bg-tab-off");
    $("#btnGet").removeClass("bg-tab");
    $("#btnGet").addClass("bg-tab-off");
  });
  $("#btnFor").click(function () {
    $(".what-coin").hide();
    $(".coin-for").show();
    $(".get-coin").hide();
    $("#btnWhat").removeClass("bg-tab");
    $("#btnWhat").addClass("hide-bg");
    $("#btnWhat").addClass("bg-tab-off");
    $("#btnFor").removeClass("bg-tab-off");
    $("#btnFor").addClass("bg-tab");
    $("#btnFor").addClass("btnforBg");
    $("#btnGet").removeClass("bg-tab");
    $("#btnGet").addClass("bg-tab-off");
  });
  $("#btnGet").click(function () {
    $(".what-coin").hide();
    $(".coin-for").hide();
    $(".get-coin").show();
    $("#btnWhat").addClass("hide-bg");
    $("#btnWhat").removeClass("bg-tab");
    $("#btnWhat").addClass("bg-tab-off");
    $("#btnFor").removeClass("bg-tab");
    $("#btnFor").addClass("bg-tab-off");
    $("#btnGet").removeClass("bg-tab-off");
    $("#btnGet").addClass("bg-tab");
    $("#btnGet").addClass("btngetBg");
  });
});

// BUTTON LOVE KATALOG
$(document).ready(function () {
  $("#love").click(function () {
    $("#loveWhite").addClass("love-off");
    $("#loveRed").removeClass("love-off");
    $("#loveRed").addClass("love-on");
  });
  $("#lovePopular").click(function () {
    $("#loveWhitePopular").addClass("love-off");
    $("#loveRedPopular").removeClass("love-off");
    $("#loveRedPopular").addClass("love-on");
  });
  $("#loveWanted").click(function () {
    $("#loveWhiteWanted").addClass("love-off");
    $("#loveRedWanted").removeClass("love-off");
    $("#loveRedWanted").addClass("love-on");
  });
});

$(document).ready(function () {
  $("#loveMobile").click(function () {
    $("#loveWhiteMobile").addClass("love-off");
    $("#loveRedMobile").removeClass("love-off");
    $("#loveRedMobile").addClass("love-on");
  });
  $("#lovePopularMobile").click(function () {
    $("#loveWhitePopularMobile").addClass("love-off");
    $("#loveRedPopularMobile").removeClass("love-off");
    $("#loveRedPopularMobile").addClass("love-on");
  });
  $("#loveWantedMobile").click(function () {
    $("#loveWhiteWantedMobile").addClass("love-off");
    $("#loveRedWantedMobile").removeClass("love-off");
    $("#loveRedWantedMobile").addClass("love-on");
  });
});

// BUTTON LOVE REDEEM
$(document).ready(function () {
  $(".btn-love-reedem").click(function () {
    $("#loveWhite").addClass("love-off");
    $("#loveRed").removeClass("love-off");
    $("#loveRed").addClass("love-on");
  });
});
$(document).ready(function () {
  $(".btn-love-reedem").click(function () {
    $("#loveWhiteRedeem").addClass("love-off");
    $("#loveRedRedeem").removeClass("love-off");
    $("#loveRedRedeem").addClass("love-on");
  });
});

// BUTTON LOVE VIEW MORE
$(document).ready(function () {
  $(".btn-love").click(function () {
    $(".modal").addClass("display-off");
    $(".modal-backdrop").addClass("display-off");
  });
  // $(".content-images").click(function () {
  //   $(".modal").addClass("display-on");
  //   $(".modal-backdrop").addClass("display-on");
  // });
});

// BUTTON LOVE CONTENT PLAY HOME
$(document).ready(function () {
  $(".btn-love-content-play").click(function () {
    $(".loveWhitePlay").addClass("display-off");
    $(".loveRedPlay").removeClass("display-off");
  });
});

// TAB TANGGAL LIVE PAGE
$(document).ready(function () {
  $("#day1").click(function () {
    $("#day1").addClass("button-day-on");
    $("#day2").removeClass("button-day-on");
    $("#day3").removeClass("button-day-on");
    $("#day4").removeClass("button-day-on");
    $("#day5").removeClass("button-day-on");
    $("#day6").removeClass("button-day-on");
    $("#day7").removeClass("button-day-on");
    $("#contentDay1").removeClass("content-off");
    $("#contentDay2").addClass("content-off");
    $("#contentDay3").addClass("content-off");
    $("#contentDay4").addClass("content-off");
    $("#contentDay5").addClass("content-off");
    $("#contentDay6").addClass("content-off");
    $("#contentDay7").addClass("content-off");
  });
  $("#day2").click(function () {
    $("#day1").removeClass("button-day-on");
    $("#day2").addClass("button-day-on");
    $("#day3").removeClass("button-day-on");
    $("#day4").removeClass("button-day-on");
    $("#day5").removeClass("button-day-on");
    $("#day6").removeClass("button-day-on");
    $("#day7").removeClass("button-day-on");
    $("#contentDay1").addClass("content-off");
    $("#contentDay2").removeClass("content-off");
    $("#contentDay3").addClass("content-off");
    $("#contentDay4").addClass("content-off");
    $("#contentDay5").addClass("content-off");
    $("#contentDay6").addClass("content-off");
    $("#contentDay7").addClass("content-off");
  });
  $("#day3").click(function () {
    $("#day1").removeClass("button-day-on");
    $("#day2").removeClass("button-day-on");
    $("#day3").addClass("button-day-on");
    $("#day4").removeClass("button-day-on");
    $("#day5").removeClass("button-day-on");
    $("#day6").removeClass("button-day-on");
    $("#day7").removeClass("button-day-on");
    $("#contentDay1").addClass("content-off");
    $("#contentDay2").addClass("content-off");
    $("#contentDay3").removeClass("content-off");
    $("#contentDay4").addClass("content-off");
    $("#contentDay5").addClass("content-off");
    $("#contentDay6").addClass("content-off");
    $("#contentDay7").addClass("content-off");
  });
  $("#day4").click(function () {
    $("#day1").removeClass("button-day-on");
    $("#day2").removeClass("button-day-on");
    $("#day3").removeClass("button-day-on");
    $("#day4").addClass("button-day-on");
    $("#day5").removeClass("button-day-on");
    $("#day6").removeClass("button-day-on");
    $("#day7").removeClass("button-day-on");
    $("#contentDay1").addClass("content-off");
    $("#contentDay2").addClass("content-off");
    $("#contentDay3").addClass("content-off");
    $("#contentDay4").removeClass("content-off");
    $("#contentDay5").addClass("content-off");
    $("#contentDay6").addClass("content-off");
    $("#contentDay7").addClass("content-off");
  });
  $("#day5").click(function () {
    $("#day1").removeClass("button-day-on");
    $("#day2").removeClass("button-day-on");
    $("#day3").removeClass("button-day-on");
    $("#day4").removeClass("button-day-on");
    $("#day5").addClass("button-day-on");
    $("#day6").removeClass("button-day-on");
    $("#day7").removeClass("button-day-on");
    $("#contentDay1").addClass("content-off");
    $("#contentDay2").addClass("content-off");
    $("#contentDay3").addClass("content-off");
    $("#contentDay4").addClass("content-off");
    $("#contentDay5").removeClass("content-off");
    $("#contentDay6").addClass("content-off");
    $("#contentDay7").addClass("content-off");
  });
  $("#day6").click(function () {
    $("#day1").removeClass("button-day-on");
    $("#day2").removeClass("button-day-on");
    $("#day3").removeClass("button-day-on");
    $("#day4").removeClass("button-day-on");
    $("#day5").removeClass("button-day-on");
    $("#day6").addClass("button-day-on");
    $("#day7").removeClass("button-day-on");
    $("#contentDay1").addClass("content-off");
    $("#contentDay2").addClass("content-off");
    $("#contentDay3").addClass("content-off");
    $("#contentDay4").addClass("content-off");
    $("#contentDay5").addClass("content-off");
    $("#contentDay6").removeClass("content-off");
    $("#contentDay7").addClass("content-off");
  });
  $("#day7").click(function () {
    $("#day1").removeClass("button-day-on");
    $("#day2").removeClass("button-day-on");
    $("#day3").removeClass("button-day-on");
    $("#day4").removeClass("button-day-on");
    $("#day5").removeClass("button-day-on");
    $("#day6").removeClass("button-day-on");
    $("#day7").addClass("button-day-on");
    $("#contentDay1").addClass("content-off");
    $("#contentDay2").addClass("content-off");
    $("#contentDay3").addClass("content-off");
    $("#contentDay4").addClass("content-off");
    $("#contentDay5").addClass("content-off");
    $("#contentDay6").addClass("content-off");
    $("#contentDay7").removeClass("content-off");
  });
});

// BUTTON INFO SUBSCRIBE
$(document).ready(function () {
  $("#btnSubsFeatureMonth").click(function () {
    $("#subsFeatureMonth").addClass("display-off");
    $("#subsDeskMonth").removeClass("display-off");
  });
  $("#btnSubDeskMonth").click(function () {
    $("#subsFeatureMonth").removeClass("display-off");
    $("#subsDeskMonth").addClass("display-off");
  });
});
$(document).ready(function () {
  $("#btnSubsFeatureYear").click(function () {
    $("#subsFeatureYear").addClass("display-off");
    $("#subsDeskYear").removeClass("display-off");
  });
  $("#btnSubDeskYear").click(function () {
    $("#subsFeatureYear").removeClass("display-off");
    $("#subsDeskYear").addClass("display-off");
  });
});

// BUTTON INFO SUBSCRIBE MOBILE
$(document).ready(function () {
  $("#btnSubsFeatureMonthMobile").click(function () {
    $("#subsFeatureMonthMobile").addClass("display-off");
    $("#subsDeskMonthMobile").removeClass("display-off");
  });
  $("#btnSubDeskMonthMobile").click(function () {
    $("#subsFeatureMonthMobile").removeClass("display-off");
    $("#subsDeskMonthMobile").addClass("display-off");
  });
});
$(document).ready(function () {
  $("#btnSubsFeatureYearMobile").click(function () {
    $("#subsFeatureYearMobile").addClass("display-off");
    $("#subsDeskYearMobile").removeClass("display-off");
  });
  $("#btnSubDeskYearMobile").click(function () {
    $("#subsFeatureYearMobile").removeClass("display-off");
    $("#subsDeskYearMobile").addClass("display-off");
  });
});

// BUTTON PAY
$(document).ready(function () {
  $(".btnPay").click(function () {
    // var tes =  $(this).attr("payment-method");
    alert($(this).attr("payment-method"));
  });
});

// BUTTON ACCORDION EXPERIENCE HOME
$(document).ready(function () {
  $("#accr1").click(function () {
    $("#accr1").addClass("content-active");
    $("#accr2").removeClass("content-active");
    $("#accr3").removeClass("content-active");
    // $("#isiContent1").show();
    $("#isiContent1").removeClass("content-isi-off");
    $("#isiContent2").addClass("content-isi-off");
    $("#isiContent3").addClass("content-isi-off");
    $("#titleWrap1").addClass("display-off");
    $("#titleWrap2").removeClass("display-off");
    $("#titleWrap3").removeClass("display-off");
  });
  $("#accr2").click(function () {
    $("#accr1").removeClass("content-active");
    $("#accr2").addClass("content-active");
    $("#accr3").removeClass("content-active");
    // $("#isiContent1").hide();
    $("#isiContent1").addClass("content-isi-off");
    $("#isiContent2").removeClass("content-isi-off");
    $("#isiContent3").addClass("content-isi-off");

    $("#titleWrap1").removeClass("display-off");
    $("#titleWrap2").addClass("display-off");
    $("#titleWrap3").removeClass("display-off");

  });
  $("#accr3").click(function () {
    $("#accr1").removeClass("content-active");
    $("#accr2").removeClass("content-active");
    $("#accr3").addClass("content-active");

    $("#isiContent1").addClass("content-isi-off");
    $("#isiContent2").addClass("content-isi-off");
    $("#isiContent3").removeClass("content-isi-off");

    $("#titleWrap1").removeClass("display-off");
    $("#titleWrap2").removeClass("display-off");
    $("#titleWrap3").addClass("display-off");
  });
});

// BUTTON CLICK THUMBNAIL RECENT VIDEO
$(document).ready(function () {
  $(".recent-live").click(function () {
    $(".recent-live").addClass("display-off");
    $(".youtube-recent").removeClass("display-off");
  });
});

// BUTTON SEARCH NEW NAVBAR
$(document).ready(function () {

  $("#search-nav").click(function (e) {
    e.stopPropagation();
    $("#searchNav").toggleClass("section-search-on");
    $("#loginNav").toggleClass("section-login-on");
  });
  $("nav").click(function (e) {
    if ($("#searchNav").hasClass("section-search-on")) {
      $("#searchNav").toggleClass("section-search-on")
    }
  });
  $("header").click(function (e) {
    if ($("#searchNav").hasClass("section-search-on")) {
      $("#searchNav").toggleClass("section-search-on")
    }
  });
  $("main").click(function (e) {
    if ($("#searchNav").hasClass("section-search-on")) {
      $("#searchNav").toggleClass("section-search-on")
    }
  });
  $("footer").click(function (e) {
    if ($("#searchNav").hasClass("section-search-on")) {
      $("#searchNav").toggleClass("section-search-on")
    }
  });
  $("#search-nav").click(function (e) {
    if ($("#loginNav").hasClass("section-login-on")) {
      $("#loginNav").toggleClass("section-login-on")
    }
  });
});
// END BUTTON SEARCH NEW NAVBAR

// BUTTON LOGIN NEW NAVBAR
$(document).ready(function () {
  // $("#search-nav").click(function () {
  //   $("#searchNav").addClass("section-search-on ");
  // });
  // if (!$(".nav-notif").attr('style')) {
  //   $(".section-dropdown-login").css("top", "120px");
  // }

  // if ($(".nav-notif").attr("style", "")) {
  //   $(".section-dropdown-login").removeClass("body-navbar-active");
  //   //   $(".body-navbar-active").hide();
  // }

  $("#login-nav").click(function (e) {
    e.stopPropagation();
    $("#loginNav").toggleClass("section-login-on");

    // if ($(".nav-notif").attr("style", "")) {
    //   $("#loginNav").toggleClass("section-login-on body-navbar-active");
    //   // $(".section-dropdown-login").addClass("body-navbar-active");
    // } else {
    //   $("#loginNav").toggleClass("section-login-on");
    // }

    // $("#searchNav").toggleClass("section-search-on");
  });
  $("nav").click(function (e) {
    if ($("#loginNav").hasClass("section-login-on")) {
      $("#loginNav").toggleClass("section-login-on")
    }
  });
  $("header").click(function (e) {
    if ($("#loginNav").hasClass("section-login-on")) {
      $("#loginNav").toggleClass("section-login-on")
    }
  });
  $("main").click(function (e) {
    if ($("#loginNav").hasClass("section-login-on")) {
      $("#loginNav").toggleClass("section-login-on")
    }
  });
  $("footer").click(function (e) {
    if ($("#loginNav").hasClass("section-login-on")) {
      $("#loginNav").toggleClass("section-login-on")
    }
  });
  $("#login-nav").click(function (e) {
    if ($("#searchNav").hasClass("section-search-on")) {
      $("#searchNav").toggleClass("section-search-on")
    }
  });
});
// END BUTTON LOGIN NEW NAVBAR

// CLICK ARROW DOWN DASHBOARD
$(document).ready(function () {
  $("#acchivmentList").click(function () {
    $("#downAchiv").toggleClass("arrow-down-click");
    $("#downAchivWhite").toggleClass("arrow-down-click");
    $("#achivmentSub").slideToggle(200);
  });
  $("#libraryList").click(function () {
    $("#downAchivWhite").toggleClass("arrow-down-click");
    $("#arrowLibrary").toggleClass("arrow-down-click");
    $("#librarySub").slideToggle(200);
  });
  $("#inspireList").click(function () {
    $("#downAchivWhite").toggleClass("arrow-down-click");
    $("#arrowInspire").toggleClass("arrow-down-click");
    $("#inspireSub").slideToggle(200);
  });
  $("#aboutList").click(function () {
    $("#downAchivWhite").toggleClass("arrow-down-click");
    $("#arrowAbout").toggleClass("arrow-down-click");
    $("#aboutSub").slideToggle(200);
  });
});

// CLICK ARROW DOWN DASHBOARD MOBILE
$(document).ready(function () {
  $("#acchivmentListm").click(function () {
    $("#downAchivm").toggleClass("arrow-down-click");
    $("#downAchivWhitem").toggleClass("arrow-down-click");
    $("#achivmentSubm").slideToggle(200);
  });
  $("#libraryListm").click(function () {
    $("#downAchivWhitem").toggleClass("arrow-down-click");
    $("#arrowLibrarym").toggleClass("arrow-down-click");
    $("#librarySubm").slideToggle(200);
  });
  $("#inspireListm").click(function () {
    $("#downAchivWhitem").toggleClass("arrow-down-click");
    $("#arrowInspirem").toggleClass("arrow-down-click");
    $("#inspireSubm").slideToggle(200);
  });
  $("#aboutListm").click(function () {
    $("#downAchivWhitem").toggleClass("arrow-down-click");
    $("#arrowAboutm").toggleClass("arrow-down-click");
    $("#aboutSubm").slideToggle(200);
  });
});


// BUTTON TAB GET COIN DASHBOARD
$(document).ready(function () {
  $("#signUpbtn").click(function () {
    $("#btn1").addClass("display-off");
    $("#btn2").removeClass("display-off");
    $("#btnProf1").removeClass("display-off");
    $("#btnProf2").addClass("display-off");
    $("#btnEmail1").removeClass("display-off");
    $("#btnEmail2").addClass("display-off");
    $("#btnSocialCont1").removeClass("display-off");
    $("#btnSocialCont2").addClass("display-off");
    $("#btnRef1").removeClass("display-off");
    $("#btnRef2").addClass("display-off");
    $("#btnNews1").removeClass("display-off");
    $("#btnNews2").addClass("display-off");
    $("#btnBirth1").removeClass("display-off");
    $("#btnBirth2").addClass("display-off");
  });
  $("#completeProfBtn").click(function () {
    $("#btn1").removeClass("display-off");
    $("#btn2").addClass("display-off");
    $("#btnProf1").addClass("display-off");
    $("#btnProf2").removeClass("display-off");
    $("#btnEmail1").removeClass("display-off");
    $("#btnEmail2").addClass("display-off");
    $("#btnSocialCont1").removeClass("display-off");
    $("#btnSocialCont2").addClass("display-off");
    $("#btnRef1").removeClass("display-off");
    $("#btnRef2").addClass("display-off");
    $("#btnNews1").removeClass("display-off");
    $("#btnNews2").addClass("display-off");
    $("#btnBirth1").removeClass("display-off");
    $("#btnBirth2").addClass("display-off");
  });
  $("#emailverfBtn").click(function () {
    $("#btn1").removeClass("display-off");
    $("#btn2").addClass("display-off");
    $("#btnProf1").removeClass("display-off");
    $("#btnProf2").addClass("display-off");
    $("#btnEmail1").addClass("display-off");
    $("#btnEmail2").removeClass("display-off");
    $("#btnSocialCont1").removeClass("display-off");
    $("#btnSocialCont2").addClass("display-off");
    $("#btnRef1").removeClass("display-off");
    $("#btnRef2").addClass("display-off");
    $("#btnNews1").removeClass("display-off");
    $("#btnNews2").addClass("display-off");
    $("#btnBirth1").removeClass("display-off");
    $("#btnBirth2").addClass("display-off");
  });
  $("#socialContBtn").click(function () {
    $("#btn1").removeClass("display-off");
    $("#btn2").addClass("display-off");
    $("#btnProf1").removeClass("display-off");
    $("#btnProf2").addClass("display-off");
    $("#btnEmail1").removeClass("display-off");
    $("#btnEmail2").addClass("display-off");
    $("#btnSocialCont1").addClass("display-off");
    $("#btnSocialCont2").removeClass("display-off");
    $("#btnRef1").removeClass("display-off");
    $("#btnRef2").addClass("display-off");
    $("#btnNews1").removeClass("display-off");
    $("#btnNews2").addClass("display-off");
    $("#btnBirth1").removeClass("display-off");
    $("#btnBirth2").addClass("display-off");
  });
  $("#referalBtn").click(function () {
    $("#btn1").removeClass("display-off");
    $("#btn2").addClass("display-off");
    $("#btnProf1").removeClass("display-off");
    $("#btnProf2").addClass("display-off");
    $("#btnEmail1").removeClass("display-off");
    $("#btnEmail2").addClass("display-off");
    $("#btnSocialCont1").removeClass("display-off");
    $("#btnSocialCont2").addClass("display-off");
    $("#btnRef1").addClass("display-off");
    $("#btnRef2").removeClass("display-off");
    $("#btnNews1").removeClass("display-off");
    $("#btnNews2").addClass("display-off");
    $("#btnBirth1").removeClass("display-off");
    $("#btnBirth2").addClass("display-off");
  });
  $("#newsletBtn").click(function () {
    $("#btn1").removeClass("display-off");
    $("#btn2").addClass("display-off");
    $("#btnProf1").removeClass("display-off");
    $("#btnProf2").addClass("display-off");
    $("#btnEmail1").removeClass("display-off");
    $("#btnEmail2").addClass("display-off");
    $("#btnSocialCont1").removeClass("display-off");
    $("#btnSocialCont2").addClass("display-off");
    $("#btnRef1").removeClass("display-off");
    $("#btnRef2").addClass("display-off");
    $("#btnNews1").addClass("display-off");
    $("#btnNews2").removeClass("display-off");
    $("#btnBirth1").removeClass("display-off");
    $("#btnBirth2").addClass("display-off");
  });
  $("#birthRewBtn").click(function () {
    $("#btn1").removeClass("display-off");
    $("#btn2").addClass("display-off");
    $("#btnProf1").removeClass("display-off");
    $("#btnProf2").addClass("display-off");
    $("#btnEmail1").removeClass("display-off");
    $("#btnEmail2").addClass("display-off");
    $("#btnSocialCont1").removeClass("display-off");
    $("#btnSocialCont2").addClass("display-off");
    $("#btnRef1").removeClass("display-off");
    $("#btnRef2").addClass("display-off");
    $("#btnNews1").removeClass("display-off");
    $("#btnNews2").addClass("display-off");
    $("#btnBirth1").addClass("display-off");
    $("#btnBirth2").removeClass("display-off");
  });

});

// / BUTTON TAB CATEGORY NEW HOMEPAGE
$(document).ready(function () {
  $("#global-1").click(function () {
    $("#global-1").addClass("display-off");
    $("#global-2").removeClass("display-off");
    $("#enterprise-1").removeClass("display-off");
    $("#enterprise-2").addClass("display-off");
    $("#entertainment-1").removeClass("display-off");
    $("#entertainment-2").addClass("display-off");
    $("#globalContentHome").removeClass("display-off");
    $("#EnterpriseContentHome").addClass("display-off");
    $("#EntertainmentContentHome").addClass("display-off");
  });
  $("#enterprise-1").click(function () {
    $("#enterprise-1").addClass("display-off");
    $("#enterprise-2").removeClass("display-off");
    $("#global-1").removeClass("display-off");
    $("#global-2").addClass("display-off");
    $("#entertainment-1").removeClass("display-off");
    $("#entertainment-2").addClass("display-off");
    $("#globalContentHome").addClass("display-off");
    $("#EnterpriseContentHome").removeClass("display-off");
    $("#EntertainmentContentHome").addClass("display-off");
  });
  $("#entertainment-1").click(function () {
    $("#entertainment-1").addClass("display-off");
    $("#entertainment-2").removeClass("display-off");
    $("#enterprise-1").removeClass("display-off");
    $("#enterprise-2").addClass("display-off");
    $("#global-1").removeClass("display-off");
    $("#global-2").addClass("display-off");
    $("#globalContentHome").addClass("display-off");
    $("#EnterpriseContentHome").addClass("display-off");
    $("#EntertainmentContentHome").removeClass("display-off");
  });
});

//  BUTTON TAB CATEGORY NEW HOMEPAGE MOBILE
$(document).ready(function () {
  $("#globalm-1").click(function () {
    $("#globalm-1").addClass("display-off");
    $("#globalm-2").removeClass("display-off");
    $("#enterprisem-1").removeClass("display-off");
    $("#enterprisem-2").addClass("display-off");
    $("#entertainmentm-1").removeClass("display-off");
    $("#entertainmentm-2").addClass("display-off");
    $("#globalContentHomem").removeClass("display-off");
    $("#EnterpriseContentHomem").addClass("display-off");
    $("#EntertainmentContentHomem").addClass("display-off");
    $(".multiple-items").slick("setPosition");
    $(".multiple-items").addClass("display-on");
  });
  $("#enterprisem-1").click(function () {
    $("#enterprisem-1").addClass("display-off");
    $("#enterprisem-2").removeClass("display-off");
    $("#globalm-1").removeClass("display-off");
    $("#globalm-2").addClass("display-off");
    $("#entertainmentm-1").removeClass("display-off");
    $("#entertainmentm-2").addClass("display-off");
    $("#globalContentHomem").addClass("display-off");
    $("#EnterpriseContentHomem").removeClass("display-off");
    $("#EntertainmentContentHomem").addClass("display-off");
    $(".multiple-items").slick("setPosition");
    $(".multiple-items").addClass("display-on");
  });
  $("#entertainmentm-1").click(function () {
    $("#entertainmentm-1").addClass("display-off");
    $("#entertainmentm-2").removeClass("display-off");
    $("#enterprisem-1").removeClass("display-off");
    $("#enterprisem-2").addClass("display-off");
    $("#globalm-1").removeClass("display-off");
    $("#globalm-2").addClass("display-off");
    $("#globalContentHomem").addClass("display-off");
    $("#EnterpriseContentHomem").addClass("display-off");
    $("#EntertainmentContentHomem").removeClass("display-off");
    $(".multiple-items").slick("setPosition");
    $(".multiple-items").addClass("display-on");
  });
});

// BUTTON OPEN SIDE
$(document).ready(function () {
  $(".btn-open-sider").click(function () {
    $("#sidebarMobile").addClass("side-bar-active");
    $(".btn-open-sider").fadeOut();

  });
  $(".btn-close").click(function () {
    $("#sidebarMobile").removeClass("side-bar-active");
    $(".btn-open-sider").fadeIn();
  });
  $(".btn-close-sidebar-mb").click(function () {
    $("#sidebarMobile").removeClass("side-bar-active");
    $(".btn-open-sider").fadeIn();
  });
});

// BUTTON REMOVE WISHLIST PRODUCT
$(document).ready(function () {
  $(".btn-edit-product").click(function () {
    $(".btn-edit-product").addClass("display-off");
    $(".btn-cancel-product").removeClass("display-off");
    $(".form-check-input").removeClass("display-off");
    $(".btn-remove-product").removeClass("display-off");
  });

  $(".btn-cancel-product").click(function () {
    $(".form-check-input").prop("checked", false);
    $(".btn-edit-product").removeClass("display-off");
    $(".btn-cancel-product").addClass("display-off");
    $(".form-check-input").addClass("display-off");
    $(".btn-remove-product").addClass("display-off");
  });

  $('.btn-remove-product').click(function () {
    $('.ct-whl input:checked').parents('.ct-whl').remove();
  });
});

$(document).ready(function () {
  // $(".slick-next").click(function (e) {
  //   if ($(this)("#badgesSilverSlide").hasClass("silver-cont")) {
  //     $("#contentGold").addClass("display-off");
  //     $("#contentBlue").addClass("display-off");
  //     $("#contentSilver").removeClass("display-off");
  //   } else {
  //     $("#contentSilver").addClass("display-off")
  //   };
  //   // if ($("#badgesSilverSlide").hasClass("silver-cont")) {
  //   //   $("#contentGold").addClass("display-off");
  //   //   $("#contentBlue").addClass("display-off");
  //   //   $("#contentSilver").removeClass("display-off");
  //   // };

  // });


  // $(".slick-next").click(function (e) {
  //   if ($(this)("#badgesGoldSlide").hasClass("gold-cont")) {
  //     $("#contentGold").removeClass("display-off");
  //     $("#contentBlue").addClass("display-off");
  //     $("#contentSilver").addClass("display-off");
  //   } else {
  //     $("#contentGold").addClass("display-off")
  //   };
  //   // if ($("#badgesSilverSlide").hasClass("silver-cont")) {
  //   //   $("#contentGold").addClass("display-off");
  //   //   $("#contentBlue").addClass("display-off");
  //   //   $("#contentSilver").removeClass("display-off");
  //   // };

  // });
  // $('.single-item').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   var dataId = $(slick.$slides[currentSlide]).data('index');
  //   $('#contentBlue').hide();
  //   $('#contentGold[data-id=' + dataId + ']').show();
  // });

  // $('.single-item').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   var elSlide = $(slick.$slides[currentSlide]);
  //   var dataIndex = elSlide.data('index');

  //   $('#contentGold').each(function () {
  //     if ($(this).data('id') == dataIndex) {
  //       $(this).show();
  //     } else {
  //       $(this).hide("#contentBlue");
  //     }
  //   });

  // });

  // $('.single-item').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   $('#contentBlue').hide();
  //   $('#contentGold[data-id=' + (currentSlide + 1) + ']').show();
  // });

  // $("nav").click(function (e) {
  //   if ($("#userBeforeLogin").hasClass("active-sidebar")) {
  //     $("#userBeforeLogin").toggleClass("active-sidebar")
  //   }
  //   if ($("#leftSide").hasClass("active-side-full")) {
  //     $("#leftSide").toggleClass("active-side-full")
  //   }
  // });
  // $(".slick-next").click(function (e) {
  //   if ($(".slick-active").hasAttr("data-slick-index='1'")) {
  //     $("#contentGold").removeClass("display-off");
  //   };

  // });
});

// HOVER VIDEO LIVE
$(document).ready(function () {
  $("#thumbnailLive1").mouseover(function () {
    $("#thumbnailLive1").addClass("content-off");
    $("#videoNews1").removeClass("content-off");
  });
  $("#video1").mouseover(function () {
    $(this).get(0).muted = true;
    $(this).get(0).load();
    $(this).get(0).play();
  });
  $("#video1").mouseleave(function () {
    $(this).get(0).currentTime = 0;
    $(this).get(0).pause();
    $("#thumbnailLive1").removeClass("content-off");
    $("#videoNews1").addClass("content-off");
  });
});
$(document).ready(function () {
  $("#thumbnailLive2").mouseover(function () {
    $("#thumbnailLive2").addClass("content-off");
    $("#videoNews2").removeClass("content-off");
  });
  $("#video2").mouseover(function () {
    $(this).get(0).muted = true;
    $(this).get(0).load();
    $(this).get(0).play();
  });
  $("#video2").mouseleave(function () {
    $(this).get(0).currentTime = 0;
    $(this).get(0).pause();
    $("#thumbnailLive2").removeClass("content-off");
    $("#videoNews2").addClass("content-off");
  });
});
// POTRAIT HOVER
$(document).ready(function () {
  $(".bg-thumbnail-potrait").mouseover(function () {
    $("#thumbnailPotraitLive1").addClass("content-off");
    $("#videoPotraitArtikel").removeClass("content-off");
  });
  $("#videoPotraitArtikel").mouseover(function () {
    $(this).get(0).muted = true;
    $(this).get(0).load();
    $(this).get(0).play();
  });
  $("#videoPotraitArtikel").mouseleave(function () {
    $(this).get(0).currentTime = 0;
    $(this).get(0).pause();
    $(".bg-thumbnail-potrait").removeClass("content-off");
    $("#videoPotraitArtikel").addClass("content-off");
  });
});

// HOVER VIDEO BIG DAILY
$(document).ready(function () {
  $("#big1").mouseover(function () {
    $("#big1").addClass("content-off");
    $("#videoBig1").removeClass("content-off");
  });
  $("#videoBig1").mouseover(function () {
    $(this).get(0).muted = true;
    $(this).get(0).load();
    $(this).get(0).play();
  });
  $("#videoBig1").mouseleave(function () {
    $(this).get(0).currentTime = 0;
    $(this).get(0).pause();
    $("#big1").removeClass("content-off");
    $("#videoBig1").addClass("content-off");
  });
});

// HOVER VIDEO LITTLE DAILY
$(document).ready(function () {
  $("#littleThumbnail1").mouseover(function () {
    $("#littleThumbnail1").addClass("content-off");
    // $(".iframe-wrapper").removeClass("content-off");
    $("#videoYt").removeClass("content-off");
  });
  $("#videoYt").mouseover(function () {
    $(this).get(0).muted = true;
    $(this).get(0).load();
    $(this).get(0).play();
  });
  $("#videoYt").mouseleave(function () {
    $(this).get(0).currentTime = 0;
    $(this).get(0).pause();
    $("#littleThumbnail1").removeClass("content-off");
    // $(".iframe-wrapper").addClass("content-off");
    $("#videoYt").addClass("content-off");
  });
});
$(document).ready(function () {
  $("#littleThumbnail2").mouseover(function () {
    $("#littleThumbnail2").addClass("content-off");
    $("#videoLittle2").removeClass("content-off");
  });
  $("#videoLittle2").mouseover(function () {
    $(this).get(0).muted = true;
    $(this).get(0).load();
    $(this).get(0).play();
  });
  $("#videoLittle2").mouseleave(function () {
    $(this).get(0).currentTime = 0;
    $(this).get(0).pause();
    $("#littleThumbnail2").removeClass("content-off");
    $("#videoLittle2").addClass("content-off");
  });
});


$(document).ready(function () {
  $("#videoYt").bind("ended", function () {
    $("#myModal").modal("show");
  });
});

var timeoutPlay = false;
setInterval(function () {
  timeoutPlay = true;
}, 300);

// HOVER VIDEO PLAY
$(document).ready(function () {
  $(".video-article").mouseenter(function () {
    $(this).children(".btn-play-video").fadeIn();
    $('.playBtn').fadeIn();
  });
  $(".video-article").mouseleave(function () {
    $(this).children(".btn-play-video").fadeOut(500);
    //  $(".btn-play-video").fadeOut(500);
    $('.playBtn').fadeOut();
  });

  // show btn play 
  $("video").click(function () {
    $('.playBtn').show(function () {
      setTimeout(function () {
        $(".playBtn").fadeOut(5000);
        // Start fading in your other pic
      });
    });
  });

  // PLAY BUTTON VIDEO POTRAIT
  $(".btn-play-video").click(function () {
    if ($(".playBtn").attr('src') === 'frontend/images/play-button.png') { /* check source */
      $(".playBtn").attr('src', 'frontend/images/pause-ic.png'); /* change source */
    }
    else {
      $(".playBtn").attr('src', 'frontend/images/play-button.png'); /* change source */
    }
    $('.playBtn').delay(2000).fadeOut();
  });
  $(".wrapper-content-2").scroll(function () {
    $(".playBtn").attr('style', 'display:block');
    $(".btn-play-video").attr('style', 'display:block');
    $(".playBtn").attr('src', 'frontend/images/play-button.png');
    // $("#videoArtikel1").get(0).pause();
    $('#videoArtikel1').trigger('pause');
  });
  $("#videoArtikel1").on("ended", function (e) {
    $(".btn-play-video").attr('style', 'display:block');
    $(".playBtn").attr('style', 'display:block');
    $("#playBtn").attr('src', 'frontend/images/play-button.png');
    // $(".wrapper-content-2").animate({ scrollTop: 700 }, 2000);
  });

});

// BUTTON PLAY LANDSCAPE
$(document).ready(function () {
  // VIDEO LANDSCAPE ENDED
  $("#video").on("ended", function (e) {
    $("#btnPlay2").attr('style', 'display:block');
    $("#playBtn").attr('src', 'frontend/images/play-button.png');
  });
  // END LANDSCAPE ENDED

  // VIDEO LANDSCAPE HOVER BUTTON
  $(".video").mouseenter(function () {
    $(this).children("#btnPlay2").fadeIn();
  });
  $(".video").mouseleave(function () {
    $(this).children("#btnPlay2").fadeOut(500);
  });
  // END VIDEO LANDSCAPE HOVER BUTTON

  // PLAY BUTTON VIDEO LANDSCAPE
  $(".video").click(function () {
    if ($(".playBtn").attr('src') === 'frontend/images/play-button.png') { /* check source */
      $(".playBtn").attr('src', 'frontend/images/pause-ic.png'); /* change source */
    }
    else {
      $(".playBtn").attr('src', 'frontend/images/play-button.png'); /* change source */
    }
  });
  $("#btnPlay2").click(function () {
    if ($(".playBtn").attr('src') === 'frontend/images/play-button.png') { /* check source */
      $(".playBtn").attr('src', 'frontend/images/pause-ic.png'); /* change source */
    }
    else {
      $(".playBtn").attr('src', 'frontend/images/play-button.png'); /* change source */
    }
  });
});

// $(document).ready(function () {
//   $("video").oncanplay = function () {
//     $("video").prop('muted', true);
//   };

//   $(".video-article").click(function () {
//     if ($("video").prop('muted')) {
//       $("video").prop('muted', false);
//       $(this).addClass('unmute-video'); // changing icon for button

//     } else {
//       $("video").prop('muted', true);
//       $(this).removeClass('unmute-video'); // changing icon for button
//     }
//     console.log($("video").prop('muted'))
//   });
// });

// TEXT CAPTION VIDEO POTRAIT
$(document).ready(function () {
  var txt = $('.caption-video-user').text();
  if (txt.length > 200)
    $('.caption-video-user').text(txt.substring(0, 100) + '....');

  // $(".deskripsi-caption").click(function(){
  //   $(".deskripsi-caption").toggleClass("deskripsi-caption-active");
  //   $(".overlay-text-video").toggleClass("overlay-text-video-active");
  //   $(".caption-video-user").toggle();
  //   $(".caption-video-user-long").toggle();
  // });
  $(".text-video-potrait").click(function () {
    $(".deskripsi-caption").toggleClass("deskripsi-caption-active");
    $(".overlay-text-video").toggleClass("overlay-text-video-active");
    $(".caption-video-user").toggle();
    $(".caption-video-user-long").toggle();
    $(".btn-hide-show").toggle();
  });
});
$(document).ready(function () {
  $(".btn-hide-show").click(function () {
    $(".text-video-potrait").toggleClass("text-video-potrait-btn");
    $(".btn-hide-show").toggleClass("btn-hide-show-transform");
    $(".deskripsi-caption").toggleClass("deskripsi-caption-btn");
    $(".deskripsi-caption").removeClass("deskripsi-caption-active");
    $(".overlay-text-video").removeClass("overlay-text-video-active");
  });
});


// TEXT CAPTION VIDEO POTRAIT 2
$(document).ready(function () {
  var txt = $('.caption-video-user').text();
  if (txt.length > 200)
    $('.caption-video-user').text(txt.substring(0, 80) + '....');

  $(".text-video-potrait-2").click(function () {
    $(".deskripsi-caption-2").toggleClass("deskripsi-caption-active-2");
    $(".overlay-text-video-2").toggleClass("overlay-text-video-active-2");
    $(".caption-video-user").toggle();
    $(".caption-video-user-long").toggle();
    $(".btn-hide-show").toggle();
  });
});
$(document).ready(function () {
  $(".btn-hide-show").click(function () {
    $(".text-video-potrait-2").toggleClass("text-video-potrait-btn-2");
    $(".btn-hide-show").toggleClass("btn-hide-show-transform-2");
    $(".deskripsi-caption-2").toggleClass("deskripsi-caption-btn-2");
    $(".deskripsi-caption-2").removeClass("deskripsi-caption-active-2");
    $(".overlay-text-video-2").removeClass("overlay-text-video-active-2");
  });
});


// $(document).ready(function(){
//   $("#btnDownTable").click(function(){
//     $(".caption").toggleClass("display-off");
//   });
// });

// reward koin video artikel
// $(document).ready(function(){
//   $("#videoArtikel").bind("ended", function () {
//   $("#myModal").modal("show");
//   });
// });

// reward koin video artikel
$(document).ready(function () {
  $(".vidtes").bind("ended", function () {
    $(".section-notif-get-reward-notif").addClass("active-notif-screentime");
    setTimeout(function () {
      // $(".section-notif-get-reward-notif").fadeOut(2000);
      $(".section-notif-get-reward-notif").removeClass("active-notif-screentime");
      // $(".section-notif-get-reward-notif").removeAttr("style");
    }, 2000);
  });
});


// CHECK VOUCHER ON
$(document).ready(function () {
  $(".btn-cek-vocer").click(function () {
    $(".img-x-disc").removeClass("display-off");
    $(".disc-price").removeClass("display-off");
    $(".form-control").addClass("form-control-cek")
  });
});


// seacrh
jQuery(function () {
  jQuery("#search-nav").click(function () {
    jQuery("#input-search").toggle("300");
  });
});

// According Connx-acr
$(document).ready(function () {
  activeItem = $("#accordion li:first");
  $(activeItem).addClass("active");

  $("#accordion li").hover(function () {
    $(activeItem).animate({ width: "180px" }, { duration: 300, queue: false });
    $(this).animate({ width: "550px" }, { duration: 300, queue: false });
    activeItem = this;
  });
});

// if (window.matchMedia("(max-width: 768px)").matches) {
//   // do functionality on screens smaller than 768px
// }

// Add text accordion
$(document).ready(function () {
  $("#li-acr1").hover(function () {
    $("#middle-li-1").hide();
    $("#middle-li-2").show();
    $("#middle-li-3").show();
    $("#middle-li-4").show();
    // title
    $("#title-acr").show();
    $("#title-acr2").hide();
    $("#title-acr3").hide();
    $("#title-acr4").hide();
    // deskripsi
    $("#desk-co").show();
    $("#desk-co2").hide();
    $("#desk-co3").hide();
    $("#desk-co4").hide();
  });
  $("#li-acr2").hover(function () {
    $("#middle-li-1").show();
    $("#middle-li-2").hide();
    $("#middle-li-3").show();
    $("#middle-li-4").show();
    // title
    $("#title-acr").hide();
    $("#title-acr2").show();
    $("#title-acr3").hide();
    $("#title-acr4").hide();
    // deskripsi
    $("#desk-co").hide();
    $("#desk-co2").show();
    $("#desk-co3").hide();
    $("#desk-co4").hide();
  });
  $("#li-acr3").hover(function () {
    $("#middle-li-1").show();
    $("#middle-li-2").show();
    $("#middle-li-3").hide();
    $("#middle-li-4").show();
    // title
    $("#title-acr").hide();
    $("#title-acr2").hide();
    $("#title-acr3").show();
    $("#title-acr4").hide();
    // deskripsi
    $("#desk-co").hide();
    $("#desk-co2").hide();
    $("#desk-co3").show();
    $("#desk-co4").hide();
  });
  $("#li-acr4").hover(function () {
    $("#middle-li-1").show();
    $("#middle-li-2").show();
    $("#middle-li-3").show();
    $("#middle-li-4").hide();
    // title
    $("#title-acr").hide();
    $("#title-acr2").hide();
    $("#title-acr3").hide();
    $("#title-acr4").show();
    // deskripsi
    $("#desk-co").hide();
    $("#desk-co2").hide();
    $("#desk-co3").hide();
    $("#desk-co4").show();
  });
});

// EDIT PROFILE
$(document).ready(function () {
  $("#btnEdit").click(function () {
    $("#editPass").hide();
    $("#editData").show();
    $("#pencilBlack").hide();
    $("#pencilWhite").show();
    $("#lockBlack").show();
    $("#lockWhite").hide();
    $("#line-1").show();
    $("#line-2").hide();
    $("#btnEdit").addClass("btn-edit-profile btn-on-edit");
    $("#btnPass").removeClass("btn-on-edit");
  });
  $("#btnPass").click(function () {
    $("#editPass").show();
    $("#editData").hide();
    $("#lockBlack").hide();
    $("#lockWhite").show();
    $("#pencilBlack").show();
    $("#pencilWhite").hide();
    $("#line-1").hide();
    $("#line-2").show();
    $("#btnPass").addClass("btn-edit-password btn-on-edit");
    $("#btnEdit").removeClass("btn-on-edit");
  });
});
//END EDIT PROFILE

// FADE REMOVE MODAL
$("#humbergerBtn").click(function () {
  $("#loginModal").modal({ backdrop: false });
});

// countdown
$(".flip-clock-container").on("done", function pageRedirect() {
  window.location.href = "https://staging.connx.id";
});

// SHUFFLE BUTTON

// preloader
setInterval(function () {
  $(".preloader-logo").fadeOut();
}, 4000);

// preloader-greeting
setInterval(function () {
  $(".greeting-up").fadeOut();
}, 8000);

// greeting
$(document).ready(function () {
  function dateTime() {
    var ndate = new Date();
    var h = ndate.getHours();
    var m = ndate.getMinutes().toString();
    var s = ndate.getSeconds().toString();

    if (h < 12) {
      h = "0" + h;
      $(".greeting").html("Good Morning");
    } else if (h < 18) {
      $(".greeting").html("Good Afternoon");
    } else {
      $(".greeting").html("Good Evening");
    }
  }

  setInterval(dateTime, 0);
});

// TOGGLE USER
$("#humberger").click(function () {
  $("#profile").toggle("1000");
});
// END TOGGLE USER
// CLOSE-USER
$("#close").click(function () {
  $("#profile").toggle("300");
});
// END CLODE USER

// ACORDION MENU USER
$(".acordeon").on("click", ".title", function () {
  $(this).toggleClass("active").next().slideToggle();
});

// $(document).ready(function () {
//   $(".btn-drop-nav").on("hover", ".title", function () {
//     $(this).toggleClass("active").next().slideToggle();
//   });
// });

$(document).ready(function () {
  // Media
  $("#mediaNav1").mouseenter(function () {
    // $("#link1").slideToggle(150);
    $("#mediaNav1").addClass("hover-nav");
    // $("#link1").toggleClass("display-off");
    $("#artikelNav").attr("src", "../frontend/images/artikel-ic-white.png");
    $("#down1").addClass("active-rotate-arrow");
  });
  $("#mediaNav1").mouseleave(function () {
    // $("#link1").slideToggle(150);
    $("#mediaNav1").removeClass("hover-nav");
    $("#artikelNav").attr("src", "../frontend/images/artikel-nav-ic.png");
    // $("#link1").toggleClass("display-off");
    $("#down1").removeClass("active-rotate-arrow");
  });

  // Stack
  $("#mediaNav2").mouseenter(function () {
    $("#mediaNav2").addClass("hover-nav");
    $("#link2").toggleClass("display-off");
    $("#stackNav").attr("src", "../frontend/images/stack-ic-white.png");
    // $("#playBtn").attr('src', 'frontend/images/play-button.png');

    // $("#link2").slideToggle(150);
    $("#down2").addClass("active-rotate-arrow");
  });
  $("#mediaNav2").mouseleave(function () {
    $("#mediaNav2").removeClass("hover-nav");
    $("#stackNav").attr("src", "../frontend/images/stack-ic.png");
    // $("#link2").toggleClass("display-off");
    // $("#link2").slideToggle(150);
    $("#down2").removeClass("active-rotate-arrow");
  });

  // video
  $("#mediaNav3").mouseenter(function () {
    // $("#link3").slideToggle(150);
    $("#mediaNav3").addClass("hover-nav");
    $("#videoNav").attr("src", "../frontend/images/video-ic-white.png");
    // $("#link3").toggleClass("display-off");
    $("#down3").addClass("active-rotate-arrow");
  });
  $("#mediaNav3").mouseleave(function () {
    // $("#link3").slideToggle(150);
    $("#mediaNav3").removeClass("hover-nav");
    $("#videoNav").attr("src", "../frontend/images/video-ic-bnt.png");
    // $("#link3").toggleClass("display-off");
    $("#down3").removeClass("active-rotate-arrow");
  });


});

$(document).ready(function () {
  $("#mediaDrop").mouseenter(function () {
    $(".link-artikel-category").slideToggle();
  });
  // $("#mediaDrop").mouseleave(function () {
  //   $(".link-artikel-category").slideToggle();
  // });
  $("#stackDrop").mouseenter(function () {
    $(".link-artikel-category").slideToggle();
  });

});

// MENU INSPIRE PLAN
$("#membership2-btn").click(function () {
  $("#leftSide").toggleClass("active-side-left");
  $("#userAfterLogin").toggleClass("active-sidebar");
  // $("#pageTransc").removeClass("active-side-left");
});

$(".btn-close-page").click(function () {
  $("#leftSide").hide();
});

// SHOW HIDE USER
// TOGGLE USER BEFORE LOGIN
$("#humberger").click(function (e) {
  e.stopPropagation();
  $("#userBeforeLogin").toggleClass("active-sidebar");
});
$("nav").click(function (e) {
  if ($("#userBeforeLogin").hasClass("active-sidebar")) {
    $("#userBeforeLogin").toggleClass("active-sidebar")
  }
  if ($("#leftSide").hasClass("active-side-full")) {
    $("#leftSide").toggleClass("active-side-full")
  }
});
$("header").click(function (e) {
  if ($("#userBeforeLogin").hasClass("active-sidebar")) {
    $("#userBeforeLogin").toggleClass("active-sidebar")
  }
  if ($("#leftSide").hasClass("active-side-full")) {
    $("#leftSide").toggleClass("active-side-full")
  }
});
$("main").click(function (e) {
  if ($("#userBeforeLogin").hasClass("active-sidebar")) {
    $("#userBeforeLogin").toggleClass("active-sidebar")
  }
  if ($("#leftSide").hasClass("active-side-full")) {
    $("#leftSide").toggleClass("active-side-full")
  }
});
$("footer").click(function (e) {
  if ($("#userBeforeLogin").hasClass("active-sidebar")) {
    $("#userBeforeLogin").toggleClass("active-sidebar")
  }
  if ($("#leftSide").hasClass("active-side-full")) {
    $("#leftSide").toggleClass("active-side-full")
  }
});

// AFTER LOGIN
$("#humberger").click(function (e) {
  e.stopPropagation();
  $("#userAfterLogin").toggleClass("active-sidebar");
  $("#leftSide").toggleClass("active-side-full");
});
$("nav").click(function (e) {
  if ($("#userAfterLogin").hasClass("active-sidebar")) {
    $("#userAfterLogin").toggleClass("active-sidebar")
  }
  if ($("#leftSide").hasClass("active-side-full")) {
    $("#leftSide").toggleClass("active-side-full")
  }
});
$("main").click(function (e) {
  if ($("#userAfterLogin").hasClass("active-sidebar")) {
    $("#userAfterLogin").toggleClass("active-sidebar")
  }
  if ($("#leftSide").hasClass("active-side-full")) {
    $("#leftSide").toggleClass("active-side-full")
  }
});
$("header").click(function (e) {
  if ($("#userAfterLogin").hasClass("active-sidebar")) {
    $("#userAfterLogin").toggleClass("active-sidebar")
  }
  if ($("#leftSide").hasClass("active-side-full")) {
    $("#leftSide").toggleClass("active-side-full")
  }
});
$("footer").click(function (e) {
  if ($("#userAfterLogin").hasClass("active-sidebar")) {
    $("#userAfterLogin").toggleClass("active-sidebar")
  }
  if ($("#leftSide").hasClass("active-side-full")) {
    $("#leftSide").toggleClass("active-side-full")
  }
});
// END SHOW HIDE USER



// $("#title-user-menu-1").click(function () {
//   $("#link-2").hide(300);
//   $("#link-3").hide(300);
// });
// $("#title-user-menu-2").click(function () {
//   $("#link-1").hide(300);
//   $("#link-3").hide(300);
// });
// $("#title-user-menu-3").click(function () {
//   $("#link-1").hide(300);
//   $("#link-2").hide(300);
// });
// $("#title-user-menu-4").click(function () {
//   $("#link-1").hide(300);
//   $("#link-2").hide(300);
//   $("#link-3").hide(300);
// });
// END ACCORDION MENU

// SUB MENU USER PROFILE
// $(document).ready(function () {
//   $("#membership-btn").click(function () {
//     $("#memberBlack").hide();
//     $("#memberBlue").show();
//     $("#transcBlack").show();
//     $("#transcBlue").hide();
//     $("link").addClass("btn-on-menu");
//     $("#withdraw-btn").removeClass("btn-on-menu");
//   });
// });
// END SUB  MENU USER PROFILE

// BUTTON TAB NAVBAR TABLET-HP
$(document).ready(function () {
  $("#newsButton").click(function () {
    $("#contentNews").show();
    $("#contentProfil").hide();
    $("#contentCoin").hide();
    // btn news
    $("#newsButton").addClass("button-tab-on");
    $("#newsButton").removeClass("button-tab-off");
    $("#newsWhite").show();
    $("#newsGray").hide();
    // btn profil
    $("#profilButton").addClass("button-tab-off");
    $("#profilWhite").hide();
    $("#profilGray").show();
    // btn coin
    $("#coinButton").addClass("button-tab-off");
    $("#coinWhite").hide();
    $("#coinGray").show();
  });
  $("#profilButton").click(function () {
    $("#contentNews").hide();
    $("#contentProfil").show();
    $("#contentCoin").hide();
    // btn news
    $("#newsButton").addClass("button-tab-off");
    $("#newsWhite").hide();
    $("#newsGray").show();
    // btn profil
    $("#profilButton").addClass("button-tab-on");
    $("#profilButton").removeClass("button-tab-off");
    $("#profilWhite").show();
    $("#profilGray").hide();
    // btn coin
    $("#coinButton").addClass("button-tab-off");
    $("#coinWhite").hide();
    $("#coinGray").show();
  });
  $("#coinButton").click(function () {
    $("#contentNews").hide();
    $("#contentProfil").hide();
    $("#contentCoin").show();
    // btn news
    $("#newsButton").addClass("button-tab-off");
    $("#newsWhite").hide();
    $("#newsGray").show();
    // btn profil
    $("#profilButton").addClass("button-tab-off");
    $("#profilWhite").hide();
    $("#profilGray").show();
    // btn coin
    $("#coinButton").addClass("button-tab-on");
    $("#coinButton").removeClass("button-tab-off");
    $("#coinWhite").show();
    $("#coinGray").hide();
  });
});

// BUTTON LINK SIDEBAR
$(document).ready(function () {
  $("#membership-btn").click(function () {
    $(".membership a").addClass("active-link-sidebar");
    $("#memberBlack").hide();
    $("#memberBlue").show();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback link
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $("#withdraw-btn").click(function () {
    $(".withdraw a").addClass("active-link-sidebar");
    $("#transcBlack").hide();
    $("#transcBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".create-article").click(function () {
    $(".create-article a").addClass("active-link-sidebar");
    $("#createBlack").hide();
    $("#createBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".content-feed").click(function () {
    $(".content-feed a").addClass("active-link-sidebar");
    $("#cfeedBlack").hide();
    $("#cfeedBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".bookmark").click(function () {
    $(".bookmark a").addClass("active-link-sidebar");
    $("#bookmarkBlack").hide();
    $("#bookmarkBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".guidlines").click(function () {
    $(".guidlines a").addClass("active-link-sidebar");
    $("#guidlineBlack").hide();
    $("#guidlineBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".connx-profile").click(function () {
    $(".connx-profile a").addClass("active-link-sidebar");
    $("#profilBlack").hide();
    $("#profilBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".careers").click(function () {
    $(".careers a").addClass("active-link-sidebar");
    $("#careersBlack").hide();
    $("#careersBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".privacy").click(function () {
    $(".privacy a").addClass("active-link-sidebar");
    $("#privacyBlack").hide();
    $("#privacyBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".cb-media").click(function () {
    $(".cb-media a").addClass("active-link-sidebar");
    $("#cyberBlack").hide();
    $("#cyberBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".feedback").click(function () {
    $(".feedback a").addClass("active-link-sidebar");
    $("#helpBlack").hide();
    $("#helpBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // leaderboard link
    $(".leaderboard a").removeClass("active-link-sidebar");
    $("#leaderBlack").show();
    $("#leaderBlue").hide();
  });
  $(".leaderboard").click(function () {
    $(".leaderboard a").addClass("active-link-sidebar");
    $("#leaderBlack").hide();
    $("#leaderBlue").show();
    // membership link
    $(".membership a").removeClass("active-link-sidebar");
    $("#memberBlack").show();
    $("#memberBlue").hide();
    // transaction link
    $(".withdraw a").removeClass("active-link-sidebar");
    $("#transcBlack").show();
    $("#transcBlue").hide();
    // create article link
    $(".create-article a").removeClass("active-link-sidebar");
    $("#createBlack").show();
    $("#createBlue").hide();
    // content feed link
    $(".content-feed a").removeClass("active-link-sidebar");
    $("#cfeedBlack").show();
    $("#cfeedBlue").hide();
    // bookmark link
    $(".bookmark a").removeClass("active-link-sidebar");
    $("#bookmarkBlack").show();
    $("#bookmarkBlue").hide();
    // guidelines
    $(".guidlines a").removeClass("active-link-sidebar");
    $("#guidlineBlack").show();
    $("#guidlineBlue").hide();
    // connx profile link
    $(".connx-profile a").removeClass("active-link-sidebar");
    $("#profilBlack").show();
    $("#profilBlue").hide();
    // careers link
    $(".careers a").removeClass("active-link-sidebar");
    $("#careersBlack").show();
    $("#careersBlue").hide();
    // privacy link
    $(".privacy a").removeClass("active-link-sidebar");
    $("#privacyBlack").show();
    $("#privacyBlue").hide();
    // cyber media link
    $(".cb-media a").removeClass("active-link-sidebar");
    $("#cyberBlack").show();
    $("#cyberBlue").hide();
    // feedback
    $(".feedback a").removeClass("active-link-sidebar");
    $("#helpBlack").show();
    $("#helpBlue").hide();
  });
});

// NAVBAR TOGGLE
$(".navbar-toggler").click(function () {
  $("#buttonTab").toggleClass("button-tab-active");
});
$("#closeButtonNav").click(function () {
  $("#buttonTab").toggleClass("button-tab-active");
});
// coin navbar 
$("#buttonCoin").click(function (e) {
  e.stopPropagation();
  $(".bg-coin").toggleClass("active-popup");
});
$('body').click(function (e) {
  if ($('.bg-coin').hasClass('active-popup')) {
    $(".bg-coin").toggleClass('active-popup')
  }
})

// TAB BUTTON POP-UP PRODUCT
$(document).ready(function () {
  $("#buttonDescProduct").click(function () {
    $("#buttonDescProduct").addClass("btn-desc");
    $("#buttonDescProduct").removeClass("btn-spec");
    $("#buttonSpecProduct").addClass("btn-spec");
    $("#buttonSpecProduct").removeClass("btn-desc");
    $("#buttonRevsProduct").removeClass("btn-desc");
    $("#buttonRevsProduct").addClass("btn-revs");
    $("#descProduct").show();
    $("#specProduct").hide();
    $("#revsProduct").hide();
  });
  $("#buttonSpecProduct").click(function () {
    $("#buttonSpecProduct").addClass("btn-desc");
    $("#buttonSpecProduct").removeClass("btn-spec");
    $("#buttonDescProduct").removeClass("btn-desc");
    $("#buttonDescProduct").addClass("btn-spec");
    $("#buttonRevsProduct").removeClass("btn-desc");
    $("#buttonRevsProduct").addClass("btn-revs");
    $("#descProduct").hide();
    $("#specProduct").show();
    $("#revsProduct").hide();
  });
  $("#buttonRevsProduct").click(function () {
    $("#buttonRevsProduct").addClass("btn-desc");
    $("#buttonRevsProduct").removeClass("btn-revs");
    $("#buttonDescProduct").addClass("btn-spec");
    $("#buttonDescProduct").removeClass("btn-desc");
    $("#buttonSpecProduct").addClass("btn-spec");
    $("#buttonSpecProduct").removeClass("btn-desc");
    $("#descProduct").hide();
    $("#specProduct").hide();
    $("#revsProduct").show();
  });
});

// TAB BUTTON ARTIKEL USER
$(document).ready(function () {
  $(".btn-article").click(function () {
    $("#artikelUser").show();
    $("#videoUser").hide();
    $("#videoUserPotrait").hide();
    $("#threatUser").hide();
    $("#statusUser").hide();
    $(".btn-article").addClass("active-input-tags");
    $(".btn-article").removeClass("off-tags");
    $(".btn-video").removeClass("active-input-tags");
    $(".btn-video-potrait").removeClass("active-input-tags");
    $(".btn-status").removeClass("active-input-tags");
    $(".btn-threat").removeClass("active-input-tags");
    // $(".btn-video").addClass("off-tags");
  });
  $(".btn-video").click(function () {
    $("#artikelUser").hide();
    $("#videoUser").show();
    $("#videoUserPotrait").hide();
    $("#threatUser").hide();
    $(".btn-video").addClass("active-input-tags");
    $(".btn-video-potrait").removeClass("active-input-tags");
    $(".btn-threat").removeClass("active-input-tags");
    $(".btn-status").removeClass("active-input-tags");
    $(".btn-article").addClass("off-tags");
  });
  $(".btn-video-potrait").click(function () {
    $("#artikelUser").hide();
    $("#videoUser").hide();
    $("#videoUserPotrait").show();
    $("#threatUser").hide();
    $(".btn-video").removeClass("active-input-tags");
    $(".btn-video-potrait").addClass("active-input-tags");
    $(".btn-threat").removeClass("active-input-tags");
    $(".btn-status").removeClass("active-input-tags");
    $(".btn-article").addClass("off-tags");
  });
  $(".btn-threat").click(function () {
    $("#artikelUser").hide();
    $("#videoUser").hide();
    $("#videoUserPotrait").hide();
    $("#threatUser").show();
    $(".btn-threat").addClass("active-input-tags");
    $(".btn-video").removeClass("active-input-tags");
    $(".btn-video-potrait").removeClass("active-input-tags");
    $(".btn-status").removeClass("active-input-tags");
    $(".btn-article").addClass("off-tags");
  });
  $(".btn-status").click(function () {
    $("#artikelUser").hide();
    $("#videoUser").hide();
    $("#videoUserPotrait").hide();
    $("#threatUser").hide();
    $("#statusUser").show();
    $(".btn-status").addClass("active-input-tags");
    $(".btn-threat").removeClass("active-input-tags");
    $(".btn-video").removeClass("active-input-tags");
    $(".btn-video-potrait").removeClass("active-input-tags");
    $(".btn-article").addClass("off-tags");
  });
});

// ALERT SAVE AUTOMATIC
$(document).ready(function () {
  $(".btn-primary").click(function () {
    $("#saveAuto").toggleClass("save-auto-on");
    setTimeout(function () {
      $("#saveAuto").fadeOut(2000);
    }, 2000);
  });
});

// ALERT SCREEN TIME COIN
$(document).ready(function () {
  $("#btn-tes-notif").click(function () {
    $(".section-notif-get-reward-notif").addClass("active-notif-screentime");
    setTimeout(function () {
      $(".section-notif-get-reward-notif").fadeOut(2000);
    }, 2000);
  });
});

// BUTTON LANDSCAPE AND POTRAIT VIDEO ARTIKEL
$(document).ready(function () {
  $("#landscapeButton").click(function () {
    $("#LandscapeVideo").show();
    $("#PotraitVideo").hide();
  });
  $("#potraitButton").click(function () {
    $("#LandscapeVideo").hide();
    $("#PotraitVideo").show();
    $("#PotraitVideo").removeAttr("style");
  });
});

// BUTTON LANDSCAPE AND POTRAIT IMAGE ARTIKEL
$(document).ready(function () {
  $(".imageLandscapeArtikel").click(function () {
    $("#imageArtikelUser").show();
    $("#imageArtikelUserPotrait").hide();
  });
  $(".imagePotraitArtikel").click(function () {
    $("#imageArtikelUser").hide();
    $("#imageArtikelUserPotrait").show();
  });
});

// BUTTON TAGS
$(".btn-tambah").hover(
  function () {
    $("#BtnPlusBlack").hide();
    $("#BtnPlusWhite").show();
  },
  function () {
    $("#BtnPlusBlack").show();
    $("#BtnPlusWhite").hide();
  }
);

$(".btn-tambah").click(function () {
  $("#BtnPlusBlack").hide();
  $("#BtnPlusWhite").hide();
  $("#BtnMinWhite").show();
  $(".btn-tambah").addClass("active-button-tags");
  $(".input-tags").addClass("active-input-tags");
});

// $(".btn-tambah").hover(function () {
//   $(".input-tags").addClass("hover-active-tags");
// });

// $("#closeButtonNav").click(function () {
//   $(".navbar-toggler").addClass("collapse");
//   $(".navbar-collapse").removeClass("show");
// });

//Scroll target

// BUTTON DOWN TABLE TRANSACTION HISTORY
$("#btnDownTable").click(function () {
  $("#captionTable").toggle();
  // $("#downIconTable").hide();
  // $("#upIconTable").show();
});
// END BUTTON DOWN TABLE TRANSACTION HISTORY

// Border input black
document.querySelectorAll(".inputUser").forEach((input) => {
  input.addEventListener("blur", function () {
    this.classList.toggle("black", this.value.length > 0);
  });
});

// select border black
document.querySelectorAll(".inputUser").forEach((input) => {
  Selection.addEventListener("blur", function () {
    this.classList.toggle("black", this.value.length > 0);
  });
});

// MODAL TIME OUT
$(document).ready(function () {
  $(".loginButton").click(function () {
    // $("#modalLogin").setTimeout("1000").hide();
    setTimeout(function () {
      $("#modalLogin").modal("hide");
    }, 2000);
  });
});

// MODAL REGISTRASI
$(".btn-inspire").click(function () {
  $("#modalRegist").hide("modal");
  $(".modal-backdrop").hide();
  // $(".modal-open").removeClass();
  $("#userBeforeLogin").toggleClass("active-sidebar");

  $("body").removeAttr("style");
});

// REMOVE BUTTON VIDEO
$("#removeButtonVideo").click(function () {
  $("#landscapeVideoUpload").attr("src", "");
  $("#landscapeVideoButton").val("");
});
$("#removeButtonVideoPotriat").click(function () {
  $("#videoPotrait").attr("src", "");
  $("#inputVideoPotrait").val("");
});

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active-artikel");
    } else {
      reveals[i].classList.remove("active-artikel");
    }
  }
}

// Text-Recomend-for-you
//Scroll target
window.addEventListener("scroll", revealRec);

function revealRec() {
  let revealsRec = document.querySelectorAll(".reveal-rec");

  for (let i = 0; i < revealsRec.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = revealsRec[i].getBoundingClientRect().top;
    let revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      revealsRec[i].classList.add("active-artikel");
    } else {
      revealsRec[i].classList.remove("active-artikel");
    }
  }
}

// HIDE TEXT RECOMDEND
// $(document).ready(function () {
//   if ($(".new-next:hidden").length == 0) {
//     $(".rec-text").fadeOut();
//   }
// });

// watch vide button


// const playButton = document.querySelector(".btn-watch");
// const video = document.querySelector("#video");
// const notif = document.querySelector(".watching-ads");
// const skip = document.querySelector(".btn-skip");
// videoAds = document.querySelector(".section-ads-video");

// window.onload=function(){
// playButton.addEventListener("click", () => {
//   const isPaused = video.paused;
//   video[isPaused ? "play" : "pause"]();
//   video.classList.toggle("u-none", !isPaused);
//   // notif.fadeOut;
//   notif.hidden = false;
// });

// skip.addEventListener("click", () => {
//   notif.hidden = true;
//   videoAds.hidden = true;
// });
// };
// reward koin video ads
$("#video").bind("ended", function () {
  $("#myModalAds").modal("show");
});


