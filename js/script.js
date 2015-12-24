function loadPage(url){
    $("#iframe").load(url);
}
function loadGlobMenu(){
        topMenu = $("#menu"),
        topMenuHeight = topMenu.outerHeight()+145,
        menuItems = topMenu.find("a[href*=#]"),
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });
    $("#item-download").parent().removeClass("active");
}
function toBuy(){
    $('html, body').stop().animate({ scrollTop: $(".contact").offset().top}, 1000, function() {
    });
}
$("#iframe").load("content.html",function(){
    loadGlobMenu();
});
$("#item-download").click(function(){
    $("#iframe").load("apps.html",function(){
        if( $("#app-download-menu").offset()!=undefined){
            $('html, body').stop().animate({ scrollTop: $("#app-download-menu").offset().top-140 }, 1000, function() {
            });
        }
    });
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");

});

$("#m-apps").click(function(){
    $("#iframe").load("apps.html",function(){
        if( $("#app-download-menu").offset()!=undefined){
            $('html, body').stop().animate({ scrollTop: $("#app-download-menu").offset().top-140 }, 1000, function() {
            });
        }
    });
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");

});
$("#profile").click(function(){
    $("#iframe").load("about.html",function(){
        if( $(".profileAbout").offset()!=undefined){
            $('html, body').stop().animate({ scrollTop: $(".profileAbout").offset().top-140 }, 1000, function() {
            });
        }
    });
    $("#item-about").parent().siblings().removeClass("active");
    $("#item-about").parent().addClass("active");
});
$("#m-profile").click(function(){
    $("#iframe").load("about.html",function(){
        if( $(".profileAbout").offset()!=undefined){
            $('html, body').stop().animate({ scrollTop: $(".profileAbout").offset().top-140 }, 1000, function() {
            });
        }
    });
    $("#item-about").parent().siblings().removeClass("active");
    $("#item-about").parent().addClass("active");
});
  // niceScroll滚动条
  $("html").niceScroll();

  // Stick menu头部菜单
  $(".menu").sticky({topSpacing:0});
  $("#pop-menu").sticky({topSpacing:0});

  // Menu Scroll to content and Active menu
    var lastId;
    loadGlobMenu();
   $('a[href*=#]').bind('click', function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
       $("#iframe").load("content.html",function(){
               $('html, body').stop().animate({ scrollTop: $(target).offset().top-140 }, 1000, function() {
               });
           loadGlobMenu();
        });
       if( $(target).offset()!=undefined){
           $('html, body').stop().animate({ scrollTop: $(target).offset().top-140 }, 1000, function() {
           });
       }
        return false;
   });
/*$('a[href*=#]').bind('mouseover', function(e) {
    loadPage("content.html");
});*/
  $(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }
      if($("#item-download").parent().attr("class")=="active"){
          $("[href=#"+id+"]").parent().removeClass("active");
      }
 });

window.onresize=function(){
    if ( $(window).width() > 768&& $(".menu-mobile").css("display")=="block"){
        $(".menu-mobile").css("display","none");
    }
}
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".footer").css( "position", "relative" );
    $(".contact").css( "marginBottom", "0" );
}else {
  // FadeTo elements
    if ( $(window).width() > 1023) {
            tiles = $("h2, h3, .column-one, .column-two, .column-three, .grid li, .contact .content .form, .contact .content .contact-text ").fadeTo(0, 0);
            $(window).scroll(function(d,h) {
              tiles.each(function(i) {
                  a = $(this).offset().top + $(this).height();
                  b = $(window).scrollTop() + $(window).height();
                  if (a < b) $(this).fadeTo(1000,1);
              });
            });
      }

}


  //Menu mobile click 移动版菜单点击事件
  $( ".icon" ).click(function() {
    $( " ul.menu-mobile" ).slideToggle( "slow", function() {
    // Animation complete.
    });
  });
  //Menu mobile click
  $("#m-item-prodcut").click(function() {

    $( ".menu-mobile-product" ).slideToggle( "slow", function() {
    });
  });
  $("#m-item-about").click(function() {
    $( ".menu-mobile-about" ).slideToggle( "slow", function() {
    });
  });


$(window).load(function(){

    $(".preloader").delay(1000).fadeOut("slow")
      // Parallax
      if ($('.parallax-background').length) {
        $(".parallax-background").parallax();
      }
      // Parallax
      if ($('.parallax-background-partners').length) {
        $(".parallax-background-partners").parallax();
      }

});
