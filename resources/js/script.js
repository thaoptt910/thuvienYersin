$(function() {

  function checkEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
    }

    function checkPhoneNumber(){
      var flag = false; // sai sdt
      //trim bo khoang trang
      //val lay gia tri cua input
      var phone = $('#input_phone').val().trim(); // ID của trường Số điện thoại
      phone = phone.replace('(+84)', '0');
      phone = phone.replace('+84', '0');
      phone = phone.replace('0084', '0');
      phone = phone.replace(/ /g, '');
      if (phone != '') { // co nhap
          var firstNumber = phone.substring(0, 2); //0900999 => 09
          if ((firstNumber == '09') && phone.length == 10) { // 09 la 10 so
              if (phone.match(/^\d{10}/)) { //thuat toan
                  flag = true; // dung sdt
              }
          } else if (firstNumber == '01' && phone.length == 11) { // 01 la 11 so
              if (phone.match(/^\d{11}/)) {
                  flag = true; // dung sdt
              }
          }
      }
      return flag;
    }

    $('#form_submit').click(function(e) { // ID của Form
      $('.error').html(''); //clear error
      if (!checkPhoneNumber()) { //TH sai sdt
          //$('#input_phone').parents('div.form-group').addClass('has-error'); // ID của trường Số điện thoại
          $('#input_phone').next('.error').append('<span style="color:red">Sai số điện thoại</span>');
          // $('.error').text('Sai số điện thoại');
          $('#input_phone').focus(); // ID của trường Số điện thoại
          e.preventDefault(); // ngăn không click nhieu lan
      }
      var $email = $('#input_email').val().trim();
      if(!checkEmail($email)){
        $('#input_email').next('.error').append('<span style="color:red">Sai email</span>');
        $('#input_email').focus(); // ID của trường Số điện thoại
        e.preventDefault(); // ngăn không click nhieu lan
      }
  });

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
