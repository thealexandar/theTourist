// $(document).ready(function() {
//     setTimeout(function(){
//         $('#body').show();
//         $('#main').show();
//         $('#loader').hide();
//     }, 1700);

// });


// Preloader
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 1000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        $('.counter').addClass("fadeOut");
      }

    });
  });

  (function($) {
    $.fn.visible = function(partial) {

        var $t            = $(this),
            $w            = $(window),
            viewTop       = $w.scrollTop(),
            viewBottom    = viewTop + $w.height(),
            _top          = $t.offset().top,
            _bottom       = _top + $t.height(),
            compareTop    = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

  })(jQuery);

  $(window).scroll(function(event) {

    $("p").each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("fadeIn");
      } else {
        el.removeClass("fadeIn");
      }
    });

  });