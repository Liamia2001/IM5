$(document).ready(function() {
    let isHidden = false;

    $(document).scroll(function() {
      var scroll = $(window).scrollTop();
      var amount = -160 + (scroll * 0.4);

      if (amount < 10 && isHidden) {
        isHidden = false;
        $(".letter").show(); // Show the letters again
      } else if (amount >= 10 && !isHidden) {
        isHidden = true;
        setTimeout(function() {
          $(".letter").hide(); // Hide the letters after a delay
        }, 500); // Adjust the delay in milliseconds (e.g., 500ms)
      }

      $(".letter").css({ left: "0", top: 125 - amount + "px" });
    });
  });