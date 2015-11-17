function loadPage(url){
    $("#iframe").load(url);
}
loadPage("content.html");
$("#item-download").click(function(){
    loadPage('apps.html');
});
  // niceScroll滚动条
  $("html").niceScroll();

  // Stick menu头部菜单
  $(".menu").sticky({topSpacing:0});
  $("#pop-menu").sticky({topSpacing:0});

  // Menu Scroll to content and Active menu
    var lastId,
    topMenu = $("#menu"),
    topMenuHeight = topMenu.outerHeight()+145,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    var target;
   $('a[href*=#]').bind('click', function(e) {
        e.preventDefault();
        target = $(this).attr("href");
           loadPage("content.html");
           $('html, body').stop().animate({ scrollTop: $(target).offset().top-140 }, 1000, function() {
           });
        return false;
   });
if(target){
    $(target).trigger("click");
}
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
      console.log("windowTop"+$(this).offset().top+"fromTop:"+fromTop+" cur:"+cur+" id:"+id+" lastId:"+lastId+" curLength:"+cur.length);
 });
  

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
