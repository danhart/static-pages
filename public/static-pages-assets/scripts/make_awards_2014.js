define(function() {

    $(window).scroll(function(e){
      parallax();
    });
    function parallax(){
      var scrolled = $(window).scrollTop();
      $('.background').css('top',-(scrolled*0.4)+'px');
    }

    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 700);
            return false;
          }
        }
      });
    });

});
