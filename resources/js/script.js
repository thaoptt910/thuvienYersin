$(function() {
    /*menu*/
    $('#main-menu').smartmenus({
      subMenusSubOffsetX: 1,
      subMenusSubOffsetY: -8
    });
    $('.main-menu .fa-bars').click(function(){
        $('#main-nav').toggle();
    });
    $(window).resize(function(){
      if($(window).width()>=768){
        $('#main-nav').css('display','block');
      }
      else{
        $('#main-nav').css('display','none');
      }
    });
    if($(window).width()>=768){
        $('#main-nav').css('display','block');
      }
      else{
        $('#main-nav').css('display','none');
      }

 

    /*content 1*/
      var clickEvent = false;
  $('#content1').carousel({
    interval:   4000  
  }).on('click', '.list-group li', function() {
      clickEvent = true;
      $('.list-group li').removeClass('active');
      $(this).addClass('active');   
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.list-group').children().length -1;
      var current = $('.list-group li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.list-group li').first().addClass('active'); 
      }
    }
    clickEvent = false;
  });
  $(window).load(function() {
    var boxheight = $('#content1 .carousel-inner').innerHeight();
    var itemlength = $('#content1 .item').length;
    var triggerheight = Math.round(boxheight/itemlength+110);
  $('#content1 .list-group-item').outerHeight(triggerheight);
});
    /*content 1*/
    /*content 1*/
    // var clickEvent = false;
    // $('#banner').carousel({
    //   interval:   4000  
    // }).on('click', '.list-group li', function() {
    //     clickEvent = true;
    //     $('.list-group li').removeClass('active');
    //     $(this).addClass('active');   
    // }).on('slid.bs.carousel', function(e) {
    //   if(!clickEvent) {
    //     var count = $('.list-group').children().length -1;
    //     var current = $('.list-group li.active');
    //     current.removeClass('active').next().addClass('active');
    //     var id = parseInt(current.data('slide-to'));
    //     if(count == id) {
    //       $('.list-group li').first().addClass('active'); 
    //     }
    //   }
    //   clickEvent = false;
    // });
    // $(window).load(function() {
    //   var boxheight = $('#banner .carousel-inner').innerHeight();
    //   var itemlength = $('#banner .item').length;
    //   var triggerheight = Math.round(boxheight/itemlength+110);
    //   $('#banner .list-group-item').outerHeight(triggerheight);
    // });
    /*content 1*/
    /*owl carousel*/
    $('#owl-demo-kesach').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:true,
      autoplay:true,
      margin:10,
      dots:false,
      responsive:{
          300:{
              items:1,
          },
          700:{
              items:2,
          } , 
          750:{
              items:3,
          },
          850:{
              items:4,
          },
          992:{
              items:5,
          }
      }
    })
    $('#owl-slider-book-horizontal').owlCarousel({
      loop:true,
      responsiveClass:true,
      nav:true,
      autoplay:true,
      margin:10,
      dots:false,
      responsive:{
          300:{
              items:1,
          },
          700:{
              items:2,
          } , 
          750:{
              items:3,
          },
          850:{
              items:4,
          },
          992:{
              items:5,
          }
      }
    })
    /* end owl carousel*/
    $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      loop:true,
      dots:false,
      autoplay:true,
      items : 1,
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
   

    /*test*/

  var clickEvent = false;
  $('#myCarousel').carousel({
    interval:   4000  
  }).on('click', '.list-group li', function() {
      clickEvent = true;
      $('.list-group li').removeClass('active');
      $(this).addClass('active');   
  }).on('slid.bs.carousel', function(e) {
    if(!clickEvent) {
      var count = $('.list-group').children().length -1;
      var current = $('.list-group li.active');
      current.removeClass('active').next().addClass('active');
      var id = parseInt(current.data('slide-to'));
      if(count == id) {
        $('.list-group li').first().addClass('active'); 
      }
    }
    clickEvent = false;
  });


$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+110);
  $('#myCarousel .list-group-item').outerHeight(triggerheight);
});
    /*test*/

});