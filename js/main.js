$(function(){

    // 윈도우의 가로길이를 win_width변수에 저장
    var win_width=$(window).width();

    //bubbles
    var i=0;
    var bArray = [];
    var sArray = [30,40,50,60,70];
    for (var k = 0; k < $('.s2 .visual-contents').width()+50; k++) {
        bArray.push(k);
    }
    
    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    function bubbles1(){ 
        var size = randomValue(sArray);
        $('.s2 .visual-contents').append('<div class="bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.bubble').animate({
            'bottom': '130%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove();
        }
        );
    }
    function bubbles2(){ 
        var size = randomValue(sArray);
        $('.s2 .visual-contents').append('<div class="bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.bubble').animate({
            'bottom': '250%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove();
        }
        );
    }

    if(win_width>480){
        
        setInterval(bubbles1, 350);
    }else{
        
        setInterval(bubbles2, 350);
    }
    //bubbles end



    // 만약 win_width값이 1024이상이면
    if(win_width>1024){
        // pc버전

        // 주메뉴에 마우스 오버했을 때 서브메뉴 나옴
        $('header nav > ul > li').hover(function(){
            // 서브 하나씩 나옴
            // $(this).find('.sub').stop().slideDown();
            $('.sub').stop().slideDown();
            $('.sub_bg').stop().slideDown();
        },function(){
            $('.sub').stop().slideUp();
            $('.sub_bg').stop().slideUp();
        });
        // fullpage
        $('#fullpage').fullpage({
            //options here
            navigation: true,
	        navigationPosition: 'right',
	        navigationTooltips: ['Main', 'Browse', 'Menu', 'Brandshop', 'Hongruizhen', 'News', 'Find', 'Online-Shop'],
            // fullpage의 내용이 모두 로드(Load)되고 나면 function(){}의 내용을 실행함
            afterLoad:function(anchorLink,index){
                // 만약 section의 인덱스 번호가 9라면
                if(index == 9){
                    // fullpage 내비게이션 사라짐
                    $('#fp-nav').fadeOut();
                    // section의 인덱스번호가 9가 아니라면
                }else{
                    // fullpage 내비게이션 나타남
                    $('#fp-nav').fadeIn();
                }
            }
        });
    }else{
        // 태블릿 버전, 모바일 버전
        // 모바일버전 주메뉴를 클릭했을 때 서브메뉴 나옴
        $('.mobile_nav .mobile_nav_in nav > ul > li').click(function(){
            // 만약 클릭한 주메뉴에 active가 없다면
            // $(this) : 클릭한 주메뉴
            // $(this).attr('class') : 클릭한 메뉴의 class 속성
            if($(this).attr('class') != 'active'){
                $('.mobile_nav .mobile_nav_in nav > ul > li').removeClass('active');
                $(this).addClass('active');
                $('.mobile_nav .mobile_nav_in nav > ul > li .sub').stop().slideUp();
                $(this).find('.sub').stop().slideDown();
            // 클릭한 메뉴에 active 속성이 있으면
            }else{
                $(this).removeClass('active');
                $(this).find('.sub').stop().slideUp();
            }
        });
        // 메뉴 버튼을 클릭하면 세로 메뉴 영역 나옴
        $('.menu_btn').click(function(){
            $('.mobile_nav').animate({
                right:0
            });
        });
        // 닫기 버튼을 클릭하면 세로 메뉴 영역 들어감
        $('.mobile_close').click(function(){
            $('.mobile_nav').animate({
                right:'-100%'
            });
        });
    }
    // swiper slide(pc, 태블릿, 모바일)
    var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay:4000,
            disableOnInteraction: false
        },
        loop:true,
        effect:'fade',
        pagination: {
            el: ".swiper-pagination",
            clickable:true
        },
    });
    // banner section 안의 도형 애니메이션
    // 마우스오버 이벤트 설정
    $('.contents .hover_ani').on('mouseenter',function(){
        // 마우스오버 이벤트가 설정된 li 안의 자식객체.li_bg를 찾아서 $child 변수에 저장
        var $child=$(this).find('.li_bg');
        // 애니메이션 실행 시간
        var duration=0.5;
        // 애니메이션 하기 전 대기시간
        var delay=0.1;
        TweenMax.to($child, duration, {
            scaleY:1.1, ease:Expo.easeOut
        });
        TweenMax.to($child, duration, {
            scaleX:1.1, scaleY:1, ease:Back.easeOut, easeParams:[3], delay:delay
        });
        TweenMax.to($child, duration*1.25, {
            scaleX:1, scaleY:1,
            ease:Expo.easeOut,
            easeParams:[6], delay:delay*3
        });
    });



    //splide를 사용한 line_tab
    var main = new Splide('#main-carousel', {
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
    });
    
    var thumbnails = new Splide('#thumbnail-carousel', {
        fixedWidth  : 'auto',
        fixedHeight : 60,
        gap         : 10,
        rewind      : true,
        pagination  : false,
        isNavigation: true,
        focus:'center'
    });
    
    main.sync(thumbnails);
     main.mount();
    thumbnails.mount();

    $('.hive_contents div').hide();
    $('.hive_contents div:first').show();
      // hive의 6개 버튼에 마우스오버 이벤트 설정

      $('.hive_right .hive_btns .contents').hover(function(){
        var hive_num=$(this).index();
        $('.hive_contents div').hide();
        $('.hive_contents div').eq(hive_num).show();
      },function(){
        $('.hive_contents div').hide();
        // $('.hive_contents div:first').show();
      });
  
    // top버튼 클릭하면 첫 페이지로 이동함
    $('.top').click(function(){
        $.fn.fullpage.moveTo(1, 1);
    });
      
    // 화면이 스크롤되면 header에 active 추가
    setInterval(header_color,1);
    function header_color(){
        if($('body').hasClass('fp-viewing-0')===true){
            $('header').removeClass('active');
        }else{
            $('header').addClass('active');
        }
    }
});