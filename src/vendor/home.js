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

})