  /* Get the documentElement (<html>) to display the page in fullscreen */
  var elem = document.documentElement;
  /* View in fullscreen */

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }
  /* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE/Edge */
      document.msExitFullscreen();
    }
  }
$(function(){
    $('.toogle-sidebar').on('click',function(){
        $('.side-bar').toggleClass('no-sidebar')
        $('.content-area').toggleClass('full-width')
    });
    $('.links-area > li >  a').on('click',function(){
        $(this).find($('i')).toggleClass('fa-angle-right  fa-angle-down');
        $(this).next($('.child-links')).slideToggle(500)
    });
    $('.full-screen').on('click', function () {
        $(this).toggleClass('active');
    
        if ($(this).hasClass('active')) {
          openFullscreen();
        } else {
          closeFullscreen();
        }
      });

      //start settings
        // start settings
  //    toggle  settings
      $(".toggle-settings").click(function () {
        $(this).find('i').toggleClass("fa-cog  fa-times");
          $(".setting").toggleClass('hide');
    });
  
    $(".setting").click(function (e) {
      e.stopPropagation();
    });
  //  close settings by click on body
    $("html,body").click(function (e) {
      var settingright = $(".setting").css("right");
      if (e.target !== $(".setting")) {
        if (! $(".setting").hasClass('hide')) {
          console.log('hellp');
          $(".setting").toggleClass('hide');
  
          $(".toggle-settings i").toggleClass("fa-cog  fa-times");
        }
      }
    });
      // end settings

})