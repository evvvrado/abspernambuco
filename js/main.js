$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

// ANIMAÇÃO DE FADE-IN

debounce = function (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

(function () {
  var $target = $(".showin"),
    animationClass = "anime-start",
    offset = ($(window).height() * 3) / 4;

  function animeScroll() {
    var documentTop = $(document).scrollTop();

    $target.each(function () {
      var itemTop = $(this).offset().top - 250;
      if (documentTop > itemTop - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(
    debounce(function () {
      animeScroll();
    }, 100)
  );
})();

// CÓDIGO DE FILTRO EM CURSOS E EVENTOS

$("section.s_cursos .container-fav .title ._filter h2._cursosbutton").click(
  () => {
    $("section.s_cursos .container-fav .title ._filter h2").removeClass(
      "_active"
    );

    $(
      "section.s_cursos .container-fav .title ._filter h2._cursosbutton"
    ).addClass("_active");

    $("body._cursos-e-eventos section.s_cursos ._cursos").css(
      "display",
      "block"
    );
    $("body._cursos-e-eventos section.s_cursos ._eventos").css(
      "display",
      "none"
    );
  }
);

$("section.s_cursos .container-fav .title ._filter h2._eventosbutton").click(
  () => {
    $("section.s_cursos .container-fav .title ._filter h2").removeClass(
      "_active"
    );

    $(
      "section.s_cursos .container-fav .title ._filter h2._eventosbutton"
    ).addClass("_active");

    $("body._cursos-e-eventos section.s_cursos ._eventos").css(
      "display",
      "block"
    );
    $("body._cursos-e-eventos section.s_cursos ._cursos").css(
      "display",
      "none"
    );
  }
);

// SIDE MENU ANIMATION

$("header main button.hamburguer-menu").click(() => {
  $("div._sidemenu nav").animate(
    {
      maxHeight: "100%",
    },
    500
  );
});
