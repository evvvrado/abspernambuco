var gallerySelectedImage = 2;

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

$("form label input,form label textarea").focus(function () {
  $(this).parent().find("span").addClass("active");
});

$("form label input,form label textarea").focusout(function () {
  if ($(this).val() == "") {
    $(this).parent().find("span").removeClass("active");
  }
});

$("._otherhalf ._toregister").click(() => {
  $("._otherhalf").scrollTop($("._otherhalf").height());
});

$("header main button.btn-primary").click(() => {
  window.location.href = "/contato.html";
});

$("body._galeria section.s_galeria main ._arrow:first-child").click(() => {
  if (gallerySelectedImage - 1 <= 1) return 0;
  gallerySelectedImage--;
  $("body._galeria section.s_galeria main ._mainImage img").attr(
    "src",
    `/img/_gallery${gallerySelectedImage}.jpg`
  );
  $(`body._galeria section.s_galeria ._list ._img`).removeClass("_active");
  $(
    `body._galeria section.s_galeria ._list ._img:nth-child(${
      gallerySelectedImage - 1
    })`
  ).addClass("_active");
});
$("body._galeria section.s_galeria main ._arrow:last-child").click(() => {
  if (gallerySelectedImage + 1 >= 9) return 0;
  gallerySelectedImage++;
  $("body._galeria section.s_galeria main ._mainImage img").attr(
    "src",
    `/img/_gallery${gallerySelectedImage}.jpg`
  );
  $(`body._galeria section.s_galeria ._list ._img`).removeClass("_active");
  $(
    `body._galeria section.s_galeria ._list ._img:nth-child(${
      gallerySelectedImage - 1
    })`
  ).addClass("_active");
});

$("section.s_produtos .container-fav ._productlist ._product .content").hover(
  function () {
    $(this).parent().find("._hover").css("transform", "translateY(0)");
  }
);

$(
  "section.s_descontos .container-fav ._descontoList ._descontoItem button.btn-primary "
).click(() => {
  window.location.href = "/experiencias-detalhes.html";
});

$(
  "body._experienciaDetalhes section.s_sobreOferta .container-fav ._left ._readMore"
).click(() => {
  $(
    "body._experienciaDetalhes section.s_sobreOferta .container-fav ._editableText"
  ).animate(
    {
      maxHeight: "100%",
    },
    1000
  );
  $(
    "body._experienciaDetalhes section.s_sobreOferta .container-fav ._left ._readMore"
  ).addClass("_disable");
});

$(
  "body._curso-detalhes section.s_hero ._curso-card .row button.btn-primary"
).click(() => {
  window.location.href = "/carrinho-identificacao.html";
});
