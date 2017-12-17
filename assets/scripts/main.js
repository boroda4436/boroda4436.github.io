$(document).ready(function () {
  if (window.innerWidth > 760) {
    $("#scroll-content").mCustomScrollbar({
      autoHideScrollbar: true,
      axis: "x"
    });
  } else {
    $("#scroll-content").mCustomScrollbar({
      autoHideScrollbar: false,
      axis: "x"
    });
  }
});
