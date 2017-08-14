$(function () {
  var ind = 0;
  $('.next').on('click',function(event){
    ind++;
    if(ind > $('.banner_list li').size() - 1){
      ind = 0;
    }
    $('.banner_list li').stop(true).eq(ind).animate({'opacity':1}).siblings().animate({'opacity':0});
    $('.controllers a').stop(true).eq(ind).addClass('active').siblings().removeClass('active');
    event.stopPropagation();
  })

  $('.prev').on('click',function(event){
    ind--;
    if(ind < 0){
      ind = $('.banner_list li').size() - 1;
    }
    $('.banner_list li').stop(true).eq(ind).animate({'opacity':1}).siblings().animate({'opacity':0});
    $('.controllers a').stop(true).eq(ind).addClass('active').siblings().removeClass('active');
    event.stopPropagation();
  })

  function showImg(){
    ind++;
    if(ind > $('.banner_list li').size() - 1){
      ind = 0;
    }
    $('.banner_list li').eq(ind).animate({'opacity':1}).siblings().animate({'opacity':0});
    $('.controllers a').eq(ind).addClass('active').siblings().removeClass('active');
  }

  var timer = setInterval(showImg,5000);

  $('#Banner').hover(function(){
    clearInterval(timer);
  },function(){
    timer = setInterval(showImg,5000);
  })

  $('.controllers a').each(function(){
    $(this).click(function(){
      $(this).addClass('active').siblings().removeClass('active');
      $('.banner_list li').stop(true).eq($(this).index()).animate({'opacity':1,'z-index':1}).siblings().animate({'opacity':0,'z-index':0});
    })
  })

  $('.nav_right li').each(function(){
    $(this).click(function(){
      $(this).addClass('active').siblings().removeClass('active');
    })
  })


// $('.module3_bottom active').css
  $('.progress_bar span').each(function (i) {
    if($(this).width() == $(this).parent().width()){
      $(this).parent().siblings('.hot_product_btn').html(`<span>已满标</span>`);
      $(this).parent().siblings('.Newbie_center_invest').html(`<span>已满标</span>`);
      $(this).parent().parent().siblings('.module4_right_btn').html(`<span>已满标</span>`);

      $(this).parent().siblings('.hot_product_btn').find('span').css({
        display:'inline-block',
        width:'185px',
        height:'50px',
        background:'#e2e2e2',
        color:'#fff',
        fontSize:'18px',
        textAlign:'center',
        lineHeight:'50px'
      });
      $(this).parent().siblings('.Newbie_center_invest').find('span').css({
        display:'inline-block',
        width:'185px',
        height:'50px',
        background:'#e2e2e2',
        color:'#fff',
        fontSize:'18px',
        textAlign:'center',
        lineHeight:'50px'
      });
      $(this).parent().parent().siblings('.module4_right_btn').find('span').css({
        display:'inline-block',
        width:'185px',
        height:'50px',
        background:'#e2e2e2',
        color:'#fff',
        fontSize:'18px',
        textAlign:'center',
        lineHeight:'50px'
      });
    }
  })


  var Tops = $('#goTop');
  $(window).scroll(function (){
    var st = $(this).scrollTop();
    // 根据滚动距离显示和隐藏楼梯导航
    if(st >= 500){
      Tops.show();
    } else {
      Tops.hide();
    }
  });
  Tops.on('click',function () {
    $('html,body').animate({scrollTop:0}, 500);
  })

})