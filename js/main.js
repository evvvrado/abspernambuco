var gallerySelectedImage = 2;

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
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

$("section.s_cursos .container-fav .title ._filter h2._cursosbutton").click(() => {
  $("section.s_cursos .container-fav .title ._filter h2").removeClass("_active");

  $("section.s_cursos .container-fav .title ._filter h2._cursosbutton").addClass("_active");

  $("body._cursos-e-eventos section.s_cursos ._cursos").css("display", "block");
  $("body._cursos-e-eventos section.s_cursos ._eventos").css("display", "none");
});

$("section.s_cursos .container-fav .title ._filter h2._eventosbutton").click(() => {
  $("section.s_cursos .container-fav .title ._filter h2").removeClass("_active");

  $("section.s_cursos .container-fav .title ._filter h2._eventosbutton").addClass("_active");

  $("body._cursos-e-eventos section.s_cursos ._eventos").css("display", "block");
  $("body._cursos-e-eventos section.s_cursos ._cursos").css("display", "none");
});

// IMPRENSA E CONTATO

$("body._imprensa  .container-fav .title ._filter h2._cursosbutton").click(() => {
  $("body._imprensa  .container-fav .title ._filter h2").removeClass("_active");

  $("body._imprensa  .container-fav .title ._filter h2._cursosbutton").addClass("_active");

  $("body._imprensa   .s_acessoria").css("display", "block");
  $("body._imprensa   .s_acessoria.s_contato").css("display", "none");
});

$(" body._imprensa .container-fav .title ._filter h2._eventosbutton").click(() => {
  $("body._imprensa  .container-fav .title ._filter h2").removeClass("_active");

  $("body._imprensa  .container-fav .title ._filter h2._eventosbutton").addClass("_active");

  $("body._imprensa   .s_acessoria.s_contato").css("display", "block");
  $("body._imprensa   .s_acessoria:not(.s_contato)").css("display", "none");
});

// SIDE MENU ANIMATION

$("header main button.hamburguer-menu").click(() => {
  $("div._sidemenu nav").css("height", "100%");
});

$("div._sidemenu nav .hamburguerClose").click(() => {
  $("div._sidemenu nav").css("height", "0");
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

$("._otherhalf ._forgot").click(() => {
  $("._otherhalf").scrollTop($("._otherhalf").height() * 2);
});
$("._otherhalf ._tologin").click(() => {
  $("._otherhalf").scrollTop(0);
});

$("header main button.btn-primary").click(() => {
  window.location.href = "/seja-um-associado-login.html";
});
$("footer .novidades button").click(() => {
  window.location.href = "/newsletter.html";
});

$("body._galeria section.s_galeria main ._arrow:first-child").click(() => {
  if (gallerySelectedImage - 1 <= 1) return 0;
  gallerySelectedImage--;
  $("body._galeria section.s_galeria main ._mainImage img").attr(
    "src",
    `/img/_gallery${gallerySelectedImage}.jpg`
  );
  $(`body._galeria section.s_galeria ._list ._img`).removeClass("_active");
  $(`body._galeria section.s_galeria ._list ._img:nth-child(${gallerySelectedImage - 1})`).addClass(
    "_active"
  );
});
$("body._galeria section.s_galeria main ._arrow:last-child").click(() => {
  if (gallerySelectedImage + 1 >= 9) return 0;
  gallerySelectedImage++;
  $("body._galeria section.s_galeria main ._mainImage img").attr(
    "src",
    `/img/_gallery${gallerySelectedImage}.jpg`
  );
  $(`body._galeria section.s_galeria ._list ._img`).removeClass("_active");
  $(`body._galeria section.s_galeria ._list ._img:nth-child(${gallerySelectedImage - 1})`).addClass(
    "_active"
  );
});

$("section.s_produtos .container-fav ._productlist ._product .content").hover(function () {
  $(this).parent().find("._hover").css("transform", "translateY(0)");
});

$("section.s_descontos .container-fav ._descontoList ._descontoItem button.btn-primary ").click(
  () => {
    window.location.href = "/experiencias-detalhes.html";
  }
);

$("body._experienciaDetalhes section.s_sobreOferta .container-fav ._left ._readMore").click(() => {
  $("body._experienciaDetalhes section.s_sobreOferta .container-fav ._editableText").animate(
    {
      maxHeight: "100%",
    },
    1000
  );
  $("body._experienciaDetalhes section.s_sobreOferta .container-fav ._left ._readMore").addClass(
    "_disable"
  );
});

$("body._curso-detalhes section.s_hero ._curso-card .row button.btn-primary").click(() => {
  window.location.href = "/carrinho-identificacao.html";
});

const backdrop = {
  visivel: true,
  init: function () {
    setTimeout(function () {
      if (backdrop.visivel) {
        backdrop.esconde();
      }
    }, 10 * 1000);
  },
  esconde: function () {
    $("#backdrop").css("background", "");
    $("#backdrop>div").fadeOut();
    $("#backdrop").delay(350).fadeOut("slow");
    $("body").delay(350).css("overflow", "");
    backdrop.visivel = false;
  },
};

backdrop.esconde();

function varialpopshovit(type) {
  switch (type) {
    case "done":
      $("#_info").html(
        ' <div class="_img"><img src="/img/sistema/approved2.svg" alt="Simbolo" class="concluido"></div> Concluído'
      );
      $("._box").css("background-color", "background: rgba(0, 100, 0, 0.7);");
      break;
    case "error":
      $("#_info").html(
        ' <div class="_img"><img src="/img/sistema/canceled.svg" alt="Simbolo" class="concluido"></div> Erro'
      );
      $("._box").css("background-color", "background: rgba(100, 0, 0, 0.7);");
      break;

    default:
      $("#_info").html(
        ' <div class="_img"><img src="/img/sistema/canceled.svg" alt="Simbolo" class="concluido"></div> Undefined'
      );
      break;
  }
  $("._infobox").css("transform", "none");

  $("._loadingBox").animate(
    {
      width: 0,
    },
    5000,
    () => {
      $("._infobox").css("transform", "translateY(-80px)");
      $("._loadingBox").width("100%");
    }
  );
}
$("form button").click(() => {
  varialpopshovit("done");
  $("form input").val("");
  $("form textarea").val("");
});

$("body._minha-conta form button").click(() => {
  varialpopshovit("error");
  $("form input").val("");
  $("form textarea").val("");
});

$("._carButton").click(() => {
  $("._meuCarrinho").animate(
    {
      top: "0",
    },
    400
  );
});
$(" section._meuCarrinho ._top ._title ._icon img:last-child").click(() => {
  $("._meuCarrinho").animate(
    {
      top: "-200vh",
    },
    400
  );
});

$("._menuMax").click(() => {
  $("._mobileMenu").css("display", "flex");
  $("._mobileMenu").animate(
    {
      left: "0",
    },
    500
  );
});

$("section._mobileMenu ._closeButton").click(() => {
  $("._mobileMenu").animate(
    {
      left: "-200vw",
    },
    500
  );
});

$(document).scroll(() => {
  if ($(document).width() < 730) return;
  if ($(document).scrollTop() > 400) {
    $("._curso-card").css("position", "fixed");
    $("._curso-card").css("top", "inherit");
    $("._curso-card").css("right", "1.5rem");
    $("._curso-card").css("bottom", "1.5rem");
  } else if ($(document).scrollTop() < 400) {
    $("._curso-card").css("position", "absolute");
    $("._curso-card").css("top", "4rem");
    $("._curso-card").css("right", "0");
    $("._curso-card").css("bottom", "inherit");
  }
});

var images = Array("/img/bannerhero.jpg", "/img/bannerhero2.jpg");

// Usage:

var currimg = 0;

$(document).ready(function () {
  if ($("body._home").length) {
    function loadimg() {
      $(".s_hero").animate({ opacity: 1 }, 700, function () {
        //finished animating, minifade out and fade new back in
        $(".s_hero").animate({ opacity: 0.7 }, 100, function () {
          currimg++;

          if (currimg > images.length - 1) {
            $(".hero_indicator div img").attr("src", "/img/heroindicator_B.svg");
            $(".hero_indicator div:first-child img").attr("src", "/img/heroindicator_A.svg");

            currimg = 0;
          } else {
            $(".hero_indicator div img").attr("src", "/img/heroindicator_B.svg");
            $(".hero_indicator div:nth-child(2) img").attr("src", "/img/heroindicator_A.svg");
          }

          var newimage = images[currimg];

          //swap out bg src
          $(".s_hero").css("background-image", "url(" + newimage + ")"); //animate fully back in
          $(".s_hero").animate({ opacity: 1 }, 400, function () {
            //set timer for next
            setTimeout(loadimg, 5000);
          });
        });
      });
    }
    setTimeout(loadimg, 5000);
  }
});

$("div._toUp").click(() => {
  $(document).scrollTop(0);
});

// MASCARAS PARA OS FORMULARIOS
$(document).ready(function () {
  $('form label input[name = "cpf"]').mask("000.000.000-00", { reverse: true });
  $('form label input[name = "telefone"]').mask("(00) 00000-0000");
  // $('form label input[name = "expiracao"]').mask("00/0000");
  // $('form label input[name= "numero"]').mask("0000 000000 00000");
});
